import {Component, OnInit} from '@angular/core';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-demo-project';
  //public tableData: Observable<any>[];
  constructor(firebaseDB: AngularFireDatabase) {
    // const itemsRef: AngularFireList<any> = firebaseDB.list('test');
    // itemsRef.valueChanges().subscribe(response => {
    // });
  }
  ngOnInit(): void {
  }
}
