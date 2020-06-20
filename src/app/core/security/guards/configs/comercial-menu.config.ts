import { IMenu } from 'app/core/interfaces/menu.interface';

export const ComercialMenuConfig: Array<IMenu> = [
  {
    id: 1,
    name: 'Home',
    router: 'comercial/home',
    icon: 'home'
  },
  {
    id: 2,
    name: 'Parceiros Interessados',
    router: 'comercial/interested-partnerns',
    icon: 'group'
  },
  {
    id: 3,
    name: 'Parceiros de Venda',
    router: 'comercial/interested-sales',
    icon: 'business_center'
  },
  {
    id: 4,
    name: 'Treinamentos',
    router: 'comercial/trainings',
    icon: 'video_library'
  },
  {
    id: 5,
    name: 'Dashboard',
    router: 'comercial/dashboard',
    icon: 'bar_chart'
  },
  {
    id: 6,
    name: 'E-mail Marketing',
    router: '#',
    icon: 'home'
  },
  {
    id: 7,
    name: 'Feedback',
    router: 'comercial/feedback',
    icon: 'sms'
  },
  {
    id: 8,
    name: 'Argumento de vendas',
    router: 'comercial/sales-arguments',
    icon: 'menu_book'
  },
  {
    id: 9,
    name: 'Nova Meta',
    router: 'comercial/new-goals',
    icon: 'track_changes'
  },
  {
    id: 10,
    name: 'Nova Campanha',
    router: 'comercial/new-campaign',
    icon: 'record_voice_over'
  },
  {
    id: 11,
    name: 'Autoatendimento',
    router: '#',
    icon: 'headset_mic'
  },
  {
    id: 12,
    name: 'FAQ',
    router: 'comercial/faq',
    icon: 'question_answer'
  }
];
