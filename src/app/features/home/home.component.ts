import { Component } from "@angular/core";

import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/all";

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