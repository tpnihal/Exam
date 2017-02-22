<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Service extends AnotherClass
{

public function serviceval()
	{
		if(empty($_REQUEST['fname']) && empty($_REQUEST['pword']))
		{
			$user['vchr_fname']=$this->input->get_post('vchr_fname');


			//check fname
				if(!((strlen($user['vchr_fname'])>3)&&(strlen($user['vchr_fname'])<12)))
				 	{
				   	 $user['fname_error']="charecters must btwn 3 & 8";
				   	}
				else if(!preg_match("/^[a-zA-Z ]*$/",$user['vchr_fname'])) 
				   	{
				     $user['fname_error']="Only letters and white space allowed"; 
				    }	
		else
		{
			$msg=array("ResponseCode"=>"404", "msg"=>"try again");
		}
		echo json_encode($msg);
	}
}
}

?>