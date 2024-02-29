![LICENSE](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)
![Security Status](https://img.shields.io/security-headers?label=Security&url=https%3A%2F%2Fgithub.com&style=flat-square)
![Gluten Status](https://img.shields.io/badge/Gluten-Free-green.svg)
![Eco Status](https://img.shields.io/badge/ECO-Friendly-green.svg)
[![Discord](https://discord.com/api/guilds/571393319201144843/widget.png)](https://discord.gg/dRwW4rw)

# MONICA EMPOWER

_empowerme project_

<br>

## 🌟 About

This project is designed for creating a real website, serving practical purposes. It is currently in production.

This project provides a full-stack template with a client built with React, Bootstrap, and CSS, and a server built with Express.js, connected to a MySQL database.

Site published at: https://github.com/GiedreRag/empowerme

## 🎯 Project features/goals

- Github pages
- README / [markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
- git branch
- responsive design
- mobile/tablet navigation menu
- dual language functionality with a toggle button for switching between LT (Lithuanian) and EN (English)
- active "write me a message" field. Messages go to the admin's email
- "write me a message" validations
- different pages and navigation between them
- favicon icon
- react icons

## Technologies Used

### Client:
- React ^18.2.0
- Bootstrap ^5.3.2
- React Router DOM ^^6.21.3
- React Icons ^4.12.0
- i18next ^23.7.16
- react-i18next ^14.0.0

### Server:
- Express.js ^4.18.2
- MySQL2 ^3.6.1
- Multer ^1.4.5-lts.1
- Helmet ^7.0.0
- Nodemailer ^6.9.8

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/GiedreRag/empowerme.git
    ```

2. **Install dependencies**:

    - For the main project:
        ```bash
        npm install
        ```

    - For the client:
        ```bash
        cd client
        npm install
        ```

    - For the server:
        ```bash
        cd server
        npm install
        ```

3. **Setup your database**:

    Ensure you have MySQL running and adjust the server's environment or configuration to match your setup.

## Running the Project

You can run both the client and the server in development mode using:

```bash
npm run dev
```

Once both are running, you can visit http://localhost:3000 in your browser to view the client.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Admin can:

- Get messages from the visitors

### Visitor can:

- Navigate between pages
- Send a personal message to the admin

## ⚠️ License

Distributed under the MIT License. See LICENSE.txt for more information.

## 👱 Authors

Giedre: [Github](https://github.com/GiedreRag)

## Acknowledgments

Special thanks to all libraries and tools used in this project.
