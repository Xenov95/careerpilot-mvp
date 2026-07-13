const strengths = [
  "Clear professional summary that explains the target role.",
  "Recent experience includes measurable outcomes and business impact.",
];

const improvements = [
  "Add more role-specific keywords from the job description.",
  "Make older bullet points shorter and easier to scan.",
];

const steps = [
  {
    title: "Upload your CV",
    description: "Start with a PDF or DOCX version of your current CV.",
  },
  {
    title: "Receive detailed feedback",
    description: "See what is working well and where the CV can be clearer.",
  },
  {
    title: "Improve your application",
    description: "Use focused recommendations before you apply.",
  },
];

const features = [
  "ATS compatibility",
  "Strengths and weaknesses",
  "Writing improvements",
  "Actionable recommendations",
];

const faqs = [
  {
    question: "Is the CV review free?",
    answer:
      "Yes. The core CV review is intended to be free so job seekers can get useful feedback without paying first.",
  },
  {
    question: "Do I need an account?",
    answer:
      "No account is required for the MVP. You should be able to review a CV without creating a profile.",
  },
  {
    question: "What file formats are supported?",
    answer:
      "The planned MVP supports PDF and DOCX files, which are the most common formats for CV review.",
  },
  {
    question: "Will my CV be stored?",
    answer:
      "Our planned privacy principle is to avoid storing CV files longer than needed to provide the review. The exact technical behavior will be confirmed as the product is implemented.",
  },
];

function Navigation() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8"
      >
        <a
          href="#top"
          className="rounded-sm text-xl font-bold tracking-tight text-slate-950 outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
        >
          CareerPilot
        </a>
        <p className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
          English
        </p>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.04fr_0.96fr] lg:px-8 lg:py-28">
        <div className="flex flex-col justify-center">
          <p className="mb-5 w-fit rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800">
            Free CV feedback for job seekers
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Improve your CV. Increase your chances of getting hired.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
            Get clear, actionable feedback on your CV for free. No sign-up
            required.
          </p>
          <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href="#example-review"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-blue-700 px-6 py-3 text-base font-semibold text-white shadow-sm shadow-blue-900/20 outline-none transition hover:bg-blue-800 focus-visible:ring-4 focus-visible:ring-blue-200"
            >
              Analyze My CV — Free
            </a>
            <p className="text-sm font-medium text-slate-600">
              Supports PDF and DOCX • Your file stays private
            </p>
          </div>
        </div>
        <ExampleReviewPreview />
      </div>
    </section>
  );
}

function ExampleReviewPreview() {
  return (
    <aside
      id="example-review"
      aria-labelledby="example-review-heading"
      className="rounded-lg border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/70 sm:p-6"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-5">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
            Example review
          </p>
          <h2
            id="example-review-heading"
            className="mt-2 text-2xl font-bold text-slate-950"
          >
            Sample CV score
          </h2>
        </div>
        <div className="rounded-lg bg-blue-700 px-5 py-4 text-center text-white">
          <p className="text-3xl font-bold">78</p>
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-100">
            out of 100
          </p>
        </div>
      </div>

      <div className="grid gap-5 pt-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        <ReviewList title="Strengths" items={strengths} tone="positive" />
        <ReviewList title="Improvements" items={improvements} tone="action" />
      </div>
    </aside>
  );
}

function ReviewList({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: "positive" | "action";
}) {
  const markerClass =
    tone === "positive"
      ? "border-emerald-200 bg-emerald-50 text-emerald-700"
      : "border-blue-200 bg-blue-50 text-blue-700";

  return (
    <section aria-labelledby={`${title.toLowerCase()}-heading`}>
      <h3
        id={`${title.toLowerCase()}-heading`}
        className="text-base font-bold text-slate-950"
      >
        {title}
      </h3>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700">
            <span
              aria-hidden="true"
              className={`mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border text-sm font-bold ${markerClass}`}
            >
              {tone === "positive" ? "+" : "!"}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            A simpler way to improve your CV
          </h2>
        </div>
        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-lg border border-slate-200 bg-slate-50 p-6"
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
                {index + 1}
              </span>
              <h3 className="mt-5 text-xl font-bold text-slate-950">
                {step.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-700">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function FeedbackFeatures() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              Feedback features
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Focused guidance for stronger applications
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-slate-700">
              CareerPilot highlights practical improvements so you can edit with
              confidence and apply with a clearer, stronger CV.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <li
                key={feature}
                className="rounded-lg border border-slate-200 bg-white p-5 text-lg font-bold text-slate-950 shadow-sm"
              >
                <span
                  aria-hidden="true"
                  className="mb-4 flex size-9 items-center justify-center rounded-full bg-blue-50 text-blue-700"
                >
                  ✓
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
          Our mission
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          Useful CV feedback should not be hidden behind a paywall.
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-700">
          The core review will remain free because early career decisions should
          not depend on whether someone can afford another subscription or paid
          report.
        </p>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Common questions
          </h2>
        </div>
        <div className="mt-10 divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group p-6 open:bg-slate-50"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-sm text-left text-lg font-bold text-slate-950 outline-none focus-visible:ring-4 focus-visible:ring-blue-200">
                {faq.question}
                <span
                  aria-hidden="true"
                  className="text-2xl leading-none text-blue-700 transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 leading-7 text-slate-700">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p className="font-semibold text-slate-900">CareerPilot</p>
        <p>Free CV feedback for stronger applications.</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <HowItWorks />
        <FeedbackFeatures />
        <Mission />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
