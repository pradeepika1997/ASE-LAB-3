export class ValidationService {

  static config: { minlength: string; required: string; email: string };

  static getValidationErrorMessage( validatorName: string, validatorValue: any ) {

    this.config = {
      required : 'Required',
      email: 'Invalid Email Address',
      minlength: 'Must be at least 6 characters long'
    };

    return this.config[validatorName];
  }
}
