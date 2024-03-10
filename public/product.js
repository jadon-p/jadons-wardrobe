/*Add Product to this list */
var currentImageIndex = {
    1: 0,
    pants: 0,
    shoes: 0
  };

/*Add images to this list */
var images = {
    1: [
      'img/outfit_1.jpg',
      'img/outfit_2.jpg',
      'img/outfit_3.jpg'
    ],
    pants: [
      'path/to/pants1.jpg',
      'path/to/pants2.jpg',
      'path/to/pants3.jpg'
    ],
    shoes: [
      'path/to/shoes1.jpg',
      'path/to/shoes2.jpg',
      'path/to/shoes3.jpg'
    ]
};

function openModal(id) {
    document.getElementById("modal"+id).style.display = 'flex';
    document.body.style.overflow = "hidden";
    document.getElementById("navBar").style = "display:none";
    showImage(id);
}

function closeModal(id) {
    document.getElementById('modal'+id).style.display = 'none';
    document.body.style.overflowY = "auto";
    document.getElementById("navBar").style = "display:block";
}

function showImage(id) {
    document.getElementById('modalImage'+id).src = images[id][currentImageIndex[id]];
}

function prevImage(id) {
    currentImageIndex[id] = (currentImageIndex[id] - 1 + images[id].length) % images[id].length;
    showImage(id);
}

function nextImage(id) {
    currentImageIndex[id] = (currentImageIndex[id] + 1) % images[id].length;
    showImage(id);
}
