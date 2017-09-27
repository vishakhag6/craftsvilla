import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ContentComponent } from '../content/content.component';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';  // we need to import this now

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RepoServiceService {

  // Resolve HTTP using the constructor
  constructor(private http: Http) { }

  // private instance variable to hold base url 

  getDataObservable(url:string) {
    return this.http.get(url)
      .map(data => {
        data.json();
        console.log("I CAN SEE DATA HERE: ", data.json());
        return data.json();
    });
  }
}
