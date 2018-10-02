<?php
$servername = "ads-db-instance.cmxzoufs5dty.us-west-2.rds.amazonaws.com:3306";
$username = "teste_user";
$password = "123";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully<br>";

$sql = "SELECT * FROM ads_db.outro_teste;";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<br> coluna_1: " . $row["coluna_1"]. "<br> coluna_2: " . $row["coluna_2"]. "<br> coluna_3: " . $row["colluna_3"]. "<br>";
    }
} else {
    echo "0 results";
}
$conn->close();

?>