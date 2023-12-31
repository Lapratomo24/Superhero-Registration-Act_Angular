import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSuperheroComponent } from './list-superhero/list-superhero.component';
import { CreateSuperheroComponent } from './create-superhero/create-superhero.component';
import { UpdateSuperheroComponent } from './update-superhero/update-superhero.component';

const routes: Routes = [
  {path: 'superheroes', component: ListSuperheroComponent},
  {path: '', redirectTo: 'superheroes', pathMatch: 'full'},
  {path: 'create-superhero', component: CreateSuperheroComponent},
  {path: 'update-superhero/:id', component: UpdateSuperheroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
