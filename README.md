# Demo 👉 [Optimal Recipe Blog](https://cms-blog-app-zjw-92.vercel.app/)

![Vercel](https://vercelbadge.vercel.app/api/ZJW-92/cms_blog_app)


It is a Content Management System (CMS) of showcasing different kinds of Asian and Swedish cuisine with full markdown recipes, author information and comments down blow.

## Tech Stack
- [***React.js***](https://reactjs.org)
- [***Next.js***](https://nextjs.org)
- [***graphQL***](https://graphql.org) : a query language for API
- [***hyGraph***](https://hygraph.com) : GraphQL-Native Federated Content Platform. 
- [***TailwindCSS***](https://tailwindcss.com)
- [***Scss***](https://sass-lang.com)
- [***Versel***](https://vercel.com/dashboard): cloud platform for deployment

## Setup
Run `npx create-next-app -e with-tailwindcss ./` to initialize the empty folder.
<br>
Run `npm install graphql graphql-request html-react-parser moment react-multi-carousel sass` to install other dependencies.
<br>
Run `npm run dev` to start the app.


## Issues and solutions in process of deployment:

- ` Error: error:0308010C:digital envelope routines::unsupported`
 ``` 
    at new Hash (node:internal/crypto/hash:71:19)
    at Object.createHash (node:crypto:133:10)
    at BulkUpdateDecorator.hashFactory (/vercel/path0/node_modules/next/dist/compiled/webpack/bundle5.js:138971:18)
    at BulkUpdateDecorator.update (/vercel/path0/node_modules/next/dist/compiled/webpack/bundle5.js:138872:50)
    at /vercel/path0/node_modules/next/dist/compiled/webpack/bundle5.js:59321:9
    at processTicksAndRejections (node:internal/process/task_queues:82:21)
    at runNextTicks (node:internal/process/task_queues:64:3)
    at process.processImmediate (node:internal/timers:442:9) {  
 ```

Solutions: change node version to ` "node": "16.x"` in package.json file. 

- `Error: GraphQL Error (Code: 429): ` 

Solutions: for many requests, delete some posts in hyGraph.
