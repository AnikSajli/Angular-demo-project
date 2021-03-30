import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Component({
  selector: 'app-datatable-modal',
  templateUrl: './datatable-modal.component.html',
  styleUrls: ['./datatable-modal.component.scss']
})
export class DatatableModalComponent implements OnInit {

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
