const heartButtons = document.getElementsByClassName("heart-btn");
console.log(heartButtons);


for (const heartButton of heartButtons) {
   heartButton.addEventListener("click", function () {
      const heartCount = document.getElementById("heart-count").innerText;
      console.log(heartCount);

      const currentCount = Number(heartCount) + 1;
      document.getElementById("heart-count").innerText = currentCount;

   });
};

const copyItmes = document.querySelectorAll("#copy-btn");
console.log(copyItmes);

for (const copyItem of copyItmes) {
   copyItem.addEventListener("click", function () {
      const copyCount = document.getElementById("copy-count").innerText;
      console.log(copyCount);

      const currentCopyCount = Number(copyCount) + 1;
      document.getElementById("copy-count").innerText = currentCopyCount;
   });
}


