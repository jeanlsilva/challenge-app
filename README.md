# Challenge App

## Coding challenge for the Full Stack Developer role at Stafi

## Overview

The project consists of a basic user CRUD, where it is possible to list users and their respective tasks,
as well as creating new users and adding as many tasks as needed for each of them.

The project was built with Next.js and uses Tailwind CSS for styling. It was also added UI components from the Shadcn/ui
library, like tables, drawers, popovers and tooltips, properly customized to satisfy the layout appealing.

For implementing and validating forms, it was used React-hook-form along with Zod. It was also added two different contexts,
one for user data and other for task data, according to the project requirements. State management was implemented with Zustand, although it was not actually used at this step of the development, it might be used when more features are added.

The data fetching and mutations were implemented with React Query.

On the backend, the project uses the App Route Handling from Next.js along with Prisma ORM. The database used was MongoDB.

## Next Steps

For the next steps of the project development, one must add the feature to delete users, as well as updating tasks information. In the context perspective, one must implement authentication to separate public and private APIs and pages,
ideally using Clerk.