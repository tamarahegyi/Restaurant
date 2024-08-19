import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
/*import express from 'express';
import cors from 'cors';
import 'dotenv/config';*/


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


/*const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(cors());

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);*/
