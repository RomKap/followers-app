import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidators {

    static validOldPassword(control: AbstractControl): Promise<ValidationErrors | null> {

        return new Promise((resolve) => {
            if (control.value !== '1234')
                resolve({ validOldPassword: true });
            else
                resolve(null);
        });
    }

    static passwordShouldMatch(control: AbstractControl) {
        let newpwd = control.get('newpassword');
        let cnfpwd = control.get('confirmpassword');

        if (newpwd?.value !== cnfpwd?.value)
            return { passwordShouldMatch: true };

        return null;
    }
}