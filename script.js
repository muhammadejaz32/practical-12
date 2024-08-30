let toggle = document.getElementById('btn');
let mode ='lightmode';

function togglecontent(){
    if(mode === 'lightmode'){
        document.body.classList.add('darkmode');
        mode = "darkmode";
        toggle.innerText="Dark Mode";
    }
    else{
        document.body.classList.remove('darkmode');
        mode = "lightmode";
        toggle.innerText="Light Mode";
    }
}