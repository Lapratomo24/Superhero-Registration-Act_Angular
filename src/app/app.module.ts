import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { DetailedEmployeeComponent } from './detailed-employee/detailed-employee.component';
import { CreateSuperheroComponent } from './create-superhero/create-superhero.component';
import { UpdateSuperheroComponent } from './update-superhero/update-superhero.component';
import { ListSuperheroComponent } from './list-superhero/list-superhero.component';
import { DetailedSuperheroComponent } from './detailed-superhero/detailed-superhero.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    ListEmployeeComponent,
    UpdateEmployeeComponent,
    DetailedEmployeeComponent,
    CreateSuperheroComponent,
    UpdateSuperheroComponent,
    ListSuperheroComponent,
    DetailedSuperheroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
