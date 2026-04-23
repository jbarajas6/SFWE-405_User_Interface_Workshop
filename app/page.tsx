import Image from "next/image"

export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-12 text-white">
      <div className="mx-auto flex max-w-5xl items-center justify-center">
        <section className="grid w-full gap-10 rounded-[2rem] bg-zinc-900 p-8 shadow-2xl md:grid-cols-[320px_1fr] md:p-12">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="mb-6 h-40 w-40 overflow-hidden rounded-full border-4 border-lime-200 shadow-lg">
              <Image
                src="/jennifer.jpg"
                alt="Jennifer Barajas Villarreal"
                width={160}
                height={160}
                className="h-full w-full object-cover"
                priority
              />
            </div>

            <h1 className="text-3xl font-bold leading-tight md:text-4xl">
              Jennifer Barajas Villarreal
            </h1>

            <p className="mt-3 text-lg text-lime-200">
              Software Engineering Student
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-zinc-800 px-4 py-2 text-sm text-zinc-200">
                Web Development
              </span>
              <span className="rounded-full bg-zinc-800 px-4 py-2 text-sm text-zinc-200">
                UI Design
              </span>
              <span className="rounded-full bg-zinc-800 px-4 py-2 text-sm text-zinc-200">
                Team Projects
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">
              Hello, I’m Jennifer.
            </h2>

            <p className="mt-5 text-base leading-8 text-zinc-300 md:text-lg">
              I am a Software Engineering student who enjoys building clean,
              user-friendly websites and learning how design and development
              come together to create better digital experiences. I am especially
              interested in web development, responsive interfaces, and working
              on team-based software projects that solve real problems.
            </p>

            <p className="mt-5 text-base leading-8 text-zinc-300 md:text-lg">
              Through my coursework, I have worked with technologies such as
              Java, Spring Boot, React, Next.js, HTML, CSS, Git,
              REST APIs, and software testing. I enjoy improving both the look
              and functionality of a project so it feels polished and practical.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/jennifer-barajas-8b3399292/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-lime-200 px-5 py-3 font-medium text-zinc-900 transition hover:bg-lime-300"
              >
                LinkedIn
              </a>

              <a
                href="mailto:jennifer.barajas623@gmail.com"
                className="rounded-full border border-zinc-700 px-5 py-3 font-medium text-white transition hover:bg-zinc-800"
              >
                Email Me
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}