<?php
$conn = mysqli_connect("localhost","root","","test");
if($conn->connect_error){
    echo "connection error".$conn->connect_error;
}

?>