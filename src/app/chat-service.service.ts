import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';//<-not recommended it's big file.

@Injectable()
export class ChatServiceService {

  constructor(private _http:Http) { }

  getAllUsers(callObj): Observable<any> {
    return this._http.get('assets/jsonFile/' + callObj +'.json')
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
