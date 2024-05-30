import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  formUser = new FormGroup({
    'name':new FormControl('Erick', Validators.required),
    'email':new FormControl('erick232@gmail.com', [Validators.required, Validators.email]),
    'Direc':new FormControl('Antigua Panamericana Sur Mz A, Pachacamac 15823', Validators.required),
    'tel':new FormControl('782918734', Validators.required)
  });
}
