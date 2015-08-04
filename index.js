var Gpio = require('onoff').Gpio,
    led = new Gpio(17, 'out');
var express = require("express");
var app = express();
var ip = '';
app.engine('html', require('ejs').renderFile);

app.use(express.static('./public'));

// Root sayfa açıldığında index.html gösteriliyor. Button bu html içerisinde
app.get('/', function (req, res) {
    res.render('./index.html');
    ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log('Durum : ' + led.readSync() + ' - ip : ' + ip);
    led.writeSync(0);
});
// Buton ile gönderilen parametrelere göre bu api ile led in durumunu değiştiriyor
app.get('/led/:state', function (req, res) {
    led.writeSync(parseInt(req.params.state));
    res.send('Durum ' + req.params.state);
});



// Web server kuruldu 3000 portundan yayın yapıyor
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Program calisiyor @ http://%s:%s', host, port);
});

// NODE JS de programdan çıkmadan önce clean up yapması için bir 
// fonksiyon aradım ve bu snippeti buldum. 
// Bu snippet ile led unexport yapılabilir led.unexport()

process.stdin.resume();//so the program will not close instantly

function exitHandler(options, err) {
    if (options.cleanup) console.log('clean');
    if (err) console.log(err.stack);
    if (options.exit) process.exit();
}

//do something when app is closing
process.on('exit', exitHandler.bind(null,{cleanup:true}));

//catches ctrl+c event
process.on('SIGINT', exitHandler.bind(null, {exit:true}));

//catches uncaught exceptions
process.on('uncaughtException', exitHandler.bind(null, {exit:true}));
