import mongoose from "mongoose";

const schema = mongoose.Schema;

export const MascotaSchema = new schema({
    nombre: {
        type: String,
        require: 'Por favor digite el nombre'
    },
    edad: {
        type: String,
        require: 'Por favor digite la edad'
    },
    peso: {
        type: String,
        require: 'Por favor digite un peos valido'
    }

})