import { Component, OnInit } from '@angular/core';
import {MessageService} from "../../services/message.service";
import _swal from 'sweetalert';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public title:string;
  public subtitle:string;
  public info:string;
  constructor(public _MessageService:MessageService) {
    this.title="Contacta con nosotros";
    this.subtitle="Resolvemos tus dudas";
    this.info="PODRÁS ENCONTRARNOS DE LAS SIGUIENTES FORMAS"

  }
  contactForm(form) {
    this._MessageService.sendMessage(form).subscribe(() => {
      _swal("Formulario contacto", "Formulario enviado correctamente", 'success');
      form.reset();
    });
  }
  ngOnInit(): void {
  }


}
