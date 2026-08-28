import React, { useState, useEffect } from 'react';

export default function Navbar({ activeSection, onFilterSelect }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setIsNavOpen(false);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategoryNavClick = (e, filterCategory) => {
    e.preventDefault();
    setIsNavOpen(false);
    onFilterSelect(filterCategory);
    const archiveEl = document.getElementById('archive');
    if (archiveEl) {
      archiveEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`nav-header ${isScrolled ? 'scrolled' : ''}`} id="navHeader">
      <nav className="nav-inner" aria-label="주 내비게이션">
        <a href="#hero" className="nav-logo" aria-label="맨 위로" onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}>
          <span className="nav-logo-mark">DA</span>
          <span className="nav-logo-text">학습 아카이브</span>
        </a>
        <button
          className="nav-toggle"
          id="navToggle"
          aria-label="메뉴 열기"
          aria-expanded={isNavOpen}
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <span></span><span></span><span></span>
        </button>
        <ul className={`nav-links ${isNavOpen ? 'open' : ''}`} id="navLinks" role="list">
          <li>
            <a href="#hero" className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}>
              홈
            </a>
          </li>
          <li>
            <a href="#archive" className={`nav-link ${activeSection === 'archive' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('archive'); }}>
              전체 프로젝트
            </a>
          </li>
          <li>
            <a href="#archive" className="nav-link filter-nav" onClick={(e) => handleCategoryNavClick(e, 'html')}>HTML</a>
          </li>
          <li>
            <a href="#archive" className="nav-link filter-nav" onClick={(e) => handleCategoryNavClick(e, 'css')}>CSS</a>
          </li>
          <li>
            <a href="#archive" className="nav-link filter-nav" onClick={(e) => handleCategoryNavClick(e, 'javascript')}>JavaScript</a>
          </li>
          <li>
            <a href="#journey" className={`nav-link ${activeSection === 'journey' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('journey'); }}>
              학습 여정
            </a>
          </li>
          <li>
            <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>
              소개
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
