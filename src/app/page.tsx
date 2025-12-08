import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NicheBridge',
  description: 'NicheBridge connects small businesses to highly targeted online shoppers and professionals through tailored subscription boxes that evolve based on AI-driven insights, offering a unique blend of e-commerce, personalization, and community engagement.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">NicheBridge</h1>
      <p className="mt-4 text-lg">NicheBridge connects small businesses to highly targeted online shoppers and professionals through tailored subscription boxes that evolve based on AI-driven insights, offering a unique blend of e-commerce, personalization, and community engagement.</p>
    </main>
  )
}
