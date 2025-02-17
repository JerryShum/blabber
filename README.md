![Blabber Banner](public/readme/blabber_banner.png)

# Table of Contents
<!-- TOC start (generated with https://github.com/derlin/bitdowntoc) -->

- [Blabber](#blabber)
   * [Technologies & Skills Learned](#technologies-skills-learned)
   * [Key Features](#key-features)
   * [Development Setup](#development-setup)
   * [What I Learned](#what-i-learned)
   * [Future Improvements](#future-improvements)
   * [Screenshots](#screenshots)
      + [Read Blurb Page](#read-blurb-page)
      + [Homepage](#homepage)
      + [Explore Page](#explore-page)
      + [About Page](#about-page)

<!-- TOC end -->

<!-- TOC --><a name="blabber"></a>
# Blabber

A modern blogging platform built with Next.js that allows users to share their thoughts and stories.

<!-- TOC --><a name="technologies-skills-learned"></a>
## Technologies & Skills Learned

- **Next.js 15** - App Router, Server Components, and Server Actions
- **Authentication** - Implemented user authentication using auth.js along with some forms of session management
- **Database Management** - Used Prisma ORM with SQLite database
- **Schema Validation** - Implemented Zod for type-safe form validation
- **Modern UI/UX** - Built responsive interfaces using TailwindCSS
- **TypeScript** - Leveraged strong typing for better code reliability
- **Migrations** - Managed database schema changes through Prisma migrations
- **Content Management** - Built features for creating and managing blog posts with titles, descriptions, and estimated read times

<!-- TOC --><a name="key-features"></a>
## Key Features

- User authentication
- Blog post creation with rich content support
- Estimated reading time calculation
- Responsive design
- Type-safe form submissions
- Dark mode support

<!-- TOC --><a name="development-setup"></a>
## Development Setup

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Setup the database and run migrations:

```bash
npx prisma migrate dev
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:3000`
6. Have fun!

<!-- TOC --><a name="what-i-learned"></a>
## What I Learned

Through Blabber, I gained practical experience with:

- **Next.js 15** - I learned how to use the new features of Next.js 15, including the App Router, Server Components, and Server Actions.
- **Authentication** - I implemented user authentication using auth.js, which allowed me to understand the basics of user authentication and session management.
- **Database Management** - I used Prisma ORM with SQLite to manage the database schema and perform CRUD operations.
- **Schema Validation** - I learned how to use Zod for type-safe form validation, ensuring that user input is validated before being processed.
- **Modern UI/UX** - I built responsive interfaces using TailwindCSS, enhancing the overall user experience.
- **TypeScript** - I leveraged strong typing for better code reliability and maintainability.
- **Content Management** - I built features for creating and managing blog posts, including titles, descriptions, and estimated read times.

<!-- TOC --><a name="future-improvements"></a>
## Future Improvements

- **User Profiles** - Implement user profiles to allow users to customize their profiles and manage their blogs.
- **Commenting System** - Add a commenting system to allow users to engage with blog posts and discussions.
- **Search Functionality** - Implement a search functionality to allow users to find specific blog posts.
- **Analytics** - Add analytics to track user engagement and blog post performance.

<!-- TOC --><a name="screenshots"></a>
## Screenshots

<!-- TOC --><a name="read-blurb-page"></a>
### Read Blurb Page

<table>
  <tr>
    <td><img src="public/readme/blabber_blurb_fullsize.png" width="600"></td>
    <td><img src="public/readme/blabber_blurb_mobile.png" width="200"></td>
  </tr>
  <tr>
    <td align="center"><em>Desktop View</em></td>
    <td align="center"><em>Mobile View</em></td>
  </tr>
</table>

<!-- TOC --><a name="homepage"></a>
### Homepage

<table>
  <tr>
    <td><img src="public/readme/blabber_home_fullsize.png" width="600"></td>
    <td><img src="public/readme/blabber_home_mobile.png" width="200"></td>
  </tr>
  <tr>
    <td align="center"><em>Desktop View</em></td>
    <td align="center"><em>Mobile View</em></td>
  </tr>
</table>

<!-- TOC --><a name="explore-page"></a>
### Explore Page

<table>
  <tr>
    <td><img src="public/readme/blabber_explore_fullsize.png" width="600"></td>
    <td><img src="public/readme/blabber_explore_mobile.png" width="200"></td>
  </tr>
  <tr>
    <td align="center"><em>Desktop View</em></td>
    <td align="center"><em>Mobile View</em></td>
  </tr>
</table>

<!-- TOC --><a name="about-page"></a>
### About Page

<table>
  <tr>
    <td><img src="public/readme/blabber_about_fullsize.png" width="600"></td>
    <td><img src="public/readme/blabber_about_mobile.png" width="200"></td>
  </tr>
  <tr>
    <td align="center"><em>Desktop View</em></td>
    <td align="center"><em>Mobile View</em></td>
  </tr>
</table>


