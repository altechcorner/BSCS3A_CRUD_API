const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

app.listen(5000, () => {
  console.log(`Server is running in port ${PORT}`);
});
