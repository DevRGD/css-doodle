export default function Section({ section, doodleElement }) {
  return (
    <section className={`min-h-screen flex items-center justify-center p-8 ${section.id}-section`}>
      <div
        className="
        w-full max-w-4xl
        bg-white/10 backdrop-blur-lg
        border border-white/20
        rounded-sm shadow-lg
        p-8 md:p-12
        flex flex-col md:flex-row items-center justify-between gap-8
        transition-all duration-300 hover:shadow-2xl
      "
      >
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">{section.title}</h2>
          <p className="mt-4 text-lg text-white/70 max-w-md">{section.description}</p>
        </div>

        <div className="flex-shrink-0">{doodleElement}</div>
      </div>
    </section>
  );
}
