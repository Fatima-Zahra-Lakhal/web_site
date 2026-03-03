import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, state, query, stagger, keyframes } from '@angular/animations';
import { 
  LucideAngularModule, 
  Code2, Database, Server, Network, Shield, 
  GitBranch, Workflow, Layers, Cpu, Globe, 
  BookOpen, TrendingUp, Zap, Sparkles 
} from 'lucide-angular';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-expertise',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.css'],
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
    trigger('timelineAppear', [
      transition(':enter', [
        query('.timeline-node', [
          style({ opacity: 0, transform: 'scale(0.5)' }),
          stagger('150ms', [
            animate('500ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
          ])
        ], { optional: true }),
        query('.timeline-line', [
          style({ width: '0%' }),
          animate('1000ms 300ms ease-out', style({ width: '100%' }))
        ], { optional: true })
      ])
    ]),
    trigger('pulseGlow', [
      state('normal', style({ transform: 'scale(1)' })),
      state('hovered', style({ transform: 'scale(1.1)' })),
      transition('normal <=> hovered', animate('300ms ease-out'))
    ])
  ]
})
export class ExpertiseComponent {
  // Icônes
  Code2 = Code2;
  Database = Database;
  Server = Server;
  Network = Network;
  Shield = Shield;
  GitBranch = GitBranch;
  Workflow = Workflow;
  Layers = Layers;
  Cpu = Cpu;
  Globe = Globe;
  BookOpen = BookOpen;
  TrendingUp = TrendingUp;
  Zap = Zap;
  Sparkles = Sparkles;

  // États hover
  hoverStates: boolean[] = new Array(10).fill(false);

  constructor(public languageService: LanguageService) {}

  get currentLang(): string {
    return this.languageService.language();
  }

  setHover(index: number, state: boolean): void {
    this.hoverStates[index] = state;
  }

  // Timeline des méthodes et technologies (basée sur le PDF)
  timelineData = [
    {
      year: '1989',
      title: 'Fondation',
      description: 'Création de Lambda Soft',
      icon: Sparkles,
      color: 'from-cyan-500 to-blue-500',
      technologies: ['MERISE', 'Analyse SI']
    },
    {
      year: '1995',
      title: 'SGBDR',
      description: 'Maîtrise des bases de données',
      icon: Database,
      color: 'from-blue-500 to-purple-500',
      technologies: ['SQL Server', 'ORACLE']
    },
    {
      year: '2000',
      title: 'Développement',
      description: 'Outils de développement',
      icon: Code2,
      color: 'from-purple-500 to-pink-500',
      technologies: ['VB', 'Développer 2000']
    },
    {
      year: '2005',
      title: 'Plateformes',
      description: 'Infrastructure serveur',
      icon: Server,
      color: 'from-pink-500 to-orange-500',
      technologies: ['UNIX', 'NT']
    },
    {
      year: '2010',
      title: 'Technologies modernes',
      description: '.NET et solutions intégrées',
      icon: Globe,
      color: 'from-orange-500 to-red-500',
      technologies: ['.NET', 'ERP']
    },
    {
      year: '2024',
      title: 'Expertise actuelle',
      description: 'Solutions complètes SI',
      icon: TrendingUp,
      color: 'from-red-500 to-rose-500',
      technologies: ['Cloud', 'Intégration']
    }
  ];

  // Méthodologies (basées sur section 1.5)
  methodologies = [
    {
      name: 'MERISE',
      description: 'Méthode d\'analyse et de conception des SI',
      icon: Workflow,
      color: 'from-cyan-500 to-blue-500',
      details: ['Modélisation conceptuelle', 'Organisation des données', 'Traitements']
    },
    {
      name: 'SGBDR',
      description: 'Systèmes de gestion de bases de données',
      icon: Database,
      color: 'from-blue-500 to-purple-500',
      details: ['SQL Server', 'ORACLE', 'Optimisation']
    },
    {
      name: 'Agile',
      description: 'Méthodologies agiles de développement',
      icon: GitBranch,
      color: 'from-purple-500 to-pink-500',
      details: ['Scrum', 'Itérations', 'Livraison continue']
    }
  ];

  // Technologies par catégorie
  techCategories = [
    {
      title: 'SGBDR',
      icon: Database,
      color: 'from-cyan-500 to-blue-500',
      items: ['SQL Server', 'ORACLE']
    },
    {
      title: 'Plateformes',
      icon: Server,
      color: 'from-blue-500 to-purple-500',
      items: ['UNIX', 'NT']
    },
    {
      title: 'Développement',
      icon: Code2,
      color: 'from-purple-500 to-pink-500',
      items: ['VB', '.NET', 'Développer 2000']
    },
    {
      title: 'Méthodes',
      icon: Workflow,
      color: 'from-pink-500 to-orange-500',
      items: ['MERISE', 'Analyse SI']
    }
  ];

  // Outils complémentaires
  tools = [
    { name: 'MERISE', icon: Workflow, color: 'from-cyan-500 to-blue-500' },
    { name: 'SQL Server', icon: Database, color: 'from-blue-500 to-purple-500' },
    { name: 'ORACLE', icon: Database, color: 'from-purple-500 to-pink-500' },
    { name: 'UNIX', icon: Server, color: 'from-pink-500 to-orange-500' },
    { name: 'NT', icon: Server, color: 'from-orange-500 to-red-500' },
    { name: 'VB', icon: Code2, color: 'from-red-500 to-rose-500' },
    { name: '.NET', icon: Code2, color: 'from-rose-500 to-pink-500' },
    { name: 'Développer 2000', icon: Code2, color: 'from-pink-500 to-purple-500' }
  ];
  // Pour la progression de la timeline (optionnel)
timelineProgressWidth: number = 100; // Desktop : 100% par défaut
timelineProgressHeight: number = 100; // Mobile : 100% par défaut
onScroll(): void {
  const element = document.querySelector('.timeline-container');
  if (element) {
    const rect = element.getBoundingClientRect();
    const scrollPercent = (window.scrollY - rect.top) / rect.height;
    this.timelineProgressHeight = Math.min(100, Math.max(0, scrollPercent * 100));
  }
}
}