// 選取出會使用到的圖片容器、累計數字及音訊節點
const image = document.querySelector(".image");
const times = document.querySelector(".times");
const audio = document.querySelector(".pop");

// 當圖片容器監聽到觸發點擊事件
image.addEventListener("click", (event) => {
  const target = event.target;
  let countTimes = Number(times.textContent);
	// 確保是貓貓圖片被點擊後才會開始進行
  if (target.alt === "popcat") {
		countTimes++;
		target.src = "popcatOpen.png";
    audio.currentTime = 0;
    audio.play();
    setTimeout(() => {
      target.src = "popcatClose.png";
    }, 100);
  }
  times.textContent = countTimes;
});