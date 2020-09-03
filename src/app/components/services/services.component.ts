import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  public title:string;
  public subtitle:string;
  public state:string;
  constructor() {
    this.title="Servicios";
    this.subtitle="Clientela destacada";
    this.state="PROXIMAMENTE!"
  }

  ngOnInit(): void {
  }

}
