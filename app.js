const http = require('http');
const fs = require('fs');

http.createServer((request, response)=>{
    console.log(request.url);
    let file = request.url;
    if(request.url.includes("?nombre")){
        const server_mensaje = `http://localhost:8888${request.url}`
        const url = new URL(server_mensaje)
        console.log(url);
        const parametro = url.searchParams;
        const nombre = parametro.get("nombre");
        const telefono = parametro.get("telefono");
        const email = parametro.get("email");
        const mensaje = parametro.get("mensaje");
        let data = "\n\n\nNombre: " + nombre + "\nTelefono: " + telefono + "\nEmail: " + email + "\nMensaje:\n'" + mensaje + "'";
        console.log(data);
        fs.appendFileSync('./WWW/contacto.txt', data);
        file = './WWW/mensaje.html';
    } else {
        if(request.url == "/329701"){
            file = './WWW/329701.json';
        }
        else if(request.url == "/329881"){
            file = './WWW/329881.json';
        }
        else{
            console.log(request.url);
            file = request.url == '/'? './WWW/index.html' : `./WWW${request.url}`;
        }
    }

    fs.readFile(file, (err, data)=>{
        if(err){
            response.writeHead(404, {"Content-Type":"text/plain"});
            response.write("Not Found");
            response.end();
        } else{
            const extension = file.split('.').pop();
            const extension2 = extension.split('?').pop();
            console.log(extension2);
            switch(extension2){
                case 'txt':
                response.writeHead(200, {"Content-Type":"text/plain"});
                break;
                case 'html':
                response.writeHead(200, {"Content-Type":"text/html"});
                break;
                case 'jpeg':
                response.writeHead(200, {"Content-Type":"image/jpeg"});
                break;
                case 'css':
                response.writeHead(200, {"Content-Type":"text/css"});
                break;
                case 'js':
                response.writeHead(200, {"Content-Type":"text/javascript"});
                break;
                default:
                response.writeHead(200, {"Content-Type":"text/plain"});
                break;
            }
            response.write(data);
            response.end();
        }
    });
}).listen(8888);
