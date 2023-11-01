# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Laser Tag Booking Form

## Overview

Welcome to my small project: Laser Tag Arena. The user can book a session for him and his friends with the provided form.
The project was built using ReactJS with TypeScript.
Github pages was used for the deployment. The live version is accessible through the following link: [Link](https://aleksandari01.github.io/form-with-validation/)

## Features

The application consists of a simple booking for with the following fields and their validations:

- Firstname

  - it is required
  - minLength: 2 characters
  - maxLength: 15 characters

- Lastname

  - it is required
  - minLength: 2 characters
  - maxLength: 15 characters

- Email
  - it is required
  - it must adhere to the standard email format
