import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.scss']
})
export class YearComponent implements OnInit {
  @Input() year: string;

  constructor() { }

  ngOnInit() {
  }

}
