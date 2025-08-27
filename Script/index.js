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

const copyItems = document.querySelectorAll("#copy-btn");
console.log(copyItems);

for (const copyItem of copyItems) {
   copyItem.addEventListener("click", function () {
      alert("নম্বর কপি করা হয়েছে : ৯৯৯");
      const copyCount = document.getElementById("copy-count").innerText;
      console.log(copyCount);

      const currentCopyCount = Number(copyCount) + 1;
      document.getElementById("copy-count").innerText = currentCopyCount;
   });
}

const callButtons = document.querySelectorAll('.call-btn');
console.log(callButtons);

for (const callButton of callButtons) {
   callButton.addEventListener('click', function () {
      const coinCount = document.getElementById('coin-count').innerText;
      console.log(coinCount);

      const phoneNumber = callButton.parentNode.parentNode.childNodes[7].innerText;
      console.log(phoneNumber);
      const serviceName = callButton.parentNode.parentNode.childNodes[5].innerText;
      console.log(serviceName);
      const serviceNameBangla = callButton.parentNode.parentNode.childNodes[3].innerText;
      console.log(serviceNameBangla);
      

      if (Number(coinCount) < 20) {
         alert('You Have No Enough Coins for Call.');
         return;
      }
      alert(`Calling to ${serviceName} ${phoneNumber}...`);
      const currentCoinCount = Number(coinCount) - 20;
      document.getElementById('coin-count').innerText = currentCoinCount;

      // // Call History Section
      const historyDiv = document.getElementById('History-div');

      const newHistoryEntry = document.createElement('div');
     

      const timestamp = new Date().toLocaleString();
      newHistoryEntry.innerHTML = `
         <div class=" p-4 bg-gray-100 rounded-xl mt-4 flex justify-between items-center ">
            <div class="w-1/2>
               <h2 class="font-semibold text-sm">${serviceNameBangla}</h2> <br>
               <span class="text-gray-700">${phoneNumber}</span>
            </div>
           <div class="w-1/2 text-right">
               <span class="text-gray-500 text-sm">${timestamp}</span>
           </div>
         </div>
      `;

      historyDiv.append(newHistoryEntry);
   });
}


