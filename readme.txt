--Readme document for *author(s)*, *email(s)*, *UCI id(s)*--

1. How many assignment points do you believe you completed (replace the *'s with your numbers)?

*/10
- 1/1 The ability to log overnight sleep
- 1/1 The ability to log sleepiness during the day
- 1/1 The ability to view these two categories of logged data
- 2/2 Following good principles of mobile design
- 2/2 Creating a compelling app
- 1/1 A readme which explains how these features were implemented and their design rationale

2. How long, in hours, did it take you to complete this assignment?
Understanding the assignment and reading the current codebase took about a week, then implementing it and debugging took about another week and a half, total around 30 hours.


3. What online resources did you consult when completing this assignment? (list specific URLs)
== vs === https://howtodoinjava.com/typescript/equals-vs-strict-equals/
Initial Storage Data Loading https://forum.ionicframework.com/t/ionic-storage-and-initial-data-loading-local-data/120405
Ion Icons https://ionicons.com/
Background Color https://stackoverflow.com/questions/53531819/how-to-set-background-color-ionic-4
Icon Colors https://ionicframework.com/docs/theming/colors
Ionic Text Styling https://ionicframework.com/docs/api/text
Promises https://www.joshmorony.com/using-asyncawait-syntax-for-promises-in-ionic/
Ionic Storage https://www.techiediaries.com/ionic-storage-tutorial-example/
Convert iso date to milliseconds in javascript https://stackoverflow.com/questions/9229213/convert-iso-date-to-milliseconds-in-javascript
angular *ngIf https://angular.io/api/common/NgIf
Ionic 4 Datetime Tutorial https://www.youtube.com/watch?v=4SADjzfLqbc


4. What classmates or other individuals did you consult as part of this assignment? What did you discuss?
I did this assignment on my own without discussing with anyone. 


5. Is there anything special we need to know in order to run your code?
Nothing special.

* Install the ionic CLI globally: `npm install -g ionic`
* Run `npm install` from the project root.
* Run `ionic lab` from the project root.


--Aim for no more than two sentences for each of the following questions.--


6. Did you design your app with a particular type of user in mind? If so, whom?
The app is designed for all types of users, anyone who wants to keep track of their sleep cycles and sleepiness.


7. Did you design your app specifically for iOS or Android, or both?
The app is designed for both iOS and Android. 


8. How can a person log overnight sleep in your app? Why did you choose to support logging overnight sleep in this way?
The user can select the "Log Sleep" option at the bottom of the Home Screen to log sleep time. 
I choose to log overnight sleep by clicking a button and navigating to a different page because it provides a better user experience and is more organized. 


9. How can a person log sleepiness during the day in your app? Why did you choose to support logging sleepiness in this way?
The user can select the "Record Sleepiness" option at the bottom of the Home Screen to log sleepiness. 
Selecting a button and logging the sleepiness on a different page provides a better user experience.
Also, a "Happy" icon and "Bed" icon were used to indicate the range of energetic to sleepiness on the scale.
When the user clicks on a scale, the decsription is displayed on the screen, all of these components were implemented to provide give a clean appearance.


10. How can a person view the data they logged in your app? Why did you choose to support viewing logged data in this way?
Users can view data by selecting the "View Log" option at the bottom of the Home Screen. 
After selecting the button, the user is taken to another page that displays the default data as well as the recently added logs.
The logs are ordered from most recent to least recent.
Viewing the logs in this way is organized, and the user can clearly navigate to the log section of the app to view data.
Additionally, the user can also clear all the data, and if the data is not cleared then data from previous logs are kept on the log page. 
Ionic Storage was used to keep track of all logs. 


11. Which feature choose--using a native device resource, backing up logged data, or both?
Backed up log data using Ionic Storage.


12. If you used a native device resource, what feature did you add? How does this feature change the app's experience for a user?
N/A


13. If you backed up logged data, where does it back up to?
Ionic Storage


14. Did you add any "extra" features, such as other data to log, the ability to edit or delete data, or changes to the styling of the app? If so, what did you add? How do these add to the experience of the app?
Users can clear all logs.
I also added styling to all pages of the app to provide a more fun user epxerience. 
