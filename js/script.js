
	$(document).ready(function()   {
	$("#btn_log").click(function() {
		var username=$("#email").val();
		var password=$("#pwd").val();
		if(username=="")
		{
			$("#email_error").text("required");
		}
		else if(!(/^[a-zA-Z]+$/.test(username)))
		{
			$("#email_error").text("only alphabets");
		}

		else
		{
			$("#email_error").text("")
		}

			if(password=="")
			{
				$("#pwd_error").text("required");
			}
			else if ((password.length<=8)||(password.length>=13)) 
			{
				$("#pwd_error").text("invalid length");
			}
			
			else
				{
					$("#pwd_error").text("")
				}


			
		});


	$("#btn_cr").click(function(){
		var firstname=$("#fname").val();
		var lastname =$("#lname").val();
			var x    =$("#e-mail").val();//email validation using rglr exprsn
		  	var y	 =$("#e-mail2").val();
			var ex	 ="/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/";
			var pswdn =$("#pswd").val();
		 
		  	//var atpos    = x.indexOf("@");//email validtn using normal exprsn
	    	//var dotpos   = x.lastIndexOf(".");
	    	//var at    = y.indexOf("@");
	    	//var dot   = y.lastIndexOf(".");
	    	

			if (firstname=="") 
				{
					$("#fname_err").text("requied")
				}
			else
				{
					$("#fname_err").text("");
				}
			if (lastname=="") 
				{
					$("#lname_err").text("required");
				}
			else
				{
					$("#lname_err").text("");	
				}


       		

		if (!(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/).test(x))
	    {
	     $('#email_err').text("Not a valid e-mail address");
	     return false;
	    }
	    else if(!(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/).test(y))
	    {
	     $('#email2_err').text("not a valid email address");
	    } else {
	    	if(x!=y) {
	    		$("#email_err").text("email mismatch");
	    		$("#email2_err").text("email mismatch");
	    	} else {
	    		$("#email_err").text("");
	    		$("#email2_err").text("");
	    	}
	    }


	if (pswdn=null) 
		{
		 $("#pswd_err").text("required");
		}		
    else if((pswdn.length<=8)||(pswdn.length>=13))
        {
		 $("#pswd_err").text("invaid length");
        }
    else
        {
         $("#pswd_err").text("");
        }

     	   var minAge = 13;
           var today = new Date();
           var a=new Date(a);

           var age = _calcAge(a,today);
        if (age < minAge) 
        {
           // alert("You are not allowed into the site. The minimum age is 18!");
           document.getElementById("#lbldob").text("Too young!!!!");
        return false;

        } 
        else
        {
     
         document.getElementById("lbldob").innerHTML="";
        }
         function _calcAge(birthDate, givenDate)
        {
         var years = (givenDate.getFullYear() - birthDate.getFullYear());
      return years;
        }
//

});	
});