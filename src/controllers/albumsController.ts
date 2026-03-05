import  { AlbumsService } from '../services/albumsService';
import { Request, Response, NextFunction } from 'express';
import {CreateAlbumDto} from "../interfaces/album.type";

const albumService = new AlbumsService();

export const getAllAlbums = (req: Request, res: Response, next: NextFunction)=> {
    try {
        const albums = albumService.getAllAlbums();
        res.json(albums);
    } catch (error) {
        next(error);
    }
    }

export const createAlbum = (req: Request<{}, {}, CreateAlbumDto>, res: Response, next: NextFunction)=> {
    try {
        const albums = albumService.createAlbum(req.body);
        res.status(200).json(albums);
    } catch (error) {
        next(error);
    }
}

export const getAlbumById = (req: Request, res: Response, next: NextFunction)=> {
    try {
        const albums = albumService.getAlbumById(req.params.id);

        if (!albums) {
           return res.status(404).json({message: 'Album not Found'});
        }

        res.json(albums);
    }
    catch (error) {
        next(error);
    }
}

export const updateAlbum = (req: Request<{id: string}, {}>, res: Response, next: NextFunction)=> {
    try {
        const albums = albumService.updateAlbum(req.params.id, req.body);

        if (!albums) {
           return res.status(404).json({message: 'Album not Found'});
        }

        res.status(201).send({message: 'Album updated'});
    }
    catch (error) {
        next(error);
    }
}

export const deleteAlbum = (req: Request<{id: string}, {}>, res: Response, next: NextFunction)=> {
    try {
        const albums = albumService.deleteAlbum(req.params.id);
        if (!albums) {
          return  res.status(404).json({message: 'Album not Found'});
        }
        res.status(204).send({message: 'Album deleted'});
    }
    catch (error) {
        next(error);
    }
}
