import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {

  rows: any = [];
  constructor(firebaseDB: AngularFireDatabase) {
    const itemsRef: AngularFireList<any> = firebaseDB.list('datatable');
    itemsRef.valueChanges().subscribe(response => {
      this.rows = response;
    });
  }

  ngOnInit(): void {
  }

}
