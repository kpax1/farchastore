const listing = document.getElementById('list');
const close = document.getElementById('close');

const scroll = document.getElementsByClassName('scrollmenu')[0];
const loader = document.getElementById('loading');

const dissaper =()=>{
   scroll.style.display= "none";
   close.style.display= "none";
   listing.style.display= "inline";



}

const appear =()=>{
    scroll.style.display = "flex";
    close.style.display= "inline-block";
    listing.style.display= "none";

}

const loadfunc=()=>{
    loader.style.display = "none";
}

window.addEventListener('load',loadfunc);
listing.addEventListener('click', appear);
close.addEventListener('click', dissaper);

