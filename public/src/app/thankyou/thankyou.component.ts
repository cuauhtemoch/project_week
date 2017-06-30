import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpService } from "app/http.service";
import { CookieService } from "angular2-cookie/services";

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {
  name = '';
  id = '';

  parents = [];

  parent= {
    id: "",
  }


  constructor(private _httpService:HttpService, private _cookieService:CookieService, private _route:Router) {
    this.name = this._cookieService.get("loggedinparent");
    this.id = this._cookieService.get("loggedinparentid");
    this.parent.id = this._cookieService.get("loggedinparentid");

    console.log(this.parent.id);

    this._httpService.retrieveParent(this.parent)
    .then((data) => {
      console.log('All Parent data:', data);
      this.parents = data;
    })
    .catch((err) => {
      console.log('error', err);
    })

   }

  ngOnInit() {

  }

  logout(){
    this._cookieService.remove('loggedinparent');
    this._cookieService.remove('loggedinparentid');
    this._route.navigate(['']);
  }

}
