const overlay = document.getElementById('overlay');
const overlayContent = document.getElementById('overlayContent');
const openOverlayBtn = document.getElementById('openOverlayBtn');
const homeNav = document.getElementById('homeNav');
const body = document.body;

function openOverlay() {
    overlay.style.display = 'block';
    setTimeout(() => {
        overlayContent.style.transform = 'translateX(0)';
        homeNav.style.display = "none";
        body.style.overflowY = 'hidden';
    }, 10);
}

function closeOverlay() {
    overlayContent.style.transform = 'translateX(-100%)';
    setTimeout(() => {
        overlay.style.display = 'none';
        homeNav.style.display = "block";
        body.style.overflowY = "auto";
    }, 300);
}

function openNewContent(content){
    closeOverlay();
    loadContent(content);
}

openOverlayBtn.addEventListener('click', function(){
    if (overlay.style.display == 'block'){
        closeOverlay();
    } else {
        openOverlay();
    }
});

