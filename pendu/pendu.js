let saisie = document.forms["proposition"].value;
var images = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
indice = 0;
let mot = getElementById("motADeviner").innerHTML;
let motADeviner = mot.split(); //le mot à deviner est sous forme de tableau
var longueurMot = motADeviner.length;

// cette fonction teste si l'utilisateur a
// bien saisie une et une seule lettre dans 
// le champ de saisie
function testChar() {
	if (typeof saisie == "string"){
		isInWord();
	} else {
		alert("Vous n'avez pas saisi une lettre.")
	}
}

//cette fonction renvoie True ou False si la lettre est dans le mot ou non
function isInWord(){
	for(var i=0;i<longueurMot; i++){
		if (motADeviner[i] == saisie){
			return true;
	} else {
		return false;
	}
}

//cette fonction affiche la lettre
//dans le mot si isInWord() est true
function inWord(){
	if (isInWord()== true){
		for (var i; i<longueurMot;i++){
			motADeviner[i].style = "visibility : visible"; //est-ce que ça marche ??
		}
	}
}

//cette fonction réactualise le pendu si isInWord() est false
function notInWord(){
	if (!isInWord){
		indice += 1;
		if (indice == 10){
			dessinFin();
		}
		document.getElementById("pendu").src="images/"+images[indice];
	}
}

//cette fonction félicite le joueur
//et le renvoie à la page d'accueil 
//si le mot est trouvé
function motPlein(){
	alert("Vous avez trouvé !")
}

//cette fonction affiche le mot
//et renvoie le joueur à la page
//d'accueil si le pendu est fini
function dessinFin(){}
