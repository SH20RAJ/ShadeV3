# Shade - All in One Social Media

<p align="center">
<img src="https://shade.sh20raj.com/logo.png" alt="Shade Social Media" />
</p>


![GitHub top language](https://img.shields.io/github/languages/top/SH20RAJ/ShadeV3?style=flat-square) ![GitHub issues](https://img.shields.io/github/issues/SH20RAJ/ShadeV3?style=flat-square) ![GitHub](https://img.shields.io/github/license/SH20RAJ/ShadeV3?style=flat-square) ![GitHub last commit](https://img.shields.io/github/last-commit/SH20RAJ/ShadeV3?style=flat-square) [![Visitors](https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2FSH20RAJ%2FShadeV3&labelColor=%23d9e3f0&countColor=%23f47373&style=flat)](https://visitorbadge.io/status?path=https%3A%2F%2Fgithub.com%2FSH20RAJ%2FShadeV3)

Welcome to the official repository of **Shade**, your new favorite all-in-one social media platform where you can connect, share, and express yourself with the world. Whether you’re posting text updates, sharing videos, or casting votes in polls, Shade is your go-to place. Explore [shade.sh20raj.com](http://shade.sh20raj.com) and start your journey with us!

### 🚀 Features

- **Various Content Types**: Share content in multiple formats: videos, images, text, audio, polls, games, and articles.
- **Privacy Settings**: Control the visibility of your posts with options like public, private, and unlisted.
- **Reactions**: Engage with content through diverse reactions: like, love, haha, wow, sad, angry, and dislike.
- **Robust User Profiles**: Customize your profile with a bio, avatar, and cover photo.
- **Real-time Interactions**: Follow your favorite creators, comment on posts, and like what resonates with you.
- **Messaging**: Stay connected with direct messages between users.
- **Authentication and Security**: Integrated with NextAuth.js for secure and flexible user authentication using Google and GitHub OAuth providers. See `.env.example` for required secrets configuration.

### 🛠 Tech Stack

- **Frontend**: Next.js - A React framework for production.
- **Backend**: Prisma Client JS - Next-generation Node.js and TypeScript ORM for MySQL.
- **Database**: MySQL - Robust, reliable, and scalable SQL database.
- **Authentication**: NextAuth.js for OAuth with GitHub and Google.

### 📦 Installation

To get Shade up and running locally, follow these steps:

1. **Clone the repository**

    ```bash
    git clone https://github.com/SH20RAJ/ShadeV3.git
    cd ShadeV3
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Set up your MySQL database**
    
    - Ensure MySQL is installed and running on your machine.
    - Create a new database named `shade`.
    - Update the `.env` file with your `DATABASE_URL`, for example:
      ```plaintext
      DATABASE_URL="mysql://USERNAME:PASSWORD@HOST:PORT/shade"
      ```

4. **Run migrations**

    ```bash
    npx prisma migrate dev
    ```

5. **Start the development server**

    ```bash
    npm run dev
    ```

    This will start the server at `localhost:3000`.

### 📚 Documentation

For detailed documentation on the project's structure and API endpoints, refer to the [Docs](https://github.com/SH20RAJ/ShadeV3/wiki) section of the GitHub repository.

### 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

### 💬 Contact

**Shade Social Media** - [Visit us!](http://shade.sh20raj.com)

**Twitter**: [@sh20raj](https://twitter.com/sh20raj)
**GitHub Repository**: [SH20RAJ/ShadeV3](https://github.com/SH20RAJ/ShadeV3)

### 📢 Engage with Us

- **Create Issues**: If you find a bug or have a feature request, feel free to create an issue.
- **Join Discussions**: Participate in discussions and help us improve.
- **Access Wiki**: For comprehensive guides and documentation, visit our wiki.
- **Request Features**: Have an idea? Let us know and it could be part of Shade!

🌟 Happy sharing through Shade, your all-in-one platform to connect, share, and express freely! 🌟