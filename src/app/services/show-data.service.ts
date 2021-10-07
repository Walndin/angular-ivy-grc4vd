import { Injectable } from '@angular/core';
import { Show } from '../model/show';

@Injectable()
export class ShowDataService {
  shows: Show[] = [];

  constructor() {
    this.shows.push(new Show(1, 'Paw Patrol'));
    this.shows.push(new Show(2, 'Prison Break'));
    this.shows.push(new Show(3, 'Squid Game'));
    this.shows.push(new Show(4, 'Under The Dome'));
    this.shows.push(new Show(5, 'The Flash'));
    this.shows.push(new Show(6, "Dc's Legends of Tomorrow"));
    this.shows.push(new Show(7, 'Supergirl'));
    this.shows.push(new Show(8, 'Green Arrow'));
    this.shows.push(new Show(9, 'The Punisher'));
    this.shows.push(new Show(10, 'The Walking Dead'));
  }

  saveShow(show: Show) {
    this.shows.push(show);
  }
}
