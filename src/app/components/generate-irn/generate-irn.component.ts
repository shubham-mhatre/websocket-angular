import { Component,OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IRNService } from '../../services/irn.service';
import { ToastrService } from 'ngx-toastr';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-generate-irn',
  templateUrl: './generate-irn.component.html',
  styleUrl: './generate-irn.component.scss'
})
export class GenerateIRNComponent implements OnInit{
  generateIRNForm!: FormGroup;

  constructor(private fb: FormBuilder,private irnService:IRNService,private toastr:ToastrService) {}

  ngOnInit(): void {
    this.generateIRNForm = this.fb.group({
      invoiceNumber: ['', Validators.required],
      invoiceAmount: ['', [Validators.required, Validators.min(1)]],
      docDate: ['', Validators.required]
    });
  }

  // onSubmit(): void {
  //   if (this.generateIRNForm.valid) {
  //     const formData = this.generateIRNForm.value;
  //     this.irnService.generateIRN(formData).subscribe(
  //       (response) => {
  //         debugger;
  //         this.toastr.success(response, 'Success');
  //       },
  //       (error) => {
  //         this.toastr.error('Failed to generate IRN', 'Error');
  //       }
  //     );
  //   }
  // }

  async onSubmit(): Promise<void> {
    if (this.generateIRNForm.valid) {
      const formData = this.generateIRNForm.value;
      try {
        const response = await firstValueFrom(this.irnService.generateIRN(formData));
        this.toastr.success(response.message, 'Success');
      } catch (error) {
        this.toastr.error('Failed to generate IRN', 'Error');
      }
    }
  }
}
