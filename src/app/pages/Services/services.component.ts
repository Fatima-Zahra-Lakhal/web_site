import {
  Component,
  HostListener,
  Input
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import {
  LucideAngularModule,
  Code2,
  Shield,
  Cpu,
  Network,
  GraduationCap,
  GitMerge,
   ArrowUpRight, 
  ArrowUpLeft,
} from 'lucide-angular';
import { LanguageService } from '../../core/services/language.service';
import { RouterModule } from '@angular/router';

interface Service {
  icon: any;
  key: string;
  color: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, RouterModule],
  templateUrl: './services.component.html',
  animations: [
    trigger('fadeUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(40px)' }),
        animate('600ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ServicesComponent {

  ArrowUpRight = ArrowUpRight;
ArrowUpLeft = ArrowUpLeft;
  services: Service[] = [
    { 
      icon: Code2, 
      key: 'dev', 
      color: 'from-cyan-500 to-blue-500',
      title: 'Développement d\'applications',
      description: 'Solutions digitales sur mesure, combinant expertise technique et connaissance métier pour répondre à vos besoins spécifiques.'
    },
    { 
      icon: Shield, 
      key: 'security', 
      color: 'from-purple-500 to-pink-500',
      title: 'Sécurité des applications',
      description: 'Audit, tests d\'intrusion, développement sécurisé et formation pour protéger vos applications contre les menaces.'
    },
    { 
      icon: Cpu, 
      key: 'engineering', 
      color: 'from-amber-500 to-orange-500',
      title: 'Ingénierie de produits logiciels',
      description: 'Du développement MVP au support post-lancement, nous accélérons la mise sur le marché de vos produits.'
    },
    { 
      icon: Network, 
      key: 'consulting', 
      color: 'from-emerald-500 to-teal-500',
      title: 'Audit & Conseil IT',
      description: 'Études, schémas directeurs (SDSI), audit financier et technique pour optimiser votre système d\'information.'
    },
    { 
      icon: GraduationCap, 
      key: 'training', 
      color: 'from-rose-500 to-red-500',
      title: 'Formation & Infographie',
      description: 'Formation des équipes sur les SI et logiciels, services d\'infographie et création de supports visuels.'
    },
    { 
      icon: GitMerge, 
      key: 'subcontracting', 
      color: 'from-indigo-500 to-purple-500',
      title: 'Sous-traitance de projets',
      description: 'Prise en charge partielle ou totale de projets avec SGBDR, outils de développement et méthodes reconnus.'
    }
  ];

  constructor(public languageService: LanguageService) {}

  // Getter pour isArabic
  get isArabic(): boolean {
    return this.languageService.language() === 'ar';
  }

  // Méthode pour obtenir le titre traduit
  getTranslatedTitle(service: Service): string {
    return this.languageService.t(`services.${service.key}.title`);
  }

  // Méthode pour obtenir la description traduite
  getTranslatedDescription(service: Service): string {
    return this.languageService.t(`services.${service.key}.description`);
  }

  // Ou si vous préférez une méthode
  isCurrentLanguageArabic(): boolean {
    return this.languageService.language() === 'ar';
  }
  // Ajoutez cette méthode dans votre ServicesComponent
getServiceColorClass(service: Service): string {
  const colorMap = {
    'dev': 'text-cyan-500',
    'security': 'text-purple-500',
    'engineering': 'text-amber-500',
    'consulting': 'text-emerald-500',
    'training': 'text-rose-500',
    'subcontracting': 'text-indigo-500'
  };
  return colorMap[service.key as keyof typeof colorMap] || 'text-cyan-500';
}

getServiceHoverColor(service: Service): string {
  const colorMap = {
    'dev': 'group-hover:text-cyan-500',
    'security': 'group-hover:text-purple-500',
    'engineering': 'group-hover:text-amber-500',
    'consulting': 'group-hover:text-emerald-500',
    'training': 'group-hover:text-rose-500',
    'subcontracting': 'group-hover:text-indigo-500'
  };
  return colorMap[service.key as keyof typeof colorMap] || 'group-hover:text-cyan-500';
}
}