import {trigger, style, transition, animate, keyframes} from "@angular/animations";

export const LoginComponentAnimations = {
  loginAnimationTrigger :
    trigger('loginBorder',[
      transition('default => wrongInput',[
        animate(1500,keyframes([
          style({'border-color': ' #bb7822 ',
            'background-color': 'rgb( 187, 120, 34 ,0.4)',
            'offset':0.3}),
          style({'border-color': 'var(--default-dark)',
            'background-color': 'rgb( 255, 255, 255 ,0.4)',
            'offset':1})
        ]))
      ]),
      transition('wrongInput => default',[
        animate(0,keyframes([
          ]))
      ])
    ])
}
