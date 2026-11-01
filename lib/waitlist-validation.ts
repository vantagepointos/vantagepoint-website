import { US_STATE_VALUES } from "./waitlist-options";

export type WaitlistFieldValues = {
  firstName: string;
  lastName: string;
  clinicName: string;
  email: string;
  phone: string;
  clinics: string;
  state: string;
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

/** Formats a phone field as the visitor types, like (316) 742-8282. */
export function formatPhoneInput(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 15);
  const core = digits.slice(0, 10);
  const extra = digits.slice(10);
  let formatted = "";
  if (core.length === 0) formatted = "";
  else if (core.length < 4) formatted = `(${core}`;
  else if (core.length < 7) formatted = `(${core.slice(0, 3)}) ${core.slice(3)}`;
  else formatted = `(${core.slice(0, 3)}) ${core.slice(3, 6)}-${core.slice(6)}`;
  return extra ? `${formatted} ${extra}` : formatted;
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

  return errors;
}

export const FIELD_FOCUS_ORDER: WaitlistFieldName[] = [
  "lastName",
  "clinicName",
  "email",
  "phone",
  "clinics",
  "state",
];
