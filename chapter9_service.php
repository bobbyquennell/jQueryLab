<?php
    mysql_connect('127.0.0.1', 'runner_db_user', 'runner_db_password') OR die('Could not connect to database.');
    mysql_select_db('hfjq_race_info');
    echo "Connected!";
?>