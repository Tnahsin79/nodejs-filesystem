const fs=require("fs");
const http=require("http");

//get the current timestamp
var date = new Date();
var timestamp = date.getTime();   

//to create a text file and push the current timestamp as its content
fs.writeFile("current date-time.txt",timestamp,function(err){
    if(err)
    console.log("ERROR STATUS: "+err);
    else
    console.log("File created!");
});

//read the files in a directory and filter the text files
var txtFiles=[];
fs.readdir("C:/Users/4unis/OneDrive/Desktop/nodejs-filesystem",function(err,files){
    if(err)
    console.log("ERROR: "+err);
    else
    {
        console.log(files);
        for(let i=0;i<files.length;i++)
        if(files[i].includes(".txt"))
        txtFiles.push(files[i]);
        console.log(txtFiles);
    }
});

//create a server and display the text files on the screen
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("<h1>Task Result</h1>");
    res.write("<ul>");
    for(let i=0;i<txtFiles.length;i++)
    res.write("<li>"+txtFiles[i]+"</li>");
    res.write("</ul>");
    res.end();
}).listen(3000);