<?php
    function db_connection($query){
        mysql_connect('127.0.0.1', 'runner_db_user', 'runner_db_password') OR die('Could not connect to database.');
        mysql_select_db('hfjq_race_info');
        /* echo "Connected!";*/
        return mysql_query($query);

    }
    $query = "select first_name, last_name, gender, finish_time from runners order by finish_time asc";
    $result = db_connection($query);
    $myArray = array();
    while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
        # print_r($row);
        //array_push($myArray, $row);//add new items onto the end of an array
        array_push($myArray, array('fname' => $row['first_name'], 'lname' => $row['last_name'], 'gender' => $row['gender'], 'time'=>$row['finish_time']));
    }
    echo json_encode(array("runners"=>$myArray));//return a JSON object to whatever called the file--i.e., a browser or an AJAX call, etc

?>