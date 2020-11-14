import fetch from 'node-fetch';
global.fetch = fetch;
import React from 'react';
import express from 'express';
import ReactDOM from 'react-dom/server'
import {App} from '../shared/App'
import {indexTemplate} from './indexTemplate';
import Unsplash, { toJson } from 'unsplash-js';
import { StaticRouter } from 'react-router-dom';


const unsplash = new Unsplash({
  accessKey: 'HmESHW-LSmwiDl4Gs3MOm-Qlksijb1XVrTIN4W7nJCc',
  secret: 'wMv3YV1LWZtyzVo46q63L_yBS2GN-Ceqa7OP6WZYgOs',
  callbackUrl: 'http://faiz-emil.ru/auth'
})

const app = express();

app.use('/static', express.static('./dist/client'))

app.get('/api/likePhoto', (req, res) => {
  unsplash.auth.setBearerToken(req.query.token)
  unsplash.photos.likePhoto(req.query.id)
    .then(toJson)
    .then(json => res.json(json))
    .catch(err => console.log('{13}', err))
})

app.get('/api/unlikePhoto', (req, res) => {
  unsplash.auth.setBearerToken(req.query.token)
  unsplash.photos.unlikePhoto(req.query.id)
    .then(toJson)
    .then(json => res.json(json))
    .catch(err => console.log('{13}', err))
})

app.get('/api/userMe', (req, res) => {
  unsplash.auth.setBearerToken(req.query.token)
  unsplash.currentUser.profile ()
    .then(toJson)
    .then(json => res.json(json))
    .catch(err => console.log('{10}', err))
})


app.get('/api/photos', (req, res) => {
  unsplash.photos.listPhotos(req.query.start, req.query.count)
    .then(toJson)
    .then(json => res.json(json))
    .catch(err => console.log('err{6}', err))
})

app.get('/auth', (req, res) => {
  const context = {};
  if(req.query.token) {

    unsplash.auth.setBearerToken(req.query.token)
      res.send(
        indexTemplate(ReactDOM.renderToString(
          <StaticRouter location={req.url} context={context}>
            <App />
          </StaticRouter>), req.query.token)
      )

  } else if (req.query.code) {

  console.log('{9}',req.query.code);

  unsplash.auth.userAuthentication(req.query.code)
    .then(toJson)
    .then(json => {
      unsplash.auth.setBearerToken(json.access_token)
      res.send(
        indexTemplate(ReactDOM.renderToString(
          <StaticRouter location={req.url} context={context}>
            <App />
          </StaticRouter>), json.access_token)
      )
      console.log('{8}',json.access_token);
    })
    .catch(err => console.log('err{7}',err))
  }
})

app.get('/', (req, res) => {
  const context = {};
  res.send(
    indexTemplate(ReactDOM.renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>)
    )
  )
});

app.listen(3000, () => {
  console.log('server started on http://faiz-emil.ru/');
});
