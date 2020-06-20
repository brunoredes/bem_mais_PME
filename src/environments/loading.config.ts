import { NgxUiLoaderConfig } from 'ngx-ui-loader';

export const LoadingConfig: NgxUiLoaderConfig = {
  bgsColor: 'rgb(231,241,250)',
  bgsOpacity: 0.3,
  bgsPosition: 'bottom-right',
  bgsSize: 50,
  bgsType: 'ball-scale-multiple',
  blur: 1000,
  delay: 0,
  fgsColor: 'rgb(231,241,250)',
  fgsPosition: 'center-center',
  fgsSize: 60,
  fgsType: 'ball-scale-multiple',
  gap: 20,
  logoPosition: 'center-center',
  logoSize: 120,
  // TODO: Trocar imagem para logo da zurich
  // logoUrl:'https://raw.githubusercontent.com/t-ho/ngx-ui-loader/master/src/assets/angular.png',
  masterLoaderId: 'master',
  overlayBorderRadius: '0',
  overlayColor: '#005aab',
  pbColor: 'rgb(231,241,250)',
  pbDirection: 'ltr',
  pbThickness: 3,
  hasProgressBar: true,
  text: 'Aguarde, carregando...',
  textColor: 'rgb(231,241,250)',
  textPosition: 'center-center',
  maxTime: -1,
  minTime: 500
};
