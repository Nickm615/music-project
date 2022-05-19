import {Client} from "../Client.js"

export async function GetItemsByType(type){
    let response = await Client.items().type(type).depthParameter(5).toPromise();
    console.log(response)
    return response;
};

export async function GetArtist(artist){
    let response = await Client.item(artist).depthParameter(5).toPromise();
    console.log(response)
    return response
};
export async function GetAlbum(album){
    let response = await Client.item(album).depthParameter(5).toPromise();
    return response
};
export async function GetSong(song){
    let response = await Client.item(song).depthParameter(5).toPromise();
    return response
};


  

  