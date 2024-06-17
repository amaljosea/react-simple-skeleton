I began developing the component by reviewing various previous implementations of loading skeleton components in React. During my research, I discovered several interesting libraries, which I noted down:

#### [react-loading-skeleton](https://github.com/dvtng/react-loading-skeleton)

- Very popular library
- Uses `span` elements

#### [create-content-loader](https://github.com/danilowoz/create-content-loader)

- Uses `svg` elements

#### [react-skeleton-loader](https://github.com/henrykuzmick/react-skeleton-loader)

- Passing just the count might not be suitable for our use case (`<Skeleton count={5} />`)

#### [React-Skeleton](https://github.com/AishwaryVishwakarma/React-Skeleton)

- Uses a nested config, which might be too complex for users of the component

#### [react-native-skeleton-content](https://github.com/alexZajac/react-native-skeleton-content)

- I appreciate how it allows for flexible configuration

After this initial research, I started considering the core implementation of our component.

- I aimed to make the API very simple for developers to understand and use.
- I wanted the API to be configurable for various scenarios.

I decided to render various `span` elements within our component to mimic the loading elements. The elements inside the loader will use CSS animations to ensure performance and compatibility across all devices. By using background position-based animation, all elements will receive a uniform animation effect.

The core Loader component can render any structure by looping through the configuration and rendering the elements. The positioning logic can be controlled externally, making it reusable through configuration.

My idea is that whenever the app's design system or new components are developed, the structure of the loading skeleton should also be defined. This way, the loader structure is closely aligned with each component, preventing developers from duplicating the loader structure in multiple places.
