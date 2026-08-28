import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-left">
          <span className="footer-logo">DA &middot; 학습 아카이브</span>
          <span className="footer-copy">&copy; 2026 심다은. All rights reserved.</span>
        </div>
        <div className="footer-right">
          <span className="footer-note">
            웹 개발 학습 과정의 일환으로 제작되었습니다. 모든 소스 파일은 원래 위치에 그대로 보존되어 있습니다.
          </span>
        </div>
      </div>
    </footer>
  );
}
