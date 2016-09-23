"use strict";angular.module("chatAppApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","firebase"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"vm"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),function(){function a(a,b,c,d,e,f){function g(){f.init(),m.socket=e.init(),h(),j()}function h(){var a,b,c;a=f.setDb("chat_log"),b=f.setDb("system_log"),c=f.setDb("user_entry"),m.listenDb(a),m.listenDb(b),m.listenDb(c)}function i(a){f.listenDb(a,function(a){b.warn("db -> ",a)})}function j(){m.socket.on("user:message",function(a){f.setItem("chat_log",a)}),m.socket.on("user:user_data",function(a){f.setItem("user_entry",a)}),m.socket.on("guest:disconnect",function(a){f.setItem("system_log",a)}),m.socket.on("guest:connected",function(a){f.setItem("system_log",a)})}function k(){var a;a={event:m.form.event,username:m.form.username,timestamp:(new Date).getTime()},m.socket.emit("user:sign_up",a)}function l(){var a;a={event:m.form.event,username:m.form.username,message:m.message,timestamp:(new Date).getTime()},m.socket.emit("user:send_message",a)}var m;m=this,m.signUp=k,m.submitForm=l,m.listenDb=i,m.form={},m.message,m.chat_logs=[],m.system_logs=[],g()}angular.module("chatAppApp").controller("MainCtrl",a),a.$inject=["$scope","$log","$rootScope","$timeout","SocketService","Firebase"]}(),angular.module("chatAppApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),function(){function a(a,b,c,d){function e(){var a;a={apiKey:"AIzaSyBUPtWSIjrJZaN8O-4SLgj928-FNnjXxWc",authDomain:"realtime-chatapp.firebaseapp.com",databaseURL:"https://realtime-chatapp.firebaseio.com",storageBucket:"realtime-chatapp.appspot.com"},firebase.initializeApp(a)}function f(a){return firebase.database().ref(a)}function g(a,b){a.on("value",function(a){d(function(){return b(a.val())},10)})}function h(a,c){i.setDb(a).push(c).then(function(a){b.warn("success_setIntoDatabase -> ",a)},function(a){b.warn("err_setIntoDatabase -> ",a)})}var i;return i={init:e,setDb:f,listenDb:g,setItem:h}}a.$inject=["$firebaseObject","$log","$rootScope","$timeout"],angular.module("chatAppApp").service("Firebase",a)}(),function(){function a(a){function b(){return io()}var c;return c={init:b}}a.$inject=["$log"],angular.module("chatAppApp").factory("SocketService",a)}(),angular.module("chatAppApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/includes/buttons.tmpl.html",'<iframe src="https://ghbtns.com/github-btn.html?user=thulioph&amp;repo=realtime-chatapp&amp;type=watch&amp;count=true&amp;size=large" allowtransparency="true" frameborder="0" scrolling="0" width="152" height="30"></iframe> <iframe src="https://ghbtns.com/github-btn.html?user=thulioph&amp;repo=realtime-chatapp&amp;type=fork&amp;count=true&amp;size=large" allowtransparency="true" frameborder="0" scrolling="0" width="156" height="30"></iframe>'),a.put("views/main.html",'<aside> <!-- Sign up --> <form class="form-area"> <fieldset class="form-group"> <label for="name">Nome</label> <input class="form-control" type="text" id="name" ng-model="vm.form.username" placeholder="Nome"> </fieldset> <fieldset class="form-group"> <label for="event">Evento</label> <input class="form-control" type="text" id="event" ng-model="vm.form.event" placeholder="Qual evento você está?"> </fieldset> <button ng-click="vm.signUp()">Entrar</button> </form> <!-- Mensagem --> <form class="form-area"> <fieldset class="form-group"> <label for="msg">Mensagem</label> <textarea class="form-control" id="msg" ng-model="vm.message" placeholder="Mensagem">\n      </textarea> </fieldset> <fieldset class="form-group"> <button class="btn btn-primary" ng-click="vm.submitForm()"> Perguntar </button> </fieldset> </form> </aside> <aside class="chat-feeds"> <div ng-repeat="event in vm.chat_logs track by event.timestamp"> <li> <span>{{event.username}}</span> <small>{{event.timestamp | date: "h:mma"}}</small> <p>{{event.message}}</p> </li> </div> <!-- <div ng-repeat="log in vm.system_logs">\n    <small>{{log.message}}</small>\n  </div> --> </aside>')}]);