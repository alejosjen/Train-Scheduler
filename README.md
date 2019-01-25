# [Train-Scheduler](https://alejosjen.github.io/Train-Scheduler/)


This JS program takes a train attendant's information about known train times and calculates when the next train is expected.

To USE:

As the train attendent requesting information on behalf of a rider, type in the name of the train in the first text area. Next, determine the destination, the time the train left the station, and the time interval of its trip by frequency in minutes. The app will then tell you based on your current location and time, the next expected time of the train and how many minutes away it is.

Technologies:

A Firebase database is used to store and retreive your information.

The Momentjs library is used to:
- figure the difference of the current time compared to the first departure
- record when the next train is expected and how many minutes away it is
- format the display times into hours and minutes 

For styling, I used Bootstrap, Font Awesome, and Google Fonts. jQuery appends the information to the browser.

Thanks for reading, any kind comments and constructive suggestions are always appreciated. 

By Jennifer Alejos

[Website](https://www.jenalejos.com/)
