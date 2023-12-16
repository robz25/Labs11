import mongoose from "mongoose";
import { MascotaSchema } from "../models/mascota.js";

const Mascota= mongoose.model('mascotas',MascotaSchema);

export const getMascota = async(req,res)=>{
    try {
        const mascotas = await Mascota.find();
        res.json(mascotas);
    } catch (error) {
        res.status(500).json({message:'Error al listar los mascotas'})
    }
}

export const getMascotaById = async(req,res)=>{
    const {id}=req.params;
    try {
        const mascota = await Mascota.findById(id);
        res.json(mascota);
    } catch (error) {
        res.status(500).json({message:'Error al buscando el mascota'})
    }
}

export const createMascota = async(req,res)=>{
    const mascota = new Mascota(req.body)
    try {
        const mascotaSave= await mascota.save();
        res.status(201).json(mascotaSave);
    } catch (error) {
        res.status(500).json({message:error.message||'Error al creando al mascota'})
    }
}

export const updateMascota = async(req,res)=>{
    const {id}=req.params;
    console.log('id::',id)
    console.log('body::',req.body)
    if(!req.body) return res.status(404).json({
        message:'Los datos no se enviaron al controllador por favor revisar'
    })
    try {
        const profersorUpdate= await Mascota.findByIdAndUpdate(id,req.body,{new:true});
        console.log('Actualizar')
        if(!profersorUpdate)return res.status(404).json({
            message:'No se pudo actualizar el mascota'
        })
        res.json(profersorUpdate);
    } catch (error) {
        res.status(500).json({message:error.message||'Error al actualizar al mascota'})
    }
}

export const deleteMascota = async(req,res)=>{
    const {id}=req.params;
    try {
        const mascotaRemover= await Mascota.findByIdAndDelete(id);
        if(!mascotaRemover)return res.status(404).json({
            message:'No se encontro algun mascota para ser removido'
        })
        res.json(mascotaRemover);
    } catch (error) {
        res.status(500).json({message:error.message||'Error al eliminar al mascota'})
    }
}
