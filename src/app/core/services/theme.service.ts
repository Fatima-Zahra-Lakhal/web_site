import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private themeSignal = signal<Theme>('light');
  
  // Exposer un signal en lecture seule
  theme = this.themeSignal.asReadonly();

  constructor() {
    this.initializeTheme();
    
    // Réagir aux changements
    effect(() => {
      const current = this.themeSignal();
      this.saveTheme(current);
      this.applyTheme(current);
    });
  }

  private initializeTheme(): void {
    // 1. Vérifier le localStorage
    const saved = localStorage.getItem('theme') as Theme | null;
    
    // 2. Vérifier les préférences système
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // 3. Définir le thème initial
    if (saved) {
      this.themeSignal.set(saved);
    } else if (prefersDark) {
      this.themeSignal.set('dark');
    } else {
      this.themeSignal.set('light');
    }
  }

  private applyTheme(theme: Theme): void {
    const html = document.documentElement;
    
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    
    // Optionnel: Ajouter un attribut data-theme pour CSS
    html.setAttribute('data-theme', theme);
  }

  private saveTheme(theme: Theme): void {
    localStorage.setItem('theme', theme);
  }

  toggleTheme(): void {
    this.themeSignal.update(prev => prev === 'light' ? 'dark' : 'light');
  }

  // ✅ Méthode setTheme améliorée
  setTheme(theme: Theme): void {
    if (theme === 'light' || theme === 'dark') {
      this.themeSignal.set(theme);
    } else {
      console.error('Thème invalide:', theme);
    }
  }

  // ✅ Méthode utilitaire pour vérifier le thème actuel
  isDark(): boolean {
    return this.themeSignal() === 'dark';
  }

  isLight(): boolean {
    return this.themeSignal() === 'light';
  }

  // ✅ Méthode pour réinitialiser aux préférences système
  resetToSystemPreference(): void {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.setTheme(prefersDark ? 'dark' : 'light');
  }
}