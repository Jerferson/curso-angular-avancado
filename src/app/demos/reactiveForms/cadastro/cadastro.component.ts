import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgBrazilValidators } from 'ng-brazil';
import { User } from './models/user';
import { utilsBr } from 'js-brasil'
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {
  registerForm: FormGroup;
  user: User;
  formResult: string;
  MASKS = utilsBr.MASKS

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    let password = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15])])
    let passwordConfirm = new FormControl('', CustomValidators.equalTo(password))

    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      document: ['', [Validators.required, NgBrazilValidators.cpf]],
      email: ['', [Validators.required, Validators.email]],
      password: password,
      passwordConfirm: passwordConfirm
    });
  }

  addUser() {
    if (this.registerForm.dirty && this.registerForm.valid) {
      this.user = Object.assign({}, this.user, this.registerForm.value);
      this.formResult = JSON.stringify(this.registerForm.value);
    }
  }
}
