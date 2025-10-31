import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="min-h-[80vh] flex items-center">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-8 px-4 md:grid-cols-2">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold md:text-4xl">Muhammad Iqbal Maulana</h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Frontend Developer • Passionate about building clean, responsive interfaces.
          </p>
          <div className="flex gap-3 text-xl">
            <a href="https://github.com/Aetherx24" aria-label="GitHub" className="hover:opacity-80"><i className="fab fa-github" /></a>
            <a href="#contact" aria-label="Email" className="hover:opacity-80"><i className="fa-solid fa-envelope" /></a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <Image src="/vercel.svg" alt="Profile" width={160} height={160} className="rounded-full dark:invert" />
        </div>
      </div>
    </section>
  );
}


