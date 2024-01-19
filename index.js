require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser'); // Use body-parser for JSON data
const validUrl = require('valid-url'); // Require the 'valid-url' library for URL validation

// Basic Configuration
const port = process.env.PORT || 3000;
const shortUrls = {

}
app.use(cors());
//app.use(express.json());
app.use(bodyParser.json()); // Use body-parser for JSON data
app.use(bodyParser.urlencoded({ extended: true })); // Use body-parser for URL-encoded data

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

app.post('/api/shorturl', function(req, res) {
   let shortUrl = generateShortUrl();
   console.log(isUrlValid(req.body.url), req.body.url)
   if (!isUrlValid(req.body.url)) {
    return res.status().json({ error: 'Invalid URL' });
  }
   shortUrls[shortUrl] = req.body.url;
   console.log(shortUrls)

  console.log(req.body.url)
  res.json({ original_url: req.body.url, short_url: shortUrl });

});

app.get('/api/shorturl/:shorturl', (req, res)=>{
  let shortUrl = req.params.shorturl;
  console.log(shortUrl)
  if(shortUrls[shortUrl]){
    res.redirect(shortUrls[shortUrl]);
  }else{
    res.json({error: 'invalid url'})
  }
})
app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});



function generateShortUrl() {
  // Implement your short URL generation logic here
  // This can involve using a library or a custom algorithm
  // For simplicity, let's assume it returns a unique identifier
  return Math.random().toString(36).substring(7);
}

function isUrlValid(string) {
  try {
    const newUrl = new URL(string);
    const hasValidProtocol = newUrl.protocol === 'http:' || newUrl.protocol === 'https:';
    const hasValidWww = newUrl.hostname.startsWith('www.');

    return hasValidProtocol && hasValidWww;
  } catch (err) {
    return false;
  }
}