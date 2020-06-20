export interface GoalModel {

  id: number;
  goalCode: number;
  code: number;
  profile: string;
  title: string;
  description: string;
  startDate: string | Date;
  endDate: string  | Date;
  insurance: string;
  type: string;
  statusPercent: number;
  amount: number;

}
