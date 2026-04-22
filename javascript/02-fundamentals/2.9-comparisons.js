// ============================================
// 2.9 — Comparaisons
// javascript.info/comparison
// ============================================

// -------------------------------------------
// EXERCICE 1 : Résultats des comparaisons
// -------------------------------------------

console.log(5 > 4);                // true
console.log("apple" > "pineapple"); // false ("a" < "p" en Unicode)
console.log("2" > "12");            // true  (comparaison string : "2" > "1")
console.log(undefined == null);     // true  (règle spéciale : ils sont égaux entre eux)
console.log(undefined === null);    // false (types différents)
console.log(null == "\n0\n");       // false (null == seulement undefined)
console.log(null === +"\n0\n");     // false (null !== 0, types différents)


// -------------------------------------------
// EXERCICE 2 : == vs ===
// -------------------------------------------

console.log(0 == false);    // true  — false converti en 0
console.log(0 === false);   // false — types différents (number vs boolean)
console.log("" == false);   // true  — les deux convertis en 0
console.log("" === false);  // false — types différents (string vs boolean)


// -------------------------------------------
// EXERCICE 3 : Les pièges de null et undefined
// -------------------------------------------

console.log(null > 0);   // false — null converti en 0, 0 > 0 = false
console.log(null == 0);  // false — == ne convertit PAS null (règle spéciale)
console.log(null >= 0);  // true  — >= convertit null en 0, 0 >= 0 = true

// Pourquoi null >= 0 est true mais null == 0 est false ?
// Les opérateurs de comparaison (>, <, >=, <=) convertissent null en 0.
// Mais == a sa propre règle : null n'est égal qu'à undefined, rien d'autre.


// -------------------------------------------
// EXERCICE 4 : Écrire du code sûr
// -------------------------------------------

let age = "18";

// Convertir explicitement, puis comparer avec ===
let ageNum = Number(age);
if (ageNum === 18) {
  console.log("Majeur !");
} else {
  console.log("Pas 18.");
}
