import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-dedicate',
    templateUrl: './dedicate.component.html',
    styleUrls: ['./dedicate.component.css']
})
export class DedicateComponent implements OnInit {
    public title: string;
    public subtitle: string;

    constructor() {


        this.title = "¿A que nos dedicamos?";
        this.subtitle = "Nuestro objetivo,su ahorro";
    }

    ngOnInit(): void {
    }

}
