// type forms
interface FormElement extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
}
export interface formData extends HTMLFormElement {
  readonly elements: FormElement;
}

export type objectUser = Pick<FormElement, "email" | "password">;
