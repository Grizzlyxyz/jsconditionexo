// Exo 1
// Stockez dans une variable "taille_nom_guerrier" la longueur du nom du guerrier
// Stockez dans une variable "troiseme_index_arme_guerrier" l'index 3 de l'arme du guerrier
// Stockez dans une variable "morceau_arme_mage" le nom de l'arme du guerrier a partir de l'index 2
// Stockez dans une variable "fusion_noms_silvie_nico" le nom du guerrier concaténé au nom du paysan
let guerrier = {
    nom : "nico",
    age : 18,
    taille : 180,
    arme : "hache",
   };
   let mage = {
    nom : "hajar",
    age : 20,
    taille : 160,
    arme : "baton",
   };
   let paysan = {
    nom : "sylvie",
    age : 17,
    taille : 165,
    arme : "fourche",
   };

   //Exo 1
   let taille_nom_guerrier = guerrier.nom.length;
   console.log(taille_nom_guerrier);

   let troiseme_index_arme_guerrier = guerrier.arme.charAt(3);
   console.log(troiseme_index_arme_guerrier);4

   let morceau_arme_mage = mage.arme.substr(2);
   console.log (morceau_arme_mage);

   let fusion_noms_silvie_nico = guerrier.nom+paysan.nom;
   console.log(fusion_noms_silvie_nico);

 
   // Exo 2
   // Créez une variable objet du nom de perso2 avec comme proprietées un nom et un age
   // Créez une variable objet du nom de perso1 avec comme propriété un nom, un age et comme method "usurpation"
   // Il doit pouvoir usurper l'identité du perso2

   let perso1 ={
       nom: "",
       age: "",
       usurpation(){
           this.nom = perso2.nom;
           this.age = perso2.age;
           return this;
       }
   }
   let perso2 = {
       nom = 'jean',
       age = '17',
   };

   // Exo 3
   // Créer un objet avec un nom et une avec une method
   // La method de votre objet lance un prompt permetant de changer son age
   // Une alert renvoi l"age de votre objet avec la phrase "Vous avez x ans"

   let personnage2 = {
       nom: "martin",
       age: 17,
       modifier_age(){
           this.age = prompt("Quel age veux-tu m'attribuer ?");
           alert('Vous m\'avez attribué '+ this.age + ' ans');
           return this;
       }
   }
  // Exo 4
// Créer deux personnages du nom de François et Sergio
// Créer deux variables panier_francois et panier_sergio contenant tous deux des ingrédients du super marché, par exemple huile,tomate,pain etc..
// Rajouter à François la method derober, faites en sorte que François dérobe 2 aliments à Sergio
// Ecrivez tout le code ici dessous.

let p1 = {
    nom: "François",
}
let persoy = {
     nom: "Sergio",
}

let panier_francois = ['sucre','sel', 'patate','mangue'];

let panier_sergio = ['fish', 'oeuf','pain','haricot','crevette', 'moule'];

let p1 = {
    nom: "François",
    panier = ['sucre','sel', 'patate','mangue'],
    derober(){
        for(let// Exo 5
            // Créer un objet "vieille_dame" avec une propriété "age" assez élevée une propriété "nom" contenant un "prenom" et un "nom de famille", une dernière propriété "moral" avec comme valeur "mal"
            // une propriété "objet" par exemple une canne
            // une method se_plaindre qui selon son moral fait une alert différente, si son moral = mal alors elle dira "Vous me dérangez", si son moral = bien alors elle dira bonjour monsieur + le nom du vieil_homme i=0;i < 2; i++){
        this.panier.push(p2.panier.pop());
        }
    }
}

let p2 = {
    nom : "Sergio",
    panier : ['fish', 'oeuf','pain','haricot','crevette', 'moule'],
}
// Exo 5
// Créer un objet "vieille_dame" avec une propriété "age" assez élevée une propriété "nom" contenant un "prenom" et un "nom de famille", une dernière propriété "moral" avec comme valeur "mal"
// une propriété "objet" par exemple une canne
// une method se_plaindre qui selon son moral fait une alert différente, si son moral = mal alors elle dira "Vous me dérangez", si son moral = bien alors elle dira bonjour monsieur + le nom du vieil_homme
let vieille_dame = {
    age: 84,
    nom: {
      prenom: "Josianne",
      nom_famille: "Armaric",
    },
    moral: "mal",
    objet: "canne",
    se_plaindre(){
      if (this.moral == "mal") {
        alert('Vous me dérangez ! ! !');
      } else if(this.moral == "bien") {
        alert('Bonjour Mr. ' + vieil_homme.nom);
      }
      return this.moral;
    }
   };
   let vieil_homme = {
    nom: "Patrick",
   }
   


// Exo 5 B
// Rajouter une method "se_promener" à la vieille_dame, qui change la valeur de l'objet à perdu 

let vieille_dame = {
    age: 84,
    nom: {
      prenom: "Josianne",
      nom_famille: "Armaric",
    },
    moral: "mal",
    objet: "canne",
    se_plaindre(){
      if (this.moral == "mal") {
        alert('Vous me dérangez ! ! !');
      } else if(this.moral == "bien") {
        alert('Bonjour Mr. ' + vieil_homme.nom);
      }
      return this.moral;
    },
    se_promener(){
      this.objet = "perdu";
      return this.objet;
    },
   };let vieil_homme = {
    nom: "Hold",
    prenom: "Patrick",
    age: 68,
    salut(){
      alert('Bonjour '+ vieille_dame.nom.prenom + ' ' + vieille_dame.nom.nom_famille );
      vieille_dame.se_plaindre();
      return vieille_dame;
    },
    adoucir(){
      vieille_dame.moral = "bien";
      return vieille_dame;
    },
   }