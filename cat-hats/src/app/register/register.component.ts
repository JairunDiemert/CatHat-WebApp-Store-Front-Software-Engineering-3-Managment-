import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  registerUser(event) {
    event.preventDefault();
    const errors = [];
    const target = event.target;
    const username = target.querySelector("#username").value;
    const name = target.querySelector("#name").value;
    const email= target.querySelector("#email").value;
    const address = target.querySelector("#address").value;
    const password = target.querySelector("#password").value;
    const cpassword = target.querySelector("#cpassword").value;

    if (password != cpassword) {
      errors.push("Passwords do not match");
    }

    //more validation ie. if this else that..

    if (errors.length == 0) {
      this.auth.registerUser(username, name, email, address, password).subscribe((data) => {
        console.log(data);
        if (data.success) {
          this.router.navigate(["dashboard"]);
        }
      });
    }

    console.log(username, password);
  }
}
