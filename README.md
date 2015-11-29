# Wait and Eat

This is the most recent version of the demo app for [The Angular Course](https://www.angularcourse.com).

Wait and Eat replaces paper waiting lists at restaurants.

If you eat at restaurants a lot, you'll love the app because instead of waiting around
for your name to be called, you'll just get a text message when a table opens up.

If you own a restaurant, you'll love the app because it makes managing waiting lists really easy,
reduces no shows, and creates happier customers that are more likely to come back.

You can find a full working demo at http://www.waitandeat.com.

The app uses these technologies:

* AngularJS 1.4.x
* Firebase 2.2.x
* AngularFire 1.1.x
* Bootstrap 3.3.x
* Zapier

## Getting started

The easiest way to get the code is to download it as a zip file. If you're familiar with Git and Github, you can also clone the repository.

## Run the application

1. You can use any server you like, but I prefer Python 2's built-in server for its simplicity.
Navigate to the /src folder and enter, `python -m SimpleHTTPServer`, in your terminal.
3. Now browse to the app at `http://localhost:8000`.
4. Replace the url in `src/app/core/constants.js` with your own Firebase URL.
5. Log in to your Firebase.com account and paste the content from `security_rules.json` into the Firebase rules section for your app.
