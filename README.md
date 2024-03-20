# Screenboard

Next.js project using Contentful (CMS) and Ably (WebSocket)

To be displayed on HD TV display in portrait (1920x1080 - 9:16 ratio)

Uses Ably to update the screen without refreshing the browser whenever Contentful emits an App Event Post request to https://&#60;site-url&#62;/publish

## Getting Started

First, run install

```bash
npm install
```

<br/>

Create .env.local file and update values

```bash
SITE_ENV=development
ABLY_API_KEY=<ably-api-key>
API_ROOT=http://localhost:3000/
CONTENTFUL_SPACE_ID=<contentful-space>
CONTENTFUL_ACCESS_TOKEN=<contentful-access-token>
CONTENTFUL_PREVIEW_ACCESS_TOKEN=<contentful-preview-access-token>
```

<br/>
Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

<br/>

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
