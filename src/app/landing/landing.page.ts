
/*
 * Copyright (c) 2023. Developed By
 * Ahmed Hashim
 * https://geohashim.com
 */

import { Component, OnInit } from '@angular/core';
import {ThemeService} from "@core/service/ThemeService/theme.service";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  marginStart = '72px'
  marginEnd = '72px'

  constructor(private themeService:ThemeService) { }

  ngOnInit() {
    this.getMargins()
  }

  getMargins(){
    this.marginStart = this.themeService.margins.margin_start
    this.marginEnd = this.themeService.margins.margin_end
    this.themeService.onMarginsChange.subscribe((margins) => {
      this.marginStart = margins.margin_start
      this.marginEnd = margins.margin_end
    })
  }
}
