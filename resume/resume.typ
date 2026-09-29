// Ian Conceicao – Resume
// Styling lives in template.typ

#import "template.typ": *

#show: resume

#header(
  name: "Ian Conceicao",
  title: "Software Engineer",
  summary: [
    Full-stack AdTech specialist developing high-throughput ad servers and delightful ad experiences on device. Now working on Free Tier ads at Amazon Music, previously on a core ad server for Amazon Ads serving Prime Video, Fire TV, Twitch, and dozens of other in house publishers.
  ],
  // (icon, text shown, link target)
  contacts: (
    ("assets/mail2.svg", "IanCon234@gmail.com", "mailto:IanCon234@gmail.com"),
    ("assets/18036383121556280908.svg", "650-996-4273", "tel:+16509964273"),
    ("assets/19768422391530099617.svg", "Linkedin.com/in/IanConceicao", "https://www.linkedin.com/in/IanConceicao"),
    ("assets/github.svg", "Github.com/IanConceicao", "https://github.com/IanConceicao"),
    ("assets/website.svg", "IanConceicao.com", "https://ianconceicao.com"),
  ),
)

#columns-body[
  // ───────────── LEFT COLUMN ─────────────
  #section("Experience", first: true)

  // TODO: replace Mon YYYY with real start/end months
  #job(first: true, "Amazon Music · Ad Monetization", "Software Development Engineer II | Dec 2024 – Present", (
    [Extending Amazon's ad tech stack to serve video ads on Amazon Music, a projected \$10M annual revenue opportunity],
    [Designed the architecture for Amazon Music's first display ads platform, a \$4M+ opportunity, connecting the home-page content stack to ad serving],
    [Utilized learned customer behavior to serve extended ad-pods to ad-tolerant customers, raising total ad revenue for Amazon Music by 2.3% in the US],
    [Designed and launched a Sponsored Sessions experiment, letting advertisers sponsor 30 minutes of ad-free listening on Alexa and mobile.],
    [Led 12+ upsells across iOS, Android, and Fire TV for the India Free Tier launch, mentoring 2 engineers and contributing to 6.8K more weekly sign-ups],
    [Co-built a GenAI ticket triage system that de-duplicates, re-routes tickets, and triages tickets closing 281K duplicate tickets in the first week.],
    [Built a team-wide AI agent platform with skills and a custom code and doc knowledgebase, accelerating onboarding and development.],
  ))

  #job("Amazon Ads · Display Ad Serving", "Software Development Engineer | Sept 2023 – Nov 2024", (
    [Led migration of 4 Fire TV display ad formats (60K+ TPS) from a legacy ad server to an OpenRTB exchange, enabling deals, auctions, and compliance.],
    [Launched an Asia-Pacific ad server region next to the ad exchange, cutting Fire TV ad timeouts 82% and serving 15M more ads in the first month],
    [Built a compliance layer across 3 privacy services enforcing EU DMA consent, child-profile ad filtering, and Quebec cookie consent.],
  ))

  #job("Amazon Ads", "Software Engineer Intern | Summers 2021 & 2022", (
    [Cut costs 78% for a device cache serving 30M requests per hour through infrastructure and code overhauls, projecting \$1M in annual savings],
    [Built a full-stack web app for editing a configuration database, with type-checking, version history, and access control to manage changes.],
  ))

  // ── Older entries, cut for space. Uncomment to restore. ──

  // #job(first: true, "Amazon", "Software Engineer Intern | June 2022 – Sept 2022", (
  //   [Led a cost minimization project for a cache that serves 30 million requests-per-hour for numerous types of Amazon devices],
  //   [Designed and implemented major infrastructure and software overhauls that cut the cache cost by 78%, projecting to save the org around \$1 million next year and more the following years as the service scales],
  //   [Overhauled the cache’s codebase to a federated style architecture to provide seamless interoperability between various device types],
  // ))

  // #job("Amazon", "Software Engineer Intern | June 2021 – Sept 2021", (
  //   [Created a web application for owners to more effectively interact with a configuration database containing several tables],
  //   [Designed an intuitive layout that lead to a much simpler and less technically demanding workflow for software engineers and project managers],
  //   [Implemented practical features such as type-checking, version history, and access control to limit bugs and keep track of changes],
  // ))

  // #job(
  //   company-size: 12.5pt,
  //   "Center for Vision, Cognition, Learning & Autonomy",
  //   "Undergraduate Researcher (UCLA) | Oct 2019 – June 2021",
  //   (
  //     [Developed optimal plans, in real time, for virtual agents to collaborate and cook meals together in 3-D photo realistic kitchens],
  //     [Generated dynamic scene graphs out of complex 3-D environments, allowing AI agents to more easily infer about and make plans in their environment],
  //   ),
  // )

  // #job("Lumentum", "Information Security Intern | June 2020 – Sept 2020", (
  //   [Created a web dashboard providing the Information Security team real time alerting of security events and trends],
  //   [Improved the workflow for security admins to check system health by centralizing data from numerous sources onto clear graphs on a single page],
  // ))
][
  // ───────────── RIGHT COLUMN ─────────────

  #section("Skills", first: true)


  #skills("AdTech", (
    [Ad Serving],
    [Ad Decisioning],
    [Targeting],
    [Deals],
    [Frequency Capping],
    [Audio],
    [Video],
    [Display],
  ))
  #skills("Backend", (
    [Java (Spring)],
    [TypeScript & JavaScript (Node.js)],
    [Python (Django, Flask)],
  ))
  #skills("Frontend & Mobile", (
    [React (Web)],
    [Swift (iOS)],
    [Kotlin & Java (Android)],
  ))
  #skills("AWS", (
    [EC2],
    [ECS & Fargate],
    [Lambda],
    [SQS & SNS],
    [CloudWatch],
    [IAM],
  ))
  #skills("Databases", (
    [DynamoDB],
    [Redis (ElastiCache)],
    [SQL (RDS)],
    [MongoDB],
    [S3],
  ))
  // #skills("Research", ([PyTorch], [TensorFlow], [NumPy], [UE4 & C++]))
  #skills("AI Tools", (
    [Claude Code],
    [Codex],
    [Kiro],
  ))


  #section("Education", after: 28pt)

  #school([University of California,\ Los Angeles | 2022], "B.S. Computer Science")

  #subhead("Relevant Electives:")
  #two-up(size: 8pt, pitch: 12pt, first: 16.2pt, (
    [Artificial Intelligence],
    [Machine Learning],
    [Computer Graphics],
    [Natural Language Processing],
    [Computer Animation],
    [Reinforcement Learning],
    [Data Science],
    [],
    [Database Systems],
  ))

]
