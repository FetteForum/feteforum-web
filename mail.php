<?php
//get data from form  

$name = $_POST['name'];
$email= $_POST['email'];
$phone= $_POST['phone'];
$category= $_POST['message'];

$to = "g8vannitd@gmail.com";
$subject = "Community Form";

$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Phone No. = " . $phone . "\r\n Category =" . $category;
$headers = "From: noreply@feteforum.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:index.html");
?>


