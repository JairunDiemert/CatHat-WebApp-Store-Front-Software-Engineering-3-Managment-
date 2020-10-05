import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
export class LoginCardComponent implements OnInit {
  loginShow: Boolean = true;
  constructor(private Auth: AuthService, private router: Router) {
    this.loginShow = this.Auth.getisLoggedIn();
  }

  ngOnInit(): void {

  }

  profileReroute(){
    this.router.navigate(["/profile"]);
  }

  logout(){
    this.Auth.setLoggedIn(false);
    this.router.navigate(["/"]);
    this.loginShow = this.Auth.getisLoggedIn();
  }

  onSubmit(login: NgForm) {
    const username = login.value.email;
    const password = login.value.password;

    this.Auth.getUserDetails(username, password).subscribe((data) => {
      if (data.success) {
        this.router.navigate(["/"]);
        this.Auth.setLoggedIn(true);
        this.loginShow = this.Auth.getisLoggedIn();
      } else {
        window.alert(data.message);
        this.loginShow = this.Auth.getisLoggedIn();
      }
    });
    console.log(username, password);
  }

}
