import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

// @Injectable() decorator
// dependency injection system
// Angular creates a single, shared instance of HeroService
//     and injects into any class that asks for it
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {

    this.messageService.add('HeroService: fetched heroes');

    return of(HEROES);
  }

  // service-in-service

}








