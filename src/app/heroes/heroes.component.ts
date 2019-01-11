import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';

// import mock heroes constant
// import { HEROES } from '../mock-heroes';

import { HeroService } from '../hero.service';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;

  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }


  // click event handler
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }


    // waits for the Observable to emit the array of heroes
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }



  // expose heroes array for binding
  // heroes = HEROES;


  // Now it returns an Observable<Hero[]>.
  // getHeroes(): void {
  //  this.heroes = this.heroService.getHeroes();
  // }


  // hero = 'Windstorm';
  // type hero initialized
  // hero: Hero = {
  //  id: 1,
  //  name: 'Windstorm'
  // };





}
