import { RequestStatus } from '../Enums/RequestStatus.enum';
import { Base } from './base.model';

export class PatientRequest extends Base {
  PatientId: number;
  DoctorId: number;
  RequestStatusId: RequestStatus | null;
  constructor() {
    super();
    this.PatientId = 0;
    this.DoctorId = 0;
    this.RequestStatusId = null;
  }
}
