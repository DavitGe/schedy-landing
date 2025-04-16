// This file is needed for internal Next.js routing
// It redirects to the main not-found.tsx component

import { redirect } from "next/navigation";

export default function InternalNotFound() {
  redirect("/not-found");
}
