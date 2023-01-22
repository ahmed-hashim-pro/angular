
/*
 * Copyright (c) 2023. Developed By
 * Ahmed Hashim
 * https://geohashim.com
 */

import {EventEmitter, Inject, Injectable, Renderer2, RendererFactory2} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {Platform} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  get isAppLoaded(): boolean {
    return this._isAppLoaded;
  }

  set isAppLoaded(value: boolean) {
    this._isAppLoaded = value;
  }

  private renderer: Renderer2;
  public currentTheme;

   onThemeChange: EventEmitter<boolean>
  // private margin_start = '72px'
  // private margin_start_small = '8px'
  // private margin_end = '72px'
  private _onMarginsChange: EventEmitter<any> = new EventEmitter<any>()
  private _onMainMenuChange: EventEmitter<any> = new EventEmitter<any>()

  margins = {
    margin_start : '72px',
    margin_end : '72px',
    margin_start_small : '8px',
  }
  margin_start_all = {
     s:"18px",
     m:"12px",
     l:"72px",
  }
  margin_end_all = {
     s:"18px",
     m:"12px",
     l:"72px",
  }

  private _isAppLoaded:boolean
  constructor(private rendererFactory: RendererFactory2,
              @Inject(DOCUMENT) private document: Document,
              private platform:Platform) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
    this.onThemeChange = new EventEmitter<boolean>();
    this.setMargins()
  }

  activeTheme(item) {
    this.renderer.removeClass(this.document.body, this.currentTheme);
    this.currentTheme = item;
    this.renderer.addClass(this.document.body, item);
  }


  emitThemeChangeEvent(toggle) {
    this.onThemeChange.emit(toggle);
  }

  getThemeChangeEmitter() {
    return this.onThemeChange;
  }

  setMargins(){
    if(this.platform.width()<400){
      this.margins.margin_start = this.margin_start_all.s
      this.margins.margin_end = this.margin_end_all.s
    }else if(this.platform.width()<1024){
      this.margins.margin_start = this.margin_start_all.m
      this.margins.margin_end = this.margin_end_all.m
    }else{
      this.margins.margin_start =  this.margin_start_all.l
      this.margins.margin_end =  this.margin_end_all.l
    }

    this.emit()
    this.platform.resize.subscribe(async () => {
      if(this.platform.width()<400){
        this.margins.margin_start = this.margin_start_all.s
        this.margins.margin_end = this.margin_end_all.s
      }else if(this.platform.width()<1024){
        this.margins.margin_start = this.margin_start_all.m
        this.margins.margin_end = this.margin_end_all.m
      }else{
        this.margins.margin_start =  this.margin_start_all.l
        this.margins.margin_end =  this.margin_end_all.l
      }
      this.emit()
    });
  }


  get onMarginsChange(): EventEmitter<any> {
    return this._onMarginsChange;
  }

  emit(){
    this._onMarginsChange.emit(this.margins)
  }

  emitMainMenuChangeEvent(any) {
    this._onMainMenuChange.emit(any);
  }

  get onMainMenuChange(): EventEmitter<any> {
    return this._onMainMenuChange;
  }

}

