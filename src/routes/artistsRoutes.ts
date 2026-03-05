import express from 'express';
import * as artistController from '../controllers/artistsController';
import {validateArtistCreation, validateUUId} from "../middleware/errorHandler";

const router = express.Router();

router.get('/', artistController.getAllArtists);

router.post('/', validateArtistCreation, artistController.createArtist);

router
    .route('/:id')
    .get(artistController.getArtistById)
    .put(validateUUId, artistController.updateArtist)
    .delete(validateUUId, artistController.deleteArtist);

export default router;
