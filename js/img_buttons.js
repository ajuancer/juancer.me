// for (i=1; 2; i++) {
//     img_e = document.getElementById('img' + i)
//     link_e = document.getElementById('aimg' + i)
//     link_e.setAttribute('href', img_e.src)
//     console.log(img_e.src);
// }

all_imgs = document.getElementsByTagName('img')
all_links = document.getElementsByClassName('aimg')

console.log(all_imgs);
console.log(all_links);

for (i=0; all_imgs.length; i++) {
    img_e = all_imgs[i]
    link_e = all_links[i]
    link_e.setAttribute('href', img_e.src)
    console.log(img_e.src);
}