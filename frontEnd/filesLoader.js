const files = ['./files/img/carp.jpg', './files/img/club.png' , './files/img/crown.png' , './files/img/diamond.png' ,'./files/img/flip.png' ,'./files/img/heart.png' , './files/img/card/0.png', './files/img/card/1.png', './files/img/card/2.png', './files/img/card/3.png'];
let filesLoaded = 0;
const progressBar = $('#progress_bar');
const fileOnload = () => {
    filesLoaded ++;
    const persent = Math.floor((filesLoaded / files.length) * 100);
    progressBar.css('width', `${persent}%`);
    if (filesLoaded === files.length) $('.progress_bar').addClass('hide');
};

export default () => {
    return Promise.all(files.map(f => {
        return new Promise(resolve => {
            const newImg = new Image;
            newImg.onload = function() {
                fileOnload();
                resolve()
            };
            newImg.src = f;
        })
    }));
}