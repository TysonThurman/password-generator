'use client'

import Image from 'next/image'
import InputField from '@/modules/form'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <h3>
          Generate a Unique Password
          </h3>
          <InputField />
        </div>
    </main>
  )
}
