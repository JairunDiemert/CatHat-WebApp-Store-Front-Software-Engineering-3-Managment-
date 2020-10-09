import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { customerModel } from './models/customer-model';
import { catchError, tap } from 'rxjs/operators';

interface registerResponse {
  success: boolean;
  message: string;
}

@Injectable({
  providedIn: "root",
})
export class AuthService {
   loggedInStatus = false;
constructor(private http: HttpClient) { }
  
  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
    if (value)
      localStorage.setItem("loggedIn", "true");
    else
      localStorage.setItem("loggedIn", "false");
  }

  getisLoggedIn() {
    if(localStorage.getItem("loggedIn") == "true"){
      this.loggedInStatus = true;
    }
    else if(localStorage.getItem("loggedIn") == "false"){
      this.loggedInStatus = false;
    }
    return this.loggedInStatus;
  }

  getUserDetails(email, password) {
    localStorage.setItem("email", email);

    //declare string containing cookie name
    let cookieName = "authToken";

    //function retrieves cookie on browser, returns "" if no existing cookie
    function getCookie(cookieName) {
      var name = cookieName + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }

    let token = getCookie(cookieName);

    //if token is set checked by getting cookie storing the token, 
    if(token != "") {
      //then post api token using get(token)
      return this.http.post<any>("/api/login", {
        token
      });
    } else { //checks if cookie set in document.cookie
      ///post these details to API server, will return user information if correct
      return this.http.post<any>("/api/login", {
        email,
        password,
      });
    }
  }

  registerUser(username, name, email, address, password) {
    localStorage.setItem("username", username);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("address", address);
    localStorage.setItem("password", password);
    
    //receive cookie containing token
    return this.http.post<registerResponse>("/api/register", {
      username,
      name,
      email,
      address,
      password,
    });
  }

  getUser(email) {
    return this.http.get<any>(("/api/user/"+ email));
  }
}
