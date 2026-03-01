import { Component, HostListener, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ThemeService } from '../core/services/theme.service';
import { LanguageService } from '../core/services/language.service';
import { LucideAngularModule, Moon, Sun, Globe } from 'lucide-angular';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('slideDown', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('600ms ease-out', style({ transform: 'translateY(0)' }))
      ])
    ]),
    trigger('mobileMenu', [
      state('open', style({ height: '*', opacity: 1 })),
      state('closed', style({ height: '0px', opacity: 0 })),
      transition('open <=> closed', animate('300ms ease'))
    ])
  ]
})
export class HeaderComponent implements OnInit {

  navItems = [
    { id: 'home', key: 'nav.home' },
    { id: 'services', key: 'nav.services' },
    { id: 'impact', key: 'nav.impact' },
    { id: 'portfolio', key: 'nav.portfolio' },
    { id: 'expertise', key: 'nav.expertise' },
    { id: 'partners', key: 'nav.partners' },
    { id: 'about', key: 'nav.about' },
    { id: 'contact', key: 'nav.contact' }
  ];
  Moon = Moon;
  Sun = Sun;
  Globe = Globe;

  mobileMenuOpen = false;
  scrolled = false;
  isHomeSection = true;

  constructor(
    public themeService: ThemeService,
    public languageService: LanguageService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {

    // 🔥 Détecter changement de route
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.updateHomeState(event.urlAfterRedirects);
      });
  }

  ngOnInit(): void {
    this.updateHomeState(this.router.url);
  }

  // ✅ Vérifie si on est sur Home
  updateHomeState(url: string) {
    const isHome = url === '/' || url.startsWith('/#');
    this.isHomeSection = isHome;
  }

  // 🔥 Scroll detection
  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 50;

    if (this.router.url === '/' || this.router.url.startsWith('/#')) {
      this.isHomeSection = window.scrollY < 1000;
    }
  }

  // ✅ Navigation vers section
  scrollToSection(id: string) {

    this.router.navigate(['/'], { fragment: id });

    this.mobileMenuOpen = false;
  }

  toggleMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  toggleLanguage() {
    this.languageService.toggleLanguage();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}