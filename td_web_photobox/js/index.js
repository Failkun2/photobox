import {loadPicture, loadRessources} from './photoloader.js';
import {displayPicture} from './ui.js';
import {load, next, prev, first, last} from './gallery.js';
import {displayGallery} from './gallery_ui.js';

//fonction pour charger les ressources pour l'affichage d'une image en détail
async function getPicture(id){
    const photo = await loadPicture(id);
    const categorie = await loadRessources("/www/canals5/phox/api/photos/" + id + "/categorie/");
    const comments = await loadRessources("/www/canals5/phox/api/photos/" + id + "/comments/");
    if(photo && categorie && comments){
        displayPicture(photo, categorie, comments);
        document.querySelector('#photo_detail').style.display = 'block';
        document.querySelector('#fermer').style.display = 'block';
    }
}

//fonction pour charger une page de la galerie dépendant de l'action
async function chargerGalerie(action){
    const galerie = await action();
    displayGallery(galerie);
}

//événement pour charger la galerie par défaut
document.querySelector('#load-gallery').addEventListener('click', async () =>{
    const galerie = await load();
    displayGallery(galerie);
});

//événement pour charger la première page de la galerie
document.querySelector('#first').addEventListener('click', async () =>{
    chargerGalerie(first);
});

//événement pour charger la page précédante de la galerie
document.querySelector('#prev').addEventListener('click', async () =>{
    chargerGalerie(prev);
});

//événement pour charger la page suivante de la galerie
document.querySelector('#next').addEventListener('click', async () =>{
    chargerGalerie(next);
});

//événement pour charger la dernière page de la galerie
document.querySelector('#last').addEventListener('click', async () =>{
    chargerGalerie(last);
});

//événement pour gérer l'affichage de l'image choisi
document.querySelector('#galerie').addEventListener('click', (e) => {
        const target = e.target;
        if(target.tagName === 'IMG' && target.id){
            console.log(target.id);
            getPicture(target.id);
        }
});

//événement pour fermer l'affichage en détail de l'image
document.querySelector('#photo_detail').addEventListener('click', (e) => {
    console.log(e.target.tagName);
    if(e.target.id === "fermer" && e.target){
        document.querySelector('#photo_detail').style.display = 'none';
        document.querySelector('#fermer').style.display = 'none';
    }
});

//événement pour charger la page
window.addEventListener('DOMContentLoaded', async () => {
    const galerie = await load();
    await displayGallery(galerie);
    document.querySelector('#photo_detail').style.display = 'none';
    document.querySelector('#fermer').style.display = 'none';
});