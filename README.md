<div align='center'>
  <img src='./public/img/icon-192.png' width='80' />
  
  <h1 align='center' >
    Next.js Boilerplate
  </h1>
 </div>

<h4 align="center">
  A boilerplate to develop front-end applications with Next.js and more!
</h4>

<p align="center">
  <img alt="Repo's top languages" src="https://img.shields.io/static/v1?label=Main%20technologies&message=React%2FNext.js%2FTypeScript&style=for-the-badge&color=f062c0&labelColor=06092b">
</p>

<p align="center">
  <a href="#how-to-use">How to use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Used Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#features">Features</a>
</p>

<h2 id="how-to-use" name="how-to-use">
  :arrow_forward: How to use
</h2>

To use this boilerplate, you can create a github repository using this as a template, or you can run the following command on your terminal (assuming you have [Yarn](https://yarnpkg.com/) or [NPM](https://www.npmjs.com/))
```
# Create the project with yarn
$ yarn create next-app --example https://github.com/TiagoDiass/nextjs-boilerplate

# OR
# Create the project with npm
$ npm create-next-app --example https://github.com/TiagoDiass/nextjs-boilerplate
```


<h2 id="techonologies" name="technologies">
  :rocket: Used Technologies
</h2>

- [Next.js](https://nextjs.org/)- Next.js is a framework built on top of React.
- [TypeScript](https://www.typescriptlang.org/) - Typescript is a superset of the common JavaScript. With that, we can type and maintain our code easier.
- [Styled Components](https://styled-components.com/) - Styled components is a CSS-in-JS library.
- [React Testing Library](https://testing-library.com/) - React Testing Library is a library that allows us to create unit and integration tests of React components.
- [Storybook](https://storybook.js.org/) - Storybook is an open source tool for building UI components and pages in isolation. It streamlines UI development, testing, and documentation.
- [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) - With ESLint and Prettier, we can improve our code quality by linting and auto formating it.

<h2 id="features" name="features">
  :clipboard: Features
</h2>

- Theme configuration with styled-components
- Linting and code formatting with ESLint and Prettier
- Tests
- Standarized commits
- Storybook configuration to write stories of your components
- PWA configuration
- Components files generation <br>
  To generate components file, just run the following command (you can use npm instead of yarn if you want) <br> `yarn generate component-name` <br>
  for example:
  `yarn generate Button`
  <br> and then these four files will be generated with pre-written content:
  - `src/components/Button.tsx`
  - `src/components/Button.styles.ts`
  - `src/components/Button.test.tsx`
  - `src/components/Button.stories.tsx`
