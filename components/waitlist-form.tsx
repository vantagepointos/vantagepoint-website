"use client";

import { FormEvent, useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  RATING_OPTIONS,
  US_STATES,
  ZOHO_FORM_ACTION,
  ZOHO_HIDDEN_FIELDS,
} from "@/lib/waitlist-options";
import {
  FIELD_FOCUS_ORDER,
  WaitlistErrors,
  WaitlistFieldName,
  validateWaitlist,
} from "@/lib/waitlist-validation";

const controlClass =
  "w-full rounded-md border border-mist bg-white px-3 py-3 text-base text-navy placeholder:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold aria-invalid:border-[#c45656]";

const inputClass = `mt-2 ${controlClass}`;

const FIELD_IDS: Record<WaitlistFieldName, string> = {
  firstName: "first-name",
  lastName: "last-name",
  clinicName: "clinic-name",
  email: "email",
  phone: "phone",
  clinics: "clinics",
  state: "state",
  rating: "rating",
};

function readValue(form: HTMLFormElement, name: string): string {
  const field = form.elements.namedItem(name);
  if (field instanceof HTMLInputElement || field instanceof HTMLSelectElement) {
    return field.value;
  }
  return "";
}

function trimInput(form: HTMLFormElement, name: string) {
  const field = form.elements.namedItem(name);
  if (field instanceof HTMLInputElement && field.type !== "hidden") {
    field.value = field.value.trim();
  }
}

export function WaitlistForm() {
  const [errors, setErrors] = useState<WaitlistErrors>({});

  function clearError(field: WaitlistFieldName) {
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    const form = event.currentTarget;

    const stateField = form.elements.namedItem("Address - State / Province");
    const ratingField = form.elements.namedItem("Rating");
    if (stateField instanceof HTMLSelectElement) stateField.disabled = false;
    if (ratingField instanceof HTMLSelectElement) ratingField.disabled = false;

    trimInput(form, "First Name");
    trimInput(form, "Last Name");
    trimInput(form, "Company");
    trimInput(form, "Email");
    trimInput(form, "Phone");

    const values = {
      firstName: readValue(form, "First Name"),
      lastName: readValue(form, "Last Name"),
      clinicName: readValue(form, "Company"),
      email: readValue(form, "Email"),
      phone: readValue(form, "Phone"),
      clinics: readValue(form, "No of Employees"),
      state: readValue(form, "Address - State / Province"),
      rating: readValue(form, "Rating"),
    };

    const nextErrors = validateWaitlist(values);
    if (Object.keys(nextErrors).length > 0) {
      event.preventDefault();
      setErrors(nextErrors);
      const first = FIELD_FOCUS_ORDER.find((field) => nextErrors[field]);
      if (first) {
        document.getElementById(FIELD_IDS[first])?.focus();
      }
      return;
    }

    const honeypot = readValue(form, "aG9uZXlwb3Q");
    if (honeypot.trim()) {
      event.preventDefault();
      return;
    }

    // An empty select would post "" (or Zoho's "-None-"). Leave the
    // field out so the lead is created without a picklist value Zoho
    // does not expect. accept-charset on the form sets UTF-8; assigning
    // document.charset throws because that property is read-only.
    if (stateField instanceof HTMLSelectElement && stateField.value === "") {
      stateField.disabled = true;
    }
    if (ratingField instanceof HTMLSelectElement && ratingField.value === "") {
      ratingField.disabled = true;
    }

    setErrors({});

    const submitter = (event.nativeEvent as SubmitEvent).submitter;
    if (submitter instanceof HTMLButtonElement) {
      window.setTimeout(() => {
        submitter.disabled = true;
      }, 0);
    }
  }

  return (
    <form
      action={ZOHO_FORM_ACTION}
      method="POST"
      acceptCharset="UTF-8"
      noValidate
      onSubmit={onSubmit}
      className="space-y-5"
    >
      <input type="hidden" name="xnQsjsdp" value={ZOHO_HIDDEN_FIELDS.xnQsjsdp} />
      <input type="hidden" name="zc_gad" id="zc_gad" value={ZOHO_HIDDEN_FIELDS.zc_gad} />
      <input type="hidden" name="xmIwtLD" value={ZOHO_HIDDEN_FIELDS.xmIwtLD} />
      <input type="hidden" name="actionType" value={ZOHO_HIDDEN_FIELDS.actionType} />
      <input type="hidden" name="returnURL" value={ZOHO_HIDDEN_FIELDS.returnURL} />
      <input type="hidden" name="Lead Source" value={ZOHO_HIDDEN_FIELDS["Lead Source"]} />
      <input
        type="hidden"
        name="Lead Status"
        value={ZOHO_HIDDEN_FIELDS["Lead Status"]}
      />
      <input
        type="hidden"
        name="Address - Country / Region"
        value={ZOHO_HIDDEN_FIELDS["Address - Country / Region"]}
      />
      <input
        type="text"
        name="aG9uZXlwb3Q"
        defaultValue=""
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ display: "none" }}
      />

      {Object.keys(errors).length > 0 ? (
        <p role="alert" className="rounded-md border border-[#e7b4b4]/50 bg-[#3a2430] px-3 py-2 text-sm text-[#F6D0D0]">
          Please check the fields below and try again.
        </p>
      ) : null}

      <div>
        <label htmlFor="first-name" className="block text-sm font-medium text-white">
          First name
        </label>
        <input
          id="first-name"
          name="First Name"
          type="text"
          autoComplete="given-name"
          maxLength={40}
          className={inputClass}
          onChange={() => clearError("firstName")}
        />
      </div>

      <Field
        id="last-name"
        name="Last Name"
        label="Last name"
        required
        autoComplete="family-name"
        maxLength={80}
        error={errors.lastName}
        onChange={() => clearError("lastName")}
      />

      <Field
        id="clinic-name"
        name="Company"
        label="Clinic name"
        required
        autoComplete="organization"
        maxLength={200}
        error={errors.clinicName}
        onChange={() => clearError("clinicName")}
      />

      <Field
        id="email"
        name="Email"
        label="Email"
        type="email"
        required
        autoComplete="email"
        inputMode="email"
        maxLength={100}
        spellCheck={false}
        error={errors.email}
        onChange={() => clearError("email")}
      />

      <Field
        id="phone"
        name="Phone"
        label="Phone"
        type="tel"
        required
        autoComplete="tel"
        inputMode="tel"
        maxLength={30}
        error={errors.phone}
        onChange={() => clearError("phone")}
      />

      <Field
        id="clinics"
        name="No of Employees"
        label="Number of clinics"
        type="number"
        min={1}
        step={1}
        inputMode="numeric"
        error={errors.clinics}
        onChange={() => clearError("clinics")}
      />

      <div>
        <label htmlFor="state" className="block text-sm font-medium text-white">
          State
        </label>
        <div className="relative mt-2">
          <select
            id="state"
            name="Address - State / Province"
            autoComplete="address-level1"
            defaultValue=""
            aria-invalid={errors.state ? true : undefined}
            aria-describedby={errors.state ? "state-error" : undefined}
            className={`${controlClass} appearance-none pr-10`}
            onChange={() => clearError("state")}
          >
            <option value="">Select a state</option>
            {US_STATES.map((state) => (
              <option key={state.value} value={state.value}>
                {state.label}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink"
            aria-hidden="true"
          />
        </div>
        {errors.state ? (
          <p id="state-error" className="mt-2 text-sm text-[#F6D0D0]">
            {errors.state}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="rating" className="block text-sm font-medium text-white">
          Which are you interested in?
        </label>
        <div className="relative mt-2">
          <select
            id="rating"
            name="Rating"
            defaultValue=""
            aria-invalid={errors.rating ? true : undefined}
            aria-describedby={errors.rating ? "rating-error" : undefined}
            className={`${controlClass} appearance-none pr-10`}
            onChange={() => clearError("rating")}
          >
            <option value="">Select one</option>
            {RATING_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink"
            aria-hidden="true"
          />
        </div>
        {errors.rating ? (
          <p id="rating-error" className="mt-2 text-sm text-[#F6D0D0]">
            {errors.rating}
          </p>
        ) : null}
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-md border border-white/20 bg-white px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-mist focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:w-auto"
        >
          Join the waitlist
        </button>
      </div>
    </form>
  );
}

function RequiredMark() {
  return (
    <>
      <span aria-hidden="true" className="ml-1 text-gold">
        *
      </span>
      <span className="sr-only"> (required)</span>
    </>
  );
}

function Field({
  id,
  name,
  label,
  type = "text",
  required = false,
  autoComplete,
  inputMode,
  maxLength,
  min,
  step,
  spellCheck,
  error,
  onChange,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  inputMode?: "email" | "tel" | "numeric" | "text";
  maxLength?: number;
  min?: number;
  step?: number;
  spellCheck?: boolean;
  error?: string;
  onChange: () => void;
}) {
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-white">
        {label}
        {required ? <RequiredMark /> : null}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        inputMode={inputMode}
        maxLength={maxLength}
        min={min}
        step={step}
        spellCheck={spellCheck}
        aria-required={required ? true : undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={inputClass}
        onChange={onChange}
      />
      {error ? (
        <p id={errorId} className="mt-2 text-sm text-[#F6D0D0]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
