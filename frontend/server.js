var http = require('http');
var request = require('request-promise');

//create a server object
http.createServer(async function (req, res) {
  try {
    var response = await getApiTime();
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('This is a sample application to call a REST API in kubernetes cluster.\nResponse: ' + response); //write a response to the client
    res.end(); //end the response
  }
  catch (err) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(err.message); //write a response to the client
    res.end(); //end the response
  }
}).listen(80); //the server object listens on port 80

async function getApiTime() {
  //Should work both ways
  // var address = 'http://backend:80/api/time';
  var address = 'http://backend.default.svc.cluster.local:80/api/time';
  console.log("URL for GET request is: " + address);

  var options = {
    method: 'GET',
    uri: address
  };
  var response = await request(options);

  console.log("Response received from GET request.")
  return response;
}