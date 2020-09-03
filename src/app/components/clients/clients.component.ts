import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  public title:string;
  public subtitle:string;
  public state:string;
  constructor() {
    this.title="Clientes potenciales";
    this.subtitle="Trabajamos para tu bienestar";
    this.state="En proceso!";
  }

  ngOnInit(): void {

  }

}
