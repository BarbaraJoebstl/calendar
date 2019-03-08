import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mb-calendar-detail',
  templateUrl: './calendar-detail.component.html',
  styleUrls: ['./calendar-detail.component.scss']
})
export class CalendarDetailComponent implements OnInit {

  @Input() 
  selectedDay: number;
  @Input()
  selectedWeekday: number;

  constructor() { }

  ngOnInit() {
  }

}
