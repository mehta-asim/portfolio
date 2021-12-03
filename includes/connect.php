<?php 
    $db_dsn = array( 
        'host' => 'db5005716565.hosting-data.io', // this will change when you go live
        'dbname' => 'dbs4809741', // update this with your database name
        'charset' => 'utf8'
    );

    $dsn = 'mysql:'.http_build_query($db_dsn, '', ';');

    //This is the DB credentials

    $db_user = 'dbu630542';
    $db_pass = 'F26@Ip10'; // windows users leave this blank

    try {
        $pdo = new PDO($dsn, $db_user, $db_pass);
        // var_dump($pdo);
        // echo (in this case) is almost like console.log
        // echo "you're in! enjoy the show";
    } catch (PDOException $exception){
        echo 'Connection Error:'.$exception->getMessage();
        exit();
    }


    // 'host' => 'db5005716565.hosting-data.io', // this will change when you go live
    //     'dbname' => 'dbs4809741', // update this with your database name
    //     'charset' => 'utf8

    // $db_user = 'dbu630542';
    // $db_pass = 'F26@Ip10';