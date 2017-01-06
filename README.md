# Doctor Lookup

#### Site allows users to enter their mdical issue to retrieve a list of doctors specialized in treatin that issue.

#### _Created 01.06.2017.  Last update 01.06.2017._

#### By _**Annie Sonna**_

## Description

This site was made to fulfill the **Week one Epicodus Friday independent project requirement for the JavaScript block**.  Project outline:

Create a website where users may enter a medical issue (ie: “toothache”) into a form, submit it, and receive a list of doctors they may seek out to help with their medical issue.

Additional Requirements

+ Use the BetterDoctors API to retrieve this information.
You will need to make an account and an API key. Do not use someone else’s API key. Each API key can be invoked for 1000 API calls per day, so avoid making excessive API calls (ie: accidental infinite loops) during development.

+ Creating API Keys
Visit the BetterDoctors API site and click “Get a free API key”.
Fill out the form, or authenticate with GitHub.
Your API key should be listed on the front page (ex: “a2c356ibgh44…..”) or under My Account > Applications.
Setup Instructions

+ Place your token in an .env file at the top level of your directory. (For grading purposes, name your API key variable exports.apiKey in .env. Keep spelling and capitalization identical, as it considerably speeds up the grading process.)
+ Include .env in .gitignore.
+ Use at least two JavaScript files: One to receive form input, another to make an API request and display results.
+ The following starter code will provide a response (logged to the console) containing 20 results from the Portland, OR area. Use it to build an object that can be pushed to an array that can later be returned.

exports.getDoctors = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
      console.log(result);
    })
   .fail(function(error){
      console.log("fail");
    });
};

+ This example assumes your API Key is stored in an apiKey variable, as described in this lesson.
Notice the ?user_key= used with the API key after the username. You must include your personal access token with your request.


#### Objectives

+ Does the website work as expected?
+ Did you follow all setup instructions, including storing your API key in the variable exports.apiKey?
+ Does the app separate front-end and back-end functionalities into different JavaScript files?
+ Is exports used successfully in at least one JavaScript file?
+ Are dependencies managed with npm and Bower?
+ Does the app include a gulp-based asset pipeline with a development server? Does the asset pipeline include all tasks from the homework this week? (See below)
+ Code and Git documentation follow best practices (setup instructions in README, .gitignore file discluding unnecessary content from repo, detailed well-formatted commit messages, etc.)
+ Does the project demonstrate concepts covered this week? If prompted, are you able to discuss the flow of your code and the concepts behind it with an instructor using correct terminology?
+ Is the app in a presentable, portfolio-quality state?
+ Is required functionality in place by the Friday deadline?


## Setup/Installation Requirements

* _Clone repository. Then locate folder through command line_
* Run `bower install` to install external libraries packages.
* Run `npm install` to install gulp and other packages.
* Run `gulp serve` to build the project and finalize Installation of all folders and to start the server on port 3000.
* Create a new file (recommended to call it *.env*) and place a valid Doctor apiKey within the file following the syntax `exports.apiKey = "your-api-key";`.  Learn more about BetterDoctor apiKeys at [here](https://developer.github.com/v3/repos/#list-user-repositories)
Consult the BetterDoctor API documentation for further information. The documentation is extensive and allows you to experiment with different queries for your API calls before putting together your code. https://developer.betterdoctor.com/documentation15

## Known Bugs and observations
TBD


## Support and contact details
Email me at nsab42@yahoo.com


## Technologies Used

+ javascript, html, scss.
+ Node,
+ Npm and bower as package managers, and
+ Gulp for the asset pipeline.
+ Gulp and other packages available to view in package.json and bower.json
+ Ajax


### License

Copyright (c) 2017 **_Annie Sonna_**
