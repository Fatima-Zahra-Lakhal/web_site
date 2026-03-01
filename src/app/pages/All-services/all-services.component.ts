import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, ArrowLeft, Clock, Euro, Check } from 'lucide-angular';
import { LanguageService } from '../../core/services/language.service';
import { HeaderComponent } from '../../shared/header.component';
import { FooterComponent } from '../Footer/footer.component';
import { servicesData } from '../../core/services/servicesData';

@Component({
  selector: 'app-all-services',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    HeaderComponent, 
    FooterComponent,
    LucideAngularModule
  ],
  templateUrl: './all-services.component.html',
  styleUrls: ['./all-services.component.css']
})
export class AllServicesComponent implements OnInit {
  servicesArray = Object.values(servicesData);
  
  // Icônes
  ArrowLeft = ArrowLeft;
  Clock = Clock;
  Euro = Euro;
  Check = Check;

  constructor(public languageService: LanguageService) {}

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  // Getter pour la langue actuelle
  get currentLang() {
    return this.languageService.language();
  }

  // Getter pour savoir si c'est l'arabe
  get isArabic() {
    return this.languageService.language() === 'ar';
  }

  // Méthode de traduction simplifiée
  t(key: string): string {
    return this.languageService.t(key);
  }
}