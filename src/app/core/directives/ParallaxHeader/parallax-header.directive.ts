
/*
 * Copyright (c) 2023. Developed By
 * Ahmed Hashim
 * https://geohashim.com
 */

import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';
import {DomController} from '@ionic/angular';

@Directive({
  selector: '[parallax-header]',
  host: {
    '(ionScroll)': 'onContentScroll($event)'
  }
})
export class ParallaxHeader {
  @Input('parallaxHeader') imagePath: string | undefined;
  @Input('parallaxHeight') parallaxHeight: number;
  private headerHeight: number;
  private header: HTMLDivElement;
  private mainContent: HTMLDivElement;
  constructor(private element: ElementRef, private renderer: Renderer2, private domCtrl: DomController) {
  }
  ngAfterViewInit(){
    this.headerHeight = this.parallaxHeight;
    this.mainContent = this.element.nativeElement.querySelector('.main-content');
    if (this.imagePath){
      this.domCtrl.write(() => {
        this.header = this.renderer.createElement('div');
        this.renderer.insertBefore(this.element.nativeElement, this.header, this.element.nativeElement.firstChild);
        this.renderer.setStyle(this.header, 'background-image', 'url(' + this.imagePath + ')');
        this.renderer.setStyle(this.header, 'height', this.headerHeight + 'px');
        this.renderer.setStyle(this.header, 'background-size', 'cover');
      });
    }else{
      this.header = this.element.nativeElement.getElementsByClassName('header-image')[0]

    }

  }
  onContentScroll(ev){
    this.domCtrl.read(() => {

      let scaleMain
      if (ev.detail.scrollTop > this.header.clientHeight){
        scaleMain = this.header.clientHeight
      }else{
        scaleMain = ev.detail.scrollTop
      }
      if (!this.headerHeight){
        this.headerHeight = this.header.clientHeight
      }

      let headerHeight
      if(ev.detail.scrollTop < this.headerHeight){
        headerHeight = this.headerHeight - (ev.detail.scrollTop )
      }

      this.domCtrl.write(() => {
        this.renderer.setStyle(this.header, 'transform', 'translate3d(0, '+(scaleMain) + 'px, 0');
        this.renderer.setStyle(this.header, 'height', headerHeight + 'px' );
      });
    });
  }
}
