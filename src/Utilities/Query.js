import {Client} from "../Client.js"

export async function Query(type){
    const response = await Client.items().type(type).depthParameter(5).toPromise();
    return response;
}
  

  