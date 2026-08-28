import React from 'react';
import ProjectCard from './ProjectCard';

const categories = [
  { key: 'all', label: '전체' },
  { key: 'html', label: 'HTML' },
  { key: 'css', label: 'CSS' },
  { key: 'javascript', label: 'JavaScript' },
  { key: 'gsap', label: 'GSAP' },
  { key: 'swiper', label: 'Swiper' },
  { key: 'tailwind', label: 'Tailwind' },
  { key: 'project', label: '프로젝트' }
];

export default function ArchiveSection({
  projects,
  filteredProjects,
  currentFilter,
  onFilterChange,
  searchQuery,
  onSearchChange,
  onSelectProject
}) {
  const totalCount = projects.length;
  const filteredCount = filteredProjects.length;

  let resultsMessage = `전체 ${totalCount}건 표시 중`;
  if (filteredCount === 0) {
    resultsMessage = '검색 결과 0건';
  } else if (filteredCount < totalCount) {
    resultsMessage = `${filteredCount}건 표시 중 (전체 ${totalCount}건)`;
  }

  return (
    <section className="archive-section" id="archive" aria-label="프로젝트 아카이브">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-label">&mdash; 아카이브</div>
          <h2 className="section-title">전체 프로젝트</h2>
          <p className="section-desc">기술과 학습 단계별로 정리한 모든 실습 파일과 프로젝트 모음입니다.</p>
        </div>

        {/* 검색 + 필터 */}
        <div className="toolbar" role="search">
          <div className="search-wrap">
            <label htmlFor="searchInput" className="sr-only">프로젝트 검색</label>
            <svg className="search-icon" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            <input
              type="search"
              id="searchInput"
              className="search-input"
              placeholder="프로젝트, 기술, 개념 검색&hellip;"
              autoComplete="off"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
          <div className="filter-bar" role="group" aria-label="카테고리 필터">
            {categories.map((cat) => (
              <button
                key={cat.key}
                className={`filter-btn ${currentFilter === cat.key ? 'active' : ''}`}
                onClick={() => onFilterChange(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="results-bar">
          <span id="resultsCount" aria-live="polite" aria-atomic="true">
            {resultsMessage}
          </span>
        </div>

        {filteredCount === 0 ? (
          <div className="no-results" id="noResults" aria-live="polite">
            <p>검색 결과가 없습니다. 다른 키워드나 필터를 사용해 보세요.</p>
          </div>
        ) : (
          <div className="project-grid" id="projectGrid" aria-label="프로젝트 카드 목록">
            {filteredProjects.map((p, index) => (
              <ProjectCard key={p.id} project={p} index={index} onSelect={onSelectProject} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
