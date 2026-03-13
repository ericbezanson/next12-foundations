## Migration Challenges 

### 1. Multiple Data Fetching Methods
**Current Implementation:** Uses getInitialProps in pages or _app.js for data fetching on both server and client.
**Next.js 15 Implementation:** Use getServerSideProps, getStaticProps, or React Server Components (RSC) for data fetching.
**Docs:** [getInitialProps](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-initial-props) | [getServerSideProps](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-server-side-props) | [getStaticProps](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props) | [React Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
**Improvement:** 
In next 15 we have unified colocated data fetching meaning all data fetching happens inside the react server components without the need for seperate functions like getStaticProps, getInitialProps etc.

### 2. Custom _document.js and Enhanced _app.js
**Current Implementation:** _document.js for custom HTML structure; _app.js for global styles and logic.
**Next.js 15 Implementation:** Use app directory layouts, template.js, and new global style conventions.
**Docs:** [_document.js](https://nextjs.org/docs/pages/building-your-application/rendering/custom-document) | [_app.js](https://nextjs.org/docs/pages/building-your-application/rendering/custom-app) | [Layouts & Templates](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts)
**Improvement:** 

by replacing _document.js with app/head.js and app/layout.js our base head tag and body tags are now react components that can use react features like composition, context and props. Additionally we can have multiple layout.js files for different routes to add a more bespoke layout based on the route if required. 

### 3. Dynamic Import with SSR Off
**Current Implementation:** Uses dynamic(() => import('...'), { ssr: false }) for client-only components.
**Next.js 15 Implementation:** Use "use client" directive for Client Components; dynamic import for code splitting only.
**Docs:** [Dynamic Imports](https://nextjs.org/docs/pages/building-your-application/configuring/dynamic-import) | [Client Components](https://nextjs.org/docs/app/building-your-application/rendering/client-components)
**Improvement:** 
In next15 dynamic imports are no longer needed for SSR control, only for code splitting. all components by default are now RSC which allows us to keep our client side components (identified via tha 'use client' directive) much smaller. reducing bundle sizes.

### 4. Legacy next/image Usage
**Current Implementation:** Uses old next/image with manual config.
**Next.js 15 Implementation:** Use new Image component with improved defaults and config.
**Docs:** [next/image](https://nextjs.org/docs/pages/building-your-application/configuring/images) | [Image Component (App)](https://nextjs.org/docs/app/building-your-application/configuring/images)
**Improvement:** 
next15 Image works seemlessly between SSR and CSR, with some better QOL features like the sizes prop. NOTE: web based images must have their url in the image config to be allowed.

### 5. Custom Express Server / API Routes in pages/api
**Current Implementation:** Uses custom Express server for routing/middleware.
**Next.js 15 Implementation:** Use built-in routing, middleware.js, edge API routes, or server actions.
**Docs:** [Custom Server](https://nextjs.org/docs/pages/building-your-application/configuring/custom-server) | [Middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware) | [Edge API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#edge-route-handlers) | [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions)
**Improvement:** 
Next 15 no longer needs express to fill the gaps with added features like file-based routes, route-specific middleware with middleware.js, edge api routes for low latency api logic, sever actions to run serverside logic from client components and custom headers/redirects/rewrites. In this app its not really used but it can be seen in action at /api/bees

### 6. Global CSS Import in Page
**Current Implementation:** Imports global CSS in pages/components.
**Next.js 15 Implementation:** Import global CSS in layout.js or _app.js only.
**Docs:** [Global CSS](https://nextjs.org/docs/pages/building-your-application/configuring/global-styles) | [App Global Styles](https://nextjs.org/docs/app/building-your-application/configuring/global-styles)
**Improvement:** 
in next 15 we can use a custom layout.js file to import global styles and provide a shared layout with custom css modules colocated with the components or pages they style

### 7. Old Link and Router APIs
**Current Implementation:** Uses legacy next/link and next/router for navigation.
**Next.js 15 Implementation:** Use new useRouter hook and file-based routing in app directory.
**Docs:** [next/link](https://nextjs.org/docs/pages/building-your-application/routing/linking-and-navigating) | [next/router](https://nextjs.org/docs/pages/building-your-application/routing/router) | [App Navigation](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating)
**Improvement:** 
In next 15 we can use file-system based routing which is much easier as you no longer need manual route definitions. useRouter also provides imperative naviagation and router actions in client components.

### 8. Class Component with Legacy Lifecycle
**Current Implementation:** Uses React class components with lifecycle methods.
**Next.js 15 Implementation:** Refactor to function components and hooks.
**Docs:** [Class Components](https://react.dev/reference/react/Component) | [Function Components & Hooks](https://react.dev/reference/react/hooks)
**Improvement:** 

the switch to functional components and hooks over class components and lifecycle methods leads to cleaner more maintainable code. 

Reduced Bundle Size: Class components require more code for the browser to parse. Functional components are smaller and "minifier-friendly."

The "This" Problem: You no longer have to worry about this being undefined in your event handlers or binding methods in the constructor.

React Compiler Ready: Next.js 15 introduces the React Compiler, which automatically optimizes functional components for performance. It struggles to optimize old Class components.

Async/Await Support: In the App Router, your page could look like this:

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
