<?php
include "dbconnection.php";
if(isset($_POST['id'])){
    $id = $_POST['id'];
    $sql = "select  * from form where id = '$id'";
    $result = $conn->query($sql);
    if(!$result){
        echo "Error while fetching row data".$conn->error;
    }
    else{
       $row= $result->fetch_assoc();
       //returning json format data as Response to Ajax call 
       echo json_encode($row);
    }
}
?>