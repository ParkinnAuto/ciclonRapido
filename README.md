# Ciclón Rápido Official Website

Official full-stack website for **Ciclón Rápido**, a racing team website built to showcase team information, gallery posts, cars, drivers, sponsors, and admin-managed content.

## Live Website

https://ciclonrapido.vercel.app

## Tech Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS
* Vercel

### Backend

* Node.js
* Express.js
* TypeScript
* MongoDB Atlas
* Mongoose
* JWT Authentication
* Cloudinary
* Render

## Features

* Public homepage with hero section
* Gallery page with image posts
* Cars and drivers pages
* Sponsors page
* Admin login system
* Admin dashboard
* Create, edit, and delete posts
* Image upload with Cloudinary
* MongoDB Atlas database integration
* Protected admin API routes with JWT

## Project Structure

```txt
ciclonRapido/
├─ client/   # Next.js frontend
├─ server/   # Express backend
└─ .gitignore
```

## Environment Variables

### Frontend

```env
NEXT_PUBLIC_API_URL=your_backend_api_url
```

### Backend

```env
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
NODE_ENV=production
```

## Deployment

* Frontend deployed on **Vercel**
* Backend deployed on **Render**
* Database hosted on **MongoDB Atlas**
* Images hosted on **Cloudinary**

## Author

Parkin Arsanamanee
