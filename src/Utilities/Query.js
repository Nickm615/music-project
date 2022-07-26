import {Client, PreviewClient} from "./Client.js";

export async function GetItemsByType(type, preview){
    if(preview===true){
        let response = await PreviewClient.items().type(type).depthParameter(10).toPromise();
        console.log(response)
        return response;
    
    }
    else{
        let response = await Client.items().type(type).depthParameter(10).toPromise();
        console.log(response)
        return response;
    
    }
};

export async function GetArtist(artist, preview){
    if(preview===true){
        let response = await PreviewClient.item(artist).depthParameter(10).toPromise();
        console.log(response)
        return response
    
    }
    else{
        let response = await Client.item(artist).depthParameter(10).toPromise();
        console.log(response)
        return response
    
    }
};
export async function GetAlbum(album, preview){
    if (preview===true){
        let response = await PreviewClient.item(album).depthParameter(10).toPromise();
        console.log(response)
        return response
    
    }
    else {
        let response = await Client.item(album).depthParameter(10).toPromise();
        console.log(response)
        return response
    
    }
};
export async function GetSong(song, lang, preview){
    if(preview===true){
        let response = await PreviewClient.item(song).depthParameter(10).languageParameter(lang).toPromise();
        console.log(response)
        return response
    
    }
    else{
        let response = await Client.item(song).depthParameter(10).languageParameter(lang).toPromise();
        console.log(response)
        return response
    
    }
};
export async function GetPerformer(performer, preview){
    if(preview===true){
        let response = await PreviewClient.item(performer).depthParameter(10).toPromise();
        console.log(response);
        return response
    
    }
    else{
        let response = await Client.item(performer).depthParameter(10).toPromise();
        console.log(response);
        return response
    
    }
};
export async function GetHeading(lang){
    let response = await Client.item('welcome').languageParameter(lang).depthParameter(10).toPromise();
    console.log(response)
    return response
}
// export async function TestFilter(){
//     let response = await Client.items().type('album').containsFilter('elements.songs', 'codename of target linked item/component').toPromise()
// }

  

  