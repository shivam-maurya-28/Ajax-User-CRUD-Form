<?php
include "dbconnection.php";

$id = $_POST['id'];
$sql = "delete from form where `id` = '$id';";
$result = $conn->query($sql);
if($result){
    echo "success";
}
else{
    echo "Error".$conn->error;
}
?>