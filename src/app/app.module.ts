import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteService } from './clientes/cliente.service';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './clientes/form.component';
import { FormsModule } from '@angular/forms'
import { DetalleComponent } from './clientes/detalle/detalle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemComponent } from './ordenes/item.component';
import { ItemFormComponent } from './ordenes/item-form.component';
import { ItemListComponent } from './ordenes/item-list.component';
import { OrdersComponent } from './ordenes/orders.component';
import { LoginComponent } from './usuarios/login.component';



const routes: Routes = [
  {path: '', redirectTo: '/shop/login', pathMatch: 'full'},
  {path: 'shop/users', component: ClientesComponent},
  {path: 'shop/users/form', component: FormComponent},
  {path: 'shop/users/form/:id', component: FormComponent},
  {path: 'shop/books', component: ItemComponent},
  {path: 'shop/books/form', component: ItemFormComponent},
  {path: 'shop/books/form/:id', component: ItemFormComponent},
  {path: 'shop/books/list', component: ItemListComponent},
  {path: 'shop/order/:clienteId', component: OrdersComponent},
  {path: 'shop/login', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientesComponent,
    FormComponent,
    DetalleComponent,
    ItemComponent,
    ItemFormComponent,
    ItemListComponent,
    OrdersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
