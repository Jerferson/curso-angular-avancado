import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from './models/user';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {
  registerForm: FormGroup;
  user: User;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: [''],
      document: [''],
      email: [''],
      password: [''],
      passwordConfirm: ['']
    });
  }

  addUser() {
    this.user = Object.assign({}, this.user, this.registerForm.value);
  }
}
