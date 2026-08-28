// 당근 영상 생성 스토리보드 - Action Sheet 인터랙션 (Vanilla JS)

document.addEventListener("DOMContentLoaded", function () {
  var page = document.getElementById("page");
  var sheet = document.getElementById("actionSheet");
  var openTrigger = document.getElementById("openTrigger");
  var buttons = sheet.querySelectorAll(".sheet-btn");

  // 액션 버튼 클릭 처리
  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (btn.disabled) return;

      var action = btn.getAttribute("data-action");

      // 선택 결과를 localStorage 에 저장 (페이지 간 단순 데이터 전달용)
      localStorage.setItem("lastAction", action);

      if (action === "destructive") {
        var ok = window.confirm("정말 실행하시겠습니까? 되돌릴 수 없습니다.");
        if (!ok) return;
      }

      console.log("선택한 액션:", action);
      closeSheet();
    });
  });

  // 배경(시트 바깥) 탭 시 닫기
  page.addEventListener("click", function (e) {
    if (e.target === page) {
      closeSheet();
    }
  });

  // ESC 키로 닫기
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeSheet();
    }
  });

  // 다시 열기
  openTrigger.addEventListener("click", openSheet);

  function closeSheet() {
    sheet.classList.add("is-hidden");
    // 애니메이션 후 트리거 노출
    setTimeout(function () {
      openTrigger.hidden = false;
    }, 200);
  }

  function openSheet() {
    openTrigger.hidden = true;
    sheet.classList.remove("is-hidden");
  }
});
