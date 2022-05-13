import {Client} from "../Client.js"

export async function GetItemsByType(type){
    const response = await Client.items().type(type).depthParameter(5).toPromise();
    console.log(response);
    return response;
};
  

  