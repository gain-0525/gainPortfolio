const SkillsSection = () => {
  const frontend = [
    'React',
    'TypeScript',
    'TailwindCSS',
    'Vite',
  ];

  const ai = [
    'Python',
    'OpenAI API',
    'LLM 활용 기반 서비스'
  ];

  const tools = [
    'Git',
    'GitHub',
    'Figma',
  ];

  const learning = [
    'OCR (Document Understanding)',
    'n8n (Automation Workflow)',
    'RAG Basics',
  ];

  return (
    <section
      id='skills'
      className='scroll-mt-32 bg-[#f8f7f4] px-8 py-32'
    >
      <div className='mx-auto max-w-[1100px]'>
        
        {/* Label */}
        <div className='mb-6'>
          <span className='rounded-full border border-black/[0.08] bg-white px-4 py-1.5 text-[12px] uppercase tracking-[0.14em] text-[#7a7570]'>
            Skills
          </span>
        </div>

        {/* Title */}
        <h2 className='text-4xl leading-tight text-[#1a1714]'>
          기술을 도구로 활용하며<br />
          AI 기반 서비스 확장을 학습하고 있습니다
        </h2>

        <p className='mt-6 max-w-[650px] text-[16px] leading-7 text-[#5f5a55]'>
          프론트엔드 개발을 중심으로 AI API 연동과 자동화 도구 활용에 관심이 있으며,
          사용자 경험을 개선하는 방향으로 기술을 확장하고 있습니다.
        </p>

        {/* Grid */}
        <div className='mt-16 grid gap-10 md:grid-cols-4'>
          
          {/* Frontend */}
          <div className='rounded-[24px] border border-black/[0.06] bg-white p-6'>
            <h3 className='mb-4 text-sm uppercase tracking-[0.14em] text-[#7a7570]'>
              Frontend
            </h3>

            <div className='flex flex-wrap gap-2'>
              {frontend.map((skill) => (
                <span
                  key={skill}
                  className='rounded-full bg-[#f4f2ef] px-3 py-1.5 text-sm text-[#5f5a55]'
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* AI Integration */}
          <div className='rounded-[24px] border border-black/[0.06] bg-white p-6'>
            <h3 className='mb-4 text-sm uppercase tracking-[0.14em] text-[#7a7570]'>
              AI Integration
            </h3>

            <div className='flex flex-wrap gap-2'>
              {ai.map((skill) => (
                <span
                  key={skill}
                  className='rounded-full bg-[#f4f2ef] px-3 py-1.5 text-sm text-[#5f5a55]'
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className='rounded-[24px] border border-black/[0.06] bg-white p-6'>
            <h3 className='mb-4 text-sm uppercase tracking-[0.14em] text-[#7a7570]'>
              Tools
            </h3>

            <div className='flex flex-wrap gap-2'>
              {tools.map((skill) => (
                <span
                  key={skill}
                  className='rounded-full bg-[#f4f2ef] px-3 py-1.5 text-sm text-[#5f5a55]'
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Currently Learning */}
          <div className='rounded-[24px] border border-black/[0.06] bg-white p-6'>
            <h3 className='mb-4 text-sm uppercase tracking-[0.14em] text-[#7a7570]'>
              Currently Learning
            </h3>

            <div className='flex flex-wrap gap-2'>
              {learning.map((item) => (
                <span
                  key={item}
                  className='rounded-full border border-dashed border-[#c7c2bb] bg-transparent px-3 py-1.5 text-sm text-[#7a7570]'
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;