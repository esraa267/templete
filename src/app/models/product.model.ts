import { Base } from './base.model';

export class Product extends Base {
  Name: string;
  Price: string;
  constructor() {
    super();
    this.Name = '';
    this.Price = '';
  }
}
