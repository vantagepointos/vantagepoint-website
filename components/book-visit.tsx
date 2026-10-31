"use client";

import { useEffect } from "react";
import { trackConversion } from "@/lib/track";

export function BookVisit() {
  useEffect(() => {
    trackConversion("book_visit");
  }, []);
  return null;
}
