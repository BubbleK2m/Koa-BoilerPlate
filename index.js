const dotenv = require('dotenv');
dotenv.config();

const app = require('./app');
// const https = require('https');

app.listen(process.env.PORT, () => {
    console.log(`server was listening at ${process.env.PORT} port`);
    // setInterval(() => { https.get(`http://localhost:${process.env.PORT}/`) }, 240000);
});