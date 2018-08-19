var http = require('http');
var formidable = require('formidable');
var url = require('url');
var util = require('util');

var requestListener=function (req,res) {
    console.log('Inside RL');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    console.log('req:',req.method);
    if(req.method.toLowerCase()=='post'){
        console.log('inside post');
        processForm(req,res);
        return;
    }

    if(req.method.toLowerCase()==='get'){
        console.log('inside get');
        getForm(req, res);
        return;
    }
    res.end();
}

function processForm(req,res) {
    console.log('Inside PF');
    var form = new formidable.IncomingForm();
    form.parse(req,function (err,data) {
        res.writeHead(200,{"content-type":"text/plain"});
        res.end(JSON.stringify(
            {data: data}
        ));
        console.log(JSON.stringify(
            {data: data}
        ));
    });
}

function getForm(req, res) {
    console.log('Inside GF');
    var data = {
        data:{
           country: ['India', 'United States', 'Canada', 'United Kingdom']
        }
    }

    res.end(JSON.stringify(data));
    console.log(JSON.stringify(data));
}

var server=http.createServer(requestListener);
server.listen(3000);