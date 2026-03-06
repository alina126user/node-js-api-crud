import express from 'express';
import * as favoritesController from '../controllers/favoritesController';
import {validateUUId} from "../middleware/errorHandler";

const router = express.Router();

router.get('/', favoritesController.getAllFavorites);

router.post('/', );

router
  .route('/track/:id')
  .get(validateUUId, favoritesController.addTrackToFavorites)
  .delete(validateUUId, favoritesController.deleteTrackFromFavorites);

router.route('/album/:id')
    .get(validateUUId, favoritesController.addAlbumToFavorites)
    .delete(validateUUId, favoritesController.deleteAlbumFromFavorites);

router.route('/artist/:id')
    .get(validateUUId, favoritesController.addArtistToFavorites)
    .delete(validateUUId, favoritesController.deleteArtistFromFavorites);

export default router;
