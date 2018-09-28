# Exercise 2: Understanding of components, services and modules

This is to practise on:

1. angular components, what they are and how to use them;
2. angular modules, what they are and how they are used in angular;
3. angular services, what they are and how they function;

## Instruction ##

This exercise may require you to visit the main angular documentation for better insight. You can look at the following:

1. [Being able to display data in components](https://angular.io/guide/displaying-data)
2. [Understanding angular templates](https://angular.io/guide/template-syntax)
3. [DOM events listener on angular component plus a little about user input](https://angular.io/guide/user-input)
4. [CSS on angular components](https://angular.io/guide/component-styles)
5. [Understanding angular services](https://angular.io/guide/architecture-services)
6. [Introduction to angular modules](https://angular.io/guide/architecture-modules)
7. [If interested in knowing how angular architecture looks](https://angular.io/guide/architecture)
8. [If you want to understand what angular components really are](https://angular.io/guide/architecture-components)


## How to do the assignment ##

For this exercise, you are supposed to create a project using components, modules and services to create a small web application that prints out the number of clicks.

The expected functinality is:

1. A button the says `'click me!'`

2. A div with styling:

	```css
		width: 200px;
		min-height: 50px;
		display: block;
		border: 1px solid rgba(0,0,0,.04);
		box-shadow: 0 0 2px 3px rgba(0,0,0,.1);
		margin: 0;
		padding: 20px;
	```

	- picture the div as a container
3. This should be on the components template (`DON'T USE INLINE TEMPLATES. PLEASE!`)

4. Use a service to store the number of times the button was clicked
	- The services should be able to:
		- get number of clicks
		- add a click
		- reset clicks

5. The container should display the following content:
	- "You have clicked the button {number_of_times_clicked} times"

6. On reset the sentence being displayed should also clear out, leaving the container with a default text
	- "Please click the button {above /  below - depends on how you structure the app}"

7. The Container should be another component. Therefore you will have the following:
	- app.module.ts
		- app.component.ts
		- app.component.html
		- app.component.{`sass`, `scss`, `css`, `less`}
		- container
			- container.component.ts
			- container.component.html
			- container.component.{`sass`, `scss`, `css`, `less`} - depends on what you told @angular/cli you use a your styling lang `scss/sass` and `less` are pre-processors so that means they compile to `css`

8. *Please ensure to follow the instructions from the root project `README.md`*


## Intent ##

This exercise is to help you understand better how components, modules and services fit into the `Angular Ecosystem`. This knowledge will be beneficial all through your journey in this course as well as in your day to day angular development.