import { Component, OnInit } from '@angular/core';
import { NgModel } from "@angular/forms";
import { customerModel } from "src/app/models/customer-model";

@Component({
  selector: 'app-register-card',
  templateUrl: './register-card.component.html',
  styleUrls: ['./register-card.component.css']
})
export class RegisterCardComponent implements OnInit {

  public customer : customerModel;

  constructor() { }

  ngOnInit(): void {
    //this.resetForm();
  }
/*
  resetForm(form?:NgModel)
  {
    if(form != null) {
      form.reset();
      this.customer = {
        name: '',
        address: '',
        email: '',
        username: '',
        password: '',
      }
    }
  }
*/
}
