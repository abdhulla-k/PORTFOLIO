import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { InfinitScrollXComponent } from '../../shared/components/infinit-scroll-x/infinit-scroll-x.component';

@Component({
    selector: 'app-default',
    imports: [HeaderComponent, InfinitScrollXComponent],
    templateUrl: './default.component.html',
    styleUrl: './default.component.scss'
})
export class DefaultComponent {

}
