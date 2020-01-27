const data = [
  {
    title: "API Benchmark CLI in Go",
    slug: "api-benchmark-go-cli",
    short: "Build an intuitive and highly-performant CLI to stress test an API",
    tags: ["Go", "CLI", "APIs", "HTTP", "Concurrency"],
    size: "component",
    details: `#### Why Go?
Go is becoming very popular in the cloud-native landscape, especially in devops/infrastructure space. It's the language behind projects Kubernetes, Docker, Prometheus, and many more. It's becoming a language that many developers are eager to learn, but don't have an opportunity to try out.

Some benefits of learning Go:

1. Performance: Go is compiled to bytecode, has first class concurrency, and utilizes garbage collection to name a few reasons
1. Developer Experience: Strongly and statically typed to help you catch errors early, yet with the simplicity and readability of a language like Python. Go was written in an opinionated fashion and has a good set of standard libraries for common things like formatting, testing, and profiling. Go code can be built as a binary that can run on any OS.
1. Proven: Go is used in production by top companies, and is built and backed by Google as well as a large open source community

#### What will you learn with this project?

1. Get your hands dirty with Go and use some of it's highlight features around concurrency
1. Learn how to build your own cross-platform CLI tool
1. Re-enforce your understanding of HTTP

#### What is the outcome?
You'll build a binary that can perform basic performance tests against an HTTP API, which can be built to run on any OS. The result will be a basic version of something like Hey (https://github.com/rakyll/hey). Feel free to use Hey or any other benchmarking tool for inspiration/reference. 

Using the name \`butler\` as an example:
\`\`\` $ butler help

Butler is a CLI to run performance tests against an HTTP API.

Usage:
  butler [url]

Flags:
  -m, --method       string    http request method. Allowed: GET, PUT, POST, HEAD
  -n, --num-requests integer   total number of requests to be made
  -w, --workers      integer   number of workers to use to make requests in parallel
  -h, --help                   help for butler

Use "butler [command] --help" for more information about a command.
\`\`\`

#### Important
Like all of the projects on this site, you have full freedom on what technologies to use and the implementation details. We're here to give you inspiration alongside general guidelines to keep you focused  on tasks to maximize your learning.
`,
    checklist: `#### Prep
1. Download Go, version 1.13.x is recommended
1. If needed, learn the basics of HTTP and the Go language. Cover Go's \`http\` package and concurrency
1. You'll need an API to test. You can either write a quick one yourself (what we recommend), or test a public API.
    1. If you're thinking of using public API, consider their rate limits since you'll be doing a performance test on it

##### Resources
1. Download Go https://golang.org/dl
1. Learn Go Basics
    1. https://tour.golang.org/list
    1. https://gobyexample.com
1. HTTP Package: https://golang.org/pkg/net/http/
1. Concurrency: https://tour.golang.org/concurrency/1

#### Create your CLI
1. Initialize a CLI with the name of your choice using the Cobra Generator. We'll use \`butler\` as an example
1. Build a sample binary using \`go build\` and test it

##### Resources
1. Cobra https://github.com/spf13/cobra
1. Building a binary https://golang.org/pkg/go/build/

#### Build a simple HTTP client
1. Initialize a CLI with the name of your choice using the Cobra Generator. We'll use \`butler\` as an example
1. Allow a url to be passed as a parameter to the CLI \`butler https://google.com\`
1. Allow a HTTP method to be passed as an flag, use GET as a default \`butler --method POST https://google.com\`
1. Allow multiple headers to be passed as flags \`butler -H 'Content-Type: application/json' --method POST https://google.com\`
1. Allow JSON data to be passed in as an flag \`butler -H 'Content-Type: application/json' --json '{}' --method POST https://google.com\`
Validate: HTTP methods (GET, POST, PUT, DELETE)
Validate: JSON data must be valid JSON
1. Allow a timeout to be set on a request in seconds \`butler -H 'Content-Type: application/json' --timeout 5 https://google.com\`

##### Resources
1. HTTP https://golang.org/pkg/net/http/
1. Cobra Flags https://github.com/spf13/cobra#working-with-flags
1. JSON package https://gobyexample.com/json

#### Performance testing
1. Allow the number of concurrent requests to be passed in as a flag \`butler --workers 10 https://google.com\`. This is a good opportunity to usego routines to issue the concurrent requests.
1. Allow the total number of requests for the test to be passed in as a flag \`butler --workers 10 --total 100 https://google.com\`

##### Resources
1. Go Routines https://gobyexample.com/goroutines
1. Wait Groups https://gobyexample.com/waitgroups
1. Channels https://gobyexample.com/channels

#### Reporting Results
For reporting, you can make it simple and display the values in plain text, or you can display them in a table (see links)

An output when using tablewriter:
+---------------+--------------------+------------+
| Response Code | Number of Requests | Percentage |
+---------------+--------------------+------------+
|      200      |         400        |     80     |
|      400      |          50        |     10     |
|      500      |          50        |     10     |
+---------------+--------------------+------------+

For the metrics to display, here are some examples to consider:
###### Basic 
1. Slowest response time
1. Fastest response time
1. Average response time
1. A map of a specific HTTP response code to the number of requests that received the response code

###### Challenging
1. Number of requests sent per second
1. Distribution of response times in the table
1. Distribution of HTTP response codes in the table

##### Resources
1. TableWriter Package https://github.com/olekukonko/tablewriter
`
  },
  {
    title: "JWT-Based Authentication Microservice",
    slug: "jwt-auth-microservice",
    short: "Design and build a microservice for user authentication",
    tags: [
      "Microservices",
      "Databases",
      "APIs",
      "API Design",
      "Web Applications",
      "NodeJS",
      "Spring Boot",
      "MongoDB"
    ],
    size: "component",
    details: `#### Why should I build this?
When building any web application that involves users and their sensitive data, security is of utmost importance. There are many aspects to securing an application such as preventing Cross Site scripting and SQL Injection, but usually an initial step is requiring user authentication via a user's email/username and password. And when the user is authenticated, applications need to make sure the users have the right permissions to access a resource (i.e. authorization).

In the microservices world, you may have many services running that still require authentication and authorization, but don't have access to the user store. One scalable solution that modern architectures implement is token-based authentication, using the JWT (JSON web tokens) format. When a user logs in successfully, a JWT token is issued and can be used to authenticate to different microservices to retrieve data, given that the token hasn't expired. The token might contain information about the user such as the user's id and permissions held.

This essentially enables a degree of decoupling and DRY-ness because your microservices don't need to handle user login and don't need direct access to the user store.

#### What will you learn with this project?
1. How to create an API to securely create, store, and authenticate your application's users
1. How to implement an authentication solution for a microservices-based architecture
1. How to securely handle user's passwords. We don't want to store passwords in plain text, but instead use methods like salting and hashing to encrypt it
1. Basics of Authentication and JWT tokens

#### What is the outcome?
You'll have an API that can authenticate users and issue JWT tokens, with the following endpoints:

1. Signup: POST /api/user
1. Login: POST /api/user/authenticate
1. Get Users: GET /api/user

#### Important
Like all of the projects on this site, you have full freedom on what technologies to use and the implementation details. We're here to give you inspiration alongside general guidelines to keep you focused  on tasks to maximize your learning.
`,
    checklist: `The steps outlined here will be geared towards NodeJs, Express, and MongoDB. Although you can still follow along using any other technology like Java, Python, Go, etc.

#### Preparation
1. Install Nodejs and MongoDB
1. Setup your project with Express and create a basic HTTP server
1. Optional project structure
  \`\`\`
  your_project_dir/
    package.json    // Dependencies and npm scripts
    app.js          // Application entrypoint, initializes Express and setups routes with respective controllers
    users/          // Store DB models
      controller.js // Store DB models
      service.js    // Store DB models
  \`\`\`
1. Install Mongoose to connect to your database and Nodemon to watch for code changes and automatically reload

##### Resources
1. [Install NodeJS](https://nodejs.org/en/download/)
1. [Install MongoDB](https://docs.mongodb.com/manual/installation/)
1. [Add Express](https://expressjs.com/en/starter/installing.html)
1. [Add Mongoose](https://mongoosejs.com/docs/index.html)

#### Create and Store Users
1. Install Express body parser to be able to parse JSON
1. Setup a POST endpoint to \`/api/user\`
1. Create a User model with mongoose with fields:
  \`\`\`
  {
      email     // string, unique
      password  // string
      firstName // string
      lastName  // string
  }
  \`\`\`
1. Update the endpoint to parse JSON from the request body
1. Install \`bcrypt\` and use it to salt and hash the users's password before storing to DB
1. If the User is stored successfully, return a 201 response
1. If there are any errors, return a 500

##### Resources
1. [Express Body Parse](https://expressjs.com/en/resources/middleware/body-parser.html)
1. [Express API Routing](https://expressjs.com/en/guide/routing.html)
1. [Mongoose Models](https://mongoosejs.com/docs/models.html)
1. [Bcrypt](https://www.npmjs.com/package/bcrypt#usage)
1. [Mongoose Pre-save middleware](https://mongoosejs.com/docs/middleware.html#pre)

#### Get Users
1. Setup a GET endpoint to \`/api/user\` that accepts the body
  \`\`\`
  {
      email: "testemail@example.com",
      password: "testpassword",
      firstName: "John",
      lastName: "Doe"
  }
  \`\`\`
1. Query Users and return the list of Users

##### Resources
1. [Mongoose Queries](https://mongoosejs.com/docs/queries.html)

#### Authenticate a User
1. Setup a POST endpoint to \`/api/user/authenticate\` that accepts the body
  \`\`\`
  {
      email: "testemail@example.com"
      password: "testpassword"
  }
  \`\`\`
1. Query the DB to find one User based on the input email
    1. If a User is not found, return a 401 response
1. If a User is found, use \`bcrypt\` to compare the input password and the hashed password retrieved from the User query
    1. If the passwords match, return a 401 response
    1. If the passwords match, return a 200 response for now

##### Resources
1. [Mongoose \`findOne\` User](https://mongoosejs.com/docs/api.html#model_Model.findOne)
1. [Bcrypt compare](https://www.npmjs.com/package/bcrypt#to-check-a-password)

#### Generate JWT Tokens on Successful Login
1. Install \`jsonwebtoken\`
1. Following up on the previous step, when the login is successful, generate and sign a JWT token containing the User's Id from MongoDB

##### Resources
1. [Install jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
`
  },
  {
    title: "E-Commerce Microservices",
    slug: "e-commerce-microservices",
    short:
      "Design and build a set of microservices for an E-Commerce application",
    tags: [
      "Microservices",
      "Databases",
      "APIs",
      "API Design",
      "Web Applications",
      "NodeJS",
      "Spring Boot"
    ],
    size: "compound",
    details: `# E-Commerce Microservices`,
    checklist: `#### Setup Microservice Starter
1. Clone project
1. Get a local MongoDB instance running
1. Create docker-compose yaml file to bring up MongoDB

##### Resources

#### Create Auth Service
1. Create auth related routes
1. Utilize passport js to implement token-based authentication
1. Create User model
1. Update docker-compose yaml to install and bring up auth service

##### Resources
1. PASSPORT AUTH
1. MONGODB USER MODEL
`
  },
  {
    title: "Serverless Function for Optimizing and Storing Images in S3",
    slug: "serverless-image-processing",
    short: "Use AWS Lambda, API Gateway, and S3 to optimize and store images",
    tags: ["Serverless", "AWS", "AWS Lambda", "AWS S3", "Image Processing"],
    size: "component",
    details: `# Why?`,
    checklist: `#### Preparation
1. Clone project
1. Get a local MongoDB instance running
1. Create docker-compose yaml file to bring up MongoDB

##### Resources

#### Create Auth Service
1. Create auth related routes
1. Utilize passport js to implement token-based authentication
1. Create User model
1. Update docker-compose yaml to install and bring up auth service

##### Resources
1. PASSPORT AUTH
1. MONGODB USER MODEL
`
  }
];

export default data;
