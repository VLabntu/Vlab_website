# V.Lab website

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/timlrx/tailwind-nextjs-starter-blog)

This is a [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/) Lab template, which is based on Next App directory with [React Server Component](https://nextjs.org/docs/getting-started/react-essentials#server-components) and uses [Contentlayer](https://www.contentlayer.dev/) to manage markdown content.

I created this project based on [this project](https://github.com/timlrx/tailwind-nextjs-starter-blog). This is an exceptional project, filled with innovation and creativity. I express my admiration and gratitude for the hard work of the original author.

Check out the documentation below to get started.

## Motivation

The purpose of this side project is to transform it into the official website of our undergraduate civil engineering laboratory. We are different from general laboratories, with less research content, and our main tasks are to help the department maintain computer equipment, organize teaching activities, and handle network affairs.

On the other hand, I took the Web Programming course from [Ric](https://www.ee.ntu.edu.tw/profile1.php?id=98) this semester. Although my performance in class was not very good, if I can apply what I have learned to practical applications, I think I can live up to the teacher.

The main reason for making this is to be able to set up a website without purchasing wix. This can save departmental expenses. In conclusion, thank you all.

## Features

Pages

- Header

  - Navigation Bar (on the left, includes the following links, and navigates to the corresponding page section when clicked)
    - Home
    - Services
    - Events
    - About Us
  - Logo (in the center of the page, returns to the home page when clicked)
    - Vlab (using black, tech-savvy fonts)
  - Function Bar (on the right, provides various different functions)
    - Language Switch (on the right, switch between English or Chinese)
    - Search Bar (on the right, search for the latest information)
    - Style Switch (divided into two different styles, dark and light)
    - Catbutton (unknown function, currently planning to make something like a daily fortune)

- Main Content

  - Home (show the lab's philosophy and key services)
    - Philosophy and Key Services (Goal)
    - Recent Events
  - Services (detailed list of services provided by the lab)
    - Space (provides space rental information)
    - Equipment (lists available equipment)
    - Website (provides details of website maintenance services)
    - Software Installation (introduces software installation services)
  - Events (show the events and major events held by the lab)
    - Event Timeline (displays important events in a timeline format)
    - Event Details (detailed introduction to each event)
  - About Us (introduces the lab's management team and contact information)
    - Advisor (Wu Dongyu)
    - Administrator (Zhuang Shikun)
    - Student Workers (team member introduction)
    - Space Introduction (Spaces)
    - Contact Information (including address, phone number, email)

- Footer
  - Copyright Information (copyright statement)
  - Contact Information (including email, phone number)
  - Address (the physical location of the lab, convenient for visitors to visit or contact)
  - Social Media Links (Media) (provides external links to social media platforms)
    - Facebook
    - Instagram (IG)
    - YouTube
    - github

## Quick Start Guide

1. Clone the repo

```bash
git clone https://github.com/timlrx/tailwind-nextjs-starter-blog.git
```

2. Personalize `siteMetadata.js` (site related information)
3. Modify the content security policy in `next.config.js` if you want to use
   other analytics provider or a commenting solution other than giscus.
4. Personalize `authors/default.md` (main author)
5. Modify `projectsData.ts`
6. Modify `headerNavLinks.ts` to customize navigation links
7. Add blog posts
8. Deploy on Vercel

## Installation

```bash
yarn
```

## Development

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Edit the layout in `app` or content in `data`. With live reloading, the pages auto-updates as you edit them.

## Deploy

**Vercel**  
The easiest way to deploy the template is to deploy on [Vercel](https://vercel.com). Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
