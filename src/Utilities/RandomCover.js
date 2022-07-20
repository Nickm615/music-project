import {GetItemsByType} from "./Query.js";
// Refactor this to iterate and return array of covers using loop
export default async function RandomCover(numberReturned, preview){
  let response = await GetItemsByType('album', preview);
  let result = [];
  for (let i = 0; i < numberReturned; i++) {
    let index = Math.floor(Math.random()*response.data.items.length)
    let art = await (response.data.items[index].elements.artwork.value[0].url + '?w=300&h=300')
    result.push(art)
  
  }
  return result
   
};

