import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {DatatableModalComponent} from '../datatable-modal/datatable-modal.component';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {
  searchForm = new FormGroup({
    searchControl: new FormControl(''),
  });
  constructor( public dialog: MatDialog ) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(DatatableModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onSearch() {
    console.log(this.searchForm.value);
    this.openDialog();
  }
}
