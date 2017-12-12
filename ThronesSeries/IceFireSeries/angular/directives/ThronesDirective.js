/*AllBook directive for color differentiation*/
thronesApp.directive("allBooks",function(){
var index = 1;
return {
restrict: "E",
replace: true,
templateUrl : "./views/AllBooks-view.html",
link  : function(scope,element,attrs){
element.css({"background-color": "#E8B8CD","color": "black"
,"border" :"2px solid grey","font-size" :"1em"});
element.on('mouseenter', function(event){
angular.element(element[0].children[0]).css({ "transform" : 'scale(1.2)',"margin-bottom" : "50px","margin-top" : "50px"});
});
// Resizing the product to its original size on mouseleave
element.on('mouseleave', function(event){
angular.element(element[0].children[0]).css({ "transform" : 'scale(1)', "margin-bottom" : "0","margin-top" : "30px"});
});
}
};
});// end directive

/*AllHouse directive for color differentiation*/
thronesApp.directive("allHouses", function(){
return {
restrict: "E",
replace: true,
templateUrl : "./views/AllHouses-view.html",
link  : function(scope,element,attrs){
element.css({"background-color":"#ccffef","color": "black"
,"border" :"2px solid grey","font-size" :"1em"});
element.on('mouseenter', function(event){
angular.element(element[0].children[0]).css({ "transform" : 'scale(1.2)',"margin-bottom" : "50px","margin-top" : "50px"});
});
// Resizing the product to its original size on mouseleave
element.on('mouseleave', function(event){
angular.element(element[0].children[0]).css({ "transform" : 'scale(1)', "margin-bottom" : "0","margin-top" : "30px"});
});
}
};
});// end directive


/*AllCharacter directive for color differentiation*/
thronesApp.directive("allCharacter",function(){
return {
restrict: "E",
replace: true,
templateUrl : "./views/AllChar-view.html",
link  : function(scope,element,attrs){
element.css({"background-color": "#D0DB99","color": "black"
,"border" :"2px solid grey","font-size" :"1em"});
element.on('mouseenter', function(event){
angular.element(element[0].children[0]).css({ "transform" : 'scale(1.2)',"margin-bottom" : "50px"
,"margin-top" : "50px","font-size":"0.8em"});
});
// Resizing the product to its original size on mouseleave
element.on('mouseleave', function(event){
angular.element(element[0].children[0]).css({ "transform" : 'scale(1)', "margin-bottom" : "0"
,"margin-top" : "30px","font-size":"1em"});
});
}
};
});// end directive
