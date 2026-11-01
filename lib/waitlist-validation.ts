import { RATING_VALUES, US_STATE_VALUES } from "./waitlist-options";

export type WaitlistFieldValues = {
  firstName: string;
  lastName: string;
  clinicName: string;
  email: string;
  phone: string;
  clinics: string;
  state: string;
  rating: string;
};

export type WaitlistFieldName = keyof WaitlistFieldValues;

export type WaitlistErrors = Partial<Record<WaitlistFieldName, string>>;

/** Same shape Zoho's generated check uses: local@domain.tld */
export function isAcceptableEmail(email: string): boolean {
  if (/\s/.test(email)) return false;
  const atpos = email.indexOf("@");
  const dotpos = email.lastIndexOf(".");
  return !(atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length);
}

export function isAcceptablePhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
}

export function validateWaitlist(values: WaitlistFieldValues): WaitlistErrors {
  const errors: WaitlistErrors = {};

  if (!values.lastName.trim()) {
    errors.lastName = "Please enter your last name.";
  }

  if (!values.clinicName.trim()) {
    errors.clinicName = "Please enter your clinic name.";
  }

  const email = values.email.trim();
  if (!email) {
    errors.email = "Please enter your email.";
  } else if (!isAcceptableEmail(email)) {
    errors.email = "Please enter a valid email address.";
  }

  const phone = values.phone.trim();
  if (!phone) {
    errors.phone = "Please enter your phone number.";
  } else if (!isAcceptablePhone(phone)) {
    errors.phone = "Please enter a phone number with an area code.";
  }

  const clinics = values.clinics.trim();
  if (clinics) {
    if (!/^\d{1,9}$/.test(clinics) || Number(clinics) < 1) {
      errors.clinics = "Please enter a whole number of clinics, at least 1.";
    }
  }

  if (values.state && !US_STATE_VALUES.has(values.state)) {
    errors.state = "Please choose a state.";
  }

  if (values.rating && !RATING_VALUES.has(values.rating)) {
    errors.rating = "Please choose which you're interested in.";
  }

  return errors;
}

export const FIELD_FOCUS_ORDER: WaitlistFieldName[] = [
  "lastName",
  "clinicName",
  "email",
  "phone",
  "clinics",
  "state",
  "rating",
];
