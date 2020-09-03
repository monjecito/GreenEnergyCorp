import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
public title:string;
public subtitle:string;
  constructor() {
    this.title="Green Energy Corp";
    this.subtitle="Asesoria energética";
  }

  ngOnInit(): void {

  }

}
