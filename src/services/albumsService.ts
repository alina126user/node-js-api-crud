import { Album, CreateAlbumDto } from "../interfaces/album.type";
import { albums } from "../data/albums.data";
import {v4 as uuid} from "uuid";


export class AlbumsService {
    getAllAlbums (): Album[] {
        return albums;
    }

    getAlbumById(id: string):Album | undefined  {
        return albums.find((album) => album.id === id)
    }

    createAlbum (dto: CreateAlbumDto): Album {
        const newAlbum = {
            id: uuid(),
            name: dto.name,
            year: dto.year,
        }

        albums.push(newAlbum)
        return newAlbum
    }

    updateAlbum(id: string, dto: CreateAlbumDto): Album | null {
        const albumById = albums.find((album) => album.id === id)

        if (!albumById) return null;

        albumById.name = dto.name
        albumById.year = dto.year
        albumById.artistId = dto.artistId ?? null

        return albumById
    }

    deleteAlbum(id: string): boolean {
        const index = albums.findIndex((a) => a.id === id);
        if (index === -1) return false;

        albums.splice(index, 1);

        return true
    }
}
