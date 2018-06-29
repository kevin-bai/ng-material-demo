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

  form: FormGroup;
  @HostBinding('@slideToRight') routeState;


  constructor(private fb: FormBuilder) {
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
