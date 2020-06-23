import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../core/models/menu.model';
import { MenuService } from '../core/services/menu.service';
import { ModalController } from '@ionic/angular';
import { ModalMenuComponent } from './modal-menu/modal-menu.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  menus: Observable<Menu[]>;
  constructor(public menuService: MenuService, public modal: ModalController) { }
  ngOnInit(): void {
    this.menus = this.menuService.getMenus();

  }


  async  openModal(menu: Menu) {
    const modal =
      await this.modal.create({
        component: ModalMenuComponent,
        componentProps: {
          data: menu
        }
      });

    modal.onDidDismiss().then((value) => {
     
    });

    await modal.present();
  }
}
