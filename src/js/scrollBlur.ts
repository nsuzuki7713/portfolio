export const scrollBlur = () => {
  const FV = document.querySelector(".FV") as HTMLElement | null;

  if (FV) {
    window.addEventListener("scroll", function () {
      // スクロール位置を取得
      const scrollPosition = window.scrollY;

      // スクロール位置に基づいてブラーの強度を計算
      const blurAmount = Math.min(scrollPosition / 100, 10);
      // カスタムプロパティを使用して擬似要素のフィルタープロパティを更新
      FV.style.setProperty("--blur", `${blurAmount}px`);

      //背景画像の縦位置のオフセット値（スクロール位置に対する係数として使用）
      const devided = 5;

      const offset = scrollPosition / devided;
      if (offset) {
        FV.style.backgroundPosition = `center top -' + ${offset} + 'px`;
      }
    });
  }
};
