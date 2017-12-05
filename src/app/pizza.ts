export class Pizza {
  pate: Pate;
  base: Base;
  ingredients: Ingredient[];
  prix: number;

  constructor(ingredients: Ingredient[], pate: Pate, base: Base) {
    this.ingredients = ingredients;
    this.pate = pate;
    this.base = base;
    this.prix = 0;
  }

  calculerPrix() {
    this.prix = 0;
    for (const ingredient of this.ingredients) {
      if (ingredient.value) { this.prix += ingredient.prix; }
    }
    return this.prix += this.base.prix + this.pate.prix;
  }

  ingredientToString(){
    let values: string[] = [];
    values[0] = this.ingredients[0].nom + '=' + this.ingredients[0].value.toString();
    values[1] = this.ingredients[1].nom + '=' + this.ingredients[1].value.toString();
    values[2] = this.ingredients[2].nom + '=' + this.ingredients[2].value.toString();
    values[3] = this.ingredients[3].nom + '=' + this.ingredients[3].value.toString();
    return values;
  }

}

export class Pate {
  nom: string;
  prix: number;
}

export class Base {
  nom: string;
  prix: number;
}

export class Ingredient {
  nom: string;
  prix: number;
  value: boolean;
}
