import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { 
  LucideAngularModule, 
  ArrowRight, 
  Send, 
  Building2, 
  User, 
  Mail, 
  Phone, 
  MessageSquare,
  Globe,
  CheckCircle,
  Award,
  Users,
  Briefcase,
  TrendingUp
} from 'lucide-angular';
import { LanguageService } from '../../core/services/language.service';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../shared/header.component';
import { FooterComponent } from '../Footer/footer.component';

@Component({
  selector: 'app-become-partner',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, LucideAngularModule, RouterModule,
    HeaderComponent, FooterComponent],
  templateUrl: './become-partner.component.html',
  styleUrls: ['./become-partner.component.css'],
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
    trigger('slideInRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(50px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('successState', [
      state('hidden', style({ opacity: 0, transform: 'scale(0.8)' })),
      state('visible', style({ opacity: 1, transform: 'scale(1)' })),
      transition('hidden <=> visible', animate('300ms ease-out'))
    ])
  ]
})
export class BecomePartnerComponent {
  // Icônes
  ArrowRight = ArrowRight;
  Send = Send;
  Building2 = Building2;
  User = User;
  Mail = Mail;
  Phone = Phone;
  MessageSquare = MessageSquare;
  Globe = Globe;
  CheckCircle = CheckCircle;
  Award = Award;
  Users = Users;
  Briefcase = Briefcase;
  TrendingUp = TrendingUp;

  partnerForm: FormGroup;
  submitted = false;
  success = false;
  currentStep = 1;
  
  partnershipTypes = [
    { id: 'technology', label: { fr: 'Partenariat Technologique', ar: 'شراكة تقنية' } },
    { id: 'commercial', label: { fr: 'Partenariat Commercial', ar: 'شراكة تجارية' } },
    { id: 'integration', label: { fr: "Partenariat d'Intégration", ar: 'شراكة تكامل' } },
    { id: 'training', label: { fr: 'Partenariat Formation', ar: 'شراكة تدريب' } }
  ];

  constructor(
    public languageService: LanguageService,
    private fb: FormBuilder
  ) {
    this.partnerForm = this.fb.group({
      companyName: ['', [Validators.required, Validators.minLength(2)]],
      contactName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9+\\-\\s]+$')]],
      website: [''],
      partnershipType: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(20)]],
      acceptTerms: [false, Validators.requiredTrue]
    });
  }

  get currentLang(): string {
    return this.languageService.language();
  }

  get directionClass(): string {
    return this.currentLang === 'ar' ? 'rtl' : 'ltr';
  }

  get textAlignClass(): string {
    return this.currentLang === 'ar' ? 'text-right' : 'text-left';
  }

  get f() { return this.partnerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.partnerForm.invalid) {
      Object.keys(this.partnerForm.controls).forEach(key => {
        this.partnerForm.get(key)?.markAsTouched();
      });
      return;
    }

    setTimeout(() => {
      this.success = true;
      console.log('Formulaire soumis:', this.partnerForm.value);
    }, 1500);
  }

  nextStep() {
    if (this.currentStep < 3) {
      this.currentStep++;
      console.log(this.currentStep);
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
       console.log(this.currentStep);
    }
  }

  resetForm() {
    this.partnerForm.reset();
    this.submitted = false;
    this.success = false;
    this.currentStep = 1;
  }
}