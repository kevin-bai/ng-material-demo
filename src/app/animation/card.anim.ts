import {trigger, state, transition, style, animate} from '@angular/animations'

export const cardAnim =
  trigger(
    'card',
    [
      state('out', style({ transform: 'scale(1)', 'box-shadow' : 'none'})),
      state('in', style({ transform: 'scale(1.05)', 'box-shadow' : '3px 3px 5px #ccc'})),
      transition('out => in', animate('100ms ease-in')),
      transition('in => out', animate('100ms ease-out'))
    ]
  );
