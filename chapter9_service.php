<?php
    if($_POST['action'] == 'addRunner'){
        $fname = htmlspecialchars($_POST['txtFirstName']);
        $lname = htmlspecialchars($_POST['txtLastName']);
        $gender = htmlspecialchars($_POST['ddlGender']);
        $minutes = htmlspecialchars($_POST['txtMinutes']);
        $seconds = htmlspecialchars($_POST['txtSeconds']);
        if(preg_match('/[^\w\s]/i', $fname) || preg_match('/[^\w\s]/i', $lname)){
            fail('Invalid name provided.');
        }
        if(empty($fname)||empty($lname)){
            fail('Please enter a first and last name.');
        }
        if(empty($gender)){
            fail('Please select a gender.');
        }
        $time = $minutes.":".$seconds;
        $query = "INSERT INTO runners SET first_name='$fname', last_name='$lname',
        gender='$gender', finish_time='$time'";
        $result = db_connection($query);
        if($result){
            $msg = "Runner: ".$fnmae." ".$lname." added successfully";
            success($msg);
        }else {
            fail('Insert failed.');
        } exit;

    }elseif ($_GET['action'] == 'getRunners') {
        # code...
        $query = "select first_name, last_name, gender, finish_time from runners order by finish_time asc";
        $result = db_connection($query);
        $myArray = array();
        while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
            # print_r($row);
            array_push($myArray, $row);//version 1: add new items onto the end of an array
            /// below is version 2, it's a hf jQuery book style:
            // array_push($myArray, array('fname' => $row['first_name'], 'lname' => $row['last_name'], 'gender' => $row['gender'], 'time'=>$row['finish_time']));
        }
        //echo json_encode(array("runners"=>$myArray));
        //below is version 1: my style
        echo json_encode($myArray);//return a JSON object to whatever called the file--i.e., a browser or an AJAX call, etc
        exit;
    }
    function db_connection($query){
        mysql_connect('127.0.0.1', 'runner_db_user', 'runner_db_password') OR die('Could not connect to database.');
        mysql_select_db('hfjq_race_info');
        /* echo "Connected!";*/
        return mysql_query($query);

    }

    function fail($message){
        die(json_encode(array('statusCode'=>'fail', 'message'=>$message)));
    }
    function success($message){
        die(json_encode(array('statusCode'=>'success', 'message'=>$message)));
    }


?>