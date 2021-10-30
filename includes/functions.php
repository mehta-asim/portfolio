<?php

$result = array();

function getImgSrc($conn){
    $query = "SELECT * FROM imagesrc";

$runQuery = $conn->query($query);

while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
    $result[] = $row;
   }

   return $result;
}