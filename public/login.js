function googleLogin(){
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)

    .then(result=>{
        const user = result.user;
        if (checkLogin){
            document.getElementById("desc").innerText = "LOGIN SUCCESSFUL";
            document.getElementById("productBtn").innerText = "Continue to Products";
            document.getElementById("productBtn").href = "javascript:resetPage(\"products\")";
            loadAccount();
        }
    })
    .catch(console.log)
}

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

function loadAccount(){
    if(checkLogin()){
        document.getElementById("loginOverlay").id = "accountOverlay";
        var account = document.getElementById("loginTab");
        account.innerText = "Account";
        account.href = "javascript:openNewContent(\'account\')";
        account.id = "accountTab";

        var accountNav = document.getElementById("loginBtn");
        accountNav.innerText = "Account";
        accountNav.href = "javascript:openNewContent(\'account\')";
        accountNav.id = "accountBtn";

    }
}

function userSignOut(){
    firebase.auth().signOut().then(function() {
        resetPage("home");
        if (!checkLogin()){
            alert("LOG OUT SUCCESSFUL");  
            userChange();
        }
    }).catch(function(error) {
        // An error happened.
    });
}

function deleteUser(){
    var user = firebase.auth().currentUser;
    user.delete().then(function() {
        resetPage("home");
        if (!checkLogin()){
            alert("ACCOUNT DELETED");  
            userChange();
        }
    }).catch(function(error) {
        // An error happened.
    });
}

function userChange(){
    document.getElementById("accountOverlay").id = "loginOverlay";
    var login = document.getElementById("accountTab");
    login.innerText = "Login";
    login.href = "javascript:openNewContent(\'login\')";
    login.id = "loginTab";   

    var loginNav = document.getElementById("accountBtn");
    loginNav.innerText = "Login";
    loginNav.href = "javascript:openNewContent(\'login\')";
    loginNav.id = "loginBtn";
}

