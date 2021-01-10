const express = require('express'); //Importar la expres del framework.
const path = require('path'); //Importar el path.
const fs = require('fs');
const app = express();

//'public' es el directorio donde se almacenan los archivos de forma estatica.
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

//Metodo de ruta get.
app.get('/',(request, response) => {
    response.sendFile(path.join(__dirname,'index.html'));
});

app.get('/contacto',(request, response) => {
    response.sendFile(path.join(__dirname,'contacto.html'));
});

app.get('/nosotros',(request, response) => {
    response.sendFile(path.join(__dirname,'nosotros.html'));
});

app.get('/proyectos',(request, response) => {
    response.sendFile(path.join(__dirname,'proyectos.html'));
});

app.post('/usuarios',(request,response) => {
    console.log(request.body)
    fs.writeFile('usuarios_db.txt', JSON.stringify(request.body), (error) =>{
        if(error){
            console.log(error);
        }
        response.redirect('/');
    });
});

app.use((request, response) => {
    response.sendFile(path.join(__dirname,'404.html'));
});

app.listen(8080,()=>{
    console.log('Servidor creado');
});

