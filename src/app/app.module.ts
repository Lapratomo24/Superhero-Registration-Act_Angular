import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateSuperheroComponent } from './create-superhero/create-superhero.component';
import { UpdateSuperheroComponent } from './update-superhero/update-superhero.component';
import { ListSuperheroComponent } from './list-superhero/list-superhero.component';
import { DetailedSuperheroComponent } from './detailed-superhero/detailed-superhero.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreateSuperheroComponent,
    UpdateSuperheroComponent,
    ListSuperheroComponent,
    DetailedSuperheroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
