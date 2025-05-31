//fonction pour afficher en détail une image à partir d'un template
export function displayPicture(photo, categorie, com){
    const container = document.querySelector('#photo_detail');
    const templateSource = document.querySelector('#photoTemplate').innerHTML;
    const template = Handlebars.compile(templateSource);
    const html = template({photo: photo, categorie: categorie, com: com});
    container.innerHTML = html;
}