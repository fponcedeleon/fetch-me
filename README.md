# Fetch Me

This simple, plug-and-play server is useful for troubleshooting an integration. Use the `/fetch-me` endpoint and analyze how the server is receiving your request, and set the appropriate response to your particular use case.

## How it works

- Modify the `/fetch-me` endpoint to _console.log_ the request, and set a different response if needed.
- If you want to set a custom port, create a `.env` file and add `PORT=<port_number>`; otherwise, it defaults to 6060.
- Run `yarn start`.
- Modify the consumer (AKA your app) to use `http://localhost:<port>/fetch-me` endpoint and analyze your requests.
