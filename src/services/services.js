import axios from "axios";

export async function getCharacters(page){
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
    return response.data.results
  } catch (e) {
    return false
  }
}

export async function getCharacterByName(name){
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`);
    return response.data.results
  } catch(e){
    return false
  }
}

export async function getCharacterByID(id){
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    return response.data
  } catch(e){
    return false
  }
}
