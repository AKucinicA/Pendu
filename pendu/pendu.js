// cette fonction teste si l'utilisateur a
// bien saisie une et une seule lettre dans 
// le champ de saisie
function testChar() {
	let sasie = getElementById("main").value;
	if (typeof saisie == "string"){
		isInWord();
	} else {
		alert("Vous n'avez pas saisi une lettre.")
	}
}

//cette fonction renvoie True ou False si la lettre est dans le mot ou non
function isInWord(){}

//cette fonction ajoute la lettre
//dans le mot si isInWord() est true
function inWord(){}

//cette fonction réactualise le pendu si isInWord() est false
function notInWord(){}

//cette fonction félicite le joueur
//et le renvoie à la page d'accueil 
//si le mot est trouvé
function motPlein(){}

//cette fonction affiche le mot
//et renvoie le joueur à la page
//d'accueil si le pendu est fini
function dessinFin(){}
