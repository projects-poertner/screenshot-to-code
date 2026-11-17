// Top navigation shared by the standalone pages (/hire, /pricing, /faqs).
// The landing page has its own navbar with the sign-in dialog.
export default function SiteNav() {
  return (
    <nav className="sticky top-0 z-40 border-b border-gray-200 bg-white/90 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="/" className="flex items-center gap-2">
          <img
            src="/favicon/main.png"
            alt="Logo"
            className="h-6 w-6 logo-dark-mode"
          />
          <span className="text-base font-semibold tracking-tight sm:text-lg">
            Screenshot to Code
          </span>
        </a>
        <div className="flex items-center gap-4 sm:gap-6 text-sm">
          <a
            href="/hire"
            className="text-gray-600 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-white"
          >
            Hire Developers
          </a>
          <a
            href="/pricing"
            className="text-gray-600 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-white"
          >
            Pricing
          </a>
          <a
            href="/faqs"
            className="hidden text-gray-600 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-white sm:block"
          >
            FAQs
          </a>
          <a
            href="/?signup=1"
            className="rounded-lg bg-black px-3.5 py-2 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
