<?php

$result = array();

function getGallery($conn)
{
    $query = "SELECT * FROM gallery";

    $runQuery = $conn->query($query);

    while ($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
        $result[] = $row;

        // foreach ($result[0] as $piece) {
        //     // foreach ($piece['mediaType'] as $media) {
        //     //     var_dump($media);
        //     // }
        //     $piece['mediaType'] = explode(',', $piece['mediaType']);
        //     var_dump($piece['mediaType']);
        // }
        // var_dump($result[0]);
        // array_map(function($result){
        //     $result[0][]
        // });
    }

    return $result;
}
