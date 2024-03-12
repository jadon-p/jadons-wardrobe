/*Add Product to this list */
var currentImageIndex = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0
  };

/*Add images to this list */
var images = {
    1: [
      'img/1/front.jpeg',
      'img/1/back.jpeg',
    ],
    2: [
      'img/2/front.jpeg',
      'img/2/back.jpeg',
      'img/2/folded.jpeg',
    ],
    3: [
      'img/3/front.jpeg',
      'img/3/back.jpeg',
    ],
    4: [
      'img/4/front.jpeg',
      'img/4/back.jpeg',
    ],
    5: [
      'img/5/front.jpeg',
      'img/5/back.jpeg',
    ],
    6: [
      'img/6/front.jpeg',
      'img/6/back.jpeg',
    ],
    7: [
      'img/7/front.jpeg',
      'img/7/back.jpeg',
      'img/7/folded.jpeg',
    ],
    8: [
      'img/8/front.jpeg',
      'img/8/back.jpeg',
    ],
    9: [
      'img/9/front.jpeg',
      'img/9/back.jpeg',
    ],
    10: [
      'img/10/front.jpeg',
      'img/10/back.jpeg',
      'img/10/folded.jpeg',
    ],
    11: [
      'img/11/front.jpeg',
      'img/11/back.jpeg',
    ],
    12: [
      'img/12/front.jpeg',
      'img/12/back.jpeg',
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
    document.getElementById('modal'+id).remove();
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
