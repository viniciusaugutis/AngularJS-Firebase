    var config = {
        apiKey: "AIzaSyAhpB6vSv_SorysJNq9F7LhWO-ywTDVYuo",
        authDomain: "projeto-teste-com-angular.firebaseapp.com",
        databaseURL: "https://projeto-teste-com-angular.firebaseio.com",
        storageBucket: "projeto-teste-com-angular.appspot.com"
    };

    firebase.initializeApp(config);


    angular.module('app', ['firebase']).controller('MyCtrl', function($firebaseObject){
        const rootRef = firebase.database().ref().child('angular');
        const ref = rootRef.child('object');
        this.object = $firebaseObject(ref); //fazendo isso o objeto pega o dado atualizado que tem no firebase database,
        //que foi passando a referencia do child. No caso Angular -> object. Assim as mudanças também são sincronizadas.


    });



