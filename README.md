# Hepsiburada Frontend Challenge

The aim of this project is to develop a pixel perfect coded search page for Hepsiburada, according to the given design document.

You can see deployed app from [here](https://hb-challenge.netlify.app/).

## Overview

The project was developed using Typescript, React, Redux library and CSS. <br/> Each component has been tested through the unit test.

## Clone & Download

```
$ git clone https://github.com/eminebozdag/hb-challenge.git
$ cd hb-challenge

$ yarn install
$ yarn start
```

## Testing

To run all tests;

```
$ yarn test
```

To see the coverage report;

```
$ yarn coverage
```

## Docker

This project has been dockerized. To create docker image, run;

```
$ docker build . -t hb-challenge
```

To create a container from docker image;

```
$ docker run -it -p 8080:80 hb-challenge
```
