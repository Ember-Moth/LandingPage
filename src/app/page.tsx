import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { homeConfig } from '@/config/home';

const HomeContent = dynamic(() => import('@/components/HomeContent'), {
  ssr: true,
  loading: () => (
    <div className="flex-1 flex items-center">
      <div className="flex flex-row items-center justify-between w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 gap-12">
        <div className="w-[45%] text-left">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            {homeConfig.greeting}
          </h1>
          <p className="mt-3 text-lg leading-7 text-neutral-600 dark:text-neutral-400">
            {homeConfig.description}
          </p>
          <div className="flex flex-row gap-4 mt-4">
            <div className="group inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-neutral-900 rounded-lg dark:bg-white dark:text-neutral-900">
              View About
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2.5} 
                  d="M13 7l5 5m0 0l-5 5m5-5H6" 
                />
              </svg>
            </div>

            <div className="group inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-neutral-900 bg-white border border-neutral-300 rounded-lg dark:bg-neutral-900 dark:text-white dark:border-neutral-700">
              {homeConfig.buttons.readPosts}
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2.5} 
                  d="M13 7l5 5m0 0l-5 5m5-5H6" 
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="w-[45%] flex items-center justify-center bg-transparent">
          <div className="relative w-[800px] h-[800px] -mr-[200px]">
            <img
              src="/assets/images/tech-background-light.svg"
              alt="Tech background"
              className="w-full h-full dark:hidden"
            />
            <img
              src="/assets/images/tech-background.svg"
              alt="Tech background"
              className="hidden w-full h-full dark:block"
            />
          </div>
        </div>
      </div>
    </div>
  )
});

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeContent />
      <Footer />
    </>
  );
} 