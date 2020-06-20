import { IMenu } from 'app/core/interfaces/menu.interface';

export const AgregadorMenuConfig: Array<IMenu> = [
  {
    id: 1,
    name: 'Home',
    router: 'agregador/home',
    icon: 'home'
  },
  {
    id: 2,
    name: 'Meus Parceiros',
    router: 'agregador/my-partners',
    icon: 'group'
  },
  {
    id: 3,
    name: 'Metas',
    router: 'agregador/goals',
    icon: 'track_changes'
  },
  {
    id: 4,
    name: 'Dashboard',
    router: 'agregador/dashboard',
    icon: 'bar_chart'
  },
  {
    id: 5,
    name: 'Feedback',
    router: 'agregador/feedback',
    icon: 'sms'
  },
  {
    id: 6,
    name: 'Autoatendimento',
    router: '#',
    icon: 'headset_mic'
  },
  {
    id: 7,
    name: 'FAQ',
    router: 'agregador/faq',
    icon: 'question_answer'
  }
];
