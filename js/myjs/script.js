
	$(document).ready(function(){
	$("#btn_log").click(function(){
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
		var lastname=$("#lname").val();

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
			
		});	
});