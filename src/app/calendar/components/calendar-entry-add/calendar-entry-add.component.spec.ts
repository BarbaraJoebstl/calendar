import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarEntryAddComponent } from './calendar-entry-add.component';

describe('CalendarEntryAddComponent', () => {
  let component: CalendarEntryAddComponent;
  let fixture: ComponentFixture<CalendarEntryAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarEntryAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarEntryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
