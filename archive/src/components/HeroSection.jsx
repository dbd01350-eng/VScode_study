import React, { useState, useEffect, useRef } from 'react';

function StatItem({ targetNum, label }) {
  const [count, setCount] = useState(0);
  const itemRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            let start = null;
            const duration = 1200;
            const step = (timestamp) => {
              if (!start) start = timestamp;
              const progress = Math.min((timestamp - start) / duration, 1);
              const ease = 1 - Math.pow(1 - progress, 3);
              setCount(Math.round(ease * targetNum));
              if (progress < 1) {
                requestAnimationFrame(step);
              }
            };
            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (itemRef.current) observer.observe(itemRef.current);
    return () => observer.disconnect();
  }, [targetNum]);

  return (
    <div className="stat-item" role="listitem" ref={itemRef}>
      <span className="stat-num">{count}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="hero" id="hero" aria-label="소개">
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-label">웹 개발 &nbsp;&middot;&nbsp; 학습 아카이브 &nbsp;&middot;&nbsp; 2025&ndash;2026</div>
          <h1 className="hero-title">
            <span className="hero-title-line">웹 개발</span>
            <em className="hero-title-accent">학습 아카이브</em>
          </h1>
          <p className="hero-sub">
            HTML, CSS, JavaScript와 다양한 프론트엔드 도구를 배우며 직접 만든
            실습 파일과 실험 프로젝트를 한 곳에 모은 아카이브입니다.
          </p>

          <div className="hero-stats" role="list" aria-label="프로젝트 통계">
            <StatItem targetNum={378} label="HTML 파일" />
            <StatItem targetNum={103} label="CSS 파일" />
            <StatItem targetNum={50} label="JS 파일" />
            <StatItem targetNum={7} label="기술 스택" />
            <StatItem targetNum={8} label="학습 영역" />
          </div>

          <div className="hero-cta">
            <a href="#archive" className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('archive')?.scrollIntoView({ behavior: 'smooth' }); }}>
              아카이브 보기
            </a>
            <a href="#journey" className="btn btn-ghost" onClick={(e) => { e.preventDefault(); document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' }); }}>
              학습 여정
            </a>
          </div>
        </div>

        <div className="hero-profile">
          <div className="profile-img-wrap">
            <img src="assets/profile.png" alt="프로필 이미지" className="profile-img" />
          </div>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <span>스크롤</span>
        <div className="hero-scroll-line"></div>
      </div>
    </section>
  );
}
