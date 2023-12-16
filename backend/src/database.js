import mongoose from 'mongoose';

(async()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/CIT',{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>console.log('Base de datos conectada'))
    .catch(err=> console.log('Error de conexion: ',err))
})()