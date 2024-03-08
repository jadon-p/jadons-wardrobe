function loadContent(contentType){
    document.getElementById('app').innerHTML="";
    switch (contentType) {
        case "home":
            loadTitle();
            loadMotive();
            break;
        case "products":
            loadProductTitleDiv()
            loadProducts();
            break;
        case "contact":
            break;
        default:
            break;
    }
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
    var line2 = "• All clothing pieces are second hand<br>";
    var line3 = "• There is no delivery for any pieces<br>";
    var line4 = "• Payments are cash only<br>";
    var line5 = "• There are no refunds or exchanges<br>";
    var line6 = "• Sizes are as accurate as possible<br>";
    return line1 + line2 + line3 + line4 + line5 + line6;
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
    card_container.innerHTML = "<h3>Jadon Puertollano</h3> <h4>Occupation: Bum</h4> ";

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
    productButton.href = "javascript:resetProductsPage()";
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

function resetHomePage(){
    loadContent('home');
    scrollToElement('title-container');
}

function resetProductsPage(){
    loadContent('products');
    scrollToElement('productDiv');
}

loadContent("home");