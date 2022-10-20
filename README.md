<div align="center">

  <img src="https://isamoreira.com/wp-content/uploads/2020/12/Spotify-logo-2048x616.png" alt="logo" width="400" height="auto" />
  
  <h1>Spotify Clone with React.JS</h1>
  
  <p>
  Spotify 2.0 with NEXT.JS (Middleware, Spotify API, Tailwind, NextAuth, Recoil)
  </p>
  
  
<!-- Badges -->
<a href="https://spotify-clone-ten-psi.vercel.app" target="_blank">![](https://img.shields.io/website-up-down-green-red/http/monip.org.svg)</a>
![](https://img.shields.io/badge/Maintained-Yes-indigo)
![](https://img.shields.io/github/forks/SashenJayathilaka/Spotify-Clone.svg)
![](https://img.shields.io/github/stars/SashenJayathilaka/Spotify-Clone.svg)
![](https://img.shields.io/github/issues/SashenJayathilaka/Spotify-Clone)
![](https://img.shields.io/github/last-commit/SashenJayathilaka/Spotify-Clone)

   
<h4>
      <a href="https://spotify-clone-ten-psi.vercel.app">View Demo</a>
  <span> · </span>
    <a href="https://github.com/SashenJayathilaka/Spotify-Clone/blob/master/README.md">Documentation</a>
  <span> · </span>
    <a href="https://github.com/SashenJayathilaka/Spotify-Clone/issues">Report Bug</a>
  <span> · </span>
    <a href="https://github.com/SashenJayathilaka/Spotify-Clone/issues">Request Feature</a>
  </h4>
</div>

<br />

<!-- Table of Contents -->
## :notebook_with_decorative_cover: Table of Contents

- [About the Project](#star2-about-the-project)
  * [Screenshots](#camera-screenshots)
  * [Tech Stack](#space_invader-tech-stack)
  * [Environment Variables](#key-environment-variables)
- [Getting Started](#toolbox-getting-started)
  * [Prerequisites](#bangbang-prerequisites)
  * [Installation](#gear-installation)
  * [Run Locally](#running-run-locally)
  * [Deployment](#triangular_flag_on_post-deployment)
- [Contact](#handshake-contact)

<!-- About the Project -->
## :star2: About the Project

<!-- Screenshots -->

### :camera: Screenshots


<div align="center">
<a href="https://spotify-clone-ten-psi.vercel.app" target="_blank"><img  src='https://user-images.githubusercontent.com/99184393/196680210-b20523fe-3c4e-4568-8c25-3c3dcb5e6bd1.png' alt='image'/></a>
</div>


## <a href="https://spotify-clone-ten-psi.vercel.app" target="_blank">LIVE DEMO 💥</a>

![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)
![forthebadge](https://forthebadge.com/images/badges/for-you.svg)
![forthebadge](https://forthebadge.com/images/badges/powered-by-coffee.svg)

### :space_invader: Tech Stack

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://#/">Javascript</a></li>
    <li><a href="https://nextjs.org/">Next.js</a></li>
    <li><a href="https://reactjs.org/">React.js</a></li>
    <li><a href="https://tailwindcss.com/">TailwindCSS</a></li>
  </ul>
</details>

<details>
<summary>Api</summary>
  <ul>
    <li><a href="https://developer.spotify.com">Spotify for Developers</a></li>
  </ul>
</details>
<br />

<table>
    <tr>
        <td>
<a href="#"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="" width="30" height="30" /></a>
        </td>
                        <td>
<a href="#"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="Google" width="30" height="30" /></a>
        </td>
                        <td>
<a href="#"><img src="https://user-images.githubusercontent.com/99184393/180462270-ea4a249c-627c-4479-9431-5c3fd25454c4.png" alt="" width="30" height="30" /></a>
        </td>
                        <td>
<a href="#"><img src="https://raw.githubusercontent.com/atulmy/oauth/master/web/public/images/social/google.svg" alt="" width="30" height="30" /></a>
        </td>
                                <td>
<a href="#"><img src="https://raw.githubusercontent.com/atulmy/oauth/master/web/public/images/tech/github.svg" alt="" width="30" height="30" /></a>
        </td>
                                <td>
<a href="#"><img src="https://raw.githubusercontent.com/atulmy/oauth/master/web/public/images/other/spotify.svg" alt="" width="30" height="30" /></a>
        </td>
    </tr>
</table>

## :toolbox: Getting Started

### :bangbang: Prerequisites

- Sign up for a Spotify for Developer account <a href='https://developer.spotify.com'>HERE</a>
- Install Node JS in your computer <a href='https://nodejs.org/en/'>HERE</a>

<!-- Env Variables -->

### :key: Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NEXT_PUBLIC_CLIENT_SECRET`

`NEXT_PUBLIC_CLIENT_ID`

`NEXT_PUBLIC_CLIENT_SECRET`

### :gear: Installation

Install my-project with npm

```
npx create-next-app spotify_clone
```

```
cd spotify_clone
```

Install dependencies

### :test_tube: Install Tailwind CSS with Next.js

#### Install Tailwind CSS

Install tailwindcss and its peer dependencies via npm, and then run the init command to generate both `tailwind.config.js` and `postcss.config.js`.

```
npm install -D tailwindcss postcss autoprefixer
```

```
npx tailwindcss init -p
```

#### Configure your template paths

Add the paths to all of your template files in your `tailwind.config.js` file.
<br>

```
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

#### Add the Tailwind directives to your CSS

Add the `@tailwind` directives for each of Tailwind’s layers to your `./styles/globals.css` file.

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Install dependencies

<a href="https://github.com/SashenJayathilaka/Spotify-Clone/blob/master/package.json" target="_blank">🔶 Other Dependency Info</a>

<!-- Run Locally -->

### :running: Run Locally

Clone the project

```bash
  git clone https://github.com/SashenJayathilaka/Spotify-Clone.git
```

Install dependencies
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

```bash
  npm install
```
## Getting Started

Start the server
First, run the development server:

```bash
  npm run dev
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

<!-- Deployment -->

### :triangular_flag_on_post: Deployment

To deploy this project run

##### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## :handshake: Contact

Your Name - [@twitter_handle](https://twitter.com/SashenHasinduJ) - sashenjayathilaka95@gmail.com

Project Link: [https://github.com/SashenJayathilaka/Spotify-Clone.git](https://github.com/SashenJayathilaka/Spotify-Clone.git)
