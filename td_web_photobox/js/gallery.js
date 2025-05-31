import {loadRessources} from './photoloader.js';

let currentGallery = null;
let currentLinks = [];

//fonction récupérant les liens pour les différents boutons
function extractLinks(data){
    currentLinks[0] = data.links?.next?.href;
    currentLinks[1] = data.links?.prev?.href;
    currentLinks[2] = data.links?.last?.href;
    currentLinks[4] = data.links?.first?.href;
}

//fonction pour charger une page de la galerie
export async function load(uri = "/www/canals5/phox/api/photos"){
    currentGallery = await loadRessources(uri);
    extractLinks(currentGallery)
    return currentGallery;
}

//fonction pour charger la page suivante
export async function next(){
    return await load(currentLinks[0]);
}

//fonction pour charger la page précédente
export async function prev(){
    return await load(currentLinks[1]);
}

//fonction pour charger la dernière page
export async function last(){
    return await load(currentLinks[2]);
}

//fonction pour charger la première page
export async function first(){
    return await load(currentLinks[3]);
}