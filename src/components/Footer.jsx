import React from 'react'

export default function Footer() {
  return (
    <div className='bg-black px-5 lg:px-28 py-3 lg:py-6 flex items-center justify-between mt-16'>
      <img className='invert h-5 lg:h-9' src="/assets/logo.png" alt="logo" />

      <div className='flex items-center gap-6'>
        <nav aria-label="Social links" className='flex items-center gap-3'>
          <a href="https://github.com/Anshika66-Gupta" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className='text-white hover:opacity-80'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.95 3.21 9.15 7.67 10.63.56.1.77-.24.77-.54 0-.27-.01-1.16-.02-2.11-3.12.68-3.78-1.5-3.78-1.5-.51-1.29-1.25-1.64-1.25-1.64-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 .~0 1.62-.74 1.98-1.27-.25-.2-.55-.7-.02-1.46 0 0 .78-.25 2.56.98.74-.21 1.53-.32 2.32-.32.79 0 1.58.11 2.32.32 1.78-1.24 2.56-.98 2.56-.98.53.76.23 1.26.12 1.46.31.43 1.07 1.27 1.98 1.27 0 0 .59-1.08 1.72-1.16 0 0 1.1-.01.08.69 0 0-.73.35-1.25 1.64 0 0-.66 2.18-3.78 1.5-.02.95-.02 1.84-.02 2.11 0 .3.21.65.78.54C19.04 20.9 22.25 16.7 22.25 11.75 22.25 5.48 17.27.5 12 .5z" />
            </svg>
          </a>

          <a href="https://www.linkedin.com/in/techy-anshikagupta/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className='text-white hover:opacity-80'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8.98h4.55V24H.22V8.98zM8.98 8.98h4.37v2.05h.06c.61-1.16 2.1-2.39 4.33-2.39 4.63 0 5.48 3.05 5.48 7.01V24h-4.55v-7.3c0-1.74-.03-3.99-2.43-3.99-2.43 0-2.8 1.89-2.8 3.85V24H8.98V8.98z"/>
            </svg>
          </a>

          <a href="https://x.com/Anshika71688056" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className='text-white hover:opacity-80'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04 4.28 4.28 0 00-7.3 3.9A12.13 12.13 0 013 4.79a4.27 4.27 0 001.33 5.71c-.65-.02-1.26-.2-1.8-.5v.05c0 2.18 1.55 4 3.61 4.42-.38.1-.78.15-1.2.15-.29 0-.57-.03-.85-.08.57 1.78 2.22 3.08 4.17 3.12A8.6 8.6 0 012 19.54a12.15 12.15 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2v-.56A8.72 8.72 0 0024 6.6a8.44 8.44 0 01-2.42.66z"/>
            </svg>
          </a>

          <a href="https://www.instagram.com/your-username" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className='text-white hover:opacity-80'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-3a1.5 1.5 0 11.001 3.001A1.5 1.5 0 0116.5 6z"/>
            </svg>
          </a>

          <a href="mailto:ansgupta.01@gmail.com" aria-label="Email" className='text-white hover:opacity-80'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 13.5l-11-7V19a2 2 0 002 2h18a2 2 0 002-2V6.5l-11 7zM12 11L1 4h22L12 11z"/>
            </svg>
          </a>
        </nav>

        <div className='text-white lg:font-semibold lg:text-sm font-normal text-[10px] text-right lg:space-y-3'>
          <p>Turning complex challenges into elegant solutions :)</p>
        </div>
      </div>
    </div>
  )
}
