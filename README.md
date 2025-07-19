## To run in docker

Build and run the production image (served by Nginx):

```
docker build . -t tg-shop && docker run -d -p 80:80 tg-shop
```

This will serve the built app at http://localhost using Nginx.
