import { IonicModule, ModalController } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { MenuComponent } from '../menu/menu.component';
import { MenuModule } from '../menu/menu.module';
import { ModalMenuComponent } from '../menu/modal-menu/modal-menu.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    MenuModule,
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page]
  ,
})
export class Tab1PageModule { }
