// Introduction
//Cover in detail later(next section)

//const http = require('http')

//To create a simple web page with responce only

//const server = http.createServer((req,res) =>{   // req(Request object) res(Response object)
//    res.write('Welcome to our home page') // Web page content
//    res.end()
//})
//server.listen(5000)  // url "Localhost:5000"

// Tocreate a simple web page with request and responce


const http = require('http')
const server = http.createServer((req,res) =>{
    if (req.url === '/'){
        res.end('Welcome to out hope page.')
    }
    if (req.url === '/about'){
        res.end('This is our histry.')
    }
    res.end(`
    <h1>OOOps</h1>
<p>We can't find this page you are looking for!</p>
<a href='/'>Back to home</a>
    `)

})
server.listen(3000)  // url "Localhost:5000"