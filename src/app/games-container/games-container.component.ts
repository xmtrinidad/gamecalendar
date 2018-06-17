import { Component, OnInit } from '@angular/core';
import {GamesService} from '../services/games.service';
import {GameSection} from '../models/game-section.model';

@Component({
  selector: 'app-games-container',
  templateUrl: './games-container.component.html',
  styleUrls: ['./games-container.component.scss']
})
export class GamesContainerComponent implements OnInit {
  gameSections: GameSection[];

  constructor(private gamesService: GamesService) { }

  ngOnInit() {
    this.gameSections = this.gamesService.getGameSections();
  }

}
