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
  callbackUrl: 'http://localhost:3000'
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

app.listen(3000, () => {
  console.log('server started on http://localhost:3000');
});
