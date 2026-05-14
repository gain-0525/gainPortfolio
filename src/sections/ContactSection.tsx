const ContactSection = () => {
  return (
    <section
      id='contact'
      className='scroll-mt-32 bg-white px-8 py-32'
    >
      <div className='mx-auto max-w-[900px]'>

        {/* Label */}
        <div className='mb-6'>
          <span className='rounded-full border border-black/[0.08] bg-[#f8f7f4] px-4 py-1.5 text-[12px] uppercase tracking-[0.14em] text-[#7a7570]'>
            Contact
          </span>
        </div>

        {/* Title */}
        <h2 className='text-4xl leading-tight text-[#1a1714]'>
          기술과 협업으로 아이디어를 현실로 만듭니다
        </h2>

        {/* Description */}
        <p className='mt-6 max-w-[700px] text-[16px] leading-7 text-[#5f5a55]'>
          프론트엔드 개발과 협업, 그리고 사용자 경험 개선에 관심이 많습니다.
          새로운 기술을 배우고 문제를 해결하는 과정 속에서 꾸준히 성장하고 있습니다.
        </p>

        {/* Contact Box */}
        <div className='mt-14 rounded-[28px] border border-black/[0.06] bg-[#f8f7f4] p-8'>

          <div className='space-y-6'>

            {/* Email */}
            <div>
              <p className='text-[13px] uppercase tracking-[0.12em] text-[#8a847e]'>
                Email
              </p>

              <a
                href='mailto:yourEmail@gmail.com'
                className='mt-2 inline-block text-[18px] text-[#1a1714] transition hover:opacity-70'
              >
                kimgain0525@sookmyung.ac.kr
              </a>
            </div>

            {/* GitHub */}
            <div>
              <p className='text-[13px] uppercase tracking-[0.12em] text-[#8a847e]'>
                GitHub
              </p>

              <a
                href='https://github.com/gain-0525'
                target='_blank'
                rel='noopener noreferrer'
                className='mt-2 inline-block text-[18px] text-[#1a1714] transition hover:opacity-70'
              >
                github.com/gain-0525
              </a>
            </div>

            {/* Blog */}
            <div>
              <p className='text-[13px] uppercase tracking-[0.12em] text-[#8a847e]'>
                Blog
              </p>

              <a
                href='https://gannispace.tistory.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='mt-2 inline-block text-[18px] text-[#1a1714] transition hover:opacity-70'
              >
                gannispace.tistory.com
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;