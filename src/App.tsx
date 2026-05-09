import avatar from './assets/avatar.jpg'

function App() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-neutral-950 px-4 py-10 relative overflow-hidden">
      {/* Subtle radial accent glow behind the card */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.18),transparent_60%)]"
      />

      <article className="relative w-full max-w-md rounded-2xl border border-white/10 bg-white/3 p-6 sm:p-10 shadow-[0_0_60px_-20px_rgba(59,130,246,0.35)] backdrop-blur-sm">
        {/* Avatar */}
        <img
          src={avatar}
          alt="Diego Forero"
          className="mx-auto h-20 w-20 sm:h-24 sm:w-24 rounded-full border border-white/10 object-cover"
        />

        {/* Header */}
        <header className="mt-6 text-center">
          <h1 className="text-2xl sm:text-3xl font-semibold text-white">
            Diego Forero
          </h1>
          <p className="mt-1 text-sm sm:text-base text-neutral-400">
            Software engineer
          </p>
        </header>

        {/* Bio */}
        <p className="mt-6 text-center text-sm sm:text-base leading-relaxed text-neutral-300">
          Software engineer who enjoys building thoughtful, performant web
          applications. I like learning new things and I am always looking
          for new challenges.
        </p>

        {/* Social links */}
        <ul className="mt-8 flex items-center justify-center gap-3">
          <li>
            <a
              href="https://github.com/gollum23"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/10 text-neutral-300 transition hover:border-blue-400/60 hover:text-blue-300 hover:bg-white/5"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.05c-3.2.7-3.87-1.36-3.87-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.16 1.18a10.93 10.93 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.55C20.21 21.4 23.5 17.1 23.5 12.02 23.5 5.74 18.27.5 12 .5z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/diego-alexander-forero/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/10 text-neutral-300 transition hover:border-blue-400/60 hover:text-blue-300 hover:bg-white/5"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://x.com/gollum23"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="flex h-11 w-11 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/10 text-neutral-300 transition hover:border-blue-400/60 hover:text-blue-300 hover:bg-white/5"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25h6.83l4.713 6.231 5.447-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
              </svg>
            </a>
          </li>
        </ul>
      </article>
    </main>
  )
}

export default App
