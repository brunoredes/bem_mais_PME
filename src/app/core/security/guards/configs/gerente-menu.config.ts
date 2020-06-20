import { IMenu } from 'app/core/interfaces/menu.interface';

export const GerenteMenuConfig: Array<IMenu> = [
  {
    id: 1,
    name: 'Home',
    router: 'gerentedeloja/home',
    icon: 'home'
  },
  {
    id: 2,
    name: 'Minha Loja',
    router: 'gerentedeloja/my-store',
    icon: 'storefront'
  },
  {
    id: 3,
    name: 'Meus Vendedores',
    router: 'gerentedeloja/sellers',
    icon: 'how_to_reg'
  },
  {
    id: 4,
    name: 'Minhas Metas',
    router: 'gerentedeloja/goals',
    icon: 'track_changes'
  },
  {
    id: 5,
    name: 'Dashboard',
    router: 'gerentedeloja/dashboard',
    icon: 'bar_chart'
  },
  {
    id: 6,
    name: 'Feedback',
    router: 'gerentedeloja/feedback',
    icon: 'sms'
  },
  {
    id: 7,
    name: 'Autoatendimento',
    router: '#',
    icon: 'headset_mic'
  },
  {
    id: 8,
    name: 'FAQ',
    router: 'gerentedeloja/faq',
    icon: 'question_answer'
  }
];
