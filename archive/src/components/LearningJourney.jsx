import React, { useEffect, useRef } from 'react';

const steps = [
  {
    num: '01',
    stage: 'HTML 기초',
    title: '구조와 시맨틱',
    desc: 'HTML 태그, 페이지 구조, 제목·문단·링크·이미지·폼·표·미디어 요소. 모든 웹 페이지의 뼈대를 만드는 단계입니다.',
    tags: ['HTML 태그', '시맨틱', 'Forms', '미디어', '링크'],
    files: 'html/01 · html/02 · mbc-lesson-main/01'
  },
  {
    num: '02',
    stage: 'CSS 스타일링',
    title: '레이아웃과 시각 디자인',
    desc: '선택자, 박스 모델, Flexbox, Grid, Position, 타이포그래피, 색상, 그라디언트, 애니메이션, 반응형 미디어 쿼리.',
    tags: ['Flexbox', 'Grid', '애니메이션', '그라디언트', '반응형'],
    files: 'html/02 · html/stylesheet · html/docs'
  },
  {
    num: '03',
    stage: 'JavaScript',
    title: '로직과 인터랙션',
    desc: '변수, 함수, 반복문, DOM 조작, 이벤트, 조건문, 배열, 객체. 페이지를 동적으로 만드는 단계입니다.',
    tags: ['DOM', '이벤트', '함수', '반복문', '배열'],
    files: 'html/03 · html/04 · mbc-lesson-main/03-1'
  },
  {
    num: '04',
    stage: '라이브러리 & 도구',
    title: '모던 프론트엔드 생태계',
    desc: 'GSAP으로 애니메이션, Swiper.js로 슬라이더, Tailwind CSS로 유틸리티 기반 스타일링. Figma 디자인을 코드로 구현합니다.',
    tags: ['GSAP', 'Swiper', 'Tailwind', 'Figma', '애니메이션'],
    files: 'gsap/ · swiper/ · tailwind/ · html/mbc-lesson-main/html'
  },
  {
    num: '05',
    stage: '통합 프로젝트',
    title: '페이지 단위 구현',
    desc: 'Python 백엔드 연동 챗봇 UI, React·Vue를 활용한 SPA 실험, 스토리보드 디자인 시스템, 개인 홈페이지, AI 영상 생성 서비스 대시보드.',
    tags: ['Chatbot', 'React', 'Vue', 'SPA', 'Python API'],
    files: 'chatbot/ · spa/ · html/vibe · html/request'
  }
];

export default function LearningJourney() {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const reveals = containerRef.current?.querySelectorAll('.reveal');
    reveals?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="journey-section" id="journey" aria-label="학습 여정" ref={containerRef}>
      <div className="section-inner">
        <div className="section-header">
          <div className="section-label">&mdash; 학습 여정</div>
          <h2 className="section-title">기초부터 프로젝트까지</h2>
          <p className="section-desc">실제 학습 흐름을 단계별로 정리했습니다. 각 단계는 이전 단계 위에 쌓입니다.</p>
        </div>

        <div className="journey-track" role="list">
          {steps.map((step, index) => (
            <React.Fragment key={step.num}>
              <div className="journey-step reveal" role="listitem">
                <div className="journey-marker" aria-hidden="true">
                  <span className="journey-num">{step.num}</span>
                </div>
                <div className="journey-content">
                  <div className="journey-stage">{step.stage}</div>
                  <h3 className="journey-title">{step.title}</h3>
                  <p className="journey-desc">{step.desc}</p>
                  <div className="journey-tags">
                    {step.tags.map((tag, tIndex) => (
                      <span key={tIndex} className="tag">{tag}</span>
                    ))}
                  </div>
                  <div className="journey-files">
                    <span className="journey-file-count">{step.files}</span>
                  </div>
                </div>
              </div>
              {index < steps.length - 1 && <div className="journey-connector" aria-hidden="true"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
