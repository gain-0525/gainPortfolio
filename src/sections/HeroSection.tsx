const AboutSection = () => {
  const skills = [
    "React",
    "TypeScript",
    "Java",
    "Spring Boot",
    "Spring Data JPA",
    "MySQL",
    "AWS EC2",
    "Python",
    "Tailwind CSS",
    "Git",
  ];

  return (
    <section id="about" className="scroll-mt-32 bg-[#f8f7f4] px-8 py-32">
      <div className="mx-auto max-w-[1100px]">
        {/* Section Label */}
        <div className="mb-6">
          <span className="rounded-full border border-black/[0.08] bg-white px-4 py-1.5 text-[12px] uppercase tracking-[0.14em] text-[#7a7570]">
            About
          </span>
        </div>

        {/* Main Content */}
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left */}
          <div>
            <h2 className="max-w-[700px] text-5xl leading-[1.15] tracking-tight text-[#1a1714]">
              사용자 경험부터 서버 구조까지,
              <br />
              서비스의 전체 흐름을 이해하고 구현하는 풀스택 개발자입니다.
            </h2>

            <p className="mt-10 max-w-[620px] text-[17px] leading-8 text-[#5f5a55]">
              React와 TypeScript를 기반으로 사용자 중심의 웹 서비스를 개발하며,
              Java와 Spring Boot를 활용한 백엔드 개발까지 경험을 확장하고
              있습니다.
              <br />
              <br />
              REST API 설계, 데이터베이스 모델링, 데이터 정합성 검증, 예외
              처리부터 AWS 기반 서버 배포까지 직접 수행하며 서비스의 전체 구조를
              이해하고자 노력합니다.
              <br />
              <br />
              단순히 기능을 구현하는 것을 넘어, 안정적인 데이터 처리와 직관적인
              사용자 경험을 함께 고민하며 실제 문제를 해결하는 개발자를
              지향합니다.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-between rounded-[32px] border border-black/[0.06] bg-white p-10 shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
            {/* Profile */}
            <div>
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1a1714] text-lg font-semibold text-white">
                  G
                </div>

                <div>
                  <h3 className="text-xl text-[#1a1714]">Gain Kim</h3>

                  <p className="mt-1 text-sm text-[#7a7570]">
                    Full Stack Developer
                  </p>
                </div>
              </div>

              <div className="space-y-5 border-t border-black/[0.06] pt-6">
                <div>
                  <p className="mb-1 text-[12px] uppercase tracking-[0.12em] text-[#9a948e]">
                    Email
                  </p>

                  <p className="text-[15px] leading-7 text-[#3f3a36]">
                    kimgain0525@sookmyung.ac.kr
                  </p>
                </div>

                <div>
                  <p className="mb-1 text-[12px] uppercase tracking-[0.12em] text-[#9a948e]">
                    Education
                  </p>

                  <p className="text-[15px] leading-7 text-[#3f3a36]">
                    숙명여자대학교 소프트웨어학부
                  </p>
                </div>

                <div>
                  <p className="mb-1 text-[12px] uppercase tracking-[0.12em] text-[#9a948e]">
                    Interested In
                  </p>

                  <p className="text-[15px] leading-7 text-[#3f3a36]">
                    Full Stack · Backend · Cloud · AI
                  </p>
                </div>

                <div>
                  <p className="mb-1 text-[12px] uppercase tracking-[0.12em] text-[#9a948e]">
                    Stack
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-[#f4f2ef] px-3 py-1.5 text-sm text-[#5f5a55]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div className="mt-10 flex items-center justify-between border-t border-black/[0.06] pt-6">
              <div>
                <p className="text-sm text-[#7a7570]">Based in</p>
                <p className="mt-1 text-[#1a1714]">Seoul, South Korea</p>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-green-800/[0.08] px-3 py-1.5 text-sm text-[#4a7a5a]">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#4a9a5a]" />
                Open to Work
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
