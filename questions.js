/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
  // .length définit la longeur d'une chaine de caractére
  var result = texte.length;
    return result;
}
var remplaceECar = function (texte) {
  //.replace remplace un caractére dans une chaine
  var result = texte.replace ('e', ' ');
    return result;
}
var concatString = function (texte1 , texte2) {
  //concaténation des 2 chaines de caractéres
  // .concat
  var result = texte1.concat(texte2);
    return result;
}
var afficherCar5 = function (texte) {
  // .charAt() isole un caractére dans une chaine
  //texte.charAt(4) affiche le 5éme caractére de la chaine
  var result = texte.charAt(4);
    return result;
}
var afficher9Car = function (texte) {
  // .slice extrait un morceau de la chaine
  var result = texte.slice(0, 9);
    return result;
}
var majusculeString = function (texte) {
  // .toUpperCase  convertit une chaine en majuscule
  var result = texte.toUpperCase();
    return result;
}
var minusculeString = function (texte) {
  // .toLowerCase convertit une chaine en minuscule
  var result = texte.toLowerCase();
    return result;
}
var supprEspaceString = function (texte) {
  //.trim suprime les espaces avant et après une chaine
  var result = texte.trim();
    return result;
}
var isString = function (texte) {
  // typeof vérifie que le texte est une chaine de caractères via son opérande 'string'
  var result = typeof(texte) === 'string';
    return result;
}
var afficherExtensionString = function (texte) {
  // La methode substring retourne une sous-chaine de la chaine courante entre un indice de début et un indice de fin.
  // L'indice de début est la méthode.lastIndexOf() qui renvoit dans la chaine courante. La dernière occurence de la valeur donnée en argument.
  // L'indice de fin est la taille de "texte".
  var result = texte.substring(texte.lastIndexOf("j"));
    return result;
}
var nombreEspaceString = function (texte) {
  // .split permet de retourner une sous-chaine
  var result = texte.split(' ').length - 1;
    return result;
}
var inverseString = function (texte) {
  var result = texte.split('').reverse().join('');
    return result;
// split renvoie un tableau sur lequel on peut appliquer reverse
// enfin on utilise join pour assembler le tout.
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
  var result = Math.pow(x, y);
    return result;
    // Math.pow permet de renvoyer un nombre sa puissance
  // expected output: (x puissance y) ex: dans l'exo 2*2*2=8
}
var valeurAbsolue = function (nombre) {
  var result = Math.abs(nombre)
    return result;
    // Math.abs retourne la valeur absolue d'un nombre.
    // (nombre) est le parametre de la fonction (function)
}
var valeurAbsolueArray = function (array) {
  var result = array.map(Math.abs);
    return result;
    // La méthode map() crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.
}
var sufaceCercle = function (rayon) {
  var result = Math.round (Math.PI * (rayon * rayon));
    return result;
    // La fonction Math.round() retourne la valeur d'un nombre arrondi à l'entier le plus proche.
    // La fonction suivante utilise Math.PI afin de calculer la surface d'un cercle à partir du rayon passé en argument.
    // (rayon) est le parametre de la fonction (function)
// 2ème méthode de calcul
// var surface = Math.PI * Math.pow(rayon, 2);
// var result = Math.round(surface);
// return result;
}
var hypothenuse = function (ab, ac) {
  var result = Math.hypot (ab, ac)
    return result;
    // Math.hypot permet de calculer l'hypothénuse
    // hypot() étant une méthode statique de Math, il faut utiliser Math.hypot()
}
var calculIMC = function (poids, taille) {
  var result = Math.round ((poids/(taille * taille))*100)/100;
    return result;
  //  La méthode .round() arrondit à l'entier le plus proche, selon les règles d'arrondi commercial.
  //  Pour avoir un arrondi deux chiffres après la virgule, il faut utiliser Math.round(variable*100)/100
}
