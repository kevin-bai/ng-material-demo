import { Component, OnInit, HostBinding } from '@angular/core';
import { routerAnim } from '../../animation/router.anim'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { QuoteService } from '../../service/quote.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [routerAnim]
})
export class RegisterComponent implements OnInit {

  form: FormGroup
  items: string[];
  @HostBinding('@slideToRight') routeState;

  constructor(private fb: FormBuilder, private quoteService$: QuoteService) {
  }

  ngOnInit() {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    const img = `avatars:svg-${Math.floor(Math.random() * 16).toFixed(0)}`

    this.items = nums.map(i => {
      return `avatars:svg-${i}`
    })
    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password1: ['', Validators.required],
      password2: ['', Validators.required],
      avatar: [img, Validators.required],
    });
  }

  onSubmit({ value, valid }, e) {

  }
}
