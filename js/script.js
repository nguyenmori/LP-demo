document.addEventListener('DOMContentLoaded', function () {
  console.log("JS読み込まれてます！");
});

document.addEventListener('DOMContentLoaded', () => {
  const btns = document.querySelectorAll('.js-btn');
  const popups = document.querySelectorAll('.js-btn-popup');

  console.log(btns.length, popups.length, btns, popups); // ← これで確認
});


document.querySelectorAll('.js-btn');         // ボタンが全部取得できるか
document.querySelector('.js-btn-popup');      // ポップアップ要素が取得できるか

document.addEventListener('DOMContentLoaded', function () {
  const toggleItems = document.querySelectorAll('.is-toggle');

  toggleItems.forEach(function(item) {
    const btn = item.querySelector('button');
    const content = item.querySelector('.program-chapter-detail, .faq-answer, .instructor-chapter-detail');

    if (!btn || !content) return;

    content.style.overflow = 'hidden';
    content.style.height = '0px';
    content.style.transition = 'height 0.4s ease';

    btn.addEventListener('click', function () {
      const isOpen = item.classList.contains('is-open');

      if (!isOpen) {
        // 開く
        content.style.transition = 'height 0.4s ease';
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');

        const fullHeight = content.scrollHeight + 'px';
        content.style.height = fullHeight;

        content.addEventListener('transitionend', function handler() {
          // 開いた後に高さを自動にする
          content.style.height = 'auto';
          content.removeEventListener('transitionend', handler);
        });

      } else {
        // 閉じる（ゆっくり戻る）
        content.style.transition = 'height 0.4s ease'; // ← 閉じる時間を長く
        // 現在の高さを取得して固定
        const fullHeight = content.scrollHeight + 'px';
        content.style.height = fullHeight;

        // 強制再描画してトリガー発火
        void content.offsetHeight;

        // 高さを 0 にしてアニメーション
        content.style.height = '0px';

        btn.setAttribute('aria-expanded', 'false');
        item.classList.remove('is-open');
      }
    });
  });
});


