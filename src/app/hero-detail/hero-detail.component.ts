
// import the input symbol
import { Component, OnInit, Input } from '@angular/core';

// import the Hero symbol.
import { Hero } from '../hero';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // a hero property, preceded by the @Input() decorator.
  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
