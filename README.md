# Laser Tag Booking Form

## Overview

Welcome to my small project: Laser Tag Arena. The user can book a session for him and his friends with the provided form.
The project was built using ReactJS with TypeScript.
Github pages was used for the deployment. The live version is accessible through the following link: [Link](https://aleksandari01.github.io/form-with-validation/)

## Features

The application consists of a simple booking form. Upon successfully submitting the form, the user will find a summary of their booking information displayed below.

To successfully submit the form, please take note of the available fields and their respective validations outlined below. In case of any descrepancies, error messages will guide the user through the correct completion of the form.

- Firstname:

  - it is required
  - minLength: 2 characters
  - maxLength: 15 characters

- Lastname:

  - it is required
  - minLength: 2 characters
  - maxLength: 15 characters

- Email:

  - it is required
  - it must adhere to the standard email format

- Number of people:

  - it is required
  - min: 2 people at least
  - max: a maximum of 10 people

- Date for the laser tag session:

  - it is required
  - session is bookable from the following day and upwards (today and all previous days are disabled)

- Time for the laser tag session:

  - it is required
  - time bookable every hour from 08:00 - 18:00 (inclusive) for 1 full hour

- Additional comments:
  - it is optional
  - maxLength: 40 characters

## Installation and usage

To run the project locally, follow these steps:

1. Clone the repository:

```
git clone https://github.com/AleksandarI01/form-with-validation.git
```

2. Navigate to the project directory:

```
cd form-with-validation
```

3. Install dependencies:

```
npm install
```

4. After the installation is successful, run the project locally using:

```
npm run dev
```

This will start the development server, and the application is then viewable in your browser.


## 