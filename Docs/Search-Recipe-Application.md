# Search Recipe Application ( ASE Lab Assignment 3 )

# Introduction:
Developing an Angular application for viewing calorie and weight details for a given food item.

# Objectives:
1) Creating and Validating Login and Register pages using local storage angular functionality.
2) Providing details of the food item specified by the user/client using Nutritionix API.
3) Spelling out the given food item using text to speech API.
 
# Design/Implementation( including code examples ):
1) Created a new project and added bootstrap 4 script link to the index.html page.
2) Created login, register, home components.
3) Created app routing service and added URL paths for above mentioned components.
4) Developed basic Registration and login pages. 
5) Created local storage service to store registered user details.
6) Checking User credentials using local storage functionality.
7) Added Validations for registration page ( minlength, email, required )
8) Added Validations for login page ( minlength, required , invalid user credentials)
9) Developed basic Home page with search recipe functionality along with validation.
10) On recipe search, getting the details of food item by using Nutritionix API with Http GET request. ( Created API Keys) 
11) Created display-recipe-details component to display the calories and serving weight details of the food item.
12) Used text-to-speech API to spell out the given food item.
13) Added styles(CSS) for all the pages.

# Input/Output ( Screenshots ):
### Registration Page:
![](https://github.com/sindhusha-t/Search-Recipe-App/raw/master/screenshots/Registration.png)
2) Registration page with Validation
![](https://github.com/sindhusha-t/Search-Recipe-App/raw/master/screenshots/Registration%20with%20validation.png)
3) Registration with all details
![](https://github.com/sindhusha-t/Search-Recipe-App/raw/master/screenshots/Registration%20button%20enabled.png)

### Login Page:
![](https://github.com/sindhusha-t/Search-Recipe-App/raw/master/screenshots/Login.png)
2) Login with Validation
![](https://github.com/sindhusha-t/Search-Recipe-App/raw/master/screenshots/Login%20with%20validations.png)

### Home Page:
![](https://github.com/sindhusha-t/Search-Recipe-App/raw/master/screenshots/Home.png)
2) Search Recipe Page:
![](https://github.com/sindhusha-t/Search-Recipe-App/raw/master/screenshots/Recipe%20Search.png)
3) Search with Validation:
![](https://github.com/sindhusha-t/Search-Recipe-App/raw/master/screenshots/Search%20Validation.png)

# Issues/Limitations:
1) The API URL-2 given in the assignment seems to not work. So we used a different free API service for the functionality to work.
Added following tag in index.html file   
`<script src="http://code.responsivevoice.org/responsivevoice.js"></script>`      
Added the following code after the search item click.   
`responsiveVoice.speak(this.searchRecipeForm.controls.recipeName.value );`

# Conclusion:
We have learnt the following angular concepts:
Local Storage functionality,
API services, 
routing service
UI Mashup

#Team Details:
Team ID: 6-1   
Sindhusha Tiyyagura(24)   
Pradeepika Kolluru(12)
