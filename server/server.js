const path=require('path');
const express=require('express');
const http=require('http'); //creates server using http lib
const socketIO=require('socket.io');

const publicPath= path.join(__dirname,'../public'); //middleware
const port=process.env.PORT || 3051;
var app=express();
var server=http.createServer(app);
var io=socketIO(server); //this is how we comm b/t server and client

app.use(express.static(publicPath));

server.listen(port, ()=>
{
	console.log(`Server is Up on port ${port}`);
});

