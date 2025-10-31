export default function About() {
  return (
    <section id="about">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="mt-3 max-w-3xl text-zinc-700 dark:text-zinc-300">
          I am a frontend developer focused on accessible, responsive, and performant web apps.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          <div className="rounded border p-3">HTML</div>
          <div className="rounded border p-3">CSS</div>
          <div className="rounded border p-3">JavaScript</div>
          <div className="rounded border p-3">React</div>
        </div>
      </div>
    </section>
  );
}


