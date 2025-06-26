'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/editor');
  }, [router]);

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="text-lg text-gray-600">Loading...</div>
    </div>
  );
}
