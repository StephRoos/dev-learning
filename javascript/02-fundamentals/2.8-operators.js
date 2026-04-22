// ============================================
// 2.8 — Opérateurs de base, mathématiques
// javascript.info/operators
// ============================================

// -------------------------------------------
// EXERCICE 1 : Postfixe et préfixe
// -------------------------------------------
let a = 1, b = 1;

let c = ++a; // préfixe : incrémente PUIS retourne
let d = b++; // postfixe : retourne PUIS incrémente

console.log(`c = ${c}, d = ${d}, a = ${a}, b = ${b}`);
// c = 2, d = 1, a = 2, b = 2


// -------------------------------------------
// EXERCICE 2 : Résultats d'affectation
// -------------------------------------------
let a2 = 2;
let x = 1 + (a2 *= 2); // a2 *= 2 → a2 = 4, puis 1 + 4 = 5

console.log(`a2 = ${a2}, x = ${x}`);
// a2 = 4, x = 5


// -------------------------------------------
// EXERCICE 3 : Conversions de types
// -------------------------------------------
// Règle clé :
// - l'opérateur + avec un string → concaténation
// - les opérateurs -, *, / → conversion en nombre

console.log("" + 1 + 0);       // "10"  (string + number = concat)
console.log("" - 1 + 0);       // -1    (string - number = math)
console.log(true + false);      // 1     (true=1, false=0)
console.log(6 / "3");           // 2     ("3" converti en 3)
console.log("2" * "3");         // 6     (les deux convertis)
console.log(4 + 5 + "px");      // "9px" (4+5=9, puis 9+"px")
console.log("$" + 4 + 5);       // "$45" (string dès le début)
console.log("4" - 2);           // 2
console.log("4px" - 2);         // NaN   ("4px" n'est pas un nombre)
console.log("  -9  " + 5);      // "  -9  5" (concat)
console.log("  -9  " - 5);      // -14   (trim → -9, puis -9-5)
console.log(null + 1);          // 1     (null → 0)
console.log(undefined + 1);     // NaN   (undefined → NaN)
console.log(" \t \n" - 2);      // -2    (whitespace → 0)


// -------------------------------------------
// EXERCICE 4 : Corriger l'addition
// -------------------------------------------
let num1 = "1";
let num2 = "2";

// Le + unaire convertit un string en nombre
let result = +num1 + +num2;

console.log(result); // 3
