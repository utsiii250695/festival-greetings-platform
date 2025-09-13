import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function IndexPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect root to /home
    router.push('/home');
  }, [router]);

  return null; // This page will immediately redirect
}