function loginout(event) {
    event.preventDefault();
    if ($("#AUTH_STATE").text() == "Login") {
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function (result) {
            if(result.user.email=="food8123@gmail.com"){
                window.location.replace("/admin");
            }else{
                window.location.replace("/");
            }
        }).catch(function (error) {
            alert(error.message)
        });
    } else if ($("#AUTH_STATE").text() == "Logout") {
        if (confirm("정말로 로그아웃 하시겠습니까?") == false) {
            e.preventDefault();
        } else {
            firebase.auth().signOut().then(function () {
                alert("로그아웃 되었습니다.");
                window.location.replace("/");
            }).catch(function (error) {
                alert(error.message)
            });
        }
    }
}
$("#BTN_GOOGLE_LOGIN").click(function () {
    if ($("#AUTH_STATE").text() == "Login") {
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function (result) {
            if(result.user.email=="food8123@gmail.com"){
                window.location.replace("/admin");
            }
        }).catch(function (error) {
            alert(error.message)
        });
    } else if ($("#AUTH_STATE").text() == "Logout") {
        if (confirm("정말로 로그아웃 하시겠습니까?") == false) {
            e.preventDefault();
        } else {
            var user = firebase.auth().currentUser;
            var isAdmin = false;
            if(user.email=="food8123@gmail.com"){
                isAdmin = true;
            }
            firebase.auth().signOut().then(function () {
                if(isAdmin){
                    window.location.replace("/");
                }
                alert("로그아웃 되었습니다.");
            }).catch(function (error) {
                alert(error.message)
            });
        }
    }
});
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        $("#AUTH_STATE").text("Logout");
    } else {
        $("#AUTH_STATE").text("Login");
    }
});