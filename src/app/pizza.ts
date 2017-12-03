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
