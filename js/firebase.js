var app_firebase = {};
(function() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCWXIYLiKtc2sp4xfZ3Lonk8vNeIR4MLRY",
        authDomain: "lotto-29b94.firebaseapp.com",
        databaseURL: "https://lotto-29b94.firebaseio.com",
        projectId: "lotto-29b94",
        storageBucket: "lotto-29b94.appspot.com",
        messagingSenderId: "46129835047"
    };
    firebase.initializeApp(config);
    app_firebase = firebase;
})()