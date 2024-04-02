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
        case "login":
            loadLoginPage();
            break;
        case "account":
            loadAccountPage();
            break;
        default:
            break;
    }
}

function generateContactText(){
    var line1 = "• Feel free to msg me about any questions<br>";
    var line2 = "• Links to my socials are on the right<br>";
    var line3 = "• Want anything delivered? Pay for my flight/gas :)<br>";
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

function loadAccountPage(){
    var div = document.createElement("div");
    div.className = "accountDiv";

    var titleContainer = document.createElement("div");
    titleContainer.id = "accountTitleContainer";
    div.append(titleContainer);

    var title = document.createElement("h5");
    title.innerText = "ACCOUNT";
    titleContainer.append(title);
    document.getElementById('app').appendChild(div);

    var welcomeMsgDiv = document.createElement("div");
    welcomeMsgDiv.id = "welcomeMsgDiv";
    div.append(welcomeMsgDiv);
    
    var welcomeMsg = document.createElement("h6");
    welcomeMsg.innerText = "Welcome "+ firebase.auth().currentUser.displayName + "!\nYour saved products are below:";
    welcomeMsgDiv.append(welcomeMsg);

    var savedProductsDiv = document.createElement("div");
    savedProductsDiv.id = "savedProducts";
    div.append(savedProductsDiv);

    var accountBtnDiv = document.createElement("div");
    accountBtnDiv.id = "accountBtnDiv";
    div.append(accountBtnDiv);

    var signOutBtn = document.createElement("a");
    signOutBtn.id = "signOutBtn";
    signOutBtn.className = "customBtn";
    signOutBtn.innerHTML = "Log out";
    signOutBtn.href = "javascript:userSignOut()";
    accountBtnDiv.append(signOutBtn);

    accountBtnDiv.append("<br>");

    var deleteBtn = document.createElement("a");
    deleteBtn.id = "deleteBtn";
    deleteBtn.className = "customBtn";
    deleteBtn.innerHTML = "Delete Account";
    deleteBtn.href = "javascript:deleteUser()";
    accountBtnDiv.append(deleteBtn);

    document.getElementById('app').appendChild(div);
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
    card_img.src = "img/self/profile_2.jpg";

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

function loadLoginPage(){
    var div = document.createElement("div");
    div.className = "loginDiv";

    var titleContainer = document.createElement("div");
    titleContainer.id = "loginTitleContainer";
    div.append(titleContainer);
    
    var title = document.createElement("h5");
    title.innerText = "LOGIN";
    titleContainer.append(title);

    var loginDescDiv = document.createElement("div");
    loginDescDiv.id = "loginDescDiv";
    div.append(loginDescDiv);

    var description = document.createElement("h6");
    description.id = "desc";
    description.innerText = "What features do I get?\n• Save the products you want\n• Get updates on new products\n• Yea thats about it ngl";
    loginDescDiv.append(description);

    var loginBtnDiv = document.createElement("div");
    loginBtnDiv.id = "loginBtnDiv";
    div.append(loginBtnDiv);

    var loginButton = document.createElement("a");
    loginButton.id = "loginBtn";
    loginButton.className = "customBtn";
    loginButton.innerHTML = "Login with Google";
    loginButton.href = "javascript:googleLogin()";
    loginBtnDiv.append(loginButton);
    document.getElementById('app').appendChild(div);

    var script = document.createElement("script");
    script.src = "login.js";
    document.getElementById('app').appendChild(script);
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
    card_img.src = "img/self/profile_1.jpg";

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

    var motiveButtonDiv = document.createElement("div");
    motiveButtonDiv.className = "motiveBtnDiv";

    var productButton = document.createElement("a");
    productButton.id = "productBtn";
    productButton.innerHTML = "View Products";
    productButton.href = "javascript:resetPage('products')";
    productButton.className = "customBtn";

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

    loadProductCard("1","img/1/thumbnail.jpeg", "Vintage Polo Shirt", "$30", "Second-hand Spiderman Polo <br> Size: L");
    loadProductCard("2","img/2/thumbnail.jpeg", "T.M. Lewin Pants", "$35", "Second-hand Navy Blue Cotton Pants <br> Size: 32S");
    loadProductCard("3","img/3/thumbnail.jpeg", "Vintage Nautica Polo", "$20", "Brand New Gray Polo <br> Size: L");
    loadProductCard("4","img/4/thumbnail.jpeg", "Vintage Florida Sweater", "$40", "Second-hand Grey Sweater <br> Size: XL");
    loadProductCard("5","img/5/thumbnail.jpeg", "Tommy Hilfiger Hoodie", "$50", "Second-hand Black Hoodie <br> Size: M");
    loadProductCard("6","img/6/thumbnail.jpeg", "Tommy Hilfiger Hoodie", "$70", "Brand New White Hoodie <br> Size: M");
    loadProductCard("7","img/7/thumbnail.jpeg", "H. Brothers Pants", "$20", "Second-hand Black Polyester Pants <br> Size: 82 Stretch Skinny");
    loadProductCard("8","img/8/thumbnail.jpeg", "Ralph Lauren Polo", "$45", "Vintage Second-hand Plaid Polo <br> Size: L");
    loadProductCard("9","img/9/thumbnail.jpeg", "David Taylor Polo", "$20", "Brand New Blue Polo <br> Size: L");
    loadProductCard("10","img/10/thumbnail.jpeg", "Ralph Lauren Pants", "$60", "Second-hand Green Denim Pants <br> Size: 32 W 32 ");
    loadProductCard("11","img/11/thumbnail.jpeg", "Cooper Hawk Polo Shirt", "$25", "Vintage Brand New Cotton Polo <br> Size: L");
    loadProductCard("12","img/12/thumbnail.jpeg", "Adidas Trefoil Hoodie", "$40", "Second-hand Maroon Hoodie <br> Size: L");
    loadProductCard("13","img/13/thumbnail.jpeg", "Adidas Pants", "$30", "Second-Hand Black Sweatpants <br> Size: L");
    loadProductCard("14","img/14/thumbnail.jpeg", "Adidas Hoodie", "$30", "Second-hand Blue Hoodie <br> Size: M");
    loadProductCard("15","img/15/thumbnail.jpeg", "California Hoodie", "$40", "Second-hand Navy Hoodie <br> Size: L");
    loadProductCard("16","img/16/thumbnail.jpeg", "Converse T-Shirt", "$20", "Second-hand White Long Sleeve <br> Size: M");
    loadProductCard("17","img/17/thumbnail.jpeg", "Gap Athletic", "$20", "Second-hand Maroon Long Sleeve <br> Size: M");
    loadProductCard("18","img/18/thumbnail.jpeg", "Giordano T-shirt", "$15", "Brand New White T-shirt <br> Size: L");
    loadProductCard("19","img/19/thumbnail.jpeg", "Grand Slam Polo", "$30", "Vintage Gray Polo <br> Size: L");
    loadProductCard("20","img/20/thumbnail.jpeg", "Hollister T-shirt", "$20", "Second-hand Navy Long Sleeve <br> Size: L");
    loadProductCard("21","img/21/thumbnail.jpeg", "New Balance Pants", "$30", "Second-hand Black Sweatpants <br> Size: L");
    loadProductCard("22","img/22/thumbnail.jpeg", "San Jose Hoodie", "$30", "Second-hand Red Hoodie <br> Size: L");
    loadProductCard("23","img/23/thumbnail.jpeg", "T.H Long Sleeve", "$20", "Second-hand Red/Navy Long Sleeve <br> Size: M");
    loadProductCard("24","img/24/thumbnail.jpeg", "Zara Jacket", "$20", "Second-hand Olive Green Jacket <br> Size: L"); 
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
    productButton.className = "customBtn";
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
    motiveButton.href = "javascript:scrollToElement(\'motive\',65)";
    motiveButton.className = "customBtn";

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
    img_1.src = 'img/self/outfit_1.jpg';
    img_1.style ="width:100%;";
    slide_img1.append(img_1);

    var slide_img2 = document.createElement('div');
    slide_img2.className = 'mySlides fade';
    slideshow_container.append(slide_img2);
    var img_2 = document.createElement('img');
    img_2.src = 'img/self/outfit_2.jpg';
    img_2.style ="width:100%";
    slide_img2.append(img_2);

    var slide_img3 = document.createElement('div');
    slide_img3.className = 'mySlides fade';
    slideshow_container.append(slide_img3);
    var img_3 = document.createElement('img');
    img_3.src = 'img/self/outfit_3.jpg';
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