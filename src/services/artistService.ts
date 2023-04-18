import axios from "axios";
import {ArtistType, SearchParams} from "../modules/types";

export function getArtists(searchParams: SearchParams) {
    return new Promise<{ data: ArtistType }>((resolve) =>
        resolve(axios.get(`https://itunes.apple.com/search?term=${searchParams.term}&limit=${searchParams.dataLimit}&entity=allTrack`))
    );
}
