import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSuperheroComponent } from './list-superhero/list-superhero.component';
import { CreateSuperheroComponent } from './create-superhero/create-superhero.component';

const routes: Routes = [
  {path: 'superheroes', component: ListSuperheroComponent},
  {path: '', redirectTo: 'superheroes', pathMatch: 'full'},
  {path: 'create-superhero', component: CreateSuperheroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
