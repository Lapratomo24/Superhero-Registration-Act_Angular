import { Superhero } from './../superhero';
import { Component, OnInit } from '@angular/core';
import { SuperheroService } from '../superhero.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-superhero',
  templateUrl: './update-superhero.component.html',
  styleUrls: ['./update-superhero.component.scss']
})
export class UpdateSuperheroComponent implements OnInit {

  id: number;
  superhero: Superhero = new Superhero()

  constructor(private superheroService: SuperheroService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
      this.superheroService.getSuperheroById(this.id).subscribe(response => {
        this.superhero = response;
      }, error => console.log(error));
  }

}
