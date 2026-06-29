# Ciclon Rapido Backend Note

## Main Entry
- server.ts = start express server, connect middleware, register routes

## API Routes
- /api/posts = post system
- /api/drivers = driver system
- /api/cars = car system
- /api/auth = login/admin system

## Folder Meaning
- config = database/cloudinary config
- models = MongoDB schemas
- routes = API paths
- controllers = actual logic
- middleware = auth/upload/checking functions

## Request Flow
Frontend → server.ts → routes → controllers → models → MongoDB → Cloudinary