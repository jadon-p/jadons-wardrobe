function checkLogin(){
    var user = firebase.auth().currentUser;
    if (user) {
        // User is signed in
        return true;
    } else {
        // No user signed in
        return false;
    }
}

async function checkProduct(id){
    const userId = firebase.auth().currentUser.uid;
    const db = firebase.firestore();
    const userRef = db.collection('SavedProducts').doc(userId);
    const doc = await userRef.get();

    if(doc.exists){
        let currentArray = doc.data().productIds || [];
        return currentArray.includes(id);
    } else {
        return false;
    }
}

function deleteUser(){
    var user = firebase.auth().currentUser;
    user.delete().then(function() {
        resetPage("home");
        if (!checkLogin()){
            userChange();
        }
    }).catch(function(error) {
        // An error happened.
    });
}

function googleLogin(){
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)

    .then(result=>{
        const user = result.user;
        if (checkLogin){
            document.getElementById("desc").style.textAlign = "center";
            document.getElementById("desc").innerText = "LOGIN SUCCESSFUL!";
            document.getElementById("loginBtn").innerText = "Continue to Products";
            document.getElementById("loginBtn").href = "javascript:resetPage(\"products\")";
            loadAccount();
        }
    })
    .catch(console.log)
}

function loadAccount(){
    if(checkLogin()){
        document.getElementById("loginOverlay").id = "accountOverlay";
        var account = document.getElementById("loginTab");
        account.innerText = "Account";
        account.href = "javascript:openNewContent(\'account\')";
        account.id = "accountTab";

        var accountNav = document.getElementById("loginNav");
        accountNav.innerText = "Account";
        accountNav.href = "javascript:openNewContent(\'account\')";
        accountNav.id = "accountNav";

    }
}

async function removeProduct(id){
    const userId = firebase.auth().currentUser.uid;
    const db = firebase.firestore();
    const userRef = db.collection('SavedProducts').doc(userId);

    const doc = await userRef.get();

    if (doc.exists) {
        let currentArray = doc.data().productIds || [];
        let index = currentArray.indexOf(id);
        if (index !== -1){
            currentArray.splice(index,1);
            userRef.update({
                productIds: currentArray,
            });
        }
    }
}

async function saveProduct(id){
    const userId = firebase.auth().currentUser.uid;
    const db = firebase.firestore();
    const userRef = db.collection('SavedProducts').doc(userId);
    const doc = await userRef.get();

    if(!doc.exists){
        const array = [];
        array.push(id);

        userRef.set({
            userId: userId,
            name: firebase.auth().currentUser.displayName,
            productIds: array,
            email: firebase.auth().currentUser.email,
        })
        
    } else {
        let currentArray = doc.data().productIds || [];
        if (!currentArray.includes(id)){
            currentArray.push(id);
        }
        userRef.update({
            productIds: currentArray,
        });
    }
}

async function showSavedProducts(div){
    const userId = firebase.auth().currentUser.uid;
    const db = firebase.firestore();
    const userRef = db.collection('SavedProducts').doc(userId);
    const doc = await userRef.get();

    if(doc.exists){
        let currentArray = doc.data().productIds || [];
        for (let i = 0; i < currentArray.length;i++){
            getProductCard(Number(currentArray[i]), div);
        }
    }
}

function userChange(){
    document.getElementById("accountOverlay").id = "loginOverlay";
    var login = document.getElementById("accountTab");
    login.innerText = "Login";
    login.href = "javascript:openNewContent(\'login\')";
    login.id = "loginTab";   

    var loginNav = document.getElementById("accountNav");
    loginNav.innerText = "Login";
    loginNav.href = "javascript:openNewContent(\'login\')";
    loginNav.id = "loginNav";
}

function userSignOut(){
    firebase.auth().signOut().then(function() {
        resetPage("home");
        if (!checkLogin()){
            userChange();
        }
    }).catch(function(error) {
        // An error happened.
    });
}
