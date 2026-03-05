import express from 'express';
import * as trackController from '../controllers/tracksController';
import {validateCreateTrack, validateUUId} from '../middleware/errorHandler';

const router = express.Router();

router.get('/', trackController.getAllTracks);

router.post('/', validateCreateTrack, trackController.createTrack);

router
  .route('/:id')
  .get(trackController.getTrackById)
  .put(validateUUId, trackController.updateTrack)
  .delete(validateUUId, trackController.deleteTrack);

export default router;
