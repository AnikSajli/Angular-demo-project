import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {
  searchForm = new FormGroup({
    searchControl: new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
  }

  onSearch() {
    console.log(this.searchForm.value);
  }
}
