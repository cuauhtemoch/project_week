import { CookieService } from 'angular2-cookie/core';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class HttpService {

  constructor(
    private _http: Http,
    private _cookieService: CookieService,
  ) { }
  passName(name){
    return this._http.post('/name', name)
    .map( data => data.json() )
    .toPromise();
  }

    createParent(parent){
    console.log('in createParent service.ts:', parent)
    return this._http.post('/newparent', parent)
    .map(data=>data.json())
    .toPromise()
  }

  retrieveParent(parent){
    return this._http.post('/allparent', parent)
    .map(data=>data.json())
    .toPromise()
  }

  logIn(loginfo){
    return this._http.post('/login', loginfo)
    .map(data=>data.json())
    .toPromise()
  }

  retrieveParentwid(parentid){
    return this._http.post('/retrieveparent', {parentid: parentid})//if its a single item make it into a dictionary like this
    .map(data=>data.json())
    .toPromise()
  }

  updateParent(parent){
    console.log('inside updateparent service.ts',{updateparent: parent})
    return this._http.post('/updateparent', parent)
    .map(data=>data.json())
    .toPromise()
  }

}

  //   create(quote) {
  //   console.log('SERVICE DATA PARAM', quote);
  //   return this._http.post('/new', quote)
  //   .map ( data => data.json() )
  //   .toPromise();
  // }
  // retrieve() {
  //   console.log('SERVICE RETRIEVE');
  //   return this._http.get('/notes')
  //   .map ( data => data.json() )
  //   .toPromise();
  // }

