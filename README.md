# Nest node framework and MongoDB: Backend service for my Tour of Heroes web and mobile apps.

## How to run

create a database in [Mlab](https://mlab.com/). Make sure to create a user that has a read and write role.

```sh
$ git clone https://github.com/webmasterdevlin/nestjs-mongodb.git
$ cd nestjs-mongodb
$ npm run start:dev
```


## SwaggerUI
Url of api docs [http://localhost:5000/docs/](http://localhost:5000/docs/)

Url of Nestjs in production. [https://nestjs-mongodb-g2nm85c59.now.sh](https://nestjs-mongodb-g2nm85c59.now.sh)

How to deploy to Netlify? [here](https://trilon.io/blog/deploying-nestjs-to-zeit-now)

How to include environment variables? [here](https://zeit.co/docs/v2/build-step#using-environment-variables-and-secrets)

Note: Hiding secret keys in your environment variables is a best practice. However, I'm not worried not setting it up here because the mongo server that I'm using is free.
