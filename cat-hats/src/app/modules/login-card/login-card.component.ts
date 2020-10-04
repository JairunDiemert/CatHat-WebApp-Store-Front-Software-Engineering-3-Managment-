import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
export class LoginCardComponent implements OnInit {

  constructor(private Auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  loginShow : Boolean = true;

  onSubmit(login: NgForm){
    const username = login.value.email;
    const password = login.value.password;

    this.Auth.getUserDetails(username, password).subscribe((data) => {
      if (data.success) {
        this.router.navigate(["/"]);
        this.Auth.setLoggedIn(true);
        this.loginShow = false;
      } else {
        window.alert(data.message);
        this.loginShow = true;
      }
    });
    console.log(username, password);
  }

}
