# Next.js Routing Practice

A small Next.js 16 (App Router, TypeScript 7, Tailwind CSS 4; Node 24 LTS) app for practicing routing.

## Routes

| Route | Description |
| --- | --- |
| `/` | Home page with links to all routes |
| `/products` | Lists any query-string params (`?a=1&b=2`) via `searchParams` |
| `/products/[category_name]` | Dynamic category page |
| `/products/[category_name]/[product_id]` | Nested dynamic product page |
| `/users` | User table; `?color=red` sets the text colour |
| `/users/[user_id]` | User detail (valid ids 1-10, otherwise custom not-found) |
| `/users/[user_id]/photos` | Photo collection |
| `/users/[user_id]/photos/[photos_id]` | Single photo |

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```
