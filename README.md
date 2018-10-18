# express-hello-world
This is a small repo specifically made to show how to deploy to App Engine

## Pre Requirements
You must have the [Google SDK](https://github.com/MightyHive/mightypack/compare/JapaneseCharacterSupport?expand=1) installed.


## Files

### index.js
This is the server, it's just a small express server. It's set to run on port 8080, which is the default App Engine public port. If you set a port via an environment variable, it will override the default 8080 on this server.

### app.yaml
This specifies the configuration of App Engine, like which service to deploy to, what language to use, environment variables, etc.


## How to Deploy
Make sure you have configured your SDK with your login information (this should happen during the install process).

### Make a Project
1. Login to [cloud.google.com](cloud.google.com)
1. In the top select the project dropdown menu
1. Select new project
1. Give it a name and keep it in the MightyHive org (make note of the project ID that is assigned to it)
1. Click Create
1. Wait for it to spin up (takes about a minute)

### Deploy to App Engine

We're going to assume our project ID is `hello-zarquon`.

First configure your SDK's default project
```
gcloud config set project hello-zarquon
```

Great! Now you'll deploy to this project by default. You can see your current config with the following command:
```
gcloud config list
```

Now you'll want to cd into `express-hello-world` in Terminal.

We can now run deploy using
```
gcloud app deploy
```

You'll see an output similar to this
```
Services to deploy:

descriptor:      [/Users/jamesterry/github/express-hello-world/app.yaml]
source:          [/Users/jamesterry/github/express-hello-world]
target project:  [hello-zarquon]
target service:  [default]
target version:  [20181017t170340]
target url:      [https://hello-zarquon.appspot.com]


Do you want to continue (Y/n)?  
```

This all looks good, so I continue with `Y`. Then I sit back and watch as https://hello-zarquon.appspot.com is deployed.

### Shortcut
When you run the deploy command, you can specify a project inline like so:
```
gcloud app deploy --project=hello-zarquon
```

If you have multiple Google App Engine Yaml files, you can specify that too. By default it will look for `app.yaml`.

```
gcloud app deploy other.yaml --project=hello-zarquon
```
