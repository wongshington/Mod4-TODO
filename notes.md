signup a user

<!-- foundation -->
- user table / db setup for user
  - hashed password stored in db
    - generated using bcrypt
  - some other identifying factor: email/name
- requirements
  - bcrypt(npm package)
  - csurf(npm package)
  - express-session(npm package)
    - `app.use(session({name: "todo.sid",secret: secret,resave: false,	saveUninitialized: false}));`
  - cookie parser(npm package)
    - `app.use(cookieParser(secret));`
- user routes(express app)
  - handle login/signup
- middlewares on backend(express app)
- authorization middleware every time a users makes a request
  - verify logged in
    - cookie parser so we can parse them cookies we get passed around
    - express-session to get acces to session cookies
  - middlware checking our request object to see if there's user information
  - we are checking this at every request where we want to limit access to logged in users(conditional rendering)
  - csrf middleware

<!-- front end setup -->
- forms get rendered by an express route
  - going to send the csrf token value
    - for hidden input field
  - use a pug template to render some html
  - send any relevant data to template( pre-filled form info or list of items to select from, etc)
- form for user to input values
  - need to include csrf hidden value
  - set the action and method to match the express route we want to send the form data to

  <!-- receiving user input -->

  - protect from csrf with csrf middleware
  - validate that form (express side of things, not in pug)
    - existence, matching the format we want, correct data type
  - save user to db (async operation)
  - then we want to "log user in"
    - we want create the relationship between our server(express) and our frontend(browser/pug) that allows us to have knowledge of the user using our site(and not lose it unintentionally)
    - we'll store some info in our session(in the request(req.something) because it's part of our cookies)
      - info could be whatever, just need it to find a user in our db, id works great
  - send them to some part of our site specific to logged in users





  - rendering for user input
- define some routes
- authorization middleware every time a users makes a request
  - verify logged in
  - csrf middleware