import { Component } from "@angular/core";

import { HeroComponent } from "./components/hero/hero.component";
import { DefaultComponent } from "../../layouts/default/default.component";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    imports: [
        HeroComponent,
        DefaultComponent
    ],
})
export class HomeComponent {

}