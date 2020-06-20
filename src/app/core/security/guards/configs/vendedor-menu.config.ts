import { IMenu } from 'app/core/interfaces/menu.interface';

export const VendedorMenuConfig: Array<IMenu> = [
  {
    id: 1,
    name: 'menu-vendedor-home',
    router: 'vendedor/home',
    icon: 'home'
  },
  {
    id: 2,
    name: 'menu-vendedor-suaprotecao',
    router: 'vendedor/protection/safe',
    icon: 'verified_user'
  },
  {
    id: 3,
    name: 'menu-vendedor-dash',
    router: 'vendedor/dashboard',
    icon: 'bar_chart'
  },
  {
    id: 4,
    name: 'menu-vendedor-consultvendas',
    router: 'vendedor/policy',
    icon: 'assignment'
  },
  {
    id: 5,
    name: 'menu-vendedor-treina',
    router: 'vendedor/trainings',
    icon: 'video_library'
  },
  {
    id: 6,
    name: 'menu-vendedor-feedback',
    router: 'vendedor/feedback',
    icon: 'sms'
  },
  {
    id: 7,
    name: 'menu-vendedor-atendimento',
    router: '#',
    icon: 'headset_mic'
  },
  {
    id: 8,
    name: 'menu-vendedor-faq',
    router: 'vendedor/faq',
    icon: 'question_answer'
  }
];
