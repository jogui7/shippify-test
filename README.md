# shippify-test

<h3>

This API was developed during the tech interview for **[Shippify][shippify_site]** using the following techs:  ***TypeScript, Node, Express and React***.

</h3>

## **HOW TO USE**

*make sure you have node, docker and git installed*

### Cloning repository

```sh
$ git clone https://github.com/jogui7/shippify-test
```

## Api:

### Enter in api directory

```sh
$ cd api
```
### Install dependencies

```sh
$ yarn
```

### Initialize MySQL

```sh
$ cd ./docker
$ docker compose up -d
```

### Run migrations
```sh
$ yarn typeorm migration:run
```

### Start Server
```sh
$ yarn start:dev
```

## Web:

### Enter in web directory

```sh
$ cd web
```
### Install dependencies

```sh
$ yarn
```

### Start Server
```sh
$ yarn start
```

## **LICENSE**

 This project is licensed under the terms of **MIT LICENSE**. For more information, read [LICENSE](./LICENSE) file.

<h3  align="center">

Made by <a  href="https://www.linkedin.com/in/joao-guis/?locale=en_US/">João Guilherme Bini Guis</a>

<br><br>

</a>

</h3>

<!-- Website Links -->

[shippify_site]:  https://www.shippify.co/


