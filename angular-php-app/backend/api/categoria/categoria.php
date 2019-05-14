<?php
/**
 * Returns the list of policies.
 */
 require '../database.php';

$categorias = [];
$sql = "SELECT id, nombre FROM categoria";

 if($result = mysqli_query($con,$sql))
 {
   $i = 0;
   while($row = mysqli_fetch_assoc($result))
   {
     $categorias[$i]['id']    = $row['id'];
     $categorias[$i]['nombre'] = $row['nombre'];
     $i++;
   }

   echo json_encode($categorias);
 }
 else
 {
   http_response_code(404);
}