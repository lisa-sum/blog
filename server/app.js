const express = require('express')
const app = express()

const PORT = process.env.PORT || 4000

app.all('/', (req, res) => {
  res.status(200).send('OK')
})

app.listen(PORT, () => {
  console.log(`Server is running on port: ${ PORT }`)
})