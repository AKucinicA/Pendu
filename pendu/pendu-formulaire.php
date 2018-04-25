<?php

	include("pendu-inc.php");
	
?>

<!DOCTYPE html>
<html lang="fr">
	<head>
		<meta charset="utf-8">
		<title>Le jeu du pendu</title>
		<meta name="viewport" content="width=device-width; initial-scale=1.0">
		<link rel="stylesheet" href="pendu.css">
	</head>
	<body>
		<h1>Pendu</h1>
		<p> Le pendu est un jeu dont le but est de deviner le mot proposé en proposant des lettres. Si la lettre proposée est dans le mot, elle est affichée à sa (ou ses) place(s). Sinon, un pendu commence à se dessiner. Si vous ne trouvez pas le mot avant que le dessin soit terminé, vous avez perdu. A vous de jouer ! </p>
		
		<form action="pendu-action.php" method="get">

		</form>

	</body>
</html>
