import express from 'express';
import * as albumsController from '../controllers/albumsController';
import { validateAlbumCreation, validateUUId } from "../middleware/errorHandler";

const router = express.Router();

router.get('/', albumsController.getAllAlbums);

router.post('/', validateAlbumCreation, albumsController.createAlbum);

router
  .route('/:id')
  .get(albumsController.getAlbumById)
  .put(validateUUId, albumsController.updateAlbum)
  .delete(validateUUId, albumsController.deleteAlbum);

export default router;
