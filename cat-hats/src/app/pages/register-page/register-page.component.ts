import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { NgModel } from "@angular/forms";
import { customerModel } from "src/app/models/customer-model";
import { Router } from "@angular/router";
import { AuthService } from "../../auth.service";

@Component({
  selector: "app-register-page",
  templateUrl: "./register-page.component.html",
  styleUrls: ["./register-page.component.css"],
})
export class RegisterPageComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  public customer: customerModel = {
    username: "",
    cartItems: [],
    cartTotal: 0,
    name: "",
    email: "",
    address: "",
    password: "",
  };

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

  registerUser(registerForm: NgForm) {
    const errors = [];
    this.customer.username = registerForm.value.username;
    this.customer.name = registerForm.value.name;
    this.customer.email = registerForm.value.email;
    this.customer.address = registerForm.value.address;
    this.customer.password = registerForm.value.password;
    const cpassword = registerForm.value.cpassword;
  */

  registerUser(event) {
    event.preventDefault();
    const errors = [];
    const target = event.target;
    const username = target.querySelector("#username").value;
    const name = target.querySelector("#name").value;
    const email = target.querySelector("#email").value;
    const address = target.querySelector("#address").value;
    const password = target.querySelector("#password").value;
    const cpassword = target.querySelector("#cpassword").value;

    if (password != cpassword) {
      errors.push("Passwords do not match");
      window.alert("Passwords do not match");
    }

    if (errors.length == 0) {
      //this.auth.registerUser(this.customer.username, this.customer.name, this.customer.email, this.customer.address, this.customer.password).subscribe((data) => {
      this.auth
        .registerUser(username, name, email, address, password)
        .subscribe((data) => {
          console.log(data);
          if (data.success) {
            console.log("User registered.");
            window.alert(data.message);
            this.router.navigate(["login"]);
          } else window.alert(data.message);
        });
    }

    //console.log(this.customer.username, this.customer.password);
    console.log(username, password);
  }
}
