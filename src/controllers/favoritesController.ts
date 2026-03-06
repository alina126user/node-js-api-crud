import { FavoritesService } from '../services/favoritesService';
import {Request, Response, NextFunction} from "express";


const favoritesService = new FavoritesService();

export const getAllFavorites = (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = favoritesService.getAllFavorites();
        res.json(result);
    } catch (error) {
        next(error)
    }
};
export const addTrackToFavorites = (req: Request<{id: string}>, res: Response) => {
    try {
        const result = favoritesService.addTrackToFavorites(req.params.id);
        res.status(201).json(result);
    } catch (error) {
        if ((error as Error).message === 'Track not found') {
            return res.status(422).json({ message: 'Track with this id does not exist' });
        }

        return res.status(500).json({ message: 'Server error' });
    }
};
export const deleteTrackFromFavorites = (req: Request<{id: string}>, res: Response) => {
    try {
        favoritesService.deleteTrackFromFavorites(req.params.id);
        res.status(204).send();
    } catch (error) {
        if ((error as Error).message === 'Track is not in favorite') {
            return res.status(404).json({ message: 'Track is not in favorite' });
        }

        return res.status(500).json({ message: 'Server error' });
    }
};
export const addAlbumToFavorites = (req: Request<{id: string}>, res: Response) => {
    try {
        const result = favoritesService.addAlbumToFavorites(req.params.id);
        res.status(201).json(result);
    } catch (error) {
        if ((error as Error).message === 'Album not found') {
            return res.status(422).json({ message: 'Album with this id does not exist' });
        }

        return res.status(500).json({ message: 'Server error' });
    }
};
export const deleteAlbumFromFavorites = (req: Request<{id: string}>, res: Response) => {
    try {
        favoritesService.deleteAlbumFromFavorites(req.params.id);
        res.status(204).send();
    } catch (error) {
        if ((error as Error).message === 'Album is not in favorite') {
            return res.status(404).json({ message: 'Album is not in favorite' });
        }

        return res.status(500).json({ message: 'Server error' });
    }
};
export const addArtistToFavorites = (req: Request<{id: string}>, res: Response) => {
    try {
        const result = favoritesService.addArtistToFavorites(req.params.id);
        res.status(201).json(result);
    } catch (error) {
        if ((error as Error).message === 'Album not found') {
            return res.status(422).json({ message: 'Album with this id does not exist' });
        }

        return res.status(500).json({ message: 'Server error' });
    }
};
export const deleteArtistFromFavorites = (req: Request<{id: string}>, res: Response) => {
    try {
        favoritesService.deleteArtistFromFavorites(req.params.id);
        res.status(204).send();
    } catch (error) {
        if ((error as Error).message === 'Artist is not in favorite') {
            return res.status(404).json({ message: 'Artist is not in favorite' });
        }

        return res.status(500).json({ message: 'Server error' });
    }
};
