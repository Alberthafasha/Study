const http = require('http')
const server = http.createServer((req,res) =>{
    if (req.url === '/'){
    res.end(`
    <h1> Welcome to home page <h1>
    <a href='/about'> About us <a>
    `)
}
if (req.url === '/about'){
    res.end(`
    <h1> This is our histry.<h1>
    <a href='/'>Back to home</a>
    `)
}
res.end(`
<h1>OOOps</h1>
<p>We can't find this page you are looking for!</p>
<a href='/'>Back to home</a>

`)

})

server.listen(4000)