import { PersonModel } from './person.model';
import { InsuranceModel } from './insurance.model';
import { PaymentModel } from './payment.model';

export class PurchaseModel {
  id: string;
  person: PersonModel;
  insuranceList: Array<InsuranceModel>;
  payment: PaymentModel;

  constructor() {}
}
