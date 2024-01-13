# Notion Clone
## Deploy Link: https://note-cyan.vercel.app/

## Overview

Welcome to the Notion Clone project, a connected workspace where your ideas, documents, and plans come together for better, faster work. This project aims to replicate the functionalities of Notion using a modern tech stack.

![Screenshot Capture - 2023-12-28 - 13-32-15](https://github.com/JyotiranjanGhibila/notion-clone/assets/107979908/b43f8c93-6590-4c25-82e3-52b1b2aaa17e)

## Features

- **Unified Workspace:** Manage your ideas, documents, and plans all in one place.
- **Rich Text Editing:** Create content with a variety of formatting options.
- **Flexible Organization:** Customize and organize your workspace to suit your needs.

![Screenshot Capture - 2023-12-28 - 13-33-58](https://github.com/JyotiranjanGhibila/notion-clone/assets/107979908/76781cbc-0eae-4811-b03f-85c76364ea4c)

## User Authentication

- **GitHub and Google Login:** Securely log in using your GitHub or Google account.
- **User Avatar:** Display the user's avatar in the navbar upon successful login.
![Screenshot Capture - 2023-12-28 - 13-33-20](https://github.com/JyotiranjanGhibila/notion-clone/assets/107979908/db765ba6-4ada-4887-bb17-9350a0986a2a)
## Workspace

- **Private Route:** Access the `enterNotion` route for a private workspace after login.
- **Search:** Easily find notes and documents using the search functionality.
- **Add Note:** Create new notes with dynamic nested structures.
- **User Settings:** Customize your workspace settings as needed.
- **Trash Page:** Safely delete and restore notes from the trash.
![Screenshot Capture - 2023-12-28 - 13-34-32](https://github.com/JyotiranjanGhibila/notion-clone/assets/107979908/9820e04c-cdea-4e06-973d-ba31f5cf753a)

## Note Creation

- **Dynamic Notes:** Create dynamic notes with nested structures.
- **Icon and Banner:** Add icons and banners to notes with advanced file storage using Edge Store.
- **Advanced File Storage:** Efficiently manage file storage for icons and banners.

## Publish Component

The `Publish` component is a powerful feature that enhances collaboration by allowing users to share specific notes with others while providing control over their visibility. It seamlessly integrates into your note components, providing a straightforward way to make your content accessible on the web.

### Features

- **Publish:** Share your notes with a wider audience by making them live on the web. This feature is perfect for showcasing your work, collaborating with team members, or sharing information with others.

- **Unpublish:** Maintain control over your content accessibility. When you no longer want a note to be public, simply use the "Unpublish" feature to disable access. This is useful for maintaining privacy or restricting access after sharing.

- **Copy URL:** Share your live note effortlessly by copying its URL. The "Copy URL" feature streamlines the process of sharing your content with others, ensuring quick and easy dissemination.

- **Status Indicator:** Stay informed about the publication status of your notes through a visual indicator. Whether a note is published or unpublished, the `Publish` component provides a clear status indicator for at-a-glance awareness.

## Custom Hooks

- **UseHooks-ts:** Leverage a collection of custom React hooks written in TypeScript for enhanced functionality.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
# backend for local
npx convex dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
