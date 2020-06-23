import { NgModule } from '@angular/core';

import { MenuComponent } from './menu.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ModalMenuComponent } from './modal-menu/modal-menu.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule],
    exports: [MenuComponent],
    declarations: [MenuComponent, ModalMenuComponent],
    providers: [],
    entryComponents:[ModalMenuComponent]
    
})
export class MenuModule { }
