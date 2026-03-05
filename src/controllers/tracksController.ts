import { TrackService } from '../services/tracksService';
import { Request, Response, NextFunction } from 'express';
import { CreateTrackDto } from '../interfaces/track.type';

const trackService = new TrackService();

export const getAllTracks = (req: Request, res: Response, next: NextFunction) => {
  try {
    const track = trackService.getAllTracks();
    res.json(track);
  } catch (error) {
    next(error);
  }
};

export const getTrackById = (req: Request, res: Response, next: NextFunction) => {
  try {
    const track = trackService.getTrackById(req.params.id);

    if (!track) {
      return res.status(404).json({ message: "Track not found" });
    }
    
    res.json(track);
  } catch (error) {
    next(error);
  }
};

export const createTrack = (req: Request<{}, {}, CreateTrackDto>, res: Response, next: NextFunction) => {
  try {
    const track = trackService.createTrack(req.body)
    res.status(201).json(track);
  } catch (error) {
    next(error);
  }
};

export const updateTrack = (req: Request<{id: string}, {}, CreateTrackDto>, res: Response, next: NextFunction) => {
  try {
    const track = trackService.updateTrack(req.params.id, req.body)

      if (!track) {
      return res.status(404).json({ message: "Track not found" });
    }
    res.json(track);
  } catch (error) {
    next(error);
  }
};

export const deleteTrack = (req: Request<{id: string}, {}>, res: Response, next: NextFunction) => {
  try {
    const track = trackService.deleteTrack(req.params.id)

      if (!track) {
      return res.status(404).json({ message: "Track not found" });
    }
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

