//fonction pour afficher une page de la galerie à partir d'un template
export function displayGallery(galleryData){
    const container = document.querySelector('#galerie');
    const templateSource = document.querySelector('#photoTemplate').innerHTML;
    const template = Handlebars.compile(templateSource);
    const html = template({galleryData});
    container.innerHTML = html;
    console.log(galleryData);
}