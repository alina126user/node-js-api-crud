import {Favorites, FavoritesResponse} from "../interfaces/favorites.type";
import { albums } from "../data/albums.data";
import { tracks } from "../data/track.data";
import { artists } from "../data/artists.data";
import { favorites as favsData } from "../data/favorites.data";

const favorites: Favorites = {
    artists: [],
    albums: [],
    tracks: []
};

export class FavoritesService {

    getAllFavorites():FavoritesResponse {
        return {
            artists: artists.filter(a => favorites.artists.includes(a.id)),
            albums: albums.filter(a => favorites.albums.includes(a.id)),
            tracks: tracks.filter(t => favorites.tracks.includes(t.id)),
        }
    }

    addTrackToFavorites(id: string) {
        const track = tracks.find((t) => t.id === id);
        if(!track) throw new Error('Track not found');

        if(!favorites.tracks.includes(id)){
            favsData.tracks.push(id);
        }
        return favorites;
    }

    deleteTrackFromFavorites(id: string){
        const includeInFavorite = favorites.tracks.find((t) => t === id);
        if(!includeInFavorite) throw new Error('Track is not in favorite');


        favorites.tracks = favorites.tracks.filter(t => t !== id);
        return favorites.tracks;
    }

    addAlbumToFavorites(id: string){
        const album = albums.find((a) => a.id === id);
        if(!album) throw new Error('Album not found');

        if(!favorites.albums.includes(id)){
            favsData.albums.push(id);
        }
        return favorites;
    }
    deleteAlbumFromFavorites(id: string) {
        const includeInFavorite = favorites.albums.find((a) => a === id);
        if(!includeInFavorite) throw new Error('Albums is not in favorite');


        favorites.albums = favorites.albums.filter(a => a !== id);
        return favorites.albums;
    }
    addArtistToFavorites(id: string){
        const artist = artists.find((a) => a.id === id);
        if(!artist) throw new Error('Artist not found');

        if(!favorites.artists.includes(id)){
            favsData.artists.push(id);
        }
        return favorites;
    }
    deleteArtistFromFavorites(id: string){
        const includeInFavorite = favorites.artists.find((a) => a === id);
        if(!includeInFavorite) throw new Error('Artist is not in favorite');

        favorites.artists = favorites.artists.filter(a => a !== id);
        return favorites.artists;
    }
}
