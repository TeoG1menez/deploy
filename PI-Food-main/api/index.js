
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
require('dotenv').config();
const port = process.env.PORT || 3001
// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(port, () => {
    console.log( `listening at ${port}` ); // eslint-disable-line no-console
  });
});
