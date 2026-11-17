import { useState } from "react";
import { FaUserCheck, FaTimes } from "react-icons/fa";

const DISMISSED_KEY = "developer-review-cta-dismissed";

function wasDismissed(): boolean {
  try {
    return sessionStorage.getItem(DISMISSED_KEY) === "1";
  } catch {
    return false;
  }
}

// Contextual upsell shown after a successful generation.
export default function DeveloperReviewCta() {
  const [hidden, setHidden] = useState(wasDismissed);

  if (hidden) return null;

  const dismiss = () => {
    try {
      sessionStorage.setItem(DISMISSED_KEY, "1");
    } catch {
      // Ignore storage failures; the banner just reappears next time.
    }
    setHidden(true);
  };

  return (
    <div className="shrink-0 border-t border-violet-200/80 bg-gradient-to-r from-violet-50 via-white to-blue-50 px-4 py-2.5 dark:border-violet-500/30 dark:from-violet-950/40 dark:via-zinc-950 dark:to-blue-950/30">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-blue-500 text-white">
          <FaUserCheck className="text-sm" />
        </div>
        <p className="min-w-0 flex-1 text-sm text-gray-700 dark:text-zinc-300">
          <span className="font-semibold text-gray-900 dark:text-white">
            Need production-ready code?
          </span>{" "}
          <span className="hidden sm:inline">
            Let our developers review, fix and finish it for you.
          </span>
        </p>
        <a
          href="/hire?from=generation"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-lg bg-violet-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-violet-700"
        >
          Hire a developer
        </a>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss"
          className="shrink-0 rounded-full p-1.5 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
        >
          <FaTimes className="text-xs" />
        </button>
      </div>
    </div>
  );
}
