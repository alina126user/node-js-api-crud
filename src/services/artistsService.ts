import {Artist, CreateArtistDto} from "../interfaces/artist.type";
import {artists} from "../data/artists.data";
import {v4 as uuid} from "uuid";

export class ArtistsService {
    getAllArtists(): Artist[] {
        return artists;
    }

    getArtistsById(id: string): Artist | null {
        return artists.find(artist => artist.id === id);
    }

    createArtist(dto: CreateArtistDto): Artist | null {
        const newArtist = {
            id: uuid(),
            name: dto.name,
            grammy: dto.grammy,
        }
        artists.push(newArtist);
        return newArtist;
    }

    updateArtist(id: string, dto: CreateArtistDto): Artist | null {
        const artist = artists.find(artist => artist.id === id);
        if (!artist) {
            return null;
        }
        artist.name = dto.name;
        artist.grammy = dto.grammy;
        return artist;
    }

    deleteArtist(id: string):boolean {
        const index = artists.findIndex((a) => a.id === id);
        if (index === -1) return false;

        artists.splice(index, 1);

        return true
    }
}
