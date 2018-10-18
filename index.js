const express = require('express')
const app = express()
const port = process.env.PORT || 8080;
const NAME = process.env.NAME || 'MissingNo';

app.get('/', (req, res) => res.send(`Hello ${NAME}!`))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
