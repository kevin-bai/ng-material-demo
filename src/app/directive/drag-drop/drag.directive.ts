import {Directive, HostListener, ElementRef, Renderer2, Input} from '@angular/core';

@Directive({
  selector: '[appDraggable][draggedClass]'
})
export class DragDirective {

  private _isDraggable = false;

  @Input('appDraggable')
  set isDraggable(val: boolean) {
    this._isDraggable = val;
    this.rd.setAttribute(this.el.nativeElement, 'draggable', `${val}`)
  }

  get isDraggable() {
    return this._isDraggable;
  }

  @Input() draggedClass: string;

  constructor(private el: ElementRef, private rd: Renderer2) {
  }

  @HostListener('dragstart', ['$event'])
  onDragStart(e: Event) {
    if (this.el.nativeElement === e.target) {
      this.rd.addClass(this.el.nativeElement, this.draggedClass)
    }
  }

  @HostListener('dragend', ['$event'])
  onDragEnd(e: Event) {
    if (this.el.nativeElement === e.target) {
      this.rd.removeClass(this.el.nativeElement, this.draggedClass)
    }
  }
}
