import express from 'express';
import * as trackController from '../controllers/tracksController';
import { validateTrackId, validateCreateTrack } from '../middleware/errorHandler';

const router = express.Router();

router.get('/', trackController.getAllTracks);

router.post('/', validateCreateTrack, trackController.createTrack);

router
  .route('/:id')
  .get(trackController.getTrackById)
  .put(validateTrackId, trackController.updateTrack)
  .delete(validateTrackId, trackController.deleteTrack);

export default router;