<?php
require('database.php');
require('assignment_db.php');
require('course_db.php');

$assignment_id = filter_input(INPUT_GET, 'id', FILTER_VALIDATE_INT);

if (!$assignment_id) {
    $error_message = "Invalid assignment ID.";
    include('error.php');
    exit();
}

$query = 'SELECT * FROM assignments WHERE id = :assignment_id';
$statement = $db->prepare($query);
$statement->bindValue(':assignment_id', $assignment_id);
$statement->execute();
$assignment = $statement->fetch();
$statement->closeCursor();

if (!$assignment) {
    $error_message = "Assignment not found.";
    include('error.php');
    exit();
}

$courses = get_courses();
?>

<!DOCTYPE html>
<html>
<head>
    <title>Update Assignment</title>
</head>
<body>
    <h1>Update Assignment</h1>
    <form action="index.php" method="post">
        <input type="hidden" name="action" value="update_assignment">
        <input type="hidden" name="assignment_id" value="<?= $assignment['id'] ?>">
        
        <label>Description:</label>
        <input type="text" name="description" value="<?= htmlspecialchars($assignment['description']) ?>" required>
        
        <label>Course:</label>
        <select name="course_id" required>
            <?php foreach ($courses as $course) : ?>
                <option value="<?= $course['courseID'] ?>" <?= $course['courseID'] == $assignment['courseID'] ? 'selected' : '' ?>>
                    <?= htmlspecialchars($course['courseName']) ?>
                </option>
            <?php endforeach; ?>
        </select>
        
        <button type="submit">Update Assignment</button>
    </form>
</body>
</html>