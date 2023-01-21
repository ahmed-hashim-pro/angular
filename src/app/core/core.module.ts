import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from "@ngx-translate/core";
import {ParallaxHeader} from "./directives/ParallaxHeader/parallax-header.directive";
import {IonicModule} from "@ionic/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [ParallaxHeader],
  exports:[
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ParallaxHeader
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
      ],
    };
  }

  static forChild(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule
    };
  }
}
