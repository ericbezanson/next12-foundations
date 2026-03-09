## Migration Challenges 

### 1. getInitialProps for Legacy Data Fetching
**Current Implementation:** Uses getInitialProps in pages or _app.js for data fetching on both server and client.
**Next.js 15 Implementation:** Use getServerSideProps, getStaticProps, or React Server Components (RSC) for data fetching.
**Docs:** [getInitialProps](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-initial-props) | [getServerSideProps](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-server-side-props) | [getStaticProps](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props) | [React Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
**Improvement:** [filled out post migration]

### 2. Custom _document.js and Enhanced _app.js
**Current Implementation:** _document.js for custom HTML structure; _app.js for global styles and logic.
**Next.js 15 Implementation:** Use app directory layouts, template.js, and new global style conventions.
**Docs:** [_document.js](https://nextjs.org/docs/pages/building-your-application/rendering/custom-document) | [_app.js](https://nextjs.org/docs/pages/building-your-application/rendering/custom-app) | [Layouts & Templates](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts)
**Improvement:** [filled out post migration]

### 3. Dynamic Import with SSR Off
**Current Implementation:** Uses dynamic(() => import('...'), { ssr: false }) for client-only components.
**Next.js 15 Implementation:** Use "use client" directive for Client Components; dynamic import for code splitting only.
**Docs:** [Dynamic Imports](https://nextjs.org/docs/pages/building-your-application/configuring/dynamic-import) | [Client Components](https://nextjs.org/docs/app/building-your-application/rendering/client-components)
**Improvement:** [filled out post migration]

### 4. Legacy next/image Usage
**Current Implementation:** Uses old next/image with manual config.
**Next.js 15 Implementation:** Use new Image component with improved defaults and config.
**Docs:** [next/image](https://nextjs.org/docs/pages/building-your-application/configuring/images) | [Image Component (App)](https://nextjs.org/docs/app/building-your-application/configuring/images)
**Improvement:** [filled out post migration]

### 5. Custom Express Server
**Current Implementation:** Uses custom Express server for routing/middleware.
**Next.js 15 Implementation:** Use built-in routing, middleware.js, edge API routes, or server actions.
**Docs:** [Custom Server](https://nextjs.org/docs/pages/building-your-application/configuring/custom-server) | [Middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware) | [Edge API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#edge-route-handlers) | [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions)
**Improvement:** [filled out post migration]

### 6. API Routes in pages/api
**Current Implementation:** API routes defined in pages/api directory.
**Next.js 15 Implementation:** Use app/api, edge API routes, or server actions.
**Docs:** [API Routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) | [App API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) | [Edge API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#edge-route-handlers)
**Improvement:** [filled out post migration]

### 7. Multiple Data Fetching Methods
**Current Implementation:** Uses getStaticProps, getServerSideProps, and getInitialProps in pages.
**Next.js 15 Implementation:** Use RSCs and server actions for unified data fetching.
**Docs:** [getStaticProps](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props) | [getServerSideProps](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-server-side-props) | [React Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components) | [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions)
**Improvement:** [filled out post migration]

### 8. Global CSS Import in Page
**Current Implementation:** Imports global CSS in pages/components.
**Next.js 15 Implementation:** Import global CSS in layout.js or _app.js only.
**Docs:** [Global CSS](https://nextjs.org/docs/pages/building-your-application/configuring/global-styles) | [App Global Styles](https://nextjs.org/docs/app/building-your-application/configuring/global-styles)
**Improvement:** [filled out post migration]

### 9. Old Link and Router APIs
**Current Implementation:** Uses legacy next/link and next/router for navigation.
**Next.js 15 Implementation:** Use new useRouter hook and file-based routing in app directory.
**Docs:** [next/link](https://nextjs.org/docs/pages/building-your-application/routing/linking-and-navigating) | [next/router](https://nextjs.org/docs/pages/building-your-application/routing/router) | [App Navigation](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating)
**Improvement:** [filled out post migration]

### 10. Class Component with Legacy Lifecycle
**Current Implementation:** Uses React class components with lifecycle methods.
**Next.js 15 Implementation:** Refactor to function components and hooks.
**Docs:** [Class Components](https://react.dev/reference/react/Component) | [Function Components & Hooks](https://react.dev/reference/react/hooks)
**Improvement:** [filled out post migration]

---

## Final Challenge 

- **Integrate The Movie Database API**
  - Enhance the VOD app by connecting to [The Movie Database (TMDb) API](https://developer.themoviedb.org/reference/intro/getting-started) to fetch and display movie metadata on the player page. Use this integration to demonstrate key Next.js 15 (React 19) features.
  - **Steps:**
    1. Pass Movie Title from Home to Player Page: When a user selects a movie on the home page, pass the movie title (or ID) to the player page via query params or dynamic routing.
    2. Fetch Movie Metadata from TMDb: On the player page, use the TMDb API to fetch metadata (poster, description, release date, etc.) for the selected movie.
    3. Display Metadata in the Player Layout: Show the movie’s poster, title, description, and other relevant info alongside the video player.
  - **Next.js 15 Features to Showcase:**
    - [ ] React Server Components (RSC): Fetch movie metadata in an RSC and pass it to the client-side player.  
      [Docs: React Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
    - [ ] Server Actions: Use Server Actions for user interactions (e.g., submitting a rating or comment).  
      [Docs: Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions)
    - [ ] Streaming & Suspense: Use Suspense to stream metadata and show loading states.  
      [Docs: Streaming & Suspense](https://nextjs.org/docs/app/building-your-application/rendering/streaming)
    - [ ] Partial Hydration: Only hydrate the video player and interactive controls.  
      [Docs: Partial Hydration](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#partial-hydration)
    - [ ] Edge API Routes: Use an Edge API route to proxy TMDb requests for faster, region-aware data fetching.  
      [Docs: Edge API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#edge-route-handlers)
    - [ ] Client/Server Component Split: Keep the player interactive as a Client Component, with static metadata rendered server-side.  
      [Docs: Client vs Server Components](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns)
    - [ ] Optimistic UI with useOptimistic: Provide instant feedback for user actions (e.g., liking a movie) using React 19’s useOptimistic hook.  
      [Docs: useOptimistic](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions#optimistic-updates)
    - [ ] Internationalization: Fetch and display localized movie metadata using TMDb’s language support.  
      [Docs: Internationalization](https://nextjs.org/docs/app/building-your-application/configuring/internationalization)
