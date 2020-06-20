import { IMenu } from 'app/core/interfaces/menu.interface';

export const MasterDealerMenuConfig: Array<IMenu> = [
  {
    id: 1,
    name: 'Home',
    router: 'masterdealer/home',
    icon: 'home'
  },
  {
    id: 2,
    name: 'Gerentes de Loja',
    router: 'masterdealer/store-manager',
    icon: 'apartment'
  },
  {
    id: 3,
    name: 'Minhas Lojas',
    router: 'masterdealer/my-stores',
    icon: 'storefront'
  },
  {
    id: 4,
    name: 'Produtos',
    router: 'masterdealer/products',
    icon: 'local_mall'
  },
  {
    id: 5,
    name: 'Metas / Campanha',
    router: 'masterdealer/goals',
    icon: 'track_changes'
  },
  {
    id: 6,
    name: 'Dashboard',
    router: 'masterdealer/dashboard',
    icon: 'bar_chart'
  },
  {
    id: 7,
    name: 'Feedback',
    router: 'masterdealer/feedback',
    icon: 'sms'
  },
  {
    id: 7,
    name: 'Autoatendimento',
    router: '#',
    icon: 'headset_mic'
  },
  {
    id: 9,
    name: 'FAQ',
    router: 'masterdealer/faq',
    icon: 'question_answer'
  }
];
