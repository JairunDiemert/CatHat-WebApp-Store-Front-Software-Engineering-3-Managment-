<?php

session_start();

$user = $_SESSION['user'];

if($user == 'admin') {
    echo '{
        "message": "This is a secret message only for administrator",
        "success": true
    }';
} else {
    echo '{
        "message": "You are not the cat we are looking for!",
        "success": false
    }';
}

?>