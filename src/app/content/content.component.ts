import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {

  private url = 'https://api.github.com/repositories?since=862';
  data: any = {};

  constructor(private http: Http) { 
    this.getData();
    this.getContacts();
  }

  ngOnInit() {}

  getData() {
    return this.http.get(this.url)
    .map((res: Response) => res.json())
  }

  getContacts() {
    this.getData().subscribe(data => {
      this.data = data;
      console.log(data);
    })
  }
}

