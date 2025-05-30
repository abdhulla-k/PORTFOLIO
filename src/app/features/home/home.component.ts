import { Component } from "@angular/core";

import { HeroComponent } from "./components/hero/hero.component";
import { DefaultComponent } from "../../layouts/default/default.component";
import { AboutComponent } from "./components/about/about.component";
import { ProjectsComponent } from "./components/projects/projects.component";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    imports: [
        HeroComponent,
        DefaultComponent,
        AboutComponent,
        ProjectsComponent
    ],
})
export class HomeComponent {

}