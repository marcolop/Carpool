//setTimeout(function(){
//   console.log("world");
//},3000);

//console.log("Hello");

var mathfun = require ('./mathfun');
var processResults = function(err, results, time){
	if(err){
		console.log("error:"+ err.message);
	}else{
		console.log("the results are:" +results +"("+time+"ms)");
	}
};

for (var i = 0; i<10; i++){
	console.log("calling  'evenDoubler' with paramter'"+ 1 +"'");
}