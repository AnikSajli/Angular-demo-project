import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {

  rows = [
    {
      age: 22,
      company: "Johnson, Johnson and Partners, LLC CMP DDC",
      gender: "female",
      name: "Ethel Price"
    },
    {
      age: 22,
      company: "Johnson, Johnson and Partners, LLC CMP DDC",
      gender: "female",
      name: "Ethel Price"
    },
    {
      age: 22,
      company: "Johnson, Johnson and Partners, LLC CMP DDC",
      gender: "female",
      name: "Ethel Price"
    },
    {
      age: 22,
      company: "Johnson, Johnson and Partners, LLC CMP DDC",
      gender: "female",
      name: "Ethel Price"
    },
    {
      age: 22,
      company: "Johnson, Johnson and Partners, LLC CMP DDC",
      gender: "female",
      name: "Ethel Price"
    },
    {
      age: 22,
      company: "Johnson, Johnson and Partners, LLC CMP DDC",
      gender: "female",
      name: "Ethel Price"
    },
    {
      age: 22,
      company: "Johnson, Johnson and Partners, LLC CMP DDC",
      gender: "female",
      name: "Ethel Price"
    },
    {
      age: 22,
      company: "Johnson, Johnson and Partners, LLC CMP DDC",
      gender: "female",
      name: "Ethel Price"
    },
    {
      age: 22,
      company: "Johnson, Johnson and Partners, LLC CMP DDC",
      gender: "female",
      name: "Ethel Price"
    },
    {
      age: 22,
      company: "Johnson, Johnson and Partners, LLC CMP DDC",
      gender: "female",
      name: "Ethel Price"
    },
    {
      age: 22,
      company: "Johnson, Johnson and Partners, LLC CMP DDC",
      gender: "female",
      name: "Ethel Price"
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
