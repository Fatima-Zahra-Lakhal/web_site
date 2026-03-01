import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger, state } from '@angular/animations';
import { LanguageService } from '../../core/services/language.service';
import { LucideAngularModule, Building2, Award, Users, Globe, Shield, Zap, ArrowRight, Sparkles } from 'lucide-angular';
import { Router } from '@angular/router';

interface Partner {
  name: string;  // Le nom reste tel quel (pas de traduction)
  logo: string;
  description: { fr: string; ar: string };  // Description bilingue
  type: 'technologie' | 'strategie' | 'infrastructure' | 'digital' | 'conseil' | 'formation';
  typeLabel: { fr: string; ar: string };
  icon: any;
  color: string;
}

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css'],
  animations: [
    trigger('fadeUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('fadeInScale', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ]),
    trigger('staggerFade', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(50px)' }),
          stagger('100ms', [
            animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('hoverCard', [
      state('normal', style({
        transform: 'translateY(0)'
      })),
      state('hovered', style({
        transform: 'translateY(-10px)'
      })),
      transition('normal <=> hovered', animate('300ms ease-out'))
    ])
  ]
})
export class PartnersComponent implements OnInit {
  partners: Partner[] = [
    {
      name: 'Microsoft',
      logo: 'https://img.icons8.com/color/480/microsoft.png',
      description: {
        fr: 'Partenaire technologique mondial pour les solutions logicielles et cloud',
        ar: 'شريك تكنولوجي عالمي لحلول البرمجيات والحوسبة السحابية'
      },
      type: 'technologie',
      typeLabel: { fr: 'Partenaire Tech', ar: 'شريك تقني' },
      icon: Building2,
      color: 'from-red-500 to-blue-500',
    },
    {
      name: 'CBI',
      logo: 'https://cbi.ma/wp-content/uploads/2021/03/logo-cbi.png',
      description: {
        fr: 'Intégrateur global de solutions IT au Maroc et en Afrique',
        ar: 'مدمج شامل لحلول تكنولوجيا المعلومات في المغرب وإفريقيا'
      },
      type: 'strategie',
      typeLabel: { fr: 'Partenaire Stratégique', ar: 'شريك استراتيجي' },
      icon: Award,
      color: 'from-blue-600 to-blue-800',
    },
    {
      name: 'SYNCHRONIX',
      logo: 'https://img.icons8.com/ios-filled/500/computer.png',
      description: {
        fr: 'Solutions de stockage et gestion de données performantes',
        ar: 'حلول تخزين وإدارة بيانات عالية الأداء'
      },
      type: 'infrastructure',
      typeLabel: { fr: 'Partenaire Infrastructure', ar: 'شريك البنية التحتية' },
      icon: Shield,
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: 'SAS SOFTWARE',
      logo: 'https://img.icons8.com/color/480/sas.png',
      description: {
        fr: "Logiciels d'analyse statistique et business intelligence",
        ar: 'برامج التحليل الإحصائي وذكاء الأعمال'
      },
      type: 'digital',
      typeLabel: { fr: 'Éditeur Logiciel', ar: 'ناشر برامج' },
      icon: Globe,
      color: 'from-blue-400 to-blue-600',
    },
    {
      name: 'SwingAgility',
      logo: 'https://img.icons8.com/fluency/480/agile.png',
      description: {
        fr: 'Solutions agiles et développement logiciel innovant',
        ar: 'حلول أجايل وتطوير برمجي مبتكر'
      },
      type: 'conseil',
      typeLabel: { fr: 'Conseil Agile', ar: 'استشارات أجايل' },
      icon: Users,
      color: 'from-green-500 to-teal-500',
    },
    {
      name: 'ONUDI',
      logo: 'https://img.icons8.com/color/480/united-nations.png',
      description: {
        fr: 'Organisation des Nations Unies pour le développement industriel',
        ar: 'منظمة الأمم المتحدة للتنمية الصناعية'
      },
      type: 'formation',
      typeLabel: { fr: 'Organisation Internationale', ar: 'منظمة دولية' },
      icon: Zap,
      color: 'from-blue-400 to-indigo-600',
    },
  ];

  imageErrors = signal<Set<string>>(new Set());
  hoverStates = signal<Map<string, boolean>>(new Map());
  
  // Lucide icons
  protected readonly ArrowRight = ArrowRight;
  protected readonly Building2 = Building2;
  protected readonly Award = Award;
  protected readonly Users = Users;
  protected readonly Globe = Globe;
  protected readonly Shield = Shield;
  protected readonly Zap = Zap;
  Sparkles = Sparkles;

  constructor(public languageService: LanguageService, private router: Router) {}

  ngOnInit(): void {}

  get currentLang(): 'fr' | 'ar' {
    return this.languageService.language();
  }

  // Méthode utilitaire pour obtenir le texte selon la langue
  getText(textObj: { fr: string; ar: string }): string {
    return this.currentLang === 'fr' ? textObj.fr : textObj.ar;
  }

  hasImageError(partnerName: string): boolean {
    return this.imageErrors().has(partnerName);
  }

  onImageError(partnerName: string, event: Event): void {
    const newErrors = new Set(this.imageErrors());
    newErrors.add(partnerName);
    this.imageErrors.set(newErrors);
  }

  getHoverState(id: string): boolean {
    return this.hoverStates().get(id) || false;
  }

  setHoverState(id: string, state: boolean): void {
    const newStates = new Map(this.hoverStates());
    newStates.set(id, state);
    this.hoverStates.set(newStates);
  }

  getPartnerTypeClass(type: string): string {
    const baseClasses = 'px-3 py-1 rounded-full text-xs font-medium border';
    
    const lightClasses: Record<string, string> = {
      technologie: 'bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-500/10 dark:text-cyan-400 dark:border-cyan-500/20',
      strategie: 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20',
      infrastructure: 'bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-500/10 dark:text-purple-400 dark:border-purple-500/20',
      digital: 'bg-pink-100 text-pink-700 border-pink-200 dark:bg-pink-500/10 dark:text-pink-400 dark:border-pink-500/20',
      conseil: 'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20',
      formation: 'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20',
    };
    
    return `${baseClasses} ${lightClasses[type] || ''}`;
  }

  trackByPartnerName(index: number, partner: Partner): string {
    return partner.name;
  }

  onBecomePartner(): void {
    this.router.navigate(['/become-partner']);
  }
}