import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { customerModel } from 'src/app/models/customer-model';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor() { }
  
  profileShow : Boolean = true;
  public customer: customerModel = {
    username: "null12",
    cartItems: [],
    cartTotal: 0,
    name: "Jane Doe",
    email: "Jane@123.com",
    address: " 12234 Drive",
    password: "123"
  };

  ngOnInit(): void {
  }

  editProfileClick(){
    this.profileShow = false;
  }

  profileClick(){
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
