import { useState } from "react";
import MuseAi from "../assets/MuseAi.png";
import myformreform from "../assets/내폼리폼.jpg";
import actionary from "../assets/웹2팀 썸네일 1.png";
import unitrip from "../assets/Unitrip.png";
import snorose from "../assets/Snorose.png";
import MuseAi1 from "../assets/MuseAi (1).png";
import MuseAi2 from "../assets/MuseAi (2).png";
import MuseAi3 from "../assets/MuseAi (3).png";
import MuseAi4 from "../assets/MuseAi (4).png";
import chating1 from "../assets/chating1.png";
import chating2 from "../assets/chating2.png";
import chating3 from "../assets/chating3.png";
import chating4 from "../assets/chating4.png";
import chating7 from "../assets/chating7.png";
import chating8 from "../assets/chating8.png";
import chating9 from "../assets/chating9.png";
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";
import profile3 from "../assets/profile3.png";
import profilefeed from "../assets/profilefeed.png";
import review from "../assets/20260515_010849.png";
import Actionary1 from "../assets/MAIN.png";
import MYPAGE from "../assets/MY PAGE.png";
import actionary2 from "../assets/공부량.png";
import actionary3 from "../assets/POST_WHOLE.png";
import actionary4 from "../assets/File Document page.png";
import actionary5 from "../assets/SIDE BAR.png";
import UNITRIP1 from "../assets/UNITRIP1.png";
import UNITRIP2 from "../assets/UNITRIP2.png";
import UNITRIP3 from "../assets/UNITRIP3.png";
import BMS from "../assets/BMS.png";
import BMS1 from "../assets/BMS1.png";
import BMS2 from "../assets/BMS2.png";
import BMS3 from "../assets/BMS3.png";
import BMS4 from "../assets/BMS4.png";
import BMS5 from "../assets/BMS5.png";
import BMS6 from "../assets/BMS6.png";
import Goorm from "../assets/goorm.png";
import KHP from "../assets/KHP.png";
import KHP1 from "../assets/KHP1.png";
import KHP2 from "../assets/KHP2.png";
import KHP3 from "../assets/KHP3.png";
import KHP4 from "../assets/KHP4.png";
import KHP5 from "../assets/KHP5.png";
import cashflowmate from "../assets/캐시플로우 메이트 현금흐름 대시보드.png";
import CASHFLOW_1 from "../assets/CASHFLOW_1.png";
import CASHFLOW_2 from "../assets/CASHFLOW_2.png";
import CASHFLOW_3 from "../assets/CASHFLOW_3.png";
import CASHFLOW_4 from "../assets/CASHFLOW_4.png";
import CASHFLOW_5 from "../assets/CASHFLOW_5.png";
import CASHFLOW_6 from "../assets/CASHFLOW_6.png";
import { type Project } from "../type";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projects = [
    {
      title: "MuseAi",
      service: "AI 활용 기획 및 자료 정리",
      context: "숙명여자대학교 디지털 인문학 콘텐츠 개발 연구 발표회",
      role: "Team Leader / Planning / Developer",
      description:
        "숙명여자대학교 디지털 인문학 콘텐츠 개발 연구에 참여하여 진행한 팀 프로젝트로, 우리나라를 방문한 외국인을 대상으로 한 유물 정보 설명 서비스입니다. OpenAI API를 활용한 AI 기반 번역 및 TTS 제공 사이트입니다.",
      buttonText: "Link",

      image: MuseAi,

      links: {
        demo: "https://museai2.netlify.app/",
        github: "https://github.com/gain-0525/MuseAI/tree/main",
      },

      highlights: [
        "팀 리딩 및 기획 구조 설계",
        "OpenAI API 활용 번역 및 TTS 기능 구현",
        "프론트엔드 화면 구현",
      ],

      details: [
        {
          image: MuseAi1,
          description: "원하는 유물을 유물명 및 유물코드로 검색 가능",
        },

        {
          image: MuseAi2,
          description: "원하는 언어 입력",
        },
        {
          image: MuseAi3,
          description: "AI가 번역하여 유물 정보 제공 및 TTS 기능 제공",
        },
        {
          image: MuseAi4,
          description:
            "외국인이 이해하기 쉽게 유물 정보를 재구성하여 동화 형식 이미지 제공",
        },
      ],
    },

    {
      title: "내폼리폼",
      context: "UMC 9th Demo Day 최우수상",
      role: "Frontend",
      description:
        "내폼리폼은 스포츠 의류들을 활용하여 리폼 아이디어를 공유하고 리폼러와 이용자가 직접 연락하며 원하는 작업물을 제작할 수 있는 플랫폼입니다.",
      buttonText: "시연 영상",

      image: myformreform,

      links: {
        demo: "https://www.youtube.com/watch?v=sx-1-4nXg8c",
        github: "https://github.com/UMC-9th-project/myform-reform-FE",
      },

      highlights: [
        "리폼러와 일반 사용자, 2가지 버전의 계정 분리",
        "채팅 내에서 리폼러와 일반 사용자가 직접 연락하며 리폼 작업물 제작 가능",
        "채팅 내에서 결제 기능 구현",
        "마이페이지에서 본인이 작성한 글 확인 및 구매한 상품에 대한 리뷰 작성 가능",
      ],

      details: [
        {
          image: chating1,
          description: "리폼러 -> 일반 사용자에게 견적서 전송",
        },

        {
          image: chating2,
          description: "견적서 상세 조회",
        },
        {
          image: chating3,
          description: "일반 사용자가 견적서 수락 시, 결제창 전송",
        },
        {
          image: chating4,
          description: "결제 완료 시, 결제완료 카드 전송",
        },
        {
          image: chating7,
          description: "일반 사용자 -> 리폼러에게 먼저 메시지 전송",
        },
        {
          image: chating8,
          description: "일반 사용자 -> 리폼러에게 요청서 작성",
        },
        {
          image: chating9,
          description: "일반 채팅으로 이미지 전송 가능",
        },
        {
          image: profile1,
          description: "리폼러 프로필 화면, 우측에 판매글 작성 버튼 존재",
        },
        {
          image: profile2,
          description: "리폼러가 작성한 판매글 (완제품)",
        },
        {
          image: profile3,
          description: "리폼러 프로필 및 피드 수정",
        },
        {
          image: profilefeed,
          description: "리폼러 피드 조회 가능",
        },
        {
          image: review,
          description: "마이페이지에서 리뷰는 구매자만 작성 가능",
        },
      ],
    },

    {
      title: "Actionary",
      context: "sm-solux 30th 2nd",
      role: "Frontend Leader",
      description:
        "갓생 살기 프로젝트를 위한 플랫폼으로 실시간 화면 공유 스터디, 챌린지, 달성률 시각화 등의 기능을 제공합니다",
      buttonText: "시연 영상",

      image: actionary,

      links: {
        demo: "https://www.youtube.com/watch?v=J9DtaF-04sI",
        github: "https://github.com/sm-solux/30th_2_solux_Actionary_frontend",
      },

      highlights: [
        "실시간 화상 스터디 기능",
        "화상 스터디 시간 측정 및 캘린더 시각화",
        "AI PDF 요약 서비스",
        "커뮤니티 서비스",
        "투두 리스트 서비스",
      ],

      details: [
        {
          image: Actionary1,
          description: "메인 화면",
        },

        {
          image: MYPAGE,
          description: "마이페이지",
        },
        {
          image: actionary2,
          description: "공부량 시각화",
        },
        {
          image: actionary3,
          description: "포스트 전체 보기",
        },
        {
          image: actionary4,
          description: "PDF 요약 서비스",
        },
        {
          image: actionary5,
          description: "사이드바",
        },
      ],
    },
    {
      title: "UniTrip",
      context: "sm-solux 30th 1st",
      role: "Frontend",
      description: "대학생을 타겟팅 한 여행 리뷰 플랫폼입니다.",
      buttonText: "시연 영상",

      image: unitrip,

      links: {
        demo: "https://tv.kakao.com/v/457248713",
        github:
          "https://github.com/SoluxteamMerge/30th_1_Merge_UniTrip_Frontend",
      },

      highlights: [
        "대학생 인증 기반 회원가입",
        "회원 정보 수정 및 회원 탈퇴",
        "메인 화면",
        "MT용 룰렛 판",
      ],
      details: [
        {
          image: UNITRIP1,
          description: "메인 화면",
        },

        {
          image: UNITRIP2,
          description: "MT용 룰렛 판",
        },
        {
          image: UNITRIP3,
          description: "개인 정보 수정",
        },
      ],
    },
    {
      title: "Snorose",
      role: "Frontend, Editor · Migration TF",
      buttonText: "Link",
      description:
        "약 32,000명의 실사용자를 보유한 숙명 여자 대학교 유일무이 커뮤니티",

      image: snorose,

      links: {
        demo: "https://www.snorose.com/",
        github: "https://github.com/snorose/snorose-front",
      },

      highlights: [
        "숙명여대 구성원만이 사용할 수 있는 게시판",
        "족보 게시판",
        "외부 업체들과의 이벤트",
      ],
    },
    {
      title: "BMS",
      context: "Goorm 2026 Summer Internship",
      role: "Frontend, Google Apps Script, Vite, React, TypeScript",
      buttonText: "Link",
      description:
        "주식회사 구름의 사내 사이트 BMS(Business Management System) 리팩토링",

      image: Goorm,

      links: {
        demo: "https://bms-nu-eight.vercel.app/",
        github: "사내 사이트 이므로 링크 제공 불가",
      },

      highlights: [
        "사업 1팀 데이터 확인 사이트",
        "프론트화면 분리 및 배포",
        "Google Apps Script를 활용한 데이터 수집 및 가공",
        "시트 통합 조회 및 시트별 데이터 조회 기능 구현",
      ],
      details: [
        {
          image: BMS6,
          description: "로그인 시, Google Spread Sheet 권한 확인 후 로그인",
        },
        {
          image: BMS,
          description:
            "조회를 할 시트들을 등록 / 해당 기능에서 시트 열람 권한 후 등록 가능",
        },

        {
          image: BMS1,
          description: "여러 시트 통합 조회",
        },
        {
          image: BMS2,
          description: "시트별 데이터 조회",
        },
        {
          image: BMS3,
          description: "연도별 데이터 조회",
        },
        {
          image: BMS4,
          description: "대관 사이트 캘린더 조회",
        },
        {
          image: BMS5,
          description: "부트캠프 예상 그래프 추가",
        },
      ],
    },
    {
      title: "KHP Landing Page",
      context: "Goorm 2026 Summer Internship",
      role: "Frontend",
      description: "KHP 랜딩 페이지 제작",
      buttonText: "Link",

      image: Goorm,

      links: {
        demo: "https://khp-landing-page.vercel.app/",
        github: "https://github.com/gain-0525/KHP_landingPage",
      },

      highlights: [
        "KHP 랜딩 페이지 제작",
        "KHP 소개, KHP 서비스 소개, KHP 서비스 이용 방법, KHP 서비스 이용 후기 등 다양한 섹션 구성",
      ],
      details: [
        {
          image: KHP,
          description: "메인 화면",
        },

        {
          image: KHP1,
          description: "KHP 사업 소개 페이지",
        },
        {
          image: KHP2,
          description: "공간 소개 페이지",
        },
        {
          image: KHP3,
          description: "KHP 공지사항 페이지",
        },
        {
          image: KHP4,
          description: "KHP 서비스 FAQ 페이지",
        },
        {
          image: KHP5,
          description: "KHP 서비스 야간 모드 제공",
        },
      ],
    },
    {
      title: "CashFlow Mate",
      context: "SW MVP 경진대회 대상 수상",
      role: "FullStack",
      description:
        "소상공인을 위한 매출·정산·대사·지출 관리 및 현금흐름 예측 통합 플랫폼",
      buttonText: "Link",

      image: cashflowmate,

      links: {
        demo: "https://cash-flow-mate-frontend.vercel.app/",
        github: "https://github.com/gain-0525/CashFlow-Mate-Frontend",
      },

      highlights: [
        "매출 및 정산 내역 관리",
        "매출·정산 데이터 대사",
        "지출 내역 관리",
        "현금흐름 예측",
        "자금흐름 캘린더",
        "재무 현황 대시보드",
      ],
      details: [
        {
          image: CASHFLOW_1,
          description: "대시보드",
        },

        {
          image: CASHFLOW_2,
          description: "매출 관리 페이지",
        },
        {
          image: CASHFLOW_3,
          description: "정산 관리 페이지",
        },
        {
          image: CASHFLOW_4,
          description: "대사 관리 페이지",
        },
        {
          image: CASHFLOW_5,
          description: "지출 관리 페이지",
        },
        {
          image: CASHFLOW_6,
          description: "현금흐름 예측 페이지",
        },
      ],
    },
  ];

  return (
    <>
      <section id="projects" className="scroll-mt-32 bg-[#f8f7f4] px-8 py-32">
        <div className="mx-auto max-w-[1100px]">
          {/* Label */}
          <div className="mb-6">
            <span className="rounded-full border border-black/[0.08] bg-white px-4 py-1.5 text-[12px] uppercase tracking-[0.14em] text-[#7a7570]">
              Projects
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl leading-tight text-[#1a1714]">
            문제 해결과 학습을 기반으로 프로젝트를 구성합니다
          </h2>

          <p className="mt-6 max-w-[800px] text-[16px] leading-7 text-[#5f5a55]">
            단순 개발뿐 아니라 기획, AI 활용, 학습 공유 경험을 통해 문제를
            해결하는 방식으로 프로젝트를 진행했습니다.
          </p>

          {/* Grid */}
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer rounded-[24px] border border-black/[0.06] bg-white overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(0,0,0,0.05)]"
              >
                {/* Image */}
                <div className="h-50 bg-[#eee]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-[18px] text-[#1a1714] leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#7a7570] uppercase tracking-wide">
                    {project.context}
                  </p>

                  {/* Role */}
                  <p className="mt-2 text-sm text-[#7a7570]">{project.role}</p>

                  {/* Description */}
                  <p className="mt-4 text-[14px] leading-6 text-[#5f5a55]">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="mt-5 space-y-2">
                    {project.highlights.map((item) => (
                      <li
                        key={item}
                        className='text-[13px] text-[#6f6a65] before:mr-2 before:text-[#c17b3a] before:content-["•"]'
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Links */}
                  <div className="mt-6 flex gap-3">
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-[#1a1714] px-4 py-2 text-xs text-white transition hover:bg-[#3a342c]"
                    >
                      {project.buttonText || "Live Demo"}
                    </a>

                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-black/[0.12] px-4 py-2 text-xs text-[#1a1714] hover:bg-black/[0.04]"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-6"
          onClick={() => setSelectedProject(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[32px] bg-white p-10"
          >
            {/* Title */}
            <h2 className="text-3xl text-[#1a1714]">{selectedProject.title}</h2>

            {/* Role */}
            <p className="mt-3 text-[#7a7570]">{selectedProject.role}</p>

            {/* Image */}
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="mt-8 h-[300px] w-full rounded-2xl object-cover"
            />

            {/* Description */}
            <p className="mt-8 leading-7 text-[#5f5a55]">
              {selectedProject.description}
            </p>

            {/* Highlights */}
            <ul className="mt-8 space-y-3">
              {selectedProject.highlights.map((item) => (
                <li
                  key={item}
                  className='before:mr-2 before:text-[#c17b3a] before:content-["•"]'
                >
                  {item}
                </li>
              ))}
            </ul>

            {selectedProject.details?.map((detail, index) => (
              <div key={index} className="mt-10">
                <img
                  src={detail.image}
                  alt="detail"
                  className="rounded-2xl border border-black/[0.06]"
                />

                <p className="mt-4 leading-7 text-[#5f5a55]">
                  {detail.description}
                </p>
              </div>
            ))}

            {/* Buttons */}
            <div className="mt-10 flex gap-3">
              <a
                href={selectedProject.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#1a1714] px-5 py-3 text-sm text-white"
              >
                Visit Site
              </a>

              <a
                href={selectedProject.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-black/[0.1] px-5 py-3 text-sm"
              >
                GitHub
              </a>
            </div>

            {/* Close */}
            <button
              onClick={() => setSelectedProject(null)}
              className="mt-10 text-sm text-[#7a7570]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectsSection;
