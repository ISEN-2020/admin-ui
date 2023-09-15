This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
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

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## API Response expected from BookManagement

### Method : GET `https../api/getBooks`

```json 
{
  "books": [
    {
      "name": "La vie de Clowish",
      "author": "toto",
      "book_type": "xxx",
      "description": "Clovis la pute",
      "publishDate": "27/01/2000",
      "quantity": 1
    },
    {
      "name": "ThomasLPB",
      "author": "toto",
      "book_type": "xxx",
      "description": "Thomas la chienne",
      "publishDate": "25/05/2018",
      "quantity": 2
    },
    {
      "name": "Corentin le lapin",
      "author": "toto",
      "book_type": "xxx",
      "description": "Le petit lapin de Corentin",
      "publishDate": "19/08/2016",
      "quantity": 3
    }
  ]
}
```

## API request for bookManagement

### Method : POST `https../api/addBook`

```json
{
  "book": {
    "name": "La vie de Clowish",
    "author": "toto",
    "book_type": "xxx",
    "description": "Clovis la pute",
    "publishDate": "27/01/2000",
    "quantity": 3
  }
}
```

### Method : PUT `https../api/updateBook`

```json
{
  "book": {
    "name": "La vie de Clowish",
    "author": "toto",
    "book_type": "xxx",
    "description": "Clovis la pute",
    "publishDate": "27/01/2000",
    "quantity": 2
  }
}
```

### Method : DELETE `https../api/deleteBook`

```json
{
  "book": {
    "name": "La vie de Clowish",
    "author": "toto",
    "book_type": "xxx",
    "description": "Clovis la pute",
    "publishDate": "27/01/2000",
    "quantity": 1
  }
}
```
## API request for Lending Management

### Method : POST `https../api/lendBook`

```json
{
  "book": {
    "name": "La vie de Clowish",
    "author": "toto",
    "book_type": "xxx",
    "description": "Clovis la pute",
    "publishDate": "27/01/2000",
    "quantity": 3,
    "rentDate": "09/09/2022",
    "rentalExpirationDate": "20/09/2022"
  }
}
```

### Method : DELETE `https../api/returnBook`

```json
{
  "book": {
    "name": "La vie de Clowish",
    "author": "toto",
    "book_type": "xxx",
    "description": "Clovis la pute",
    "publishDate": "27/01/2000",
    "quantity": 3,
    "rentDate": "09/09/2022",
    "rentalExpirationDate": "20/09/2022"
  }
}
```

## API request for User Management

### Method : POST `https../api/register`

```json
{
  "user": {
    "username": "Clovis",
    "password": "toto"
  }
}
```

### Method : GET `https../api/login`

```json
{
  "user": {
    "username": "Clovis",
    "password": "toto"
  }
}
```

### Method : DELETE `https../api/delete`

```json
{
  "user": {
    "username": "Clovis",
    "password": "toto"
  }
}
```