import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {ContactComponent} from './components/contact/contact.component';
import {ClientsComponent} from './components/clients/clients.component';
import {DedicateComponent} from './components/dedicate/dedicate.component';
import {InfoComponent} from './components/info/info.component';
import {StartComponent} from './components/start/start.component';
import {ErrorComponent} from './components/error/error.component';
import {ServicesComponent} from "./components/services/services.component";

const appRoutes: Routes = [
    {path: '', component: StartComponent},
    {path: 'servicios', component:ServicesComponent},
    {path: 'que-hacemos', component: DedicateComponent},
    {path: 'quienes-somos', component: InfoComponent},
    {path: 'contacto', component: ContactComponent},
    {path:'clientes', component:ClientsComponent},
    {path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);