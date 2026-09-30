# 🍂 User Info Card

A simple interactive **User Info Card** website built with HTML5, CSS3, and JavaScript. The page allows users to enter personal information through a form and display their information in a separate card.

## 📌 About the Project

The **User Info Card** is a single-page website designed to collect and display user information.

Users can enter details such as their name, email, age, birthday, phone number, address, favorite color, gender, hobby, favorite food, occupation, and a short biography.

After clicking **"Show My Info"**, the entered information can be displayed in the **My Information** section.

## ✨ Features

* User information input form
* Full Name field
* Email Address field
* Age field
* Birthday date picker
* Phone Number field
* Address field
* Favorite Color dropdown
* Gender radio buttons
* Hobby field
* Favorite Food field
* Occupation field
* Short Bio textarea
* **Show My Info** button
* Separate section for displaying user information
* Status message area

## 🛠️ Technologies Used

* **HTML5** – Creates the structure of the webpage
* **CSS3** – Handles the design and layout
* **JavaScript** – Reads the user's input and displays the information dynamically

## 📁 Project Structure

```text
User-Info-Card/
│
├── index.html
├── style.css
└── script.js
```

### `index.html`

Contains the main structure of the User Info Card, including the form, input fields, buttons, and output section.

### `style.css`

Contains the styling for the page, including the layout, cards, form fields, buttons, and other visual elements.

### `script.js`

Handles the interaction of the page. It can read the values entered into the form and display them in the **My Information** section.

## 📝 Input Fields

The form contains the following information:

| Field          | Input Type    |
| -------------- | ------------- |
| Full Name      | Text          |
| Email Address  | Email         |
| Age            | Number        |
| Birthday       | Date          |
| Phone Number   | Text          |
| Address        | Text          |
| Favorite Color | Select        |
| Gender         | Radio Buttons |
| Hobby          | Text          |
| Favorite Food  | Text          |
| Occupation     | Text          |
| Short Bio      | Textarea      |

## 🎨 Favorite Colors

The Favorite Color dropdown includes:

* Cream
* Beige
* Brown
* Burnt Orange
* Red
* Yellow
* Green
* Blue
* Purple
* Pink
* Black
* White
* Other

## 🚻 Gender Options

The form provides three gender options:

* Male
* Female
* Other

## ▶️ How to Run

1. Download or clone the project.
2. Make sure `index.html`, `style.css`, and `script.js` are in the same folder.
3. Open `index.html` in a web browser.
4. Enter your information in the form.
5. Click **Show My Info**.
6. Your information will be displayed in the **My Information** section.

## 📋 Page Sections

### User Information

This section contains the form where the user enters their personal information.

### My Information

This section is used to display the information entered by the user.

Initially, it displays:

> Your information will appear here.

A status message area is also included below the output.

## 🎯 Purpose

This project demonstrates basic **DOM manipulation and user input handling** using HTML, CSS, and vanilla JavaScript. It is suitable as a beginner web development activity for learning how form inputs can be collected and displayed dynamically.

## 📌 Notes

* The project does not require a database.
* No external frameworks are required.
* The JavaScript functionality is handled through `script.js`.
* The form uses standard HTML input elements.
* The page is designed as a single-page application.

## 🚀 Possible Improvements

Future versions could include:

* Form validation
* Clear/Reset button
* Edit information button
* Profile picture upload
* Local storage
* Improved responsive design
* More user customization options
