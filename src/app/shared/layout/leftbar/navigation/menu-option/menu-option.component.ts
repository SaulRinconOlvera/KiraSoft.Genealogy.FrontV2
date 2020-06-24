import { Component, Input, OnInit } from '@angular/core';
import { MenuOption } from 'src/app/model/navigation/menu-option';

@Component({
    selector: 'app-menu-option',
    templateUrl: './menu-option.component.html',
    styleUrls: [ ]
})
export class MenuOptionComponent implements OnInit {
    @Input()
    menuOption: MenuOption;

    ngOnInit(): void {
        // // tslint:disable-next-line: curly
        // if (!this.menuOption.link)
        //     this.menuOption.link = 'javascript:void(0)';
    }
 }
