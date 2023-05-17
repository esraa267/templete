import { Base } from './base.model';

export class BaseInfo extends Base {
  Name: string;
  Email:string;
  Phone:string;
  constructor() {
    super();
    this.Name = '';
    this.Email = '';
    this.Phone = '';
  }
}
