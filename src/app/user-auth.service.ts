import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';//<-
import {Observable} from 'rxjs/Rx';//<-not recommended it's big file.
// import 'rxjx/add/observable/throw';//<-
// import 'rxjs/add/operator/map';//<-
// import 'rxjs/add/operator/do';//<-
// import 'rxjs/add/operator/catch';//<-

@Injectable()
export class UserAuthService {
  public authList:AuthUser[];
  constructor(private _http:Http) {
  }

  getAuthUser(): Observable<any> {
    return this._http.get('assets/jsonFile/auth.json')
                      .map((response:Response)=> response.json())
                      .do(data => console.log(data)) 
                      .catch(this.handleError)
  }
  private handleError(error:Response){
    //console.error(error);
    let errMessage = `Error Status Code ${error.status} at ${error.url}`;
    return Observable.throw(errMessage);
  }

}
export interface AuthUser{
  name?:string,
  userId:string,
  password:string,
  email?:string
}
