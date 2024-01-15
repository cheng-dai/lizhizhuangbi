import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Sidebar({ className = '' }) {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <button
        className='absolute top-5 right-4 text-2xl'
        onClick={() => setShowSidebar(!showSidebar)}
      >
        =
      </button>
      <AnimatePresence>
        {showSidebar && (
          <motion.aside
            className={`overflow-hidden absolute ${className}`}
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 'auto' }}
            exit={{ opacity: 0, width: 0 }}
          >
            <ul
              className='flex flex-col gap-20 mt-20 m-2 text-center text-xl'
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <li>
                <a
                  href='https://open.spotify.com/artist/1fqb04dI9vaEcGDbIVrcib'
                  target='_blank'
                >
                  Music
                </a>
              </li>
              <li>Links</li>
              <li>About</li>
            </ul>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
