
The app uses these technologies:

* AngularJS 1.4.x
* Firebase 2.2.x
* AngularFire 1.1.x
* Bootstrap 3.3.x


## Run the application

1. You can use any server you like, but I prefer Python 2's built-in server for its simplicity.
Navigate to the /src folder and enter, `python -m SimpleHTTPServer`, in your terminal.
3. Now browse to the app at `http://localhost:8000`.
4. Replace the url in `src/app/core/constants.js` with your own Firebase URL.
5. Log in to your Firebase.com account and paste the content from `security_rules.json` into the Firebase rules section for your app.
