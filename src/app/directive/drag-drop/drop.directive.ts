import {Directive, HostListener, ElementRef, Renderer2, Input} from '@angular/core';
import {DragDropService} from "../drag-drop.service";

@Directive({
  selector: '[appDropable][dragEnterClass]'
})
export class DropDirective {

  @Input() dragEnterClass: string;
  @Input() dropTag: string[] = [];
  private data$;

  constructor(private el: ElementRef, private rd: Renderer2, private service: DragDropService) {
    this.data$ = this.service.getDragData().take(1)
  }

  @HostListener('dragenter', ['$event'])
  onDragEnter(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    if (this.el.nativeElement === e.target) {
      this.data$.subscribe(data => {
        if (this.dropTag.indexOf(data.tag) <= -1) {
          return
        }
        this.rd.addClass(this.el.nativeElement, this.dragEnterClass)
      })
    }
  }

  @HostListener('dragover', ['$event'])
  onDragOver(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    if (this.el.nativeElement === e.target) {
      this.data$.subscribe(data => {
        if (this.dropTag.indexOf(data.tag) > -1) {
          this.rd.setProperty(e, 'dataTransform.effectAllowed', 'all')
          this.rd.setProperty(e, 'dataTransform.dropEffect', 'move')
        } else {
          this.rd.setProperty(e, 'dataTransform.effectAllowed', 'none')
          this.rd.setProperty(e, 'dataTransform.dropEffect', 'none')
        }
        // this.rd.addClass(this.el.nativeElement, this.dragEnterClass)
      })

    }
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    if (this.el.nativeElement === e.target) {
      this.data$.subscribe(data => {
        if (this.dropTag.indexOf(data.tag) > -1) {
          this.rd.removeClass(this.el.nativeElement, this.dragEnterClass)
        }
      })
    }
  }

  @HostListener('drop', ['$event'])
  onDrop(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    if (this.el.nativeElement === e.target) {
      this.data$.subscribe(data => {
        if (this.dropTag.indexOf(data.tag) > -1) {
          this.rd.removeClass(this.el.nativeElement, this.dragEnterClass);
          this.service.clearDragData()
        }
      })
    }
  }
}
