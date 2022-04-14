# Pal Pilot! 🐾 
## Welcome to Pal Pilot! 🐶 🐱
### Pal Pilot  helps pet parents keep track of important information about their pets. 
### When using Pal Pilot, pet parents can manage basic pet information- including pet weight, age, vaccinations, medications, allergies, and upcoming appointments for their little pals!
\
This application allows for users to sign up and login (using JWT auth) to see and manage their own pets - without having access to view, manage or delete any information about other user's pets. 

This project is part of a decoupled full stack application. The backend code can be found [HERE](https://github.com/sarahpicard/pal-pilot-api) and is written using Python and Flask.

## **🙀 Take a look at Pal Pilot [HERE](https://pal-pilot.netlify.app/)**
<br>

--- 

## Wireframing & Concept 📝
![wireframe](https://i.imgur.com/JQHAZP9.png)
Original wireframing for the project was completed prior to development. The above screenshot details a basic design concept prior to project completion.

<br>
<br>

# Using Pal Pilot 🦮
Upon first entering the app, users will be greeted with a landing page, allowing for signup and login via a left-hand navigation bar as well as providing some basic app information before getting started. 
![landing](https://i.imgur.com/N1k3Sw8.png)
After signing up and logging in, users experience a conditionally rendered navigation bar, allowing for access to a 'My Pets' page, 'Appointments' page, and 'Add Pet' page. 

<br>
Hovering over the left navigation bar produces a larger navigation menu with more detailed route information. 

![loggedIn](https://i.imgur.com/f2PBqHo.png)

Seeing your pet information is easy 😌 - simply navigate to the 'My Pets' page, which will produce a card for each of the pets you have added to your profile. 
Users can add a new pet by using the form on the 'Add Pet' page. 

<br>
The pet cards feature a randomized pet photo along with your pet's name. If hovered over, the card 'flips' and shows basic pet information, including breed, age, and weight. 

<br>
Clicking on each pet card will bring the user to a detailed view of the specified pet 🐈

![pet](https://i.imgur.com/t3e6pYU.png)
In the screenshot above, you can see that this particular pet has no vaccines, medications, or allergies listed. Conveniently, the user can add this information right on the pet detail page! Along with adding this important information, the basic pet details (such as breed, age, and weight) can also be updated using the 'Update Pet' button. 

<br>
To keep track of your pet's appointments, visit the Appointments page! 📆

![appointments](https://i.imgur.com/X8kmdjB.png)
This view allows the user to add new appointments and see any upcoming appointments they may have for their pets. Once the appointments have completed, users can also conveniently delete the appointment card by hitting the 'trash can' button 🗑

<br>

## Technologies Used 💻
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)
![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

<br>

## Credits 🙏
- <a href="https://www.vecteezy.com/free-vector/dog-park">Dog Park Vectors by Vecteezy</a>
- Google Fonts: utilized ['League Spartan'](https://fonts.google.com/specimen/League+Spartan?query=league+Spar) and ['Libre Baskerville](https://fonts.google.com/specimen/Libre+Baskerville?query=libre+baskervi) 
- React Font Awesome Icons ([more information here](https://react-icons.github.io/react-icons/))

<br>

## IceBox Features 🥶
Although there are a number of features I'd like to implement in this project, here are a few pertinent additions: 
  
  - Ability to delete vaccines, medications, and allergies on pet detail page 
  - Functionality for updating appointments 
  - Functionality to associate appointments with specific pets
  - Add functionality to notify the user of upcoming appointments for their pets (using email notification)
