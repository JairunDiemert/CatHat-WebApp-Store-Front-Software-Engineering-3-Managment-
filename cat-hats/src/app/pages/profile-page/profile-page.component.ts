import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor() { }
  
  profileShow : Boolean = true;

  ngOnInit(): void {
  }

  editProfileClick(){
    this.profileShow = false;
  }

  profileClick(){
    this.profileShow = true;
  }

}
