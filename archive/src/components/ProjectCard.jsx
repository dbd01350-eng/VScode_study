import React from 'react';

const difficultyLabel = { beginner: '초급', intermediate: '중급', advanced: '고급' };
const difficultyClass = { beginner: 'diff-beginner', intermediate: 'diff-intermediate', advanced: 'diff-advanced' };

export default function ProjectCard({ project, index, onSelect }) {
  const { id, num, title, folder, category, description, technologies, difficulty, canPreview, previewPath } = project;

  return (
    <article
      className="project-card"
      style={{ animationDelay: `${index * 0.03}s` }}
      tabIndex={0}
      role="button"
      aria-label={`${title} 상세 보기`}
      onClick={(e) => {
        if (!e.target.closest('a')) {
          onSelect(id);
        }
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(id);
        }
      }}
    >
      <div className="card-top">
        <span className="card-num">{num}</span>
        <div className="card-badges">
          <span className={`badge badge-${category}`}>{category.toUpperCase()}</span>
        </div>
      </div>
      <div className="card-folder">{folder}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{description}</p>
      <div className="card-techs">
        {technologies.map((tech, i) => (
          <span key={i} className="tech-tag">{tech}</span>
        ))}
      </div>
      <div className="card-footer">
        <button className="card-action primary" data-action="detail" onClick={() => onSelect(id)}>
          상세 보기
        </button>
        {canPreview && (
          <a
            className="card-action"
            href={previewPath}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            미리보기
          </a>
        )}
        <span
          className={`difficulty-dot ${difficultyClass[difficulty]}`}
          title={difficultyLabel[difficulty]}
        ></span>
      </div>
    </article>
  );
}
