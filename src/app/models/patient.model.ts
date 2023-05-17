import { BaseInfo } from './base-info.model';

export class Patient extends BaseInfo {
  NationalId: string;
  constructor() {
    super();
    this.NationalId = '';
  }
}
