import { PropertyModel } from './property.model';
import { PlanPriceModel } from './plan-price.model';
import { ProductModel } from './product.model';

export class InsuranceModel {

  /* Informações do Seguro */
  id: string;
  name: string;
  description: string;
  image: string;
  information: string;
  context: string;
  contextId: string;

  /* Atributos para o seguro no carrinho */
  planPrice: Array<PlanPriceModel>;
  properties: Array<PropertyModel>;
  planPriceSelected: PlanPriceModel;
  productSelected: ProductModel;

  constructor() {}
}
