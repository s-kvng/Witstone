<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;


class ValidKtuEmail implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
     
         // Split the email address to get the domain
         [$user, $domain] = explode('@', $value);

         if ($domain !== 'ktu.edu.gh') {
            $fail('The :attribute must be a valid KTU email.');
        }

         
    }


}
