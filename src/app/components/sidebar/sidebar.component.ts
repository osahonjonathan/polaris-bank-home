import { Component, OnInit } from '@angular/core';
import { SIDEBAR } from 'src/app/interface/general';
import { GeneralService } from 'src/app/service/general.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  sideBarMenu: any;

  constructor(private genSrv: GeneralService) { }
  
  ngOnInit(): void {
    this.sideBarMenu = this.genSrv.sideBarMenu
  }
  
  toggleSubMenu(selectedItem: SIDEBAR) {
    this.sideBarMenu.forEach((item: SIDEBAR) => {
      if (item !== selectedItem) {
        item.isOpen = false;
      }
    });
    selectedItem.isOpen = !selectedItem.isOpen;
  }
}
