<!DOCTYPE html>
<html>
<head>
<?php $this->load->helper('url');?>
<title></title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

 	 <!-- <link rel="stylesheet" href="<?php echo base_url().'css/bootstrap.css'?>"> -->
<!-- 
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.js"></script>
 -->
	<title>my home page</title>
	<script type="text/javascript"></script>

</head>
<body bgcolor="skyblue">
	<form enctype="maltipart/form-data">
	<pre>
		name 		<input type="text" name="fname">
		Profile Pic <input type="file" name="file">
		gender 		<input type="radio" name="gender"><input type="radio" name="gender">
		Email		<input type="Email" name="email">
		Address 	<input type="text"  name="Address">
		Country		<select name="Country">
							<option selected="">india</option>
							<option>amerika</option>
							<option>japan</option>
							<option>chaina</option>
					</select>
		hobbies		<input type="checkbox" checked="" name="check" >Reading
					<input type="checkbox" checked="" name="check">Music
					<input type="checkbox" checked="" name="check">Browsing
					<input type="checkbox"  name="">Playing
		Password	<input type="Password" name="pword">
					<button  type="submit" >SAVAE</button>


</pre>
</form>
</body>
</html>