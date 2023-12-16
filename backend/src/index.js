import server from './server.js'
import './database.js'


server.listen(8081,()=>{
    console.log('Esta corriendo en el siguiente direccion http://localhost:8081')
})

