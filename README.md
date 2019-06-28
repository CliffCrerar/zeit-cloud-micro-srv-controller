# Serverless Express API Zeit Cloud

### Current Independant API:

* **Date API:**

  Serves up the current date, this api was there out of the box.

* **Northwind Data Definition Script:**

  This service is serving the DOCZ version of my MS SQL Tech doc which is still a work in progress.
  
* ##### Stream video serverless from other locations

  - call stream1 in query brings airport background video

* 

## TODO:

#### For circling back to :

1. Experiment with serverless user authentication according to this instruction:

- [Twitter dreamify example](https://zeit.co/blog/serverless-express-js-lambdas-with-now-2)

---

#### Note Access control headers to note:

```js
response.set( {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'DELETE,GET,PATCH,POST,PUT',
    'Access-Control-Allow-Headers': 'Content-Type,Authorization'
} );
```

---

#### Notes:

For now this app is only experiment, plans for the future it to do all kinds of weird and magical things while being serverless.

---

### Serverless experiments

Experimiments are always conducted while putting together a new piece of tech, some experiments that proved to not be useful immediatly have been placed under `api/z_experiments` and have also been flagged in the `.nowignore`. 

The backups of the `now.json` have also been placed with the parked experiment files.