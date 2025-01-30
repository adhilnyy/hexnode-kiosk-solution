# Hexnode Kiosk Solution Replication

This project replicates the Hexnode Kiosk Solution page using React. The implementation focuses on layout replication, responsive design, interactivity, accessibility, and performance optimization.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Challenges Faced](#Challenges-Faced)


## Technologies Used

- React
- Vite
- Tailwind CSS
- JavaScript
- HTML
- CSS

## Features

- Responsive layout that adapts to different screen sizes.
- Interactive tabs showcasing different kiosk modes.
- Accessibility enhancements using ARIA attributes.
- Form handling for user input with validation and error messaging.
- Smooth transitions and animations for a better user experience.

## Setup Instructions

To set up and run this project locally, follow these steps:

1. **Clone the repository:**

   git clone https://github.com/adhilnyy/hexnode-kiosk-solution.git

2. **Navigate to the project directory:**

    cd hexnode-kiosk-solution

3. **Install the dependencies & Start the development server:**

    npm install
    npm run dev


## Usage

Once the server is running, you can interact with the application through the browser. The main features include:

    Kiosk Modes: Click on the tabs to view different kiosk modes and their unique features.
    Form Submission: Enter your email in the form and submit to see the validation and error messages.
    Responsive Design: Resize the browser window to see how the layout adapts to different screen sizes.
    Dynamic Data Handling: I created a JSON structure to manage large data sets, mapping through the desired divs or buttons. This approach avoids repetition in the code, making it easier to maintain. It also allows for the addition of new items or changes to existing items seamlessly.


## Challenges Faced
While cloning the Hexnode Kiosk Solution website, I encountered several challenges:

    - Finding Styles: I had to inspect elements to find appropriate padding, margin, image sizes, and responsive adjustments. This process was more time-consuming compared to using design tools like Figma, as it involved trial and error to achieve the desired look.
    - Responsiveness: Ensuring that the layout works seamlessly across different screen sizes required careful testing and adjustments.
    - Tailwind CSS Configuration: Tailwind CSS v4 introduced significant updates compared to v3, which caused issues with configuration. However, once I understood the new setup, it worked flawlessly.
