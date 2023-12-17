import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
gsap.registerPlugin(ScrollToPlugin);

let ignitionTimeoutID;
let isWheel = true;
let isTrackPad = false;

document
  .querySelector("body")
  .addEventListener("mousewheel", disableScroll, { passive: false });

function disableScroll(e) {
  const wheelDeltaY = e.wheelDeltaY;
  if (isWheel) e.preventDefault();

  // スクロールの出だしが10px以下だと1.5秒間トラックパッドと判定する
  if (Math.abs(wheelDeltaY) < 100) {
    isWheel = false;
    isTrackPad = true;

    clearTimeout(ignitionTimeoutID);
    ignitionTimeoutID = setTimeout(() => {
      isTrackPad = false;
    }, 1500);
  } else {
    if (!isTrackPad) {
      isWheel = true;

      let direction = `-=${Math.abs(wheelDeltaY) * 0.5}px`;
      if (wheelDeltaY < 0) direction = `+=${Math.abs(wheelDeltaY) * 0.5}px`;
      gsap.to(window, {
        scrollTo: { y: direction, autoKill: false },
        duration: 1,
        ease: "power2.out",
      });
    }
  }
}
