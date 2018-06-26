import {Directive, HostListener, ElementRef, Renderer2, Input} from '@angular/core';

@Directive({
  selector: '[appDropable][dragEnterClass]'
})
export class DropDirective {

  @Input() dragEnterClass: string;

  constructor(private el: ElementRef, private rd: Renderer2) {
  }

  @HostListener('dragenter', ['$event'])
  onDragEnter(e: Event) {
    if (this.el.nativeElement === e.target) {
      this.rd.addClass(this.el.nativeElement, this.dragEnterClass)
    }
  }

  @HostListener('dragover', ['$event'])
  onDragOver(e: Event) {
    if (this.el.nativeElement === e.target) {
      this.rd.addClass(this.el.nativeElement, this.dragEnterClass)
    }
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(e: Event) {
    if (this.el.nativeElement === e.target) {
      this.rd.removeClass(this.el.nativeElement, this.dragEnterClass)
    }
  }

  @HostListener('drop', ['$event'])
  onDrop(e: Event) {
    if (this.el.nativeElement === e.target) {
      this.rd.removeClass(this.el.nativeElement, this.dragEnterClass)
    }
  }
}
