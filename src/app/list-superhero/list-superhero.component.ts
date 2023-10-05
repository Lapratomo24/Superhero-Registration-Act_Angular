import { Router } from '@angular/router';
import { SuperheroService } from './../superhero.service';
import { Superhero } from './../superhero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-superhero',
  templateUrl: './list-superhero.component.html',
  styleUrls: ['./list-superhero.component.scss']
})
export class ListSuperheroComponent implements OnInit {

  public superheroes: Superhero[];

  constructor(private superheroService: SuperheroService, private router: Router) { }

  // ngOnInit(): void {
  //   this.superheroes= [{
  //     "id": 1,
  //     "heroName": "batman",
  //     "firstName": "bruce",
  //     "lastName": "wayne",
  //     "baseOfOperation": "gotham city",
  //     "affiliation": "justice league"

  // }]

  ngOnInit(): void {
    this.getSuperheroes();
  }

  public getSuperheroes() {
    this.superheroService.getSuperheroList().subscribe(response => {
      console.log(response)
      this.superheroes = response;
    })
  }

  public updateSuperhero(id: number) {
    this.router.navigate(['update-superhero', id])
  }

  public removeSuperhero(id: number) {
    this.superheroService.removeSuperhero(id).subscribe(response => {
      this.getSuperheroes();
    })
  }

}

