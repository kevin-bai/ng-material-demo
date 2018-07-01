import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl } from '@angular/forms'; // 实现一个表单控件

@Component({
  selector: 'app-image-list-select',
  templateUrl: './image-list-select.component.html',
  styleUrls: ['./image-list-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR, // VALUE_ACCESSOR令牌
      // 我们需要引用我们本身，这个函数会等待我们这个组件实例化后进行引用。同时
      // 并不妨碍我们放在useExisting中，注册到依赖池里面去
      useExisting: forwardRef(() => ImageListSelectComponent),
      multi: true // 因为这个NG_VALUE_ACCESSOR可能分散在项目的很多地方都有使用，
    },
    {
      provide: NG_VALIDATORS, // 验证器令牌
      useExisting: forwardRef(() => ImageListSelectComponent),
      multi: true
    }
  ]
})
export class ImageListSelectComponent implements ControlValueAccessor {

  @Input() title = '选择'
  selected;
  @Input() cols = 5;
  @Input() rowHeight = '64px';
  @Input() items: string[] = [];
  @Input() useUserIcon = false;
  @Input() itemWidth = '80px';

  // 这里是做一个空函数体，真正使用的方法在 registerOnChange 中
  // 由框架注册，然后我们使用它把变化发回表单
  // 注意，和 EventEmitter 尽管很像，但发送回的对象不同
  private propagateChange = (_: any) => { }

  constructor() { }

  writeValue(obj: any): void {
    this.selected = obj
  }

  registerOnChange(fn: any): void {
    // 当控件view层发生变化的时候，发射给表单
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

  // 验证表单，验证结果正确返回 null 否则返回一个验证结果对象
  public validate(c: FormControl) {
    return this.selected ? null : {
      imageListSelect: {
        valid: false,
      },
    };
  }
}
