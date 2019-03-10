# Calendar

## Features
- The calendar displays the current month and day by default.
- Clicking on a day in the calendar displays the respective details on the left.
- The currently selected day is highlighted in the calendar.
- Arrows next to the year number allow the user to navigate through years.
- Clicking on month names allows the user to navigate through months.
- The backend to store events is a [ready-to-use service](https://www.jsonstore.io/).
- Days with event entries are marked in the calendar.
- Event entries for the selected day are shown in a list on the left.
- Event entries can be deleted by clicking on the 'X' icon beside the event in the list.

 
## Quickstart
Run `npm install` to install all needed npm packages. 
Run `ng serve` for a dev server and navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


### Calendar module: 
contains everything related to calendar
 
 #### Folders
- __components/:__ 
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

- __containers/:__  
    - __mb-container:__
    contains `mb-calendar-main`, `mb-calendar-detail` and `mb-add-entry` components
    - uses filteredLists of store to pass events

- __actions/:__ 
    - folder contains actions for dealing with store (NgRx)

- __reducers/:__
    - folder contains reducer for manipulating parts of the store

- __effects/:__ 
    - folder contains all effects for calendar actions

- __services/:__ 
    - folder contains `DateCalcService` and `MbEventService`

- __models/:__ 
    - folder contains mbEvent model 


## possible next steps - optimizations

- DataStructure:
currently all events are stored in jsonstore.io as seperated objects. 
For a better performance it is necessary to investigate in a better data structure.

- Rendering:
evertime a user selects a different day, the weekday array in `mb-calendar-main` is rerenderd. It would be better, to rerender only when month or year is changed.

- ErrorHandling
- Mobile View
- Add IconFont


## Further help

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5.

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
