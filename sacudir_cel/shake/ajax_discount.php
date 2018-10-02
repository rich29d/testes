<?php
require 'db.php';
if(isset($_POST) && $_SERVER['REQUEST_METHOD'] == "POST")
{
$product_id=$_POST['product_id'];
$sql = "SELECT discount,price FROM products WHERE product_id=:product_id";

try {
$db = getDB();
$stmt = $db->prepare($sql); 
$stmt->bindParam("product_id", $product_id);
$stmt->execute();
$discount = $stmt->fetchAll(PDO::FETCH_OBJ);
$db = null;
echo '{"product_discount": ' . json_encode($discount) . '}';
} 
catch(PDOException $e) 
{
echo 'Connection Error';
}	
}
?>