const Twit = require('twit');
const config = require('./config');

const bot = new Twit(config);

function translate() {
  console.log('this is the translate function');
}
translate();
