// 당근 영상 생성 스토리보드 - 공통 스크립트

/**
 * 영상 생성 시뮬레이션
 * @param {number} cutId 컷 번호
 */
function generateVideo(cutId) {
    const cutStr = cutId.toString().padStart(3, '0');
    console.log(`[System] Cut ${cutStr} 영상 생성 요청`);
    
    // 버튼 상태 변경
    const btn = event.target;
    const originalText = btn.innerText;
    btn.innerText = '생성 중...';
    btn.disabled = true;
    
    // 생성 시뮬레이션 (3초)
    setTimeout(() => {
        btn.innerText = originalText;
        btn.disabled = false;
        alert(`Cut ${cutStr} 영상 생성이 완료되었습니다!`);
    }, 3000);
}

/**
 * 영상 미리보기 시뮬레이션
 * @param {number} cutId 컷 번호
 */
function previewVideo(cutId) {
    const cutStr = cutId.toString().padStart(3, '0');
    alert(`Cut ${cutStr} 영상 미리보기를 재생합니다. (시뮬레이션)`);
}

/**
 * 텍스트 입력값 변경 시 로컬 스토리지 저장 (자동 저장 기능 예시)
 */
document.querySelectorAll('.prompt-text').forEach((textarea, index) => {
    textarea.addEventListener('input', (e) => {
        const key = `prompt_cut_${index + 1}`;
        localStorage.setItem(key, e.target.value);
        console.log(`[AutoSave] ${key} saved.`);
    });
    
    // 초기 로드 시 저장된 값 불러오기
    const savedValue = localStorage.getItem(`prompt_cut_${index + 1}`);
    if (savedValue) {
        textarea.value = savedValue;
    }
});

// 페이지 로드 시 콘솔 로그
window.onload = () => {
    console.log("🥕 당근 영상 생성 스토리보드 시스템 로드 완료");
};
