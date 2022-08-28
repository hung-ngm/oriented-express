export const getAllArtists = (artists: Array<any>) : string => {
    let result = '';
    artists.forEach((artist, index) => {
        if (index === artists.length - 1) {
            result += artist.name;
        } else {
            result += artist.name + ', ';
        }
    });
    result = result.slice(0, 30);
    return result;
}