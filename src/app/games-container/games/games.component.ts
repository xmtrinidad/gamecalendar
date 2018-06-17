import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../../models/game.model';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  @Input() games: Game[];

  constructor() { }

  ngOnInit() {
  }

}
