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
      transition(':enter', [
        style({ height: '0', opacity: 0 }),
        animate('300ms ease-out', style({ height: '*', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ height: '*', opacity: 1 }),
        animate('300ms ease-in', style({ height: '0', opacity: 0 }))
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {

  navItems = [
    { id: 'home', key: 'nav.home' },
    { id: 'services', key: 'nav.services' },
    { id: 'impact', key: 'nav.impact' },
    { id: 'réalisations', key: 'nav.portfolio' },
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
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updateHomeState(event.urlAfterRedirects);
      });
  }

  ngOnInit(): void {
    this.updateHomeState(this.router.url);
    this.checkScroll();
    
    // Fermer le menu mobile si on redimensionne vers desktop
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('resize', this.onResize.bind(this));
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('resize', this.onResize.bind(this));
    }
  }

  onResize(): void {
    if (window.innerWidth >= 768) { // md breakpoint
      this.mobileMenuOpen = false;
    }
  }

  updateHomeState(url: string) {
    const isHome = url === '/' || url.startsWith('/#');
    this.isHomeSection = isHome;
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.checkScroll();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    // Fermer le menu mobile si on clique en dehors
    if (this.mobileMenuOpen && isPlatformBrowser(this.platformId)) {
      const target = event.target as HTMLElement;
      const mobileMenu = document.querySelector('.mobile-menu-container');
      const menuButton = document.querySelector('.md:hidden.p-3');
      
      if (mobileMenu && !mobileMenu.contains(target) && menuButton && !menuButton.contains(target)) {
        this.mobileMenuOpen = false;
      }
    }
  }

  checkScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.scrolled = window.scrollY > 50;
      
      // Optionnel : ajuster isHomeSection en fonction du scroll
      if (this.router.url === '/' || this.router.url.startsWith('/#')) {
        this.isHomeSection = window.scrollY < 1000;
      }
    }
  }

  scrollToSection(id: string) {
    if (isPlatformBrowser(this.platformId)) {
      this.router.navigate(['/'], { fragment: id }).then(() => {
        // Attendre un peu que la navigation se termine
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start' 
            });
          }
        }, 100);
      });
    }
    
    // Fermer le menu mobile après navigation
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