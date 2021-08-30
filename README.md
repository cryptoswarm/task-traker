# AngularCrash

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Fake api
This project is using a fake api through the use of the json-server package<br>
In order to use `json-server`, it should be installed `npm i json-server`<br>
Then, a `db.json` that will represent our db should be created. For this project an object called `tasks` is holding an array of `task`<br>
Least but not last, add `"server": "json-server --watch db.json --port 5000"` into the `scripts` of the `package.json` port can be set to any<br>
Finally, run `npm run server`
As a test, you should see the data of `db.json` in the browser when navigating to `http://localhost:5000/tasks`
