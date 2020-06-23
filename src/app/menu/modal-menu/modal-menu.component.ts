import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/core/models/menu.model';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-menu',
  templateUrl: './modal-menu.component.html',
  styleUrls: ['./modal-menu.component.scss'],
})
export class ModalMenuComponent implements OnInit {


  menu: Menu = undefined;

  constructor(
    public modalController: ModalController,
    public navParams: NavParams) {
      this.menu = this.navParams.get('data');
      console.log(this.menu)
  }

  ngOnInit() { }


  async submit() {
   await this.modalController.dismiss(this.menu);
  }
}
