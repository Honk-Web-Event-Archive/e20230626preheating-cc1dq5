<?php
// Check if the GET parameter "plot_id" exists
if(isset($_GET['plot_id'])) {
    // Get the value of "plot_id"
    $plot_id = $_GET['plot_id'];

    // Read the JSON file with the same name as "plot_id"
    $json_file = $plot_id . ".json";
    $json_data = file_get_contents($json_file);

    // Return the JSON data to the user
    header('Content-Type: application/json');
    echo $json_data;
} else {
    // Return an error message if "plot_id" is not provided
    echo "No plot_id parameter provided.";
}
?>
