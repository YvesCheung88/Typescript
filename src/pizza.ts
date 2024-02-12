// Fonction de base qui prend la pâte et la sauce
const preparerBasePizza = (pate: string, sauce: string) => {
  return `Pizza avec ${pate} et sauce ${sauce}`;
};

// Fonction curryfiée qui ajoute une garniture spécifique
const ajouterGarniture = (garniture: string) => {
  return (basePizza: string) => {
    return `${basePizza} et ${garniture}`;
  };
};

// Création de pizzas personnalisées en utilisant la curryfication
const pizzaTomate = ajouterGarniture("tomate");
const pizzaFromage = ajouterGarniture("fromage");

// Utilisation des fonctions curryfiées pour créer des pizzas personnalisées
const pizzaMargherita = pizzaTomate(preparerBasePizza("Fine", "Tomato"));
const pizzaQuatreFromages = pizzaFromage(preparerBasePizza("Épaisse", "Crème"));

console.log(pizzaMargherita);
console.log(pizzaQuatreFromages);
