## For testing

The app is live at https://react-simple-skeleton-y4w1.vercel.app/

## To Run locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## My thought process

I started researching on the popular react loading skeleton components available in the internet, I was able to find many components. These are few components that inspired me.

#### [react-loading-skeleton](https://github.com/dvtng/react-loading-skeleton)

- Very popular libriary
- Use span

#### [create-content-loader](https://github.com/danilowoz/create-content-loader)

- Use svg for the elements

#### [react-skeleton-loader](https://github.com/henrykuzmick/react-skeleton-loader)

- Passing just the count might not be a good solution for our use case `<Skeleton count={5} />`

#### [React-Skeleton](https://github.com/AishwaryVishwakarma/React-Skeleton)

- They use a nested config, which might be a complex api for the component user

#### [react-native-skeleton-content](https://github.com/alexZajac/react-native-skeleton-content)

- I like the way how they allows configuration
