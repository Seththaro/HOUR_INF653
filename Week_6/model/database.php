<?php
$dsn = "mysql:host=localhost; dbname=assignment_tracker";
$username = 'root';


try {
    $db = new PDO($dsn, $username, $password);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    $error_message = "Database connection failed: " . $e->getMessage();
    include('view/error.php'); // Display an error page if connection fails
    exit();
}
?>
