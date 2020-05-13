<?php
require 'connect.php';
$id=$_GET['id'];
$students = [];
$sql = "SELECT * FROM students WHERE sID='$id'";
if($results=mysqli_query($con,$sql)){
    $cr=0;
  $row=mysqli_fetch_assoc($results);
  echo $json= json_encode($row);

}

else{
http_response_code(404);

}

?>