<?php
include "dbconnection.php";
$id= $_POST['id'];
$name =$_POST['name'];
$email = $_POST['email'];
$password = $_POST['pass'];
if(!empty($name) && !empty($email) && !empty($password)){
    // $sql = "insert into form (`name`,`email`,`password`) values ( '$name','$email','$password');";
    $sql = "insert into form (`id`,`name`,`email`,`password`) values ('$id','$name','$email','$password') on DUPLICATE KEY UPDATE   name = '$name', email = '$email', password = '$password'";
    $result = $conn->query($sql);
    if($result==TRUE){
        echo "success";
    }
    else{
        echo "query is : $sql \n";
        echo "Error".$conn->error;
    }
}
else{
    echo "required all field";
}
?>