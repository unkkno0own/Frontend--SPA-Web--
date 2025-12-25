import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid #3f51b5');
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(-5px)');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'border');
    this.renderer.removeStyle(this.el.nativeElement, 'transform');
  }
}