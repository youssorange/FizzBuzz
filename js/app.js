$(document).ready(function(){
	$('#text').ready(function(){

	for(var i=1; i <= 100; i++){
		console.log(i);
		if (i % 3 ===0 && i%5 === 0) {
			console.log("fizz buzz");
			$('#text').append("fizz buzz"); 
			$('#text').append("<br/>"); 

		}else if (i % 3 === 0) {
			console.log("fizz");
			$('#text').append("fizz"); 
			$('#text').append("<br/>"); 
		
		}else if (i % 5 === 0) {
			console.log("buzz");
			$('#text').append("buzz"); 
			$('#text').append("<br/>"); 
		

		}else {
			console.log(i);	
			$('#text').append(i); 
			$('#text').append("<br/>"); 

		}
		
	}
	})

})