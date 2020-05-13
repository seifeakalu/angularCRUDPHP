<?php
/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
require 'connect.php';
$postdata=file_get_contents("php://input");
// Check connection
if($con === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
 
$request=json_decode($postdata);
$fName=mysqli_real_escape_string($con,trim($request->fName));
$lName=mysqli_real_escape_string($con,trim($request->lName));
$email=mysqli_real_escape_string($con,trim($request->email));
// Attempt insert query execution
$sql = "INSERT INTO students (fName, lName, email) VALUES ('$fName', '$lName', '$email')";
if(mysqli_query($con, $sql)){
 http_response_code(201);
} else{
   http_response_code(422);
}
 
// Close connection
mysqli_close($con);
?>