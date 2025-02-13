<!-- Challenge 1: Basic Arithmetic Operations -->
<?php
$number1 = 10;
$number2 = 5;

// Display the numbers
echo "Number 1: $number1<br>";
echo "Number 2: $number2<br>";

// Perform and display arithmetic operations
echo "Addition: " . ($number1 + $number2) . "<br>";  
echo "Subtraction: " . ($number1 - $number2) . "<br>";  
echo "Multiplication: " . ($number1 * $number2) . "<br>";  
echo "Division: " . ($number1 / $number2) . "<br>";  
echo "Modulus: " . ($number1 % $number2) . "<br><br>";  
?>

<!-- Challenge 2: Even or Odd Checker -->
<?php
$number = 7; // Define the number

echo "Input: $number<br><br>";

// Check if the number is even or odd using modulus operator
if ($number % 2 == 0) {
    echo "Output: $number is an even number.<br>";
} else {
    echo "Output: $number is an odd number.<br><br>";
}
?>

<!-- Challenge 3: Increment and Decrement Operators -->
<?php
$number = 10; // Starting number

echo "Starting number: $number<br><br>";

// Increment the number
$number++; 
echo "After increment: $number<br><br>";

// Decrement the number
$number--; 
echo "After decrement: $number<br><br>";
?>

<!-- Challenge 4: Grade Assignment Based on Marks -->
<?php
$marks = 85; // Define student's marks

echo "Input: $marks<br><br>";

// Determine the grade based on marks
if ($marks >= 90) {
    echo "Output: You got an A!<br><br>";
} elseif ($marks >= 80) {
    echo "Output: You got a B!<br><br>";
} elseif ($marks >= 70) {
    echo "Output: You got a C!<br><br>";
} elseif ($marks >= 60) {
    echo "Output: You got a D!<br><br>";
} else {
    echo "Output: You got an F!<br><br>";
}
?>

<!-- Challenge 5: Leap Year Checker -->
<?php
$year = 2024; // Define the year

echo "Input: $year<br><br>";

// Leap year conditions: Divisible by 4 and not 100, or divisible by 400
if (($year % 4 == 0 && $year % 100 != 0) || ($year % 400 == 0)) {
    echo "Output: $year is a leap year.<br>";
} else {
    echo "Output: $year is not a leap year.<br><br>";
}
?>
