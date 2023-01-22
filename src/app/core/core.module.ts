
/*
 * Copyright (c) 2023. Developed By
 * Ahmed Hashim
 * https://geohashim.com
 */

import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from "@ngx-translate/core";
import {ParallaxHeader} from "./directives/ParallaxHeader/parallax-header.directive";
import {IonicModule} from "@ionic/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SafePipePipe} from "@core/pipes/safe-pipe/safe-pipe.pipe";
import {FooterComponent} from "@core/components/footer/footer.component";
import {ThemeService} from "@core/service/ThemeService/theme.service";



@NgModule({
  declarations: [
    ParallaxHeader,
    SafePipePipe,
    FooterComponent
  ],
  exports: [
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ParallaxHeader,
    SafePipePipe,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule

  ]
})
export class CoreModule {

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        TranslateModule,
        ThemeService
      ],
    };
  }

  static forChild(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule
    };
  }
}
