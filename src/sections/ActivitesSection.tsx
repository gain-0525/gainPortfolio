const ActivitiesSection = () => {
  const activities = [
    {
      title: "2026 SW MVP 경진대회",
      role: "대상 · Full Stack Developer (개인 참가)",
      period: "2026.10",
      description:
        "소상공인 현금흐름 관리 플랫폼 CashFlow Mate를 단독 개발하여 대상을 수상했습니다. Java, Spring Boot, JPA, MySQL 기반으로 REST API와 데이터베이스를 설계하고, 매출·정산 데이터 정합성 검증, CSV 업로드 예외 처리, 현금흐름 예측 기능을 구현했습니다. React와 TypeScript로 프론트엔드를 개발하고 AWS EC2에 백엔드 서버를 배포하며 서비스 개발 전 과정을 수행했습니다.",
    },

    {
      title: "GPM",
      role: "기획부",
      period: "2026.02 - Present",
      description:
        "숙명여자대학교 리더십그룹 GPM에서 기획부를 맡아 다양한 행사 기획과 운영을 진행하고 있습니다. 또한, 유학생의 버디로서 유학생의 학교생활을 돕고 있습니다.",
    },
    {
      title: "Snorose",
      role: "Frontend · Editor · Migration TF",
      period: "2026.02 - Present",
      description:
        "숙명여자대학교 커뮤니티 서비스 운영 및 마이그레이션 TF 활동에 참여중입니다. 이 외에도 수시로 에러 수정과 기능 개선을 진행하고 있습니다.",
    },

    {
      title: "LOW-AI CODE CHALLENGE",
      role: "운영진 및 개발 피드백 담당",
      period: "2026.05 - Present",
      description:
        "숙명여자대학교 Snorose X Upstage X 소프트웨어중심사업단 공동 주최로 진행되는 AI 코딩 대회인 LOW-AI CODE CHALLENGE의 운영진으로 참여하여, 참가자들의 개발 과정에서 발생하는 문제에 대한 피드백과 지원을 담당하고 있습니다. 또한 이와 관련해 n8n에 대해 학습중입니다",
    },

    {
      title: "UMC",
      role: "Frontend Developer, 숙명여대 지부 프론트엔드 팀장, 숙명여대 지부 회장",
      period: "2025.09 - Present",
      description:
        "웹 프론트엔드 파트 활동과 협업 프로젝트를 통해 실무형 개발 경험을 쌓았습니다. 현재 숙명여대 회장으로서 지부 운영과 프로젝트 관리, 팀원 관리 등 다양한 활동을 진행하고 있습니다.",
    },

    {
      title: "SOLUX",
      role: "Frontend Developer",
      period: "2025.03 - 2026.02",
      description:
        "교내 유일 프로그래밍 중앙동아리 SOLUX에서 프론트엔드 개발 및 다양한 팀 프로젝트를 진행했습니다.",
    },

    {
      title: "디지털 인문학 콘텐츠 개발 연구 발표회",
      role: "기획 및 개발",
      period: "2025.11",
      description:
        "인문학과 결합한 디지털 콘텐츠 개발을 진행하 기획부터 개발까지 맡아 연구회에서 발표하였으며 우수상을 수상하였습니다.",
    },

    {
      title: "Rotaract",
      role: "부회장",
      period: "2023.03 - 2026.02",
      description:
        "정기 봉사활동, 봉사활동 기획 및 한국로슈진단과 함께 자궁경부암 인식 개선 캠페인을 기획하고 운영했습니다.",
    },
  ];

  return (
    <section id="activities" className="scroll-mt-32 bg-white px-8 py-32">
      <div className="mx-auto max-w-[950px]">
        {/* Label */}
        <div className="mb-6">
          <span className="rounded-full border border-black/[0.08] bg-[#f8f7f4] px-4 py-1.5 text-[12px] uppercase tracking-[0.14em] text-[#7a7570]">
            Activities
          </span>
        </div>

        {/* Title */}
        <h2 className="text-4xl leading-tight text-[#1a1714]">
          다양한 협업과 활동을 통해 경험을 확장했습니다
        </h2>

        {/* Description */}
        <p className="mt-6 max-w-[760px] text-[16px] leading-7 text-[#5f5a55]">
          개발뿐 아니라 학회, 커뮤니티, 사회공헌 활동 등을 통해 협업과 문제 해결
          경험을 쌓아왔습니다.
        </p>

        {/* Timeline */}
        <div className="mt-20 border-l border-black/[0.08] pl-8 space-y-14">
          {activities.map((activity) => (
            <div key={activity.title} className="relative">
              {/* Dot */}
              <div className="absolute -left-[37px] top-2 h-3 w-3 rounded-full bg-[#1a1714]" />

              {/* Period */}
              <p className="text-[12px] uppercase tracking-[0.14em] text-[#9a948d]">
                {activity.period}
              </p>

              {/* Title */}
              <h3 className="mt-2 text-[28px] leading-none text-[#1a1714]">
                {activity.title}
              </h3>

              {/* Role */}
              <p className="mt-3 text-[15px] text-[#7a7570]">{activity.role}</p>

              {/* Description */}
              <p className="mt-5 max-w-[700px] text-[15px] leading-7 text-[#5f5a55]">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
