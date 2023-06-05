# Text-To-Speech-ExpressJs-Middleware

## Start Project

### Install Package

```bash
npm install
```

### 1. Developer mode

```bash

npm run dev

```

### 2. Production mode

```bash
npm start
```

### 3. User API

Register:

```Javascript
Method: "POST"
API: "/users/register"

body: {
    "username":"sonhm",
    "password":"12345"
}

expect_response: {
    "status": "OK",
    "code": 200,
    "data": "Register account sonhm  successfully!"
}
```

Login:

```Javascript
Method: "POST"
API: "/users/login"

body: {
    "username":"sonhm",
    "password":"12345"
}

expect_response: {
    "status": "OK",
    "code": 200,
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....."
    }
}
```

Get User Info:

```Javascript
Method: "GET"
API: "users/me"

headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....."
}

expect_response: {
    "status": "OK",
    "code": 200,
    "data": {
        "id": "647e07b18ef591d63f801e43",
        "username": "sonhm"
    }
}
```