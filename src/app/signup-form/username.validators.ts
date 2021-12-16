import { AbstractControl, ValidationErrors } from "@angular/forms";


export class UsernameValidators {

    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        console.log('in cannotContainSpace');
        if ((control.value as string).indexOf(' ') >= 0) {
            return { cannotContainSpace: true }
        }
        return null;
    }


    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        console.log('in shouldBeUnique');
        return new Promise((resolve, reject) => {
            //     console.log('in resolve');
            setTimeout(() => {
                if (control.value === 'rome')
                    resolve({ shouldBeUnique: true });
                //resolve()
                //return { shouldBeUnique: true }
                else
                    resolve(null);
            }, 2000);
        });
        // return null;
    }
}