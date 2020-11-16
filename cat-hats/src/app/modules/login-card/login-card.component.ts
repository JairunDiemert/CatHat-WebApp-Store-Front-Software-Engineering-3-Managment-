import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-login-card",
  templateUrl: "./login-card.component.html",
  styleUrls: ["./login-card.component.css"],
})
export class LoginCardComponent implements OnInit {
  loginShow: Boolean = true;
  constructor(
    private Auth: AuthService,
    private router: Router,
    private User: UserService
  ) {
    this.loginShow = this.Auth.getisLoggedIn();
  }

  ngOnInit(): void {}

  profileReroute() {
    this.router.navigate(["/profile"]);
  }

  logout() {
    this.User.logout().subscribe((data) => {
      if (data.success) {
        this.router.navigate(["/"]);
        this.Auth.setLoggedIn(false);
        this.loginShow = this.Auth.getisLoggedIn();
      } else {
        window.alert("Some problem");
      }
    });
  }

  onSubmit(login: NgForm) {
    const email = login.value.email;
    const password = login.value.password;

    this.Auth.getUserDetails(email, password).subscribe((data) => {
      if (data.success) {
        this.router.navigate(["/"]);
        this.Auth.setLoggedIn(true);
        this.loginShow = this.Auth.getisLoggedIn();
      } else {
        this.router.navigate(["/login"]);
        window.alert(data.message);
        this.loginShow = this.Auth.getisLoggedIn();
      }
    });
    console.log("Login card: ", email, password);
  }
}
