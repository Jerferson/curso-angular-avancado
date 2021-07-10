import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { NgBrazilValidators } from 'ng-brazil';
import { User } from './models/user';
import { utilsBr } from 'js-brasil'
import { CustomValidators } from 'ng2-validation';
import { DisplayMessage, GenericValidator, ValidationMessages } from './generic-form-validation';
import { fromEvent, merge, Observable } from 'rxjs';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit, AfterViewInit {
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  registerForm: FormGroup;
  user: User;
  formResult: string;
  MASKS = utilsBr.MASKS

  validationMessages: ValidationMessages;
  genericValidator: GenericValidator;
  displayMessage: DisplayMessage = {};

  mudancasNaoSalvas: boolean;

  constructor(private formBuilder: FormBuilder) {
    this.validationMessages = {
      name: {
        required: 'O Nome é requerido',
        minlength: 'O Nome precisa ter no mínimo 3 caracteres',
        maxlength: 'O Nome precisa ter no máximo 150 caracteres'
      },
      document: {
        required: 'Informe o CPF',
        cpf: 'CPF inválido'
      },
      email: {
        required: 'Informe o E-mail',
        email: 'E-mail inválido'
      },
      password: {
        required: 'Informe a senha',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres'
      },
      passwordConfirm: {
        required: 'Informe a senha novamente <br/>',
        equalTo: 'As senhas não conferem'
      },
    };

    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit() {
    let password = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15])])
    let passwordConfirm = new FormControl('', [Validators.required, CustomValidators.equalTo(password)])

    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(150)]],
      document: ['', [Validators.required, NgBrazilValidators.cpf]],
      email: ['', [Validators.required, Validators.email]],
      password: password,
      passwordConfirm: passwordConfirm
    });
  }

  ngAfterViewInit(): void {
    let controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processarMensagens(this.registerForm);
      this.mudancasNaoSalvas = true;
    });
  }

  addUser() {
    if (this.registerForm.dirty && this.registerForm.valid) {
      this.user = Object.assign({}, this.user, this.registerForm.value);
      this.formResult = JSON.stringify(this.registerForm.value);
      this.mudancasNaoSalvas = false;
      return;
    }
    this.formResult = "Não está válido para submeter!!!";
  }
}
