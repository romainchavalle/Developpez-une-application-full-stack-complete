import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) return null; // Skip validation if control value is empty or null

    const errors: ValidationErrors = {};

    if (!/\d/.test(value)) {
      errors['noNumber'] = true;
    }
    if (!/[a-z]/.test(value)) {
      errors['noLowercase'] = true;
    }
    if (!/[A-Z]/.test(value)) {
      errors['noUppercase'] = true;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
      errors['noSpecialChar'] = true;
    }
    if (value.length < 8) {
      errors['minlength'] = { requiredLength: 8, actualLength: value.length };
    }

    return Object.keys(errors).length === 0 ? null : errors;
  };
}
