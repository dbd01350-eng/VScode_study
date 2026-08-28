import React from 'react';

export default function AboutSection() {
  return (
    <section className="about-section" id="about" aria-label="아카이브 소개">
      <div className="section-inner">
        <div className="about-grid">
          <div className="about-text">
            <div className="section-label">&mdash; 소개</div>
            <h2 className="section-title">이 아카이브에 대하여</h2>
            <p>
              이 웹사이트 자체가 하나의 프로젝트입니다 &mdash; <strong>MBC 아카데미 종로 캠퍼스</strong>에서 진행한 웹 개발 과정 동안 학습한 모든 내용을 큐레이션한 인터랙티브 포트폴리오입니다.
            </p>
            <p>
              모든 실습 파일은 원래 폴더에 그대로 있습니다. 단 하나도 이동하지 않았습니다. 이 아카이브는 원본 파일을 직접 참조하며, 단순히 무엇을 배웠는지뿐 아니라 그 학습 결과를 구조화하고 시각화하는 능력도 함께 보여줍니다.
            </p>
            <div className="about-links">
              <a href="../html/index.html" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                개인 홈페이지 &rarr;
              </a>
              <a href="../html/mbc-lesson-main/index.html" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                MBC 수업 인덱스 &rarr;
              </a>
            </div>
          </div>
          <div className="about-meta">
            <div className="meta-card">
              <div className="meta-item">
                <span className="meta-label">학습자</span>
                <span className="meta-value">심다은</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">교육기관</span>
                <span className="meta-value">MBC 아카데미 종로</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">기간</span>
                <span className="meta-value">2025 &ndash; 2026</span>
              </div>
              <div className="meta-item">
                <span class="meta-label">핵심 기술</span>
                <span class="meta-value">HTML &middot; CSS &middot; JavaScript</span>
              </div>
              <div className="meta-item">
                <span class="meta-label">확장 기술</span>
                <span class="meta-value">GSAP &middot; Swiper &middot; Tailwind &middot; React &middot; Vue</span>
              </div>
              <div class="meta-item">
                <span class="meta-label">총 파일 수</span>
                <span class="meta-value">531개 소스 파일</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
