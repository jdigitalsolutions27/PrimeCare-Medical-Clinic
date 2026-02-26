"use client";

import { create } from "zustand";

type BookingState = {
  selectedConcern?: string;
  selectedServiceSlug?: string;
  setConcern: (concern: string) => void;
  setServiceSlug: (slug: string) => void;
  clearBookingContext: () => void;
};

export const useBookingStore = create<BookingState>((set) => ({
  selectedConcern: undefined,
  selectedServiceSlug: undefined,
  setConcern: (selectedConcern) => set({ selectedConcern }),
  setServiceSlug: (selectedServiceSlug) => set({ selectedServiceSlug }),
  clearBookingContext: () => set({ selectedConcern: undefined, selectedServiceSlug: undefined }),
}));
