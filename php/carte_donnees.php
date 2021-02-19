<?php 
	include 'connexion.php';
	$requete="SELECT * FROM carte";$stmt=$db->query($requete);
	$rows=array();
	while($dataDb=$stmt->fetch(PDO::FETCH_ASSOC)){
		$rows[]=$dataDb;
	}
	echo json_encode($rows); 
?>