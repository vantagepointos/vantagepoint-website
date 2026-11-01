/**
 * Zoho Web-to-Lead values for the VantagePoint OS waitlist.
 *
 * The hand-retyped embed only lists `-None-` for State. Zoho's
 * WebFormDependencies script fills that select from countryVsStates
 * when the country is United States. Those strings are the values
 * Zoho will accept. Two of them are disambiguated:
 * "Florida (United States)" and "Montana (United States)".
 * Territories in that list are omitted here; the form offers the
 * 50 states plus the District of Columbia.
 *
 * Rating in the embed also includes legacy picklist rows (Acquired,
 * Active, Market Failed, Project Cancelled, Shut Down). Those must
 * not be offered.
 */

export const ZOHO_FORM_ACTION = "https://crm.zoho.com/crm/WebToLeadForm";

export const ZOHO_RETURN_URL = "https://www.vantagepointos.com/waitlist/thanks";

export const ZOHO_HIDDEN_FIELDS = {
  xnQsjsdp:
    "864ced38fe86ab8e33995f70654c4e739d0edf4d8351cc0db77bd05426b04612",
  zc_gad: "",
  xmIwtLD:
    "a835b0d714d4fc4c7fa39c6932c6d43a20c75dda86de591209184b514e1385cbd36aee409f0f2eeac624190ffa3818a8",
  actionType: "TGVhZHM=",
  returnURL: ZOHO_RETURN_URL,
  "Lead Source": "Waitlist",
  "Lead Status": "Not Contacted",
  "Address - Country / Region": "United States",
} as const;

export const RATING_OPTIONS = [
  { value: "Legacy (first 10)", label: "Legacy (first 10)" },
  { value: "Founders (11-20)", label: "Founders (11-20)" },
  { value: "General", label: "General" },
] as const;

export type RatingValue = (typeof RATING_OPTIONS)[number]["value"];

/**
 * `value` is the Zoho picklist string. `label` is the shorter name
 * shown to clinic owners. They differ only for Florida and Montana.
 */
export const US_STATES: ReadonlyArray<{ value: string; label: string }> = [
  { value: "Alabama", label: "Alabama" },
  { value: "Alaska", label: "Alaska" },
  { value: "Arizona", label: "Arizona" },
  { value: "Arkansas", label: "Arkansas" },
  { value: "California", label: "California" },
  { value: "Colorado", label: "Colorado" },
  { value: "Connecticut", label: "Connecticut" },
  { value: "Delaware", label: "Delaware" },
  { value: "District of Columbia", label: "District of Columbia" },
  { value: "Florida (United States)", label: "Florida" },
  { value: "Georgia", label: "Georgia" },
  { value: "Hawaii", label: "Hawaii" },
  { value: "Idaho", label: "Idaho" },
  { value: "Illinois", label: "Illinois" },
  { value: "Indiana", label: "Indiana" },
  { value: "Iowa", label: "Iowa" },
  { value: "Kansas", label: "Kansas" },
  { value: "Kentucky", label: "Kentucky" },
  { value: "Louisiana", label: "Louisiana" },
  { value: "Maine", label: "Maine" },
  { value: "Maryland", label: "Maryland" },
  { value: "Massachusetts", label: "Massachusetts" },
  { value: "Michigan", label: "Michigan" },
  { value: "Minnesota", label: "Minnesota" },
  { value: "Mississippi", label: "Mississippi" },
  { value: "Missouri", label: "Missouri" },
  { value: "Montana (United States)", label: "Montana" },
  { value: "Nebraska", label: "Nebraska" },
  { value: "Nevada", label: "Nevada" },
  { value: "New Hampshire", label: "New Hampshire" },
  { value: "New Jersey", label: "New Jersey" },
  { value: "New Mexico", label: "New Mexico" },
  { value: "New York", label: "New York" },
  { value: "North Carolina", label: "North Carolina" },
  { value: "North Dakota", label: "North Dakota" },
  { value: "Ohio", label: "Ohio" },
  { value: "Oklahoma", label: "Oklahoma" },
  { value: "Oregon", label: "Oregon" },
  { value: "Pennsylvania", label: "Pennsylvania" },
  { value: "Rhode Island", label: "Rhode Island" },
  { value: "South Carolina", label: "South Carolina" },
  { value: "South Dakota", label: "South Dakota" },
  { value: "Tennessee", label: "Tennessee" },
  { value: "Texas", label: "Texas" },
  { value: "Utah", label: "Utah" },
  { value: "Vermont", label: "Vermont" },
  { value: "Virginia", label: "Virginia" },
  { value: "Washington", label: "Washington" },
  { value: "West Virginia", label: "West Virginia" },
  { value: "Wisconsin", label: "Wisconsin" },
  { value: "Wyoming", label: "Wyoming" },
];

export const US_STATE_VALUES = new Set(US_STATES.map((state) => state.value));

export const RATING_VALUES = new Set<string>(
  RATING_OPTIONS.map((option) => option.value),
);
