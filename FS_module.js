// File System

// To read a file document initialization.
//const{readFileSync,writeFileSync, write} = require('fs')


//To display document content 
//const doc = readFileSync('./document/document.txt','utf8')
//console.log(doc)

// To create a file and its content
//writeFileSync(
//    '/document/doc2.txt',
//    `This is what I created using FS: ${doc}`
//)




// Another object in FS:

const { readFile, writeFile} = require('fs')

  // To check if a document exist
// readFile('./document/document.txt', (error,result) =>{

console.log(`Start`)
// display document content
readFile('./document/document.txt','utf8', (error,result) =>{
    if (error){
        console.log(`Not found`)
        return
    }
    const first = result
    readFile('./document/doc2.txt', 'utf8', (error, result)=>{
        if (error){
            console.log(error)
            return
        }
        const second = result
        writeFile(
            './document/doc3.txt',
            `This is a third document`,
            (error, result)=>{
                if (error){
                    console.log(error)
                    return
                }
                console.log(`Done with this task`)
            }
            )
    })
   
}
)

console.log(`Starting next one.`)