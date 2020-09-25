import { Component, OnInit } from '@angular/core';
import { customerModel } from 'src/app/models/customer-model';
import { FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor() { }

  public customer: customerModel = {
    username: "null12",
    cartItems: [],
    cartTotal: 0,
    name: "Jane Doe",
    email: "Jane@123.com",
    address: " 12234 Drive",
    password: "123"
  };
  profileShow: Boolean = true;
  public profileForm = new FormGroup({
    username: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    password: new FormControl('')
  });

  ngOnInit(): void {
  }

  editProfileClick() {
    this.profileShow = false;
  }

  profileClick() {
    this.profileShow = true;
  }

  submitClick(event: Event) {
    event.preventDefault();
    this.customer.username = this.profileForm.value.username;
    this.customer.name = this.profileForm.value.name;
    this.customer.email = this.profileForm.value.email;
    this.customer.address = this.profileForm.value.address;
    this.customer.password = this.profileForm.value.password;
  }

}
