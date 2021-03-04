$(document).ready(function(){
    
    $("input[type=radio]").change(radioButtonSelector);
    
    
//Need to fetch page URL
function radioButtonSelector(){     
var pageURL = $(location).attr("href");

 
//Adding query param to URL
var newURL = pageURL + "?ayush=6"
alert(newURL);
 
//Need to split the URL and query Param 
        
var temp = newURL.split("?");
alert(temp);
  
//Seperated queryParams from URL
        
//queryParams = "www.test.html,ayush=9"

        
var queryParams = temp[1];
alert(queryParams);
// queryParams = "ayush=9"

   
//Now we need to pick up Ayush query param from multiple params
 
if(queryParams.includes("&")){       
	var targetParam = queryParams.split("&");
   alert(targetParam);
	//targetParam = [topic=3, file=jquery-get-current-page-url]

   
	// Loop array to find Ayush
          
	//console.log(targetParam);
          
         
	targetParam.forEach(myFunction);

   
	
 
}else{
	var paramValue = queryParams.split("=");
  alert(paramValue);
	$("input[type=radio][value=" + paramValue[1] + "]").prop("checked", true);
}         
}
function myFunction(item, index) {
              
		if (item.includes("ayush") ){
                  
		var value = item.split("=");   
    alert(value);
		//value=[topic,3]
                  
		

      
		$("input[type=radio][value=" + value[1] + "]").prop("checked", true);
                  
                          
		}		
      
	}
  
  radioButtonSelector();
        
});