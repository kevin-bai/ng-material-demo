import { QuoteService } from './../../service/quote.service';
import { Quote } from './../../domain/quote.model';
import { Component, HostBinding, OnInit } from '@angular/core';
import { routerAnim } from '../../animation/router.anim'
import { FormsModule, FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerAnim]
})
export class LoginComponent implements OnInit {

  quote: Quote = {
    "id": "0",
    "cn": "我突然就觉得自己像个华丽的木偶,演尽了所有的悲欢离合,可是背上总是有无数闪亮的银色丝线,操纵我哪怕一举手一投足。",
    // tslint:disable-next-line:max-line-length
    "en": "I suddenly feel myself like a doll,acting all kinds of joys and sorrows.There are lots of shining silvery thread on my back,controlling all my action.",
    "pic": "/assets/img/quotes/0.jpg"
  };
  form: FormGroup;
  @HostBinding('@slideToRight') routeState;


  constructor(private fb: FormBuilder, private quoteService$: QuoteService) {
    this.quoteService$.getQuote()
    .subscribe(res => this.quote = res)
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['abc@qq.com', Validators.compose([Validators.required, Validators.email, this.validateWang])],
      password: ['', Validators.required]
    })

  }

  onSubmit({ value, valid }, e: Event) {
    console.log(value)
    console.log(valid)

    // 动态验证器实现
    if (true) { }
    this.form.controls["email"].setValidators(this.validateWang)
  }

  // 自定义验证器
  validateWang(c: FormControl): { [key: string]: any } {
    if (!c.value) {
      return null
    }
    const pattern = /^wang+/;
    if (pattern.test(c.value)) {
      return null
    }
    return {
      emailNotVaild: 'this eamil not start with wang'
    }
  }
}
