const express = require('express');

const app = express();
const port = 3000;

const models = require('./models.js');

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/', express.static('./Client/DIST'));

const baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo';

app.get('/products', (req, res) => {
  models.getAll()
    .then((results) => {
      res.status(200).send(results.data);
      //console.log(results.data, 'Hello World! here is some data ');
      // res.render('./Client/DIST', { retrievedData: results });
    })
    .catch((error) => {
      res.status(400).send(error);
      console.log(error, '<-- There was an error in the get');
    });
});

app.get('/products/:prodID', (req, res) => {
  models.getProdInfo(req.params.prodID)
    .then((results) => {
      res.status(200).send(results.data);
      // console.log(results.data, 'Hello World! here is some data ');
    })
    .catch((error) => {
      res.status(400).send(error);
      console.log(error, '<-- There was an error in the get');
    });
});

app.get('/products/:prodID/styles', (req, res) => {
  models.getProdStyles(req.params.prodID)
    .then((results) => {
      res.status(200).send(results.data);
      // console.log(results.data, 'Hello World! here is some data ');
    })
    .catch((error) => {
      res.status(400).send(error);
      console.log(error, '<-- There was an error in the get');
    });
});

app.get('/products/:prodID/related', (req, res) => {
  models.getProdRelated(req.params.prodID)
    .then((results) => {
      res.status(200).send(results.data);
      // console.log(results.data, 'Hello World! here is some data ');
    })
    .catch((error) => {
      res.status(400).send(error);
      console.log(error, '<-- There was an error in the get');
    });
});

app.get('/qa/questions/:prodID', (req, res) => {
  models.getAllQs(req.params.prodID)
    .then((results) => {
      res.status(200).send(results.data);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

app.get('/qa/questions/:prodID/answers', (req, res) => {
  models.getAnswers(req.params.prodID)
    .then((results) => {
      res.status(200).send(results.data);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

app.get('/reviews/:prodID', (req, res) => {
  models.getProdReviews(req.params.prodID)
    .then((results) => {
      res.status(200).send(results.data);
      // console.log(results.data, 'Hello World! here is some data ');
    })
    .catch((error) => {
      res.status(400).send(error);
      console.log(error, '<-- There was an error in the get');
    });
});

app.get('/reviews/meta/:prodID', (req, res) => {
  models.getProdReviewsMeta(req.params.prodID)
    .then((results) => {
      res.status(200).send(results.data);
      // console.log(results.data, 'Hello World! here is some data ');
    })
    .catch((error) => {
      res.status(400).send(error);
      console.log(error, '<-- There was an error in the get');
    });
});

app.get('/cart', (req, res) => {
  models.getCart()
    .then((results) => {
      res.status(200).send(results.data);
    })
    .catch((error) => {
      res.status(400).send(error);
      console.log(error, '<-- There was an error in the get');
    });
});

app.post('/cart', (req, res) => {
  // console.log('sku obj', req.body);
  models.postCart(req.body)
    .then((results) => {
      res.status(200).send(results.data);
    })
    .catch((error) => {
      res.status(400).send(error);
      console.log(error, '<-- There was an error in the get');
    });
});

app.listen(port, () => {
  console.log(`App listening at port: ${port}`);
});
