<?php
// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Pre-defined JSON string
    $json_string = '{
        "retcode": 0,
        "message": "OK",
        "data": {
            "device_fp": "38d7edbf0a38c",
            "code": 200,
            "msg": "ok"
        }
    }';

    // Set the response header to indicate JSON content type
    header('Content-Type: application/json');

    // Return the JSON response
    echo $json_string;
} else {
    // Return an error message if the request method is not POST
    $response = array(
        'status' => 'error',
        'message' => 'Invalid request method'
    );

    // Set the response header to indicate JSON content type
    header('Content-Type: application/json');

    // Return the JSON response
    echo json_encode($response);
}
?>