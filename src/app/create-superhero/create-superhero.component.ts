import { SuperheroService } from './../superhero.service';
import { Component, OnInit } from '@angular/core';
import { Superhero } from '../superhero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-superhero',
  templateUrl: './create-superhero.component.html',
  styleUrls: ['./create-superhero.component.scss']
})
export class CreateSuperheroComponent implements OnInit {

  public superhero: Superhero = new Superhero();

  constructor(private superheroService: SuperheroService, private router: Router) {}

  ngOnInit(): void {
      
  }

  addSuperhero() {
    this.superheroService.addSuperhero(this.superhero).subscribe(response => {
      this.goToList();
    })
  }

  goToList() {
    this.router.navigate(['/superheroes'])
  }

  onSubmit() {
    this.addSuperhero()
  }

}
