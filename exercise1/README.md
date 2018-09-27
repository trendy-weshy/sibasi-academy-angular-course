# Exercise 1: Understanding how angular-cli works

This is to practise on angular CLI

## Instructions ##

Since you have learnt about scaffolding angular project, using `@angular/cli` to generate angular module and components, using the CLI to serve the project and also build and test the angular project.

In this exercise, you are required to generate an angular project with a prefix of your initials e.g. `jww`
so that your naming system will be:
	1. if it is a component `jww-login-component`
	2. if it is a module `jww-login-module`

The project will have one app module which has two components, that is:
	
```
/
	- ./angular-project
		- ./src
			- ./app
				- app.module.ts
					./login
						- login.component.ts
```
this sample has ignored .html, .css/.scss/.sass/.less, .spec.ts files generate

The sample folder structure represents the following:

```
AppModule
	=> AppComponent
	=> LoginComponent
```

## Intent ##

This exercise is supposed to help you gauge your understanding of `@angular/cli` since it is a critical part of `The Angular Ecosystem`
