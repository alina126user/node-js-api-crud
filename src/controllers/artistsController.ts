import { Request, Response, NextFunction } from 'express';
import {CreateArtistDto} from "../interfaces/artist.type";
import {ArtistsService} from "../services/artistsService";


const artistService = new ArtistsService();

export const getAllArtists =  (req: Request, res: Response, next: NextFunction) => {
    try {
        const artist = artistService.getAllArtists()
        res.json(artist)
    } catch(error) {
        next(error);
    }
}

export const createArtist =  (req: Request<{}, {}, CreateArtistDto>, res: Response, next: NextFunction) => {
    try {
        const artist = artistService.createArtist(req.body)
        res.status(201).json(artist)
    } catch(error) {
        next(error);
    }
}

export const getArtistById =  (req: Request, res: Response, next: NextFunction) => {
    try {
        const artist = artistService.getArtistsById(req.params.id)

        if(!artist){
           return res.status(404).json({error: 'No artist found with this id'})
        }
        res.status(201).json(artist)
    } catch(error) {
        next(error);
    }
}

export const updateArtist =  (req: Request<{id: string}>, res: Response, next: NextFunction) => {
    try {
        const artist = artistService.updateArtist(req.params.id, req.body)

        if(!artist){
            return res.status(404).json({error: 'No artist found with this id'})
        }
        res.json(artist)
    } catch(error) {
        next(error);
    }
}

export const deleteArtist =  (req: Request<{id: string}>, res: Response, next: NextFunction) => {
    try {
        const artist = artistService.deleteArtist(req.params.id)

        if(!artist){
          return res.status(404).json({error: 'No artist found with this id'})
        }
        res.status(204).send()
    } catch(error) {
        next(error);
    }
}
