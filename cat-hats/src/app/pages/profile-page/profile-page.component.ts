import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { customerModel } from 'src/app/models/customer-model';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  public customer: customerModel = {
    username: "null12",
    cartItems: [],
    cartTotal: 0,
    name: "null",
    email: "null",
    address: "null",
    password: "null"
  };
  constructor(private Auth: AuthService) {
    let email: String = localStorage.getItem("email");
    this.Auth.getUser(email).subscribe(data => {
      console.log(data.username);
      this.customer.username = data.username;
      this.customer.name = data.name;
      this.customer.email = data.email;
      this.customer.address = data.address;
      this.customer.password = data.password;
    });
    console.log(this.customer);
  }

  profileShow: Boolean = true;

  ngOnInit(): void {
  }

  editProfileClick() {
    this.profileShow = false;
  }

  profileClick() {
    this.profileShow = true;
  }

  onSubmit(profileForm: NgForm) {
    this.customer.username = profileForm.value.username;
    this.customer.name = profileForm.value.name;
    this.customer.email = profileForm.value.email;
    this.customer.address = profileForm.value.address;
    this.customer.password = profileForm.value.password;
  }

}
