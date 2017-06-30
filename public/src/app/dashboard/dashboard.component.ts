import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import { Router } from '@angular/router';
import { HttpService } from "app/http.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{
  name = this._cookieService.get('loggedinparent');
  userid = this._cookieService.get('loggedinparentid');
  
  parent = {
    username: '',
    password: '',
  }

  parents = []; //entire parent info

  pwd_notcorrent = false;
  username_doesnt = false;
  loggedin = false;
  constructor(
    private _cookieService: CookieService,
    private _router: Router,
    private _http: HttpService,
  ) {
    
    if(this._cookieService.get('loggedinparentid')) {
      this._http.retrieveParentwid(this.userid)
      .then(data=>{
        this.parents = data;
      })
      .catch(err=>{
        console.log(err);
      })
      this.loggedin = true;
    }
 
  }

  onSubmit(form, username){
    console.log(form);
    this._http.logIn(this.parent)
    .then( obj => {
     if(obj[0].password == this.parent.password){
      this.loggedin = true;
      this.parents = obj;
      console.log("OBJ: ", obj[0]);
      this._cookieService.put('loggedinparent', obj[0].firstname);
      this._cookieService.put('loggedinparentid', obj[0]._id);
      // console.log(this._cookieService.get('loggedinparet'))
      // console.log(this._cookieService.get('loggedinparentid'))

     }
     else{
       this.pwd_notcorrent = true;
     }
    })
    .catch ( err=> {
      console.log("this is the error:", err);
      this.username_doesnt = true;
    }
    )}

  logout(){
    this._cookieService.remove('loggedinparent');
    this._cookieService.remove('loggedinparentid');
    this._router.navigate(['']);
  }
}
