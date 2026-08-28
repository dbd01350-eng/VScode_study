import React, { useEffect } from 'react';

const difficultyLabel = { beginner: '초급', intermediate: '중급', advanced: '고급' };

function techBadgeClass(tech) {
  const t = tech.toLowerCase().replace(/[^a-z]/g, '');
  const map = { html: 'badge-html', css: 'badge-css', javascript: 'badge-js', js: 'badge-js', gsap: 'badge-gsap', swiper: 'badge-swiper', tailwind: 'badge-tailwind', project: 'badge-project' };
  return map[t] || 'badge-html';
}

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const { title, folder, file, path, category, technologies, keyConcepts, difficulty, description, objective, canPreview, previewPath } = project;

  return (
    <div className="modal-overlay open" id="modalOverlay" role="dialog" aria-modal="true" aria-labelledby="modalTitle" onClick={(e) => { if (e.target.id === 'modalOverlay') onClose(); }}>
      <div className="modal" id="modal">
        <button className="modal-close" id="modalClose" aria-label="모달 닫기" onClick={onClose}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>

        <div className="modal-content" id="modalContent">
          <div className="modal-header">
            <div className="modal-badge-row">
              <span className={`badge badge-${category}`}>{category.toUpperCase()}</span>
              <span className="badge" style={{ background: '#f5f5f5', color: '#737373' }}>
                {difficultyLabel[difficulty]}
              </span>
            </div>
            <h2 className="modal-title" id="modalTitle">{title}</h2>
            <div className="modal-path">{folder} / {file}</div>
          </div>

          <div className="modal-body">
            <div>
              <div className="modal-section-title">설명</div>
              <p className="modal-text">{description}</p>
            </div>

            <div>
              <div className="modal-section-title">학습 목표</div>
              <p className="modal-text">{objective}</p>
            </div>

            <div>
              <div className="modal-section-title">사용 기술</div>
              <div className="modal-tags">
                {technologies.map((t, i) => (
                  <span key={i} className={`badge ${techBadgeClass(t)}`}>{t}</span>
                ))}
              </div>
            </div>

            <div>
              <div className="modal-section-title">핵심 개념</div>
              <div className="key-concepts-list">
                {keyConcepts.map((k, i) => (
                  <div key={i} className="key-concept-item">{k}</div>
                ))}
              </div>
            </div>

            <div>
              <div className="modal-section-title">미리보기</div>
              {canPreview ? (
                <div className="modal-preview">
                  <iframe src={previewPath} title="미리보기" loading="lazy" sandbox="allow-scripts allow-same-origin"></iframe>
                </div>
              ) : (
                <div className="modal-no-preview">
                  <span>이 파일은 iframe에서 직접 미리보기가 어렵습니다.</span>
                  <span>아래 소스 링크에서 파일을 확인해 주세요.</span>
                </div>
              )}
            </div>

            <div className="modal-actions">
              {canPreview && (
                <a className="btn btn-primary" href={previewPath} target="_blank" rel="noopener noreferrer">
                  새 탭에서 열기
                </a>
              )}
              <a className="btn btn-ghost" href={path} target="_blank" rel="noopener noreferrer">
                소스 보기
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
