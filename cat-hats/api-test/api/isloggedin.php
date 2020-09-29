<?php

session_start();

if(isset($_SESSION['user'])) {
    echo '{"status": true}';
} else {
    echo '{"sttus": false}';
}
