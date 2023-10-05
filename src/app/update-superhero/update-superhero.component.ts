import { Superhero } from './../superhero';
import { Component, OnInit } from '@angular/core';
import { SuperheroService } from '../superhero.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-superhero',
  templateUrl: './update-superhero.component.html',
  styleUrls: ['./update-superhero.component.scss']
})
export class UpdateSuperheroComponent implements OnInit {

  id: number;
  public superhero: Superhero = new Superhero();

  constructor(private superheroService: SuperheroService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.superheroService.getSuperheroById(this.id).subscribe(response => {
      this.superhero = response;
    }, error => console.log(error));
  }

  updateSuperhero() {
    this.superheroService.updateSuperhero(this.id, this.superhero).subscribe(response => {
      this.superhero = new Superhero();
      this.goToSuperheroList();
    }, error => console.log(error));
  }

  goToSuperheroList() {
    this.router.navigate(['/superheroes']);
  }
  
  onSubmit() {
    this.updateSuperhero();
  }
}
