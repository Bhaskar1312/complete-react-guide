# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


> npm i
> cd backend
> npm i
> npm start
New terminal
> npm run dev

When switching to another tab and coming back, we want to refresh lets say
caching once fetched is cached, reused again and fetch the new data in background 
> npm i @tanstack/react-query
tanstack V5 (@beta if v5 is not available)

// No QueryClient set, use QueryClientProvider to set one
// wrap useQuery with special provider component by tanstack lib
// and provide QueryClient 
// Notice httpRequest /events sent by browser when switching tab/window
// try adding changes to backend events.json file, and notice request browser
// also, try throttling and coming to see that results are instantly available bcoz of caching
(images still need to refetched, images are fetched and cached by browser potentially, react-query is not involved)
// staleTime param to how long to wait before such event, default is 0 ms.

// react-query sends default query param to useQuery, hence recentEvents is getting [object, object]

//  react-query sends  {queryKey: Array(1), meta: undefined} // signal: AbortSignal abort req if we leave page
