import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

import { SectionLayoutComponent } from "../../../layouts/section-layout/section-layout.component";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    imports: [
        SectionLayoutComponent, 
        RouterLink
    ]
})
export class HeaderComponent {
    navElements = [
        {
            name: "Home",
            url: "/home"
        },
        {
            name: "Works",
            url: "/works"
        },
        {
            name: "About",
            url: "/about"
        },
        {
            name: "Blog",
            url: "/blog"
        },
        {
            name: "Gallery",
            url: "/gallery"
        }
    ]
}