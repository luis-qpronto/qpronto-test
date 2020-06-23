import { Addon } from './../models/addon.model';
import { Menu } from './../models/menu.model';


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Size } from '../models/enums/size.enum';
import { of, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MenuService {
    menus: Menu[] = [new Menu(
        1,
        1,
        "Bravas",
        3,
        2.1,
        [{ name: "extra sause", price: 0.30 }],
        Size.Medium,
        "https://images.unsplash.com/photo-1565599837634-134bc3aadce8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        [{ id: 1, description: "Wheat" }, { id: 2, description: "Peanut" }]
    ),
    new Menu(
        2,
        1,
        "Bravas",
        5,
        5.5,
        [{ name: "extra sause", price: 0.30 }],
        Size.Medium,
        "https://images.unsplash.com/photo-1565599837634-134bc3aadce8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        [{ id: 1, description: "Wheat" }, { id: 2, description: "Peanut" }]
    ),

    ]
    constructor() { }


    getMenus(): Observable<Menu[]> {
        return of(this.menus);
    }

    updateMenu(id: number, menu: Menu) {

    }
}