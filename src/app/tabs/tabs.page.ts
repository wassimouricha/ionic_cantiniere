import { Component } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private menuService : MenuService , private _http : HttpClientModule ) {}

}
