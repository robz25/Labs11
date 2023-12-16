import { Router } from "express";
import { getMascota, getMascotaById, createMascota, updateMascota, deleteMascota } from "../controllers/mascota.js";

const router = Router();

router.get('/mascota', getMascota)
router.get('/mascota/:id',getMascotaById)
router.post('/mascota', createMascota)
router.put('/mascota/:id',updateMascota)
router.delete('/mascota/:id',deleteMascota)

export default router;