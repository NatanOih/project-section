
frame = document.getElementById('frame')


const projects = {
    'particles' : 'Projects\\Particles\\index.html',
    'colorgen' :'Projects\\Random Color Generator\\index.html',
    'dark' : 'Projects\\Dark Mode Toggle - with css ceperation\\index.html',
    'clock' : 'Projects\\Digital Clock UI Design Using CSS3 & jQuery\\index.html',
    'drum' : 'Projects\\Drum Kit\\Drum Kit\\index.html',
    'qrcode' : 'Projects\\Generate QR Codes\\index.html',
    'pizza' : 'Projects\\Responsive Pizza Website\\index.html',
    'rpc' : 'Projects\\Rock, Paper & Scissors with JavaScript, CSS & HTML\\index.html',
    'ttt' : 'Projects\\Tic Tac Toe\\index.html',
    'tindog' : 'Projects\\TinDog\\TinDog-Start-master\\index.html'
}



Object.keys(projects).forEach(element => {
    let current = document.getElementById(element);
    current.addEventListener('click', () => {
        frame.src = projects[element];
        document.querySelector('.popout-img').style.display = 'block';
        // document.querySelector('.popout-img .img').src = image.getAttribute('src');

        document.querySelector('.popout-img span').onclick = () => {
        document.querySelector('.popout-img').style.display = 'none';
        }

    } )

});




