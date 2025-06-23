import Head from 'next/head';
import Navbar from '@/components/ui/Navbar';

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Artistly.com</title>
        <meta name="description" content="Read the Privacy Policy for using Artistly.com." />
      </Head>
      <div className="flex flex-col min-h-screen items-center justify-center py-12 px-4">
        <Navbar />
        <div className="w-full max-w-2xl bg-card p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-6 text-center">Privacy Policy</h1>
          <p className="text-muted-foreground text-center">This is a placeholder for the Privacy Policy. Please update with your actual policy.</p>
        </div>
      </div>
    </>
  );
} 