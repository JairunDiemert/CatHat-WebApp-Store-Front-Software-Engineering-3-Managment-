import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { customerModel } from 'src/app/models/customer-model';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  constructor() { }

  public customer: customerModel = {
    username: "",
    cartItems: [],
    cartTotal: 0,
    name: "",
    email: "",
    address: "",
    password: ""
  };

  ngOnInit(): void {
    this.resetForm();
  }

  onSubmit(registerForm: NgForm) {
    this.customer.username = registerForm.value.username;
    this.customer.name = registerForm.value.name;
    this.customer.email = registerForm.value.email;
    this.customer.address = registerForm.value.address;
    this.customer.password = registerForm.value.password;
  }


  resetForm(form?:NgModel)
  {
    if(form != null) {
      form.reset();
      this.customer = {
        username: "",
        cartItems: [],
        cartTotal: 0,
        name: "",
        email: "",
        address: "",
        password: ""
      }
    }
  }
}
