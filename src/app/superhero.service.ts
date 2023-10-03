import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Superhero } from './superhero';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SuperheroService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getSuperheroList(): Observable<Superhero[]> {
    return this.http.get<Superhero[]>(`${this.apiServerUrl}/superhero/all`);
  }

  public addSuperhero(superhero: Superhero): Observable<Object> {
    return this.http.post(`${this.apiServerUrl}/superhero/add`, superhero);
  }
}
