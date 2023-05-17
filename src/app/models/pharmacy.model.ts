import { BaseInfo } from './base-info.model';

export class Pharmacy extends BaseInfo {
  Location: string;
  LocationLink: string;
  constructor() {
    super();
    this.Location = '';
    this.LocationLink = '';
  }
}
