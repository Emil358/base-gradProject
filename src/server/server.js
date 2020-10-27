import fetch from 'node-fetch';
global.fetch = fetch;
import express from 'express';
import ReactDOM from 'react-dom/server'
import {App} from '../shared/App'
import {indexTemplate} from './indexTemplate';
import Unsplash, { toJson } from 'unsplash-js';


const unsplash = new Unsplash({
  accessKey: 'HmESHW-LSmwiDl4Gs3MOm-Qlksijb1XVrTIN4W7nJCc',
  secret: 'wMv3YV1LWZtyzVo46q63L_yBS2GN-Ceqa7OP6WZYgOs',
  callbackUrl: 'http://localhost:3000/auth'
})

const app = express();

app.use('/static', express.static('./dist/client'))

app.get('/', (req, res) => {
  res.send(
    indexTemplate(ReactDOM.renderToString(App()))
  )
});

app.get('/api/photos', (req, res) => {
  unsplash.photos.listPhotos(req.query.start, req.query.count)
    .then(toJson)
    .then(json => res.json(json))
    .catch(err => console.log('err{6}', err))
})

app.get('/auth', (req, res) => {
  console.log('{9}',req.query.code);
  unsplash.auth.userAuthentication(req.query.code)
    .then(toJson)
    .then(json => {
      res.send(
        indexTemplate(ReactDOM.renderToString(App()), json.access_token)
      )
      console.log('{8}',json.access_token);
    })
    .catch(err => console.log('err{7}',err))

})

app.get('/auth/userMe', (req, res) => {
  unsplash.auth.setBearerToken(req.query.token)
  unsplash.currentUser.profile ()
    .then(toJson)
    .then(json => res.json(json))
    .catch(err => console.log('{10}', err))
})

app.listen(3000, () => {
  console.log('server started on http://localhost:3000');
});
