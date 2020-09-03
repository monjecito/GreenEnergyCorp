import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {routing, appRoutingProviders} from './app.routing';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {MessageService} from "./services/message.service";
import {ContactComponent} from './components/contact/contact.component';
import {ClientsComponent} from './components/clients/clients.component';
import {DedicateComponent} from './components/dedicate/dedicate.component';
import {InfoComponent} from './components/info/info.component';
import {StartComponent} from './components/start/start.component';
import {ErrorComponent} from './components/error/error.component';
import swal from 'sweetalert';
import {from} from "rxjs";
import { ServicesComponent } from './components/services/services.component';

@NgModule({
    declarations: [
        AppComponent,
        ContactComponent,
        ClientsComponent,
        DedicateComponent,
        InfoComponent,
        StartComponent,
        ErrorComponent,
        ServicesComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        routing,
        FormsModule
    ],
    providers: [
        appRoutingProviders,
        MessageService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
