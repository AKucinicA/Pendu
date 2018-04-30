<?php
	session_start();

	$_SESSION['lettresJouees'] = array();
	$_SESSION['nbTentatives'] = 0;
	$_SESSION['motADeviner'] = array();

	//Enregistre le mot à deviner dans une variable session
	$_SESSION['motADeviner'] = $_POST['motADeviner'];

	//Sauvegarder la longueur du mot
	$longueurMot = strlen($_SESSION['motADeviner']);

	function
	$i=0;
	$MOTS = [];
	foreach(file("dict.data") as $line){
		$tokens = explode("",$line);
		$MOT["$line"] = $tokens;
		$i=$i+1;

	//Le jeu
	echo "<html>
		<head>
  			<title>Pendu</title>
  			<meta http-equiv="Content-Type" content="text/html; charset=utf8">
  			<link rel="stylesheet" type="text/css" href="pendu.css">
  			<script language="javascript" src="pendu.js"></script>
		</head>
		<body>

		<h1> Pendu </h1>

		<div id="main">
    		<img id="pendu" src="images/4.png" />
    		<p id="motADeviner" style="visibility: hidden"> </p>
    		<form name= "proposition" action="" method="get" onsubmit="return testChar();">
        		<input type="text" name="lettre" />
        		<input type="submit" value="Nouvelle lettre" />
    		</form>
		</div>
		</body>
		</html>"
?>
