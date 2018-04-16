<?php
function
$i=0;
$MOTS = [];
foreach(file("dict.data") as $line){
		$tokens = explode("",$line);
		$MOT["$line"] = $tokens;
		$i=$i+1;
?>
