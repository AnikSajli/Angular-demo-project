import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
   encapsulation: ViewEncapsulation.None
})
export class DatatableComponent implements OnInit {
  @ViewChild('myTable') table: any;
  rows: any = [];
  timeout: any;

  constructor(private firebaseDB: AngularFireDatabase) {
    const itemsRef: AngularFireList<any> = firebaseDB.list('datatable');
    itemsRef.valueChanges().subscribe(response => {
      this.rows = response;
    });
  }

  ngOnInit(): void {
    //   this.firebaseDB.list('/datatable').push({
    //     name: 'rubel',
    //     gender: 'male',
    //     age: 24,
    //     company: 'shohoz'
    //   });
    // }
  }

  onPage(event: any) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
    }, 100);
  }

  toggleExpandRow(row: any) {
    console.log('Toggled Expand Row!', row);
    this.table.rowDetail.toggleExpandRow(row);
  }
}
