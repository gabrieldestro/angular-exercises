import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private url: string = 'http://pokeapi.co/api/v2/pokemon/?offset=0&limit=100';

  constructor(
    private httpClient: HttpClient
  ) { }

  get apiListAllPokemons(): Observable<any> {
    return this.httpClient.get<any>(this.url).pipe(
      tap(res => res),
      tap(res => {
        res.results.map((resPokemons: any) => { 
          this.apiGetPokemons(resPokemons.url).subscribe(res => resPokemons.status = res);
        })
      })
    )
  } 

  public apiGetPokemons(url: string): Observable<any> {
    return this.httpClient.get<any>(url).pipe(map(res => res))
  }
  
}