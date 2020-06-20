import { IMenu } from 'app/core/interfaces/menu.interface';

export const CorretorMenuConfig: Array<IMenu> = [
  {
    id: 1,
    name: 'Home',
    router: 'corretor/home',
    icon: 'home'
  },
  {
    id: 2,
    name: 'Minhas Metas',
    router: 'corretor/my-goals',
    icon: 'track_changes'
  },
  {
    id: 3,
    name: 'Nova Campanha',
    router: 'corretor/campaign',
    icon: 'record_voice_over'
  },
  {
    id: 4,
    name: 'Treinamentos',
    router: 'corretor/training',
    icon: 'video_library'
  },
  {
    id: 5,
    name: 'Dashboard',
    router: 'corretor/dashboard',
    icon: 'bar_chart'
  },
  {
    id: 6,
    name: 'Feedback',
    router: 'corretor/feedback',
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
    router: 'corretor/faq',
    icon: 'question_answer'
  }
];
