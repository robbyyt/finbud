# Finbud

This is a sample project that uses the [finnhub](https://finnhub.io/) api to display some stock info.

You can find the project hosted here: https://superlative-tulumba-04bb41.netlify.app/

# Important Libraries used

- `Tailwind & HeadlessUI` for styling.
  - I chose to use these two because they can help quickstart an app but let you have control over the components you create rather than provide a lot of pre-made ones. Tailwind makes writing css easier, HeadlessUI makes creating some basic ui components easier.
- `React Router` - the go-to in the industry for routing in react applications, it's the obvious choice.
- `chart.js` - a charting library I had never tried before, wanted to see how it works. (I had only worked with `echarts` before)
- `date-fns` - for easier date operations.
- `zod` - also a library I was new to, I heard about it and used it to validate that the responses coming from the API respected a certain schema to avoid unexpected behaviour.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
