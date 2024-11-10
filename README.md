# Restaurant Reservation System with SymbiHelp Chatbot

This project, the **Restaurant Reservation System**, is designed to streamline the reservation process for restaurants and improve customer support. It integrates a chatbot, **SymbiHelp**, to assist users with inquiries, enhancing customer interaction with an AI-driven solution.

## Table of Contents
- [Introduction](#introduction)
- [Objectives](#objectives)
- [Features](#features)
- [System Architecture](#system-architecture)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Figma Design](#figma-design)
- [SymbiHelp Chatbot](#symbihelp-chatbot)
- [Contributing](#contributing)
- [License](#license)

## Introduction
This initiative aims to optimize the restaurant reservation experience and improve customer service using a chatbot that addresses user inquiries instantly. The **SymbiHelp Chatbot** is designed to manage common restaurant booking inquiries, making it easy for users to reserve, modify, or cancel bookings online.

## Objectives
- Build a user-friendly reservation platform for users to manage bookings.
- Integrate the SymbiHelp Chatbot for handling a range of customer inquiries regarding reservations, schedules, availability, and more.
- Improve customer service with immediate responses to common questions.

## Features
- **Online Reservations**: Users can book, modify, or cancel reservations.
- **SymbiHelp Chatbot**: An AI-driven chatbot handles frequent queries about reservations, availability, menu sorting, and more.
- **Responsive Design**: The interface is designed to work across devices.
- **Real-Time Notifications**: Notifications confirm bookings or highlight errors to improve user experience.

## System Architecture
The system is a **MERN Stack Application** with a RESTful API to handle reservations, built-in error handling, and security features for secure, reliable communication.

### Front-End
- **React**: For building UI components.
- **React Hooks**: For managing state and navigation.
- **React Router**: Enables client-side routing.
- **React Icons** and **react-scroll**: For consistent icon usage and smooth scrolling.
- **Axios**: Handles API requests.
- **React Hot Toast**: Provides feedback for user actions.

### Back-End
- **Node.js**: JavaScript runtime for backend operations.
- **Express.js**: Minimal framework for routing and middleware.
- **MongoDB**: NoSQL database for storing reservation data.
- **Mongoose**: ODM for MongoDB schema and data validation.
- **Cors** and **dotenv**: For cross-origin requests and environment variable management.

## Tech Stack
- **Frontend**: React, React Router, react-scroll, Axios, React Hot Toast
- **Backend**: Node.js, Express.js, Mongoose
- **Database**: MongoDB (hosted on MongoDB Atlas)
- **Chatbot**: BotPress
- **Design**: Figma for UI/UX design

## Installation

### Prerequisites
- Node.js
- MongoDB

### Setup

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/restaurant-reservation-system.git
    cd restaurant-reservation-system
    ```

2. **Install dependencies for both the backend and frontend:**
    ```bash
    cd backend
    npm install
    cd ../frontend
    npm install
    ```

3. **Set up environment variables:**
   - Create a `.env` file in the `backend` folder with the following variables:
     ```makefile
     MONGODB_URI=your-mongodb-uri
     PORT=5000
     FRONTEND_URL=http://localhost:3000
     ```

4. **Run the backend:**
    ```bash
    cd backend
    npm start
    ```

5. **Run the frontend:**
    ```bash
    cd frontend
    npm start
    ```

6. **The app should be running on:**
   - Backend: `http://localhost:5000`
   - Frontend: `http://localhost:3000`

## Usage
- Navigate to the homepage to view components like HeroSection, Menu, Team, and the Reservation form.
- Use the SymbiHelp Chatbot to ask about menu options, availability, and make inquiries.
- Use the Reservation form to make a reservation. Upon successful submission, the form will clear, and a confirmation message will appear.

## Figma Design
The initial design was created using Figma to visualize the website layout. You can refer to this link to view the **Figma prototype screenshots**.

## SymbiHelp Chatbot
**SymbiHelp** is a smart, AI-driven chatbot powered by **BotPress** to assist customers in real time. It utilizes natural language processing (NLP) to understand user queries, access a structured knowledge base, and provide relevant answers.

### SymbiHelp Key Features:
- **Instant Responses**: Answers FAQs about reservations, menu options, and availability.
- **Rich Knowledge Base**: Offers context-specific responses, such as sorting menus by cuisine or listing available times.
- **BotPress Integration**: NLP-based query understanding and user-friendly response generation.

## Contributing
1. **Fork the repository**
2. **Create a new branch** (`git checkout -b feature/new-feature`)
3. **Commit your changes** (`git commit -m 'Add new feature'`)
4. **Push to the branch** (`git push origin feature/new-feature`)
5. **Open a pull request**

## License
This project is licensed under the MIT License.
