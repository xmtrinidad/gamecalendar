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

  getPlatformColor(platform) {
    if (platform === 'xboxone') {
      return '#107c10';
    } else if (platform === 'ps4') {
      return '#004098';
    } else if (platform === 'pc') {
      return '#6f6f6f';
    }
  }

}
