<?php
    function db_connection($query){
        mysql_connect('127.0.0.1', 'runner_db_user', 'runner_db_password') OR die('Could not connect to database.');
        mysql_select_db('hfjq_race_info');
        /* echo "Connected!";*/
        return mysql_query($query);

    }
    $query = "select first_name, last_name, gender, finish_time from runners order by finish_time asc";
    $result = db_connection($query);

    while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
        print_r($row);
        # code...
    }

?>