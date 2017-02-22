<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Validation extends CI_COntroller
{
	// public function index()
	// {
	// 	$this->load->view('Welcome');
	// }
	public function valid()
	{
		$user['vchr_fname']=$this->input->get_post('fname');
		$user['vchr_gender']=$this->input->get_post('gender');
		$user['vchr_email']=$this->input->get_post('email');
		$user['vchr_address']=$this->input->get_post('address');
		$user['vchr_country']=$this->input->get_post('country');
		$user['vchr_check']=$this->input->get_post('check');
		$user['vchr_profpic']=$_FILES['profpic'];

		$config['upload_path']='uploads/';
		$config['allowed_types'] = 'gif|jpg|png';

		$this->load->library('upload', $config);
				if(!$this->upload->do_upload('file'))
				{
					$user['upload_error'] = $this->upload->display_errors();
				}
				else
				{
					$user['upload_data']=$this->uplaod->data();
				}
		

				$url='http://localhost/exam/index.php/Service/serviceval'	
				$options = array(
    					'http' => array(
        					'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
        					'method'  => 'POST',
        					'content' => http_build_query($user),
    						),
    		$context  = stream_context_create($options);
			$service = file_get_contents($url,false, $context);    // used to call the web service
		// print_r($service);
	 
		// echo $service;
		
		 $json=json_decode($service,true);
				

		
	}
}




   ?>