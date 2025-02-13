<!-- Challenge 1: Displaying Information -->
<?php
$name = "Seth Tharo Hour";
$age = 21;
$favorite_color = "Blue";

echo "My name is $name, I am $age years old and my favorite color is $favorite_color." ."<br>"
?>

<!-- Challenge 2: Using Escape Characters -->
<?php
// Using escape characters for quotes
echo "\"He said, \"PHP is fun!\" and left.\"". "<br>";

// Printing a multi-line message using \n
echo "First line"."<br>"."Second line"."<br>";
?>

<!-- Challenge 3:Correcting Syntax Errors -->
<?php
$greeting = 'Hello';
$age = 25; // Adding the missing $age variable assignment
echo "Welcome to the PHP world!". "<br>";
echo "Your age is $age"."<br>"; // Corrected the syntax for variable output inside the string
?>

<!-- Challenge 4: Fix Error -->
<?php
echo "Welcome to PHP!"."<br>";
$name_2 = "John";
echo "Hello, $name_2". "<br>";
?>

<!-- Challenge 5: Adding Comments to Code -->
<?php
// Define the original price of the item
$price = 50; // Price before any discount is applied

# Define the discount amount
$discount = 10; # Subtracted from the original price

/*
 * Calculate the final price by subtracting
 * the discount from the original price
 */
$finalPrice = $price - $discount;

// Display the total price with a message
echo "Total price: $" . $finalPrice; // Output: Total price: $40
?>
