import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CookieService } from "angular2-cookie/services";
import { HttpService } from "app/http.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

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

  parentid = '';
  

  constructor(
    private _httpService:HttpService,
    private _cookieService:CookieService,
    private _route:Router,
  ) { 
    this.parentid = this._cookieService.get('loggedinparentid')
    
    this._httpService.retrieveParentwid(this.parentid)
    .then((data) => {
      this.parent = data[0];
    })
    .catch((err) => {
      console.log('error', err);
    })

   
  }

  ngOnInit() {
  }


    upDate(){
      console.log("this is the form", this.parent)
      this._httpService.updateParent(this.parent)
      .then((data) =>{
        console.log('update parent', data)
        this._route.navigate(['/dashboard']);
      })
      .catch((err) =>{
        console.log('error', err)
      })
    }

}

