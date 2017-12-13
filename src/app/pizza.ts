export class Pizza {
  pate: Pate;
  base: Base;
  ingredients: Ingredient[];
  prix: number;


  constructor(ingredients: Ingredient[], pate: Pate, base: Base) {
    this.ingredients = ingredients;
    this.pate = pate;
    this.base = base;
    this.prix = this.calculerPrix();
  }

  calculerPrix() {
    this.prix = 0;
    for (const ingredient of this.ingredients) {
      if (ingredient.value) { this.prix += ingredient.prix; }
    }
    return this.prix += this.base.prix;
  }

  ingredientToString() {
    const values: string[] = [];
    values[0] = 'anchois' + '=' + this.ingredients[0].value.toString();
    values[1] = 'miel' + '=' + this.ingredients[1].value.toString();
    values[2] = 'jambon' + '=' + this.ingredients[2].value.toString();
    values[3] = 'magret' + '=' + this.ingredients[3].value.toString();
    return values;
  }

  toString() {
    let res = '';
    res = this.pate.nom + ', ' + this.base.nom;

    for (const ingredient of this.ingredients) {
      if (ingredient.value) {res += ', ' + ingredient.nom; }
    }
    return res;
  }

}

export class Pate {
  nom: string;
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
