const http = require('http')

http.createServer((request,response) =>{
    console.log("Server port 3000 started");
    response.write("This is the data from server 3000")
    response.end()
}).listen("3000")

http.createServer((request,response) =>{
    if(request.url === "/about"){
        response.end("I am an beginner to Node JS")
    }
    else if(request.url === "/history"){
        response.end(`<h1>NAMMA VARALARU THERIYUM LA</h1>`)
    }
    else{
        response.end(`<h3>WELCOME TO HTTP SERVER DEMO</h3>`)
    }
   
}).listen(5000)
const requestOptions ={
    host: "geeksforgeeks.org",
    port: 80,
    path:"/",
    method: "GET"
}
http.request(requestOptions,(res) =>{
    if(res){
        console.log("GEEKS FOR GEEKS RESPONSE:", res);
    }
})