import { Component } from '@angular/core';

@Component({
    selector: 'app-infinit-scroll-x',
    imports: [],
    templateUrl: './infinit-scroll-x.component.html',
    styleUrl: './infinit-scroll-x.component.scss'
})
export class InfinitScrollXComponent {
    skills: string[] = [
        'UI/UX Designer', 'React', 'Vue', 'Svelte', 'JavaScript', 'TypeScript',
    ]
}
