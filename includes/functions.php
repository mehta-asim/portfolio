<?php

$result = array();

function getGallery($conn){
    $query = "SELECT * FROM gallery";

$runQuery = $conn->query($query);

while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
    $result[] = $row;
   }

   return $result;
}