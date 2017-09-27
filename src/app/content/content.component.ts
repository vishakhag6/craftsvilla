import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { RepoServiceService } from '../repo-service/repo-service.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [RepoServiceService]
})
export class ContentComponent implements OnInit {

  private url = 'https://api.github.com/repositories?since=862';
  results: any;
  private isDataAvailable: boolean;

  constructor(private myHttp: RepoServiceService) { 
  }

  ngOnInit() {
    this.myHttp.getDataObservable(this.url).subscribe(
      data => {
        this.results = JSON.stringify(data);
        //console.log("I CANT SEE DATA HERE: ", this.results);
      }
    );
  }

  //displayedColumns = ['id', 'repoName', 'repoDesc', 'ownerName', 'type'];
  //dataSource = new ExampleDataSource();
}

// export interface Element  {
//   repoName: string;
//   id: number;
//   ownerName: string;
//   repoDesc: string;
//   type: string; 
// }

// const data: Element[] = [
//   {id: 1, repoName: 'Hydrogen', repoDesc: 'xcv', ownerName:'vishakha', type: 'admin'},
//   {id: 2, repoName: 'Helium', repoDesc: 'xcv', ownerName: 'ram', type: 'He'},
//   {id: 3, repoName: 'Lithium', repoDesc: 'xcv', ownerName: 'sita', type: 'Li'},
//   {id: 4, repoName: 'Beryllium', repoDesc: 'xcv', ownerName: 'kishore', type: 'Be'},
//  ];

// export class ExampleDataSource extends DataSource<any> {
//   connect(): Observable<Element[]> {
//     return Observable.of(data);
//   }
//   disconnect() {}
// }