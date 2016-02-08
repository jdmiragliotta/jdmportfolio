var express = require("express");
var app = express();
var githubApi = require('node-github');
var github = new githubApi({
    version: "3.0.0"
  });
var PORT = process.env.PORT || 8000;

app.use("/js", express.static("public/js"));
app.use("/css", express.static("public/css"));
app.use("/fancybox", express.static("public/fancybox"));
app.use("/images", express.static("public/images"));
app.use("/gallery", express.static("public/images/gallery"));

app.get("/", function(req, res){
  res.sendFile(process.cwd() + "/views/index.html");
});

app.get("/index", function(req, res){
  res.sendFile(process.cwd() + "/views/index.html");
});

app.get("/webdev", function(req, res){
  res.sendFile(process.cwd() + "/views/webdev.html");
});

app.get("/webdev", function(req, res){
  res.sendFile(process.cwd() + "/views/webdev.html");
});

app.get("/print", function(req, res){
  res.sendFile(process.cwd() + "/views/print.html");
});

app.get("/web", function(req, res){
  res.sendFile(process.cwd() + "/views/web.html");
});

app.get("/clients", function(req, res){
  res.sendFile(process.cwd() + "/views/clients.html");
});

app.get("/blog", function(req, res){
  res.sendFile(process.cwd() + "/views/blog.html");
});

app.get("/github", function(req, res){
  res.sendFile(process.cwd() + "/views/github.html");
});

// Get GitHub infomation

app.get('/webdev/:githubUser', function(req, res){
  var github = new githubApi({
    version: "3.0.0"
  });
  github.user.getFrom({
      user: req.params.githubUser
  }, function(err, gitResponse){
      res.send(JSON.stringify(gitResponse))
    });
 });





app.listen(PORT, function(){
  console.log("App is listening to %s", PORT);
});