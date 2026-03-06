import {Artist} from "./artist.type";
import {Album} from "./album.type";
import {Track} from "./track.type";

export interface Favorites {
  artists: string[];
  albums: string[];
  tracks: string[];
}

export interface FavoritesResponse{
  artists: Artist[];
  albums: Album[];
  tracks: Track[];
}
