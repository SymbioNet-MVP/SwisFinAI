import dynamic from 'next/dynamic';

// Import landing page component dynamically (client-safe)
const LandingPage = dynamic(() => import('../src/components/LandingPageNew'), { ssr: false });

export default function Home() {
  return <LandingPage />;
}