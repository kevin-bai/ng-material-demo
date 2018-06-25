import {trigger, state, transition, style, animate, group} from '@angular/animations'

export const routerAnim =
  trigger(
    'slideToRight',
    [
      // 路由state 用fixed是因为了在动画开始状态，flex容器会调整内容居中，导致效果不好
      state('void', style({'position': 'fixed', 'width': '100%', 'height': '80%'})),
      state('*', style({'position': 'fixed', 'width': '100%', 'height': '80%'})),
      transition(':enter', [
        style({transform: 'translateX(-100%)', opacity : 0}),
        group([
          animate('500ms ease-in-out', style({transform: 'translateX(0)'})),
          animate('300ms ease-in', style({opacity: 1}))
        ])
      ]), // 进场动画
      transition(':leave', [
        style({transform: 'translateX(0)', opacity: 1}),
        group([
          animate('500ms ease-in-out', style({transform: 'translateX(100%)'})),
          animate('300ms ease-in', style({opacity: 0}))
        ])
      ]), // 离场动画
    ]
  );
