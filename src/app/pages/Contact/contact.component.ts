import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LucideAngularModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitted = false;

  constructor(
    private fb: FormBuilder,
    public languageService: LanguageService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9\\s\\(\\)\\+\\-]+$')]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get currentLang(): string {
    return this.languageService.language();
  }

  ngOnInit() {
    setTimeout(() => {
      document.querySelectorAll('.info-card, .contact__form-wrapper, .contact__map-card').forEach(el => {
        el.classList.add('visible');
      });
    }, 100);
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      this.isSubmitted = true;
      
      setTimeout(() => {
        this.isSubmitted = false;
        this.contactForm.reset();
      }, 3000);
    } else {
      this.markFormGroupTouched(this.contactForm);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  onActionClick(action: string): void {
    console.log('Action clicked:', action);
    switch(action) {
      case 'Appel rapide':
        window.location.href = 'tel:+212522313125';
        break;
      case 'WhatsApp':
        window.open('https://wa.me/212522313125', '_blank');
        break;
      case 'Chatbot':
        // Ouvrir le chatbot
        break;
    }
  }

  // Form validation helpers
  get nameControl() { return this.contactForm.get('name'); }
  get emailControl() { return this.contactForm.get('email'); }
  get phoneControl() { return this.contactForm.get('phone'); }
  get subjectControl() { return this.contactForm.get('subject'); }
  get messageControl() { return this.contactForm.get('message'); }

  isFieldInvalid(fieldName: string): boolean {
    const control = this.contactForm.get(fieldName);
    return control ? control.invalid && control.touched : false;
  }

  getFieldError(fieldName: string): string {
    const control = this.contactForm.get(fieldName);
    if (!control || !control.errors) return '';

    if (control.errors['required']) {
      return this.currentLang === 'fr' ? 'Ce champ est requis' : 'هذا الحقل مطلوب';
    }
    if (control.errors['email']) {
      return this.currentLang === 'fr' ? 'Email invalide' : 'البريد الإلكتروني غير صالح';
    }
    if (control.errors['minlength']) {
      return this.currentLang === 'fr' 
        ? `Minimum ${control.errors['minlength'].requiredLength} caractères`
        : `الحد الأدنى ${control.errors['minlength'].requiredLength} حروف`;
    }
    if (control.errors['pattern']) {
      return this.currentLang === 'fr' ? 'Format invalide' : 'تنسيق غير صالح';
    }
    
    return this.currentLang === 'fr' ? 'Champ invalide' : 'حقل غير صالح';
  }
}