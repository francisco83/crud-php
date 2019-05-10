<?php
/**
 * Returns the list of policies.
 */
 require './categoria/database.php';

$policies = [];
$sql = "SELECT id, nombre FROM categoria";

 if($result = mysqli_query($con,$sql))
 {
   $i = 0;
   while($row = mysqli_fetch_assoc($result))
   {
     $policies[$i]['id']    = $row['id'];
     $policies[$i]['nombre'] = $row['nombre'];
     $i++;
   }

   echo json_encode($policies);
 }
 else
 {
   http_response_code(404);
}