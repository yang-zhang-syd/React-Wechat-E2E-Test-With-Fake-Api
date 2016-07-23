var express = require('express');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/authorize', function(req, res) {
    var redirectUrl = req.query.redirect_uri + '?code=123&state=STATE';
    console.log('Redirect to ' + redirectUrl);
    res.redirect(redirectUrl);
});

var userAccessToken = require('./data/userAccessToken');
app.get('/api/wechat/getaccesstoken/:code', function(req, res) {
    res.json(userAccessToken);
});

var userinfo = require('./data/userinfo');
app.get('/api/wechat/getuserinfo', function(req, res) {
    res.json(userinfo);
});

app.listen(4000, function () {
    console.log('Fake api listening on port 4000!');
});