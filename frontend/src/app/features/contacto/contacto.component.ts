import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactoService } from '../../core/services/contacto.service';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  form: FormGroup;
  enviado = false;
  enviando = false;
  error = false;

  constructor(private fb: FormBuilder, private contactoService: ContactoService) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get nombre() { return this.form.get('nombre'); }
  get email() { return this.form.get('email'); }
  get mensaje() { return this.form.get('mensaje'); }

  enviar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.enviando = true;
    this.error = false;

    this.contactoService.enviar(this.form.value).subscribe({
      next: () => {
        this.enviado = true;
        this.enviando = false;
        this.form.reset();
      },
      error: () => {
        this.enviando = false;
        this.error = true;
      }
    });
  }

}