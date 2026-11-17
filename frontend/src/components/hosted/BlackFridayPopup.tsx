import { useEffect, useState } from "react";
import { FaBolt, FaTimes } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "../ui/dialog";

// The offer stops showing at 00:00 UTC on December 2, 2026.
const OFFER_ENDS_AT = Date.UTC(2026, 11, 2, 0, 0, 0);
const DISMISSED_KEY = "black-friday-2026-dismissed";
const SHOW_DELAY_MS = 1500;

function wasDismissed(): boolean {
  try {
    return localStorage.getItem(DISMISSED_KEY) === "1";
  } catch {
    return false;
  }
}

function rememberDismissed() {
  try {
    localStorage.setItem(DISMISSED_KEY, "1");
  } catch {
    // Storage can be blocked; the popup then simply shows again next visit.
  }
}

interface BlackFridayPopupProps {
  onClaim: () => void;
  suppressed?: boolean;
}

export default function BlackFridayPopup({
  onClaim,
  suppressed = false,
}: BlackFridayPopupProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (Date.now() >= OFFER_ENDS_AT || wasDismissed()) return;
    const timer = window.setTimeout(() => setOpen(true), SHOW_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  const close = () => {
    rememberDismissed();
    setOpen(false);
  };

  const claim = () => {
    close();
    onClaim();
  };

  if (Date.now() >= OFFER_ENDS_AT) return null;

  return (
    <Dialog
      open={open && !suppressed}
      onOpenChange={(value) => {
        if (!value) close();
      }}
    >
      <DialogContent className="max-w-md overflow-hidden rounded-3xl border-0 bg-zinc-950 p-0 text-white shadow-2xl sm:rounded-3xl">
        {/* Glow accents */}
        <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-amber-400/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-16 h-60 w-60 rounded-full bg-violet-600/30 blur-3xl" />

        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/70 transition hover:bg-white/20 hover:text-white"
        >
          <FaTimes className="text-sm" />
        </button>

        <div className="relative px-8 pb-8 pt-10 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/40 bg-amber-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-amber-300">
            <FaBolt className="text-[10px]" />
            Black Friday Sale
          </span>

          <DialogTitle className="mt-5 text-center text-6xl font-extrabold leading-none tracking-tight">
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-orange-400 bg-clip-text text-transparent">
              50% OFF
            </span>
          </DialogTitle>

          <p className="mt-3 text-xl font-semibold">Annual plans</p>

          <DialogDescription className="mx-auto mt-3 max-w-xs text-center text-sm leading-relaxed text-zinc-400">
            Turn screenshots into clean code for half the price. Limited-time
            offer on Hobby and Pro yearly plans.
          </DialogDescription>

          <button
            type="button"
            onClick={claim}
            className="mt-7 w-full rounded-xl bg-gradient-to-r from-amber-300 to-orange-400 px-6 py-3.5 text-base font-bold text-zinc-950 shadow-lg shadow-amber-500/20 transition hover:brightness-110 active:scale-[0.99]"
          >
            Claim 50% off
          </button>

          <button
            type="button"
            onClick={close}
            className="mt-3 text-xs text-zinc-500 underline-offset-2 hover:text-zinc-300 hover:underline"
          >
            No thanks
          </button>

          <p className="mt-4 text-[11px] text-zinc-600">
            Offer ends December 1, 2026 (UTC).
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
