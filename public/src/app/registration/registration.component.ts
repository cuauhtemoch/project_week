import { Component, OnInit } from '@angular/core';
import { HttpService } from "app/http.service";
import { Router } from '@angular/router'
import { CookieService } from "angular2-cookie/services";


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  parent = {
    firstname: '',
    lastname: '',
    pnumber: '',
    email: '',
    username: '',
    password: '',
    childname: '',
    childdob: '',
    program: '',
  }
  
  name = '';

  constructor(
    private _httpService:HttpService,
    private _cookieService:CookieService,
    private _route:Router,

  ) { 
    console.log("this is the cookie:", this._cookieService.get('loggedinparent'))
  }

  ngOnInit() {

  }

  onSubmit(form){
    console.log('onSubmit going', this.parent)
    this._httpService.createParent(this.parent)
    .then(data=>{
      console.log("onSubmit coming back", data);
      this._cookieService.put('loggedinparent', data.firstname);
      this._cookieService.put('loggedinparentid', data._id)
      this._route.navigate(['/thankyou']);
    })
    .catch(err=>{
      console.log("Create parent error:", err);
    })

  }




}