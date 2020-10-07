import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { customerModel } from 'src/app/models/customer-model';
import { Router } from "@angular/router";
import { AuthService } from "../../auth.service";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  public customer: customerModel = {
    username: "",
    cartItems: [],
    cartTotal: 0,
    name: "",
    email: "",
    address: "",
    password: "",
  };

  public cpassword: String = "";

  ngOnInit(): void {
    //this.resetForm();
  }

  
  /*
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
*/
  registerUser(registerForm: NgForm) {
    const errors = [];
/*
  registerUser(event) {
    event.preventDefault();
    const errors = [];
    const target = event.target;
    const username = target.querySelector("#username").value;
    const name = target.querySelector("#name").value;
    const email = target.querySelector("#email").value;
    const address = target.querySelector("#address").value;
    const password = target.querySelector("#password").value;
    const cpassword = target.querySelector("#password").value;
*/
    if (this.customer.password != this.cpassword) {
      errors.push("Passwords do not match");
    }

    console.log(errors);
    console.log(this.customer);

    if (errors.length == 0) {
      this.auth.registerUser(this.customer.username, this.customer.name, this.customer.email, this.customer.address, this.customer.password).subscribe((data) => {
      //this.auth.registerUser(username, name, email, address, password).subscribe((data) => {
          console.log(data);
        if (data.success) {
          console.log("User registered.")
          this.router.navigate(["dashboard"]);
        }
      });
    }

    console.log(this.customer.username, this.customer.password);
    //console.log(username, password);
  }
}
