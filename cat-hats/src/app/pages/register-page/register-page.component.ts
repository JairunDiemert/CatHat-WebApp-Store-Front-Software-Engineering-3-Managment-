import { Component, OnInit } from '@angular/core';
import { customerModel } from "src/app/models/customer-model";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  public customer : customerModel;

  constructor() { }

  ngOnInit(): void {
  }

}
