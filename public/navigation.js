const overlay = document.getElementById('overlay');
const overlayContent = document.getElementById('overlayContent');
const openOverlayBtn = document.getElementById('openOverlayBtn');
const homeBtn = document.getElementById('homeBtn');
const body = document.body;

function openOverlay() {
    overlay.style.display = 'block';
    setTimeout(() => {
        overlayContent.style.transform = 'translateX(0)';
        homeBtn.style.display = "none";
        body.style.overflowY = 'hidden';
    }, 10);
}

function closeOverlay() {
    overlayContent.style.transform = 'translateX(-100%)';
    setTimeout(() => {
        overlay.style.display = 'none';
        homeBtn.style.display = "block";
        body.style.overflowY = "auto";
    }, 300);
}

openOverlayBtn.addEventListener('click', function(){
    if (overlay.style.display == 'block'){
        closeOverlay();
    } else {
        openOverlay();
    }
});