import {PHOTO_API} from './api.js';

//fonction pour charger les données d'une image de l'api au format json
export async function loadPicture(idPicture){
    try{
        const response  = await fetch(PHOTO_API + "/photos/" + idPicture, { method : 'GET', credentials: 'include'});
        if(response.ok){
            return response.json();
        } else{
            return Promise.reject(new Error(response.statusText));
        }
    } catch(e){
        console.error(e)
    }
}

//fonction pour charger les données d'une ressource de l'api au format json
export async function loadRessources(uri){
    try{
        const response  = await fetch("https://webetu.iutnc.univ-lorraine.fr" + uri, { method : 'GET', credentials: 'include'});
        if(response.ok){
            return response.json();
        } else{
            return Promise.reject(new Error(response.statusText));
        }
    } catch(e){
        console.error(e)
    }
}