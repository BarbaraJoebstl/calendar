# Calendar

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5.
 
## Quickstart
Run `npm install` to install all needed npm packages
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

As a backend https://www.jsonstore.io/ is used.

## General Structure:

### optional folders in module:
- __actions:__ folder contains actions for dealing with store (NgRx)
- __components:__ folder filled with dumb components that contain most of html
- __containers:__ folder contains logic for store connection and calling dump components
- __reducers:__ folder contains reducer for manipulating parts of the store
- __services:__ folder contains different services if needed
- __pipes:__ folder contains different pipes if needed
- __directives:__ folder contains different directives if needed
- ...

## Current Structure
### calendar module: 
contains everything related to calendar

#### containers:
- __calendar-container:__
  - contains `mb-calendar-main`, `mb-calendar-detail` and `mb-add-entry` components
  - uses filteredLists of store to pass events
#### components:
- __mb-calendar-main:__
    - displays the selected date - by default today
    - day with events are marked with a blue dot
    - selectable year, month and day
  
- __mb-calendar-detail:__ 
    - shows the currend day and weekday,
    - shows an eventlist for the current day 
    - implements delete action for a single event

- __mb-add-entry:__
    - implements add event functionality 

## State Management
This project uses
- [ngRx](https://ngrx.io/) as reactive state pattern


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
