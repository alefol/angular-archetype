///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {AfterViewInit, Directive, ElementRef, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appInputColor]'
})
export class InputColorDirective implements AfterViewInit{

  originColor: string;

  @Input('appInputColor')
  color: string;

  @HostListener('mouseenter')
  onMouseEnter(): void{
    this.setColor(this.color|| 'inherit');
  }

  @HostListener('mouseleave')
  onMouseLeave(): void{
    this.setColor(this.originColor);
  }

  constructor(private el: ElementRef<HTMLInputElement>) {
  }

  ngAfterViewInit(): void {
    this.originColor = this.el.nativeElement.style.backgroundColor;
  }

  private setColor(color: string): void{
    this.el.nativeElement.style.backgroundColor = color;
  }

}

@Directive({
  selector: 'input[appInputColor2]'
})
export class InputColor2Directive implements AfterViewInit{

  originColor: string;

  @Input('appInputColor')
  color: string;

  @HostBinding('style.backgroundColor')
  backgroundColor: string;

  @HostListener('mouseenter')
  onMouseEnter(): void{
    this.setColor(this.color|| 'inherit');
  }

  @HostListener('mouseleave')
  onMouseLeave(): void{
    this.setColor(this.originColor);
  }

  ngAfterViewInit(): void {
    this.originColor = this.backgroundColor;
  }

  private setColor(color: string): void{
    this.backgroundColor = color;
  }

}
