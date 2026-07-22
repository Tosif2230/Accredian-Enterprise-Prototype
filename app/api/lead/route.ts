import { NextResponse } from "next/server";

type LeadPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  company?: unknown;
};
const emailPattern = /^\S+@\S+\.\S+$/;
const phonePattern = /^[+()\-\s\d]{7,20}$/;

const isText = (value: unknown): value is string => typeof value === "string";

export const POST = async (request: Request) => {
  let payload: LeadPayload;
  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body" },
      { status: 400 },
    );
  }
  const name = isText(payload.name) ? payload.name.trim() : "";
  const email = isText(payload.email) ? payload.email.trim() : "";
  const phone = isText(payload.phone) ? payload.phone.trim() : "";
  const company = isText(payload.company) ? payload.company.trim() : "";
  const errors: Record<string, string> = {};
  if (!name) errors.name = "Name is required";
  if (!emailPattern.test(email)) errors.email = "A valid email is required";
  if (!phonePattern.test(phone))
    errors.phone = "A valid phone number is required";
  if (!company) errors.company = "Company is required";
  if (Object.keys(errors).length)
    return NextResponse.json(
      { success: false, message: "Validation failed", errors },
      { status: 400 },
    );
  return NextResponse.json({
    success: true,
    message: "Lead submitted successfully",
  });
};
