class Insurance {
  description: string;
  value: number;
  installments: number;
  policyNumber: number;
  image: string;
}

class Product {
  name: string;
  value: number;
  image: string;
}

class Consumer {
  name: string;
  birthDate: number;
  cpf: number;
  rg: number;
  postalCode: number;
  address: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  email: string;
  cellPhone: number;
  phone: number;
}

export class DetailsPolicyModel {
  insurance: Insurance;
  product: Product;
  consumer: Consumer;
}
