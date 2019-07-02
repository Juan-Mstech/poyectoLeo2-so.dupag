import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addpcto',
  templateUrl: './addpcto.component.html',
  styleUrls: ['./addpcto.component.css']
})
export class AddpctoComponent implements OnInit {
  name: string;
  constructor() { 
    this.name="Product";
  }

  ngOnInit() {
  }

}
