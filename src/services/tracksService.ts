import { Track, CreateTrackDto } from '../interfaces/track.type';
import { tracks } from '../data/track.data';
import { v4 as uuid } from 'uuid';

export class TrackService {
    getAllTracks(): Track[] {
        return tracks;
    }

    getTrackById(id: string): Track | undefined {
        return tracks.find((track) => track.id === id)

    }

    createTrack(dto: CreateTrackDto) : Track {
        const newTrack = {
            id: uuid(),
            name: dto.name,
            artistId: dto.artistId ?? null,
            albumId: dto.albumId ?? null,
            duration: dto.duration,
        }
        tracks.push(newTrack);
        return newTrack;
    }

    updateTrack(id: string, dto: CreateTrackDto): Track | null{
        const track = tracks.find((track) => track.id === id)
        if(!track) {
            return null
        }

        track.name = dto.name
        track.artistId = dto.artistId ?? null
        track.albumId = dto.albumId ?? null
        track.duration = dto.duration

        return track
    }

    deleteTrack(id: string): boolean {
        const index = tracks.findIndex((u) => u.id === id);
        if (index === -1) return false;
    
        tracks.splice(index, 1);
        return true;
      }

}