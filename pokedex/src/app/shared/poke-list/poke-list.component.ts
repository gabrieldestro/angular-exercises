import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  public allPokemons: any;
  public allPokemonsFiltered: any;

  public apiError: boolean = false;

  constructor(
    private pokeApiService: PokeApiService
    ) {
  }

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => { 
        this.allPokemons = res.results;
        this.allPokemonsFiltered = this.allPokemons;
      },
      error => {
        this.apiError = true;
      }
    );
  }

  public search(value: string) {
    const filter = this.allPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });

    this.allPokemonsFiltered = filter;
  }
}
  