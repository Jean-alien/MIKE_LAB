const express = require('express')
const app = express()
const port = process.env.PORT || 5500;

app.get('/', (req, res) => {
  res.send(`
  <h1>Type 9: "Peacemaker"</h1>
  <p>I am Type Nine, which is known as a mediator of a group!</p>
`);
})

app.listen(port, () => {
  console.log(`mike app listening on port ${port}`)
})