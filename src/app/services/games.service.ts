import { Injectable } from '@angular/core';
import {Game} from '../models/game.model';
import {GameSection} from '../models/game-section.model';
import { GAMES } from '../games-data';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private games: Game[] = GAMES;
  private gameSections: GameSection[] = [
    {
      year: '2018',
      games: this.games
    }
  ];

  constructor() { }

  getGameSections() {
    return this.gameSections;
  }
}
