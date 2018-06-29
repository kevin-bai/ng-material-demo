import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'; // 实现一个表单控件

@Component({
  selector: 'app-image-list-select',
  templateUrl: './image-list-select.component.html',
  styleUrls: ['./image-list-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR, // 令牌
      // 我们需要引用我们本身，这个函数会等待我们这个组件实例化后进行引用。同时
      // 并不妨碍我们放在useExisting中，注册到依赖池里面去
      useExisting: forwardRef(() => ImageListSelectComponent),
      multi: true
    }
  ]
})
export class ImageListSelectComponent implements ControlValueAccessor {

  title = '选择'
  selected;
  @Input() cols = 6;
  @Input() rowHeight = '64px';
  @Input() items: string[] = [];
  @Input() useUserIcon = false;
  @Input() itemWidth = '80px';

  private propagateChange = (_: any) => { }

  constructor() { }

  writeValue(obj: any): void {
    this.selected = obj
  }

  registerOnChange(fn: any): void {
    // 当view发生变化的时候，发射给表单
    this.propagateChange = fn;
  }
  /**
   * Set the function to be called when the control receives a touch event.
   */
  registerOnTouched(fn: any): void { }

  onChange(i) {
    this.selected = this.items[i];
    // 把变化发送回去，通知给表单
    this.propagateChange(this.selected)
  }

}
