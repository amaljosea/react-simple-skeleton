I started the development of the componennt by observing various previous implemntation of the loading skeeleton components in react.

I found many intresting libriaries, bewlow are those libriaries with the points noted.

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

After the initial research I started thinking about the core implementation.

- I wanted to make the api very simple for developers to understand and use.
- I want the api to be configurable in all the scenarios.

I choose to render various span elements insider our component to mimic the loading elements. Also the elements inside the loader will be using css animations to have the aimations so that they are performant and works on all devices easliy. Also I choose background position based animation so that all the elements will get the animation uniformly.

The core Loader component allows to render any struncture, it just loops throught the configuration and renders the elements, the positioniong logic can be controlled from outside of the component which can be resued by configuration.

My idea is that whenevery the app's design system is made or new components are made the structure of the loading skeleton is also decided.

So the loader structure is placed very closely with each comppoent. So that developers will not duplicate the loader structure in multiple places.
