function loadContent(contentType){
    document.getElementById('app').innerHTML="";
    switch (contentType) {
        case "home":
            loadTitle();
            loadMotive();
            break;
        case "products":
            loadProductTitleDiv()
            var product = document.createElement("script");
            product.src = "product.js";
            document.getElementById('app').appendChild(product);
            loadProducts();
            break;
        case "contact":
            loadContactPage();
            break;
        default:
            break;
    }
}

function generateContactText(){
    var line1 = "• Feel free to msg me about any questions<br>";
    var line2 = "• Links to my socials are on the right<br>";
    var line3 = "• Want anything delivered? Pay for my flight :)<br>";
    var line4 = "• Don't be dog about the pricing :(<br>";

    return line1 + line2 + line3 + line4;
}

function generateMotiveText(){
    var line1 = "This all started because I realised I had way too many clothes so I figured I should clean out my wardrobe. ";
    var line2 = "I also decided to create this website as part of my portfolio to hopefully not be jobless. ";
    var line3 = "If you have any questions just contact me through whatevever. ";
    var line4 = "I appreciate any feedback and hope you find something you like :)";
    return line1 + line2 + line3 + line4;
}

function generateProductDesc(){
    var line1 = "Please note the following:<br>";
    var line2 = "• All clothing pieces are marked new or second-hand<br>";
    var line3 = "• There is no delivery for any pieces<br>";
    var line4 = "• Payments are cash only<br>";
    var line5 = "• There are no refunds or exchanges<br>";
    var line6 = "• Sizes are as accurate as possible<br>";
    return line1 + line2 + line3 + line4 + line5 + line6;
}

function loadContactPage(){
    var contactDiv = document.createElement("div");
    contactDiv.className = "contactDiv";

    var contactTitleDiv = document.createElement("div");
    contactTitleDiv.className = "contactTitle";

    var contactTitle = document.createElement("h8");
    contactTitle.innerHTML = "CONTACT";

    var contactText = document.createElement("h6");
    contactText.id = "contactText";
    contactText.innerHTML = generateContactText();

    contactTitleDiv.append(contactTitle);
    contactTitleDiv.append(contactText);
    contactDiv.append(contactTitleDiv);

    var card = document.createElement("div");
    card.className = "profile-card";
    card.style = "text-align:center;";

    var card_img = document.createElement("img");
    card_img.style = "width:100%";
    card_img.src = "img/profile_2.jpg";

    var card_container = document.createElement("div");
    card_container.className = "profile-card-container";
    card_container.innerHTML = "<h3>Jadon</h3> <h4>Jobless Bum</h4> ";

    var contacts = document.createElement("div");
    contacts.style = "margin-bottom: 10px;";
    contacts.id = "contacts";

    var facebook = document.createElement("a");
    facebook.href="https://www.facebook.com/Jadon.P29/";
    var facebookLogo = document.createElement("i");
    facebookLogo.className = "fa fa-facebook";
    facebook.append(facebookLogo);

    var instagram = document.createElement("a");
    instagram.href="https://www.instagram.com/jadon.p/";
    var instagramLogo = document.createElement("i");
    instagramLogo.className = "fa fa-instagram";
    instagram.append(instagramLogo);

    contacts.append(instagram);
    contacts.append(" ");
    contacts.append(facebook);

    card.append(card_img);
    card.append(card_container);
    card.append(contacts);

    contactDiv.append(card);
    
    document.getElementById('app').appendChild(contactDiv);
}

function loadMotive(){
    /*Title */
    var motive_container = document.createElement("div");
    motive_container.id = "motive-container";
    motive_container.className = "motive-container";

    var motiveTitleDiv = document.createElement("div");
    motiveTitleDiv.id = "motive";
    motiveTitleDiv.className = "motiveTitleDiv";

    var motiveTitle = document.createElement("h2");
    motiveTitle.innerHTML = "SO WHY DOES THIS EXIST?";

    motiveTitleDiv.append(motiveTitle);

    /*Content*/
    var card = document.createElement("div");
    card.className = "profile-card";

    var card_img = document.createElement("img");
    card_img.style = "width:100%";
    card_img.src = "img/profile.jpg";

    var card_container = document.createElement("div");
    card_container.className = "profile-card-container";
    card_container.innerHTML = "<h3>Jadon</h3> <h4>Occupation: Bum</h4> ";

    var motiveTextDiv = document.createElement('div');
    var motiveText = document.createElement('p'); 
    motiveText.id = 'motiveText';
    motiveText.innerHTML = generateMotiveText();

    card.append(card_img);
    card.append(card_container);
    motiveTextDiv.append(motiveText);
    motive_container.append(card);
    motive_container.append(motiveTextDiv);

    /*Footer*/
    var motiveButtonDiv = document.createElement("div");
    motiveButtonDiv.className = "motiveBtnDiv";

    var productButton = document.createElement("a");
    productButton.id = "productBtn";
    productButton.innerHTML = "View Products";
    productButton.href = "javascript:resetPage('products')";
    productButton.className = "motiveBtn";

    var center2 = document.createElement("div");
    center2.className = "center";

    motiveButtonDiv.append(center2);
    center2.append(productButton);
    
    /*Adding elements to screen*/
    document.getElementById('app').appendChild(motiveTitleDiv);
    document.getElementById('app').appendChild(motive_container);
    document.getElementById('app').appendChild(motiveButtonDiv);
}

function loadProducts(){
    var product_container = document.createElement("div");
    product_container.id = "product-container";
    document.getElementById('app').appendChild(product_container);

    loadProductCard("1","img/outfit_1.jpg", "shirt", "$30", "Some Text");
    loadProductCard("1","img/outfit_1.jpg", "Test", "$30", "Some Text");
    loadProductCard("1","img/outfit_1.jpg", "Test", "$30", "Some Text");
    loadProductCard("1","img/outfit_1.jpg", "Test", "$30", "Some Text");
}

function loadProductCard(id,img_src, name, price, desc){
    var card = document.createElement("div");
    card.className = "productCard";

    var productImg = document.createElement("img");
    productImg.src = img_src;
    productImg.style = "width:100%";

    card.append(productImg);

    var productName = document.createElement("h7");
    productName.innerHTML = name;

    card.append(productName);

    var productPrice = document.createElement("div");
    productPrice.className = "price";
    productPrice.innerHTML = price;

    card.append(productPrice);

    var productDesc = document.createElement("p");
    productDesc.innerHTML = desc;

    card.append(productDesc);

    var cardBtn = document.createElement("button");
    cardBtn.innerHTML = "View Product";
    cardBtn.onclick = function() {
        var modalExists = document.getElementById("modal"+id);
        if (!modalExists){
            loadProductModal(id); 
        } 
        openModal(id);
    };
    
    card.append(cardBtn);

    document.getElementById("product-container").appendChild(card);
}

function loadProductModal(id){
    var clothingModal = document.createElement("div");
    clothingModal.id = "modal"+id;
    clothingModal.className = "modal";

    var modal_content = document.createElement("div");
    modal_content.className = "modal-content";

    clothingModal.append(modal_content);

    var span = document.createElement("span");
    span.className = "close";
    span.onclick = function() {
        closeModal(id);
    };
    span.innerHTML = "&times";

    modal_content.append(span);

    var img = document.createElement("img");
    img.src = "";
    img.className = "modal-image";
    img.id = "modalImage"+id;

    modal_content.append(img);

    var btnDiv = document.createElement("div");
    btnDiv.className = "modalBtnDiv";

    var prevBtn = document.createElement("button");
    prevBtn.id = "prevBtn";
    prevBtn.onclick = function() {
        prevImage(id);
    };
    prevBtn.innerHTML = "<";
    btnDiv.append(prevBtn);

    var rightBtnDiv = document.createElement("div");
    rightBtnDiv.className = "right";

    var nextBtn = document.createElement("button");
    nextBtn.id = "nextBtn";
    nextBtn.onclick = function() {
        nextImage(id);
    };
    nextBtn.innerHTML = ">";

    rightBtnDiv.append(nextBtn);
    btnDiv.append(rightBtnDiv);

    modal_content.append(btnDiv);

    document.getElementById("app").appendChild(clothingModal);
}

function loadProductTitleDiv(){
    var productDiv = document.createElement("div");
    productDiv.className = "productDiv";
    productDiv.id = "productDiv";

    var productTitleContainer = document.createElement("div");
    productTitleContainer.className = "productTitleContainer";

    var productTitle = document.createElement("h5");
    productTitle.innerHTML = "PRODUCTS";
    productTitleContainer.append(productTitle);

    productDiv.append(productTitleContainer);

    var productDescDiv = document.createElement("div");
    productDescDiv.className = "productDescDiv";

    var productDesc = document.createElement("h6");
    productDesc.innerHTML = generateProductDesc();
    productDescDiv.append(productDesc);
    productDiv.append(productDescDiv);

    var productBtnDiv = document.createElement("div");
    productBtnDiv.id = "productBtnDiv";

    var productButton = document.createElement('a');
    productButton.innerHTML = "Scroll to Products";
    productButton.id = "productBtn";
    productButton.href = "javascript:scrollToElement(\'product-container\',15)";
    productBtnDiv.append(productButton);
    productDiv.append(productBtnDiv);
    
    document.getElementById('app').appendChild(productDiv);
}

function loadTitle(){
    var title_container = document.createElement("div");
    title_container.id = "title-container";
    title_container.className = "title-container";

    var titleDiv = document.createElement("div");
    titleDiv.id = "titleDiv";
    titleDiv.className = "titleDiv";

    var title = document.createElement("h1");
    title.innerHTML = "JADON'S (DAD's) WARDROBE";
    titleDiv.append(title);

    var motiveButton = document.createElement("a");
    motiveButton.innerHTML = "WHY DOES THIS EXIST?";
    motiveButton.href = "javascript:scrollToElement(\'motive\',15)";
    motiveButton.className = "motiveBtn";

    titleDiv.append(motiveButton);
    
    var homeDiv = document.createElement('div');
    homeDiv.id = "homeDiv";
    homeDiv.className = "homeDiv";

    title_container.append(titleDiv);
    title_container.append(homeDiv);

    document.getElementById('app').appendChild(title_container);

    var slideshow_container = document.createElement('div');
    slideshow_container.className = 'slideshow-container';

    var slide_img1 = document.createElement('div');
    slide_img1.className = 'mySlides fade';
    slideshow_container.append(slide_img1);
    var img_1 = document.createElement('img');
    img_1.src = 'img/outfit_1.jpg';
    img_1.style ="width:100%;";
    slide_img1.append(img_1);

    var slide_img2 = document.createElement('div');
    slide_img2.className = 'mySlides fade';
    slideshow_container.append(slide_img2);
    var img_2 = document.createElement('img');
    img_2.src = 'img/outfit_2.jpg';
    img_2.style ="width:100%";
    slide_img2.append(img_2);

    var slide_img3 = document.createElement('div');
    slide_img3.className = 'mySlides fade';
    slideshow_container.append(slide_img3);
    var img_3 = document.createElement('img');
    img_3.src = 'img/outfit_3.jpg';
    img_3.style ="width:100%";
    slide_img3.append(img_3);

    homeDiv.append(slideshow_container);
}

function scrollToElement(elementId, offset) {
    var element = document.getElementById(elementId);

    if (element) {
        var offsetPosition = element.offsetTop - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
}

function resetPage(content){
    document.getElementById('app').innerHTML="";
    window.scrollTo(0,0);
    setTimeout(function () {
        loadContent(content);
    }, 10);
}

loadContent("home");