# Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.4.

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


======================================================================================================================================================

Hi guys.  Welcome to my humble demo project.
It's less of a JWT demo and more of just a starter project for angular/dotnet. 
It's got pretty generic error handeling where server and client gracefully handle pretty much every error thrown at it gracefully. 
JSON web tokens are being issued to our authenticated users, and are necessary for Gets from the Users Controller.

This project is neither perfect nor finished, but it is a pretty good starting point for extending to a larger application after about 16 hours of work.
The focus of this project was to create something that can be used as a base for other applications.  Creating a relatively secure backend with generic user model and error handling as well as clean and organized architectures along the full stack. 
Some things that I wish I included in this project://
- mobile formatting and more custom css.  I took the easy way out and used bootstrap as frontend/design was not the main focus.  There are no media queries and the site looks pretty attrocious when it's not full screen on a desktop.
- a "sample page" that shows some of my capabilities as a front-end engineer.  I planned on getting this in there but got caught up with the error handling. 
- more tables in the database to show my understanding of relationships in entity framework.
- unit tests
- logic for updating a user
- cross browser functionality.  I use a flatten function in one of my error handling functions on the frontend which uses es2019.  That's not good for old browser support. 
- more secure auth with asp.net Identity and probably not storing the password salt in the users database.
- utilized typescript more by creating more models on the front end, I just end up using any keyword too often. 
- no client side validation

Heres some version info.
dotnet --version                5.0.202
node --version                  v14.15.0
@angular-devkit/architect       0.1201.4
@angular-devkit/build-angular   12.1.4
@angular-devkit/core            12.1.4
@angular-devkit/schematics      12.1.4
@schematics/angular             12.1.4
rxjs                            6.6.7
typescript                      4.3.5

I haven't tried standing this application up on a different machine.

Useful commands
Starting front end: ng serve
back: dotnet watch run 