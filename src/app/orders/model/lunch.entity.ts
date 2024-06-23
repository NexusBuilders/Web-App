export class Lunch{
  id:number;
  starterPlate: string;
  mainDish: string;
  price: number;
  image: string;
  restaurantId: number;
  constructor(){
    this.id = 0;
    this.starterPlate = "";
    this.mainDish = "";
    this.price = 0;
    this.image = "";
    this.restaurantId = 0;
  }
}
