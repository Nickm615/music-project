// import {ManagementClient} from "../Client.js";
import { createManagementClient,  } from '@kentico/kontent-management';

const projectId = process.env.REACT_APP_PROJECT_ID || '';
const MapiKey = process.env.REACT_APP_MANAGEMENT_API_KEY || '';

let ManagementClient = createManagementClient({
    projectId: 'ce4ae6da-fde8-006e-9e69-bb92eaa6dd94', // id of your Kentico Kontent project
    subscriptionId: 'zzz', // optional, but required for Subscription related endpoints
    apiKey: 'ew0KICAiYWxnIjogIkhTMjU2IiwNCiAgInR5cCI6ICJKV1QiDQp9.ew0KICAianRpIjogImE4M2IzYWJkYzI3MjRhMDhhMmQ2ZTYwYjFlYzQ0MzY4IiwNCiAgImlhdCI6ICIxNjUxNTkzNDI4IiwNCiAgImV4cCI6ICIxOTk3MTkzNDI4IiwNCiAgInZlciI6ICIyLjEuMCIsDQogICJ1aWQiOiAic3NvX2QzN2ZmN2EyLWEyOWQtNGFjZi1iZGU5LWM5ZmMzODFjNDNlZCIsDQogICJwcm9qZWN0X2lkIjogImNlNGFlNmRhZmRlODAwNmU5ZTY5YmI5MmVhYTZkZDk0IiwNCiAgImF1ZCI6ICJtYW5hZ2Uua2VudGljb2Nsb3VkLmNvbSINCn0.RoucAEY41LLuHbd0djFtNHe2Aoeyf7HXJERYZXIvw40' // Content management API token
});
//Retrieve album content type
async function getSongElementId() {
    const response = await ManagementClient.viewContentType()
    .byTypeCodename('album')
    .toPromise();
//Get the id of song element NOT WORKING, id of song element listed here does not match the one returned inside albums, for now I've hard coded the id
    let songElementId = await (response.data.elements.find(e => e.name="Songs")).id;
    // console.log(response.data);
    return songElementId;
};
//Next, I need to get all albums, iterate through them looking for song elements matching element ID and then push those to array, then programatically upsert all song variants with linked item 'album' variant matching 
async function getAlbumVariants() {
    let songElementID = await getSongElementId();

    const response = await ManagementClient.listLanguageVariantsOfContentType()
    .byTypeCodename('album')
    .toPromise();
   response.data.items.forEach(item => {
    let albumId = item.item.id;
    let album = item.rawElements;
       for (let i = 0; i < album.length; i++) {
           const element = album[i];
           if(element.element.id==='0a91ecef-795e-4257-985b-488d6f2ade4c'){
            for (let i = 0; i < element.value.length; i++) {
                const song = element.value[i];
                upsertAlbum(song);
                async function upsertAlbum(song){
                    ManagementClient.changeWorkflowStepOfLanguageVariant()
                    .byItemId(song.id)
                    .byLanguageCodename('default')
                    .byWorkflowStepId('draft')
                    const upsertResponse = await ManagementClient.upsertLanguageVariant()
                    .byItemId(song.id)
                     .byLanguageCodename('default')
                     .withData((builder)=>[
                         builder.linkedItemsElement({
                             element: {
                               codename: 'album'
                             },
                             value: [
                               {
                                 id: albumId
                               }
                             ]
                           }),
                     ])
                     .toPromise();
    
                }
                console.log(song.id)
                 
        
            }
        }
 
           
       }
    
   });
}
getAlbumVariants();

