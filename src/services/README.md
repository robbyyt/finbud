# The services folder

This is where most of the core business functionality should be built.

## Structure:

- http service
  - exposes some core methods for calling APIs through http.
- finance service
  - uses the http service to call the finnhub api
  - performs validations on the responses and exports schemas so we can work with the responses more easily
