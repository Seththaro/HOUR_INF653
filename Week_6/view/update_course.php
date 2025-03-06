<?php
require('database.php');
require('course_db.php');

$course_id = filter_input(INPUT_GET, 'id', FILTER_VALIDATE_INT);

if (!$course_id) {
    $error_message = "Invalid course ID.";
    include('error.php');
    exit();
}

$query = 'SELECT * FROM courses WHERE courseID = :course_id';
$statement = $db->prepare($query);
$statement->bindValue(':course_id', $course_id);
$statement->execute();
$course = $statement->fetch();
$statement->closeCursor();

if (!$course) {
    $error_message = "Course not found.";
    include('error.php');
    exit();
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Update Course</title>
</head>
<body>
    <h1>Update Course</h1>
    <form action="index.php" method="post">
        <input type="hidden" name="action" value="update_course">
        <input type="hidden" name="course_id" value="<?= $course['courseID'] ?>">
        
        <label>Course Name:</label>
        <input type="text" name="course_name" value="<?= htmlspecialchars($course['courseName']) ?>" required>
        
        <button type="submit">Update Course</button>
    </form>
</body>
</html>