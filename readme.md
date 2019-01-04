# ReactJs-Laravel application

# Prepared by dreamsoft4u's developer. Website - https://www.dreamsoft4u.com

Description:

	Adding CURD operation using reactJs (front end) + laravel (backend api).
	
Requirements: Laravel(5.5),php (> 7.0.6)
	
Installation Instructions : We are assuming that composer is already installed
	
	1) From your projects root folder in terminal run:
	
		git clone https://github.com/developer-dreamsoft4u/ReactJsLaravel ReactJSLaravel

	2) Run the following cammands:
		
		- cd ReactJSLaravel
		- composer install 
	
	3) Optionally Update your .env file and associated settings (see Environment File section)

	4) Run the migration to add the table: 
	
		php artisan migrate
		
	5) run commands to get ReactJs dependencies:
		
		- npm install
	
	5) finally run command: 
	
		- php artisan serve //Laravel
		- npm run watch //React Js
	
Note: Make sure your apps email is configured in the .env file.