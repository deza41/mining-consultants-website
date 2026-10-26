"use server";

import { ClientResponseError } from "pocketbase";
import { getPocketBase } from "@/lib/pocketbase";

const COLLECTION = "consult_form";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Record<string, string>;
  values?: Record<string, string>;
};

const FIELDS = ["name", "email", "company", "message"] as const;

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot: real users never see or fill this field.
  if (formData.get("website")) return { status: "success" };

  const values = Object.fromEntries(
    FIELDS.map((f) => [f, String(formData.get(f) ?? "").trim()]),
  );

  const errors: Record<string, string> = {};
  if (!values.name) errors.name = "Enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    errors.email = "Enter a valid email address.";
  if (!values.message) errors.message = "Tell us a little about the site.";
  if (Object.keys(errors).length) {
    return { status: "error", errors, values };
  }

  try {
    await getPocketBase().collection(COLLECTION).create(values);
  } catch (err) {
    console.error("consult_form submit failed", err);
    // Surface PocketBase per-field validation messages when there are any.
    if (err instanceof ClientResponseError && err.status === 400) {
      const fieldErrors: Record<string, string> = {};
      for (const [k, v] of Object.entries(err.response?.data ?? {})) {
        fieldErrors[k] = (v as { message?: string })?.message ?? "Invalid value.";
      }
      if (Object.keys(fieldErrors).length) {
        return { status: "error", errors: fieldErrors, values };
      }
    }
    return {
      status: "error",
      message:
        "Sorry, we couldn't send that. Please try again, or email us directly.",
      values,
    };
  }

  return { status: "success" };
}
