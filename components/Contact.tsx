export default function Contact() {
  return (
    <section id="contact">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <form className="mt-4 grid grid-cols-1 gap-4 sm:max-w-md">
          <input className="w-full rounded border p-2" placeholder="Your Name" />
          <input className="w-full rounded border p-2" type="email" placeholder="Your Email" />
          <textarea className="w-full rounded border p-2" placeholder="Message" rows={4} />
          <button type="submit" className="rounded bg-black px-4 py-2 text-white dark:bg-white dark:text-black">Send</button>
        </form>
      </div>
    </section>
  );
}


