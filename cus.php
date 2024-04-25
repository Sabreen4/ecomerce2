<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $gen = $_POST['male'];
    $cus_no = $_POST['num'];
    $add = $_POST['add'];
    $bank = $_POST['bank'];

    // Create a connection
    $conn = new mysqli("localhost", "root", "", "e-commerce");

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare the SQL statement to prevent SQL injection
    $sql = "INSERT INTO customer (name, gen, cus_no, addr, bank) VALUES ('$name','$gen','$cus_no','$add','$bank')";
    $stmt =mysqli_query($conn,$sql);
    // Bind parameters
    //$stmt->bind_param("ssiss", $name, $gen, $cus_no, $add, $bank);

    // Execute the statement
    if ($stmt!=null) {
        echo "Details Added Successfully";
    } else {
        echo "Error: " . $conn->error;
    }

    // Close statement and connection
    //$stmt->close();
    $conn->close();
}
?>
