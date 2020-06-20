export interface PartnerFormModel {
  id: number;
  code: number;
  corporateName: string;
  commercialName: string;
  image: string;
  cnpj: string;
  cep: string;
  address: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  phone: string;
  email: string;
  site: string;
  level: number;
  responsible: Responsible;
}

interface Responsible {
  name: string;
  genre: string;
  phone: string;
  email: string;
}
