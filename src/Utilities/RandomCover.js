import {Query} from "./Query.js";

export default async function RandomCover(){
  let response = await Query('album');
  console.log(response)
  let index = Math.floor(Math.random()*response.data.items.length)
  let art = await response.data.items[index].elements.artwork.value[0].url
  console.log(response.data.items[index].elements.artwork.value[0].url)
   return art
   
};

