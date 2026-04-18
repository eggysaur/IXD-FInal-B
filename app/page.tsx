import aboutAvatar from "@/assets/about-avatar.webp"
import manifestoAvatar from "@/assets/manifesto-avatar.webp"
import thesisDove from "@/assets/thesis-dove.webp"
import { ZipperHero } from "@/components/zipper-hero"

export default function Home() {
  return (
    <main className="min-h-screen">
      <ZipperHero videoSrc="/hero.webm" />

      {/* Camera / AI thesis — before About */}
      <section className="border-t border-neutral-800 bg-neutral-950 px-6 py-20 md:px-12 md:py-28 lg:px-24">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row md:items-center md:justify-center md:gap-8 lg:gap-12">
          <img
            src={thesisDove.src}
            width={thesisDove.width}
            height={thesisDove.height}
            alt=""
            className="h-24 w-auto shrink-0 border-0 object-contain shadow-none outline-none ring-0 md:h-32 lg:h-36"
            decoding="async"
          />
          <p className="max-w-3xl flex-1 text-center text-xl font-medium leading-relaxed text-neutral-200 md:text-left md:text-2xl md:leading-relaxed lg:text-3xl lg:leading-snug">
            When cameras came into the art world, art changed—the novelty of realistic landscapes disappeared, and abstract, conceptual art came to power. Today, we build on the expectations of all such styles. I believe that if we anticipate AI the same way, it&apos;s time for design to have a radical change.
          </p>
          <img
            src={thesisDove.src}
            width={thesisDove.width}
            height={thesisDove.height}
            alt=""
            className="h-24 w-auto shrink-0 scale-x-[-1] border-0 object-contain shadow-none outline-none ring-0 md:h-32 lg:h-36"
            decoding="async"
          />
        </div>
      </section>
      
      {/* Biography Section */}
      <section className="bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-800 px-6 py-24 md:px-12 md:py-32 lg:px-24">
        <div className="mx-auto max-w-6xl">
          {/* Intro */}
          <div className="mb-20 md:mb-28">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-neutral-500">
              About
            </p>
            <div className="grid items-center gap-8 md:grid-cols-[140px_minmax(0,1fr)] md:gap-10 lg:grid-cols-[160px_minmax(0,1fr)]">
              <div className="flex justify-start md:justify-center">
                <img
                  src={aboutAvatar.src}
                  width={aboutAvatar.width}
                  height={aboutAvatar.height}
                  alt="Illustrated avatar of Ingrid at a computer"
                  className="h-28 w-28 rounded-2xl border border-neutral-700 bg-neutral-900/60 object-contain p-2 shadow-[0_0_30px_rgba(255,255,255,0.08)] md:h-32 md:w-32 lg:h-36 lg:w-36"
                  decoding="async"
                />
              </div>
              <div>
                <h2 className="mb-6 text-3xl font-bold leading-relaxed text-white md:text-4xl lg:text-5xl">
                  Hi! I&apos;m Ingrid.<br />
                  I&apos;m an Interaction Designer and Builder dedicated to creating thoughtful, behavior-shaping digital systems that challenge the upcoming AI average.
                </h2>
                <p className="max-w-3xl text-lg leading-relaxed text-neutral-400 md:text-xl">
                  Utilizing a fine arts background and technical literacy, I focus on injecting cultural resonance and unconventional aesthetics into work. My mission is to partner with early-stage organizations in technology, culture, and media to translate complex ideas into clear, scalable products with personality and purpose, ensuring my designs cut through the noise of AI-generated conformity.
                </p>
              </div>
            </div>
          </div>

          {/* Strengths Grid */}
          <div className="mb-20 md:mb-28">
            <p className="mb-8 text-sm font-medium uppercase tracking-widest text-neutral-500">
              Strengths
            </p>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="border-l-2 border-neutral-800 pl-6">
                <h3 className="mb-3 text-xl font-semibold text-white">Anti-Conformity Aesthetic</h3>
                <p className="text-neutral-400">
                  Applying a fine arts perspective to design distinctive, non-generic experiences that leverage deep cultural trends.
                </p>
              </div>
              <div className="border-l-2 border-neutral-800 pl-6">
                <h3 className="mb-3 text-xl font-semibold text-white">Builder Designer Mindset</h3>
                <p className="text-neutral-400">
                  The technical capability to prototype behaviors using LLMs and think beyond screen-based design.
                </p>
              </div>
              <div className="border-l-2 border-neutral-800 pl-6">
                <h3 className="mb-3 text-xl font-semibold text-white">Strategic Clarity</h3>
                <p className="text-neutral-400">
                  Ability to translate complexity into clarity and connect design decisions to tangible business outcomes like brand memorability and conversion.
                </p>
              </div>
              <div className="border-l-2 border-neutral-800 pl-6">
                <h3 className="mb-3 text-xl font-semibold text-white">Systemic Intentionality</h3>
                <p className="text-neutral-400">
                  Focus on engineering systems of human behavior and championing Learning Integrity over Optimization.
                </p>
              </div>
            </div>
          </div>

          {/* Practice Areas & Traits */}
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="mb-6 text-sm font-medium uppercase tracking-widest text-neutral-500">
                Practice Areas
              </p>
              <div className="flex flex-wrap gap-3">
                {["AI-Native EdTech", "Language Immersion Platforms", "Culture-Driven Brands", "Creative/Tech Hybrid Spaces"].map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-neutral-700 px-4 py-2 text-sm text-white"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-6 text-sm font-medium uppercase tracking-widest text-neutral-500">
                Personality Traits
              </p>
              <div className="flex flex-wrap gap-3">
                {["High Intentionality", "Analytical", "Adhocratic", "Defiant against homogeneity"].map((trait) => (
                  <span
                    key={trait}
                    className="rounded-full border border-neutral-700 px-4 py-2 text-sm text-white"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Insights Section */}
      <section className="bg-gradient-to-b from-neutral-800 via-neutral-800 to-neutral-900 px-6 py-14 md:px-12 md:py-20 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-neutral-500">
            Research Insights
          </p>
          <h2 className="mb-8 text-2xl font-bold leading-snug text-white md:mb-10 md:text-3xl lg:text-4xl">
            Lessons from Leaders, Organizations &amp; Simulations
          </h2>

          {/* Insights — compact cards */}
          <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-neutral-600 bg-neutral-800/50 p-4">
              <p className="mb-1 text-[11px] font-medium uppercase tracking-widest text-neutral-400">
                Design Leader
              </p>
              <h3 className="mb-2 text-base font-semibold text-white">Jensen Huang</h3>
              <p className="text-sm leading-relaxed text-neutral-400">
                Long-horizon bets and platforms over components (CUDA)—impact beyond a single product.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-600 bg-neutral-800/50 p-4">
              <p className="mb-1 text-[11px] font-medium uppercase tracking-widest text-neutral-400">
                Organization
              </p>
              <h3 className="mb-2 text-base font-semibold text-white">Duolingo</h3>
              <p className="text-sm leading-relaxed text-neutral-400">
                Delight as a functional requirement—yet design can stay bounded by what the system optimizes for. The fight is to widen what counts as a &ldquo;signal.&rdquo;
              </p>
            </div>
            <div className="rounded-lg border border-neutral-600 bg-neutral-800/50 p-4 sm:col-span-2 lg:col-span-1">
              <p className="mb-1 text-[11px] font-medium uppercase tracking-widest text-neutral-400">
                Simulations
              </p>
              <h3 className="mb-2 text-base font-semibold text-white">Duologue / Ethical Stress Test</h3>
              <p className="text-sm leading-relaxed text-neutral-400">
                Mediate algorithmic logic and human experience: move past L7 to learning efficacy, defend well-being at the exec table, ritualize Weekly AI Audits.
              </p>
            </div>
          </div>

          {/* Principles & frameworks — single dense band */}
          <div className="mb-10">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-neutral-500">
              Principles &amp; frameworks
            </p>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              <div className="border-l-2 border-white py-1 pl-4">
                <h3 className="mb-1 text-sm font-semibold leading-snug text-white">Learning Integrity over Optimization</h3>
                <p className="text-xs leading-relaxed text-neutral-400">When revenue conflicts with well-being.</p>
              </div>
              <div className="border-l-2 border-white py-1 pl-4">
                <h3 className="mb-1 text-sm font-semibold leading-snug text-white">Design as behavioral systems</h3>
                <p className="text-xs leading-relaxed text-neutral-400">Intentional friction for growth, not perpetual ease.</p>
              </div>
              <div className="rounded-lg border border-neutral-600 bg-neutral-800/40 p-3">
                <h3 className="mb-1 text-sm font-semibold text-white">The Power Shift</h3>
                <p className="text-xs leading-relaxed text-neutral-400">
                  Design at the center of pedagogical strategy—authority over the &ldquo;Goldilocks&rdquo; challenge.
                </p>
              </div>
              <div className="rounded-lg border border-neutral-600 bg-neutral-800/40 p-3">
                <h3 className="mb-1 text-sm font-semibold text-white">Pod-based topology</h3>
                <p className="text-xs leading-relaxed text-neutral-400">
                  Lead Designer, AI/LLM engineer, PM, linguist/learning scientist—clear decision rights.
                </p>
              </div>
            </div>
          </div>

          <blockquote className="border-l-4 border-white pl-4 text-lg font-medium italic leading-relaxed text-white md:text-xl">
            &ldquo;Leadership is the will to ask richer questions than what the metrics currently permit.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Extended practice framework */}
      <section className="bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-950 px-6 py-24 md:px-12 md:py-32 lg:px-24">
        <div className="mx-auto max-w-6xl">
          {/* Manifesto */}
          <div className="mb-20 md:mb-28">
            <div className="grid items-start gap-8 md:grid-cols-[220px_minmax(0,1fr)] md:gap-10 lg:grid-cols-[260px_minmax(0,1fr)]">
              <div className="flex justify-start md:justify-center">
                <img
                  src={manifestoAvatar.src}
                  width={manifestoAvatar.width}
                  height={manifestoAvatar.height}
                  alt="Animated avatar of a cat at a computer"
                  className="h-40 w-40 rounded-2xl border border-neutral-700 bg-neutral-900/60 object-cover shadow-[0_0_30px_rgba(255,255,255,0.10)] md:h-44 md:w-44 lg:h-52 lg:w-52"
                  decoding="async"
                />
              </div>
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-relaxed text-white md:text-4xl">
                  Manifesto
                </h2>
                <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-neutral-300 md:text-xl">
                  <p>
                    Design is more than just user experience. Today, design is something that designs the user. Taking advantage of existing user expectations, design culture and the upcoming wave of predictable, repetitive design, I aim to stand out by subverting, blending and narratives. User journey maps become stories, and interactions become a communicator between maker and user. I hope to bring back the authentic charm of individual designs while ensuring a modern, adaptable take.
                  </p>
                  <p>
                    It is my duty to provide a design service that is able to express personality and character, one that understands cultural and societal contexts, so that my clients&apos; beliefs and mindset can be expressed through something as simple as an app or website.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Industry practice */}
          <div className="mb-20 md:mb-28">
            <h2 className="mb-10 text-3xl font-bold text-white md:text-4xl">
              Where I operate &amp; what I solve for
            </h2>
            <div className="mb-10">
              <h3 className="mb-4 text-xl font-semibold text-white">Where I operate</h3>
              <p className="max-w-3xl text-lg leading-relaxed text-neutral-400">
                Creative/Tech hybrid spaces, culture-driven brands (for example fashion, art, storytelling platforms), and AI-native digital systems—specifically focused on communication platforms.
              </p>
            </div>
            <p className="mb-6 text-sm font-medium uppercase tracking-widest text-neutral-500">
              Problems I care about solving
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-lg border border-neutral-600 bg-neutral-800/50 p-6">
                <h3 className="mb-3 text-lg font-semibold text-white">The competence gap</h3>
                <p className="text-neutral-400">
                  Bridging the chasm where digital learning success (for example app-based metrics) fails to translate into spontaneous, real-world conversational competence—requiring design to assess experience outside typical web patterns.
                </p>
              </div>
              <div className="rounded-lg border border-neutral-600 bg-neutral-800/50 p-6">
                <h3 className="mb-3 text-lg font-semibold text-white">Algorithmic opacity &amp; agency</h3>
                <p className="text-neutral-400">
                  Ensuring AI-driven personalization prioritizes trust, transparency, and real user control—avoiding standardized, predictable &ldquo;AI-generated conformity.&rdquo;
                </p>
              </div>
              <div className="rounded-lg border border-neutral-600 bg-neutral-800/50 p-6">
                <h3 className="mb-3 text-lg font-semibold text-white">Scaling quality over efficiency</h3>
                <p className="text-neutral-400">
                  Designing systems that scale rapidly while preserving cultural resonance, non-conventional aesthetic, and intentionality that cut through generic design noise.
                </p>
              </div>
            </div>
          </div>

          {/* EDP process */}
          <div className="mb-20 md:mb-28">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
              Dual-track discovery
            </h2>
            <p className="mb-12 max-w-3xl text-lg leading-relaxed text-neutral-400">
              End-to-end design is governed by a Dual-Track Discovery model centered on Ethical Integrity over Optimization.
            </p>
            <ol className="mb-12 space-y-8 border-l-2 border-neutral-600 pl-8">
              <li>
                <p className="mb-2 text-xs font-medium uppercase tracking-widest text-neutral-500">1. Discovery</p>
                <h3 className="mb-2 text-xl font-semibold text-white">Framing the problem</h3>
                <p className="max-w-3xl text-neutral-400">
                  Start with the Competence Gap, using user insights and behavioral science to frame hypotheses. AI supports analysis to surface gaps in user proficiency data.
                </p>
              </li>
              <li>
                <p className="mb-2 text-xs font-medium uppercase tracking-widest text-neutral-500">2. Definition</p>
                <h3 className="mb-2 text-xl font-semibold text-white">Setting the North Star</h3>
                <p className="max-w-3xl text-neutral-400">
                  Goals are defined by Competence Lift—moving the conversation from time spent to conversational confidence. Collaboration defines clear decision rights across the pod-based team.
                </p>
              </li>
              <li>
                <p className="mb-2 text-xs font-medium uppercase tracking-widest text-neutral-500">3. Design</p>
                <h3 className="mb-2 text-xl font-semibold text-white">Prototyping behavior</h3>
                <p className="max-w-3xl text-neutral-400">
                  Builder Designer fluency: LLMs and speech synthesis sandboxes prototype Dynamic Persona Agents and test the &ldquo;Goldilocks&rdquo; level of challenge—deep conversation design (VUI) and prompt governance.
                </p>
              </li>
              <li>
                <p className="mb-2 text-xs font-medium uppercase tracking-widest text-neutral-500">4. Execution &amp; validation</p>
                <h3 className="mb-2 text-xl font-semibold text-white">Ship it, audit it</h3>
                <p className="max-w-3xl text-neutral-400">
                  Rapid shipping with mandatory Weekly AI Audits. Success includes A/B and L7 signals, plus Bias Audits and Value Efficacy Validation so ethical guardrails hold.
                </p>
              </li>
            </ol>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-neutral-600 bg-neutral-800/50 p-6">
                <h3 className="mb-3 text-xl font-semibold text-white">AI tools integration</h3>
                <p className="text-neutral-400">
                  AI is a co-creator for dynamic scenarios (café, airport) and drafting varied accents. Mandatory human override on narrative arcs protects brand and safety.
                </p>
              </div>
              <div className="rounded-lg border border-neutral-600 bg-neutral-800/50 p-6">
                <h3 className="mb-3 text-xl font-semibold text-white">Collaboration topology</h3>
                <p className="text-neutral-400">
                  Pod-based teams: Lead Designer, AI/LLM Engineer, Product Manager, and Linguist/Learning Scientist.
                </p>
              </div>
            </div>
          </div>

          {/* Culture & collaboration */}
          <div className="mb-20 md:mb-28">
            <h2 className="mb-12 text-3xl font-bold text-white md:text-4xl">
              How teams, humans, and machines share responsibility
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="border-l-2 border-white pl-6">
                <h3 className="mb-3 text-xl font-semibold text-white">Structure roles for humans &amp; machines</h3>
                <p className="text-neutral-400">
                  Design moves from a UI library to an intelligence system. Humans own explainability UI and ethical guardrails; AI agents automate co-creation so designers focus on high-leverage strategy.
                </p>
              </div>
              <div className="border-l-2 border-white pl-6">
                <h3 className="mb-3 text-xl font-semibold text-white">Attract &amp; build teams</h3>
                <p className="text-neutral-400">
                  Hire Builder Designers with VUI and data visualization depth—people who design behaviors, not only screens.
                </p>
              </div>
              <div className="border-l-2 border-neutral-600 pl-6">
                <h3 className="mb-3 text-xl font-semibold text-white">Cross-functional collaboration</h3>
                <p className="text-neutral-400">
                  Clear decision rights, silo-breaking. The designer owns emotional tone, moments of delight, and explainability UI. Weekly AI Audits keep ethical and systemic alignment.
                </p>
              </div>
              <div className="border-l-2 border-neutral-600 pl-6">
                <h3 className="mb-3 text-xl font-semibold text-white">Critiques, reviews &amp; promotion</h3>
                <p className="text-neutral-400">
                  Performance ties to Competence Lift and reducing harmful friction—not vanity metrics. Critiques stress systemic logic: does this improve the business while serving the user?
                </p>
              </div>
              <div className="border-l-2 border-neutral-600 pl-6 md:col-span-2">
                <h3 className="mb-3 text-xl font-semibold text-white">Thriving environments</h3>
                <p className="text-neutral-400">
                  No-dark-pattern policy and formal ethical escalation. Reward user development and intentionality—matching the struggle tolerance deep skill progression requires.
                </p>
              </div>
            </div>
          </div>

          {/* Contribution */}
          <div>
            <h2 className="mb-10 text-3xl font-bold text-white md:text-4xl">
              Why the work matters
            </h2>
            <div className="space-y-10">
              <div>
                <h3 className="mb-3 text-xl font-semibold text-white">Access &amp; impact</h3>
                <p className="max-w-3xl text-lg leading-relaxed text-neutral-400">
                  Conversational competence made more universally accessible—challenging the idea that true fluency is a luxury. Democratizing expert-level practice supports real-world confidence, global communication competence, and cultural curiosity.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-xl font-semibold text-white">Ethical responsibility</h3>
                <p className="max-w-3xl text-lg leading-relaxed text-neutral-400">
                  A check on algorithmic steering and optimization loops that privilege short-term gain over development. Ethical Integrity over Optimization—and systems that do not systematically disadvantage minority dialect speakers or erode autonomy.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-xl font-semibold text-white">Long-term contribution</h3>
                <p className="max-w-3xl text-lg leading-relaxed text-neutral-400">
                  Evolving digital systems from engagement-heavy machines into reflective development companions—for long-term identity and confidence, not only daily streaks—so design creates durable value beyond screens and metrics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
