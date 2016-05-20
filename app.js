var express=require("express");
var app=express();                     
var path = require('path');
//默认路径
app.get("/",function(req,res){
	res.sendFile(path.join(__dirname,"index.html"));
});
//html路径
app.get(/(\w)*\.html$/, function(req, res) {
  var url = req.url;
  console.log("html路径"+url);
  res.sendFile(path.join(__dirname,url));
});
//css路径
app.get(/(\w)*\.css$/,function(req,res){
	var url = req.url;
	console.log("css路径----------"+url);
	res.sendFile(path.join(__dirname,url));
});
//js路径
app.get(/(\w)*\.js$/,function(req,res){
	var url = req.url;
	console.log("js路径----------"+url);
	res.sendFile(path.join(__dirname,url));
});
//图片
app.get(/(\w)*\.(png|gif|jpg)$/, function(req, res) {
  var url = req.url;
  console.log("img路径----------"+url);
  res.sendFile(path.join(__dirname,url));
});
//json
app.get(/(\w)*\.json$/, function(req, res) {
  var url = req.url;
  console.log("json路径----------"+url);
  res.sendFile(path.join(__dirname,url));
});
app.listen("1205",function(){
	console.log("服务已启动","端口为1205");
});
