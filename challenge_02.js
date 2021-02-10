/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

*/

/***** Version 1 - wie gefordert ******/
/*
let age, firstName;

firstName = prompt("Gib bitte deinen Namen ein:");
age = parseInt (prompt("Gib bitte dein Alter ein:"))

console.log("Name:", firstName);
console.log("Alter:", age);

switch (true) {
    case age < 6 :
        console.log(firstName + ", du darfst nur Milch trinken!!!")
        break;
    case (age > 5) && (age < 13):
        console.log(firstName + ", du darfst Saft trinken!!!")
        break;
    case (age > 12) && (age < 18):
        console.log(firstName + ", du darfst Cola trinken!!!")
        break;
    case age > 17:
        console.log(firstName + ", du darfst Wein trinken!!!")
        break;      
    default:
        break;
}
*/


/******* Version 2 - mit Geschlecht */

let age, firstName, sex;

console.log("Ars bibendi!")
console.log("------------")

firstName = prompt("Gib bitte deinen Namen ein:");

while (isNaN(firstName) == false)
{
    firstName = prompt("Gib bitte deinen Namen ein:");  
}
age = parseInt (prompt("Gib bitte dein Alter ein:"))

while (isNaN(age) == true || age<0 || age>150) {
    age = parseInt (prompt("Gib bitte dein richtiges Alter ein:"))
}
sex = prompt ("Welches Geschlecht bist du? (m/w):")

/*while (sex != "w" || sex != "m") {
    sex = prompt ("Welches Geschlecht bist du? (m/w):")
}
*/
console.log("Name:", firstName);
console.log("Alter:", age);
console.log("Geschlecht:", sex);

switch (sex) {
    case "w":
        switch (true) {
            case age < 6 :
                console.log(firstName + ", du darfst nur Milch trinken!!!")
                break;
            case (age > 5) && (age < 13):
                console.log(firstName + ", du darfst Apfelsaft trinken!!!")
                break;
            case (age > 12) && (age < 18):
                console.log(firstName + ", du darfst Fanta trinken!!!")
                break;
            case (age > 17) && (age <50):
                console.log(firstName + ", du darfst Wein trinken!!!")
                break;  
            case age > 50:
                console.log(firstName + ", du darfst Likörchen trinken!!!")
                console.log("PROST!")
                 break;          
            default:
                console.log("Falsche Alterseingabe, bitte wiederholen!")
                break;
        }
        break;
    case "m":
        switch (true) {
            case age < 6 :
                console.log(firstName + ", du darfst nur Milch trinken!!!")
                break;
            case (age > 5) && (age < 13):
                console.log(firstName + ", du darfst Orangensaft trinken!!!")
                break;
            case (age > 12) && (age < 18):
                console.log(firstName + ", du darfst Cola trinken!!!")
                break;
            case (age > 17) && (age <50):
                console.log(firstName + ", du darfst Bier trinken!!!")
                break; 
            case age > 50:
                console.log(firstName + ", du darfst Schnaps trinken!!!")
                console.log("PROST!")
                break;       
            default:
                console.log("Falsche Alterseingabe, bitte wiederholen!")
                break;
        }
         break;
    default:
        console.log("Du hast kein Geschlecht angegeben!!!")
        break;
}



