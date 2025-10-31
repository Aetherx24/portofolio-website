export default function Projects() {
  return (
    <section id="projects">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded border p-4">
            <div className="font-medium">Project One</div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Short description.</p>
          </div>
          <div className="rounded border p-4">
            <div className="font-medium">Project Two</div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Short description.</p>
          </div>
        </div>
      </div>
    </section>
  );
}


