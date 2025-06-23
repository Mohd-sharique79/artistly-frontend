import Head from 'next/head';
import Navbar from '@/components/ui/Navbar';

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms of Service | Artistly.com</title>
        <meta name="description" content="Read the Terms of Service for using Artistly.com." />
      </Head>
      <div className="flex flex-col min-h-screen items-center justify-center py-12 px-4">
        <Navbar />
        <div className="w-full max-w-2xl bg-card p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-6 text-center">Terms of Service</h1>
          <p className="text-muted-foreground text-center">This is a placeholder for the Terms of Service. Please update with your actual terms.</p>
        </div>
      </div>
    </>
  );
} 