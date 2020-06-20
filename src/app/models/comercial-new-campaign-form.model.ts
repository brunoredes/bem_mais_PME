export interface ComercialCampaign {
  id: number;
  code: string;
  title: string;
  insurnce: number;
  profile: number;
  goal: number;
  amount: number;
  startDate: string | Date;
  endDate: string | Date;
  image: string;
  goalDescription: string;
}
