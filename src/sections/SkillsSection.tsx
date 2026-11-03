const SkillsSection = () => {
  const skillGroups = [
    {
      title: "Backend",
      skills: [
        "Java",
        "Spring Boot",
        "Spring Data JPA",
        "REST API",
        "Gradle",
        "Node.js",
        "Express",
      ],
    },
    {
      title: "Frontend",
      skills: [
        "React",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "Vite",
        "TanStack Query",
        "Zustand",
      ],
    },
    {
      title: "Database & Cloud",
      skills: ["MySQL", "AWS EC2", "Ubuntu", "Vercel", "Netlify"],
    },
    {
      title: "Tools & AI",
      skills: [
        "Git",
        "GitHub",
        "Postman",
        "Figma",
        "Python",
        "OpenAI API",
        "n8n",
      ],
    },
  ];

  return (
    <section id="skills" className="scroll-mt-32 bg-[#f8f7f4] px-8 py-32">
      <div className="mx-auto max-w-[1100px]">
        {/* Label */}
        <div className="mb-6">
          <span className="rounded-full border border-black/[0.08] bg-white px-4 py-1.5 text-[12px] uppercase tracking-[0.14em] text-[#7a7570]">
            Skills
          </span>
        </div>

        {/* Title */}
        <h2 className="text-4xl leading-tight text-[#1a1714]">
          프론트엔드부터 백엔드까지,
          <br />
          서비스의 전체 구조를 이해하고 구현합니다.
        </h2>

        <p className="mt-6 max-w-[650px] text-[16px] leading-7 text-[#5f5a55]">
          React와 TypeScript 기반의 프론트엔드 개발부터 Java와 Spring Boot를
          활용한 REST API 설계, MySQL 데이터베이스 구축 및 AWS 서버 배포까지
          풀스택 개발 경험을 쌓아왔습니다.
        </p>

        {/* Skills Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-[24px] border border-black/[0.06] bg-white p-6"
            >
              <h3 className="mb-4 text-sm uppercase tracking-[0.14em] text-[#7a7570]">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-[#f4f2ef] px-3 py-1.5 text-sm text-[#5f5a55]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
