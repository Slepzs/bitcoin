import Common from './Common.js';
import Data from './data.js';



class Lasagne { 

  constructor() { 
    this.average = document.querySelector(".iLoveLasagne");
    this.zx = document.querySelector(".datas");
    this.listBitcoinData();
  }


  async listBitcoinData() {
   
   let bitCoinData = await Data.getBitcoinData();
   console.log(bitCoinData);


    
    for(let all of Object.keys(bitCoinData)){
      let data = bitCoinData[all];
      // console.log(all + ": " + data);

    if(typeof data !== "object") {
      Common.InsertToDom(".data", all, data);
      }
    }
    
    // let average_day = bitCoinData["averages"]["day"];
    // let average_month = bitCoinData["averages"]["month"];
    // let average_week = bitCoinData["averages"]["week"];

    // this.average.innerHTML = `Bitcoin Average day is ${average_day}, and month is ${average_month}, week is: ${average_week}`;

    // console.log("Average Day: " + bitCoinData["averages"]["day"]);
    // console.log("Month Day: " + bitCoinData["averages"]["month"]);
    // console.log("Week Day: " + bitCoinData["averages"]["week"]);


      // GET OPEN DATA
      for(let amount of Object.keys(bitCoinData.open)){
        let data = bitCoinData.open[amount];
          // console.log(amount);
          // console.log(data);
          // Common.InsertToDom(".data", amount, data);
      }

      // Averages data
      for(let average of Object.keys(bitCoinData.averages)){
        let data = bitCoinData.averages[average];
          // console.log(average);
          // console.log(data);
          Common.InsertToDom(".dataTwo", average, data);
      }

      // Changes Contain Price and Percent
      for(let data of Object.keys(bitCoinData.changes.price)){
        let dataPrice = bitCoinData.changes.price[data];
         // console.log(data);
         // console.log(dataPrice);


        if(dataPrice < 0 ) {

          let zx = document.querySelector(".dataTree");
          let element = Common.toDom(`
             <div class="element element-${data}" id="${data}">
             <span class="dataname">${data} :</span>  <span class="outputdata red">${dataPrice}</span>
             </div>
             `);
           zx.appendChild(element);

        } else {

          let zx = document.querySelector(".dataTree");
          let element = Common.toDom(`
             <div class="element element-${data}" id="${data}">
             <span class="dataname">${data} :</span>  <span class="outputdata blue">${dataPrice}</span>
             </div>
             `);
           zx.appendChild(element);

        }

      }

      // Percent
      for(let data of Object.keys(bitCoinData.changes.percent)){
        let DataPercent = bitCoinData.changes.percent[data];

          if(DataPercent < 0) {

            let zx = document.querySelector(".dataFour");
            let element = Common.toDom(`
               <div class="element element-${data}" id="${data}">
               <span class="dataname">${data} :</span>  <span class="outputdata red">${DataPercent}</span>
               </div>
               `);
             zx.appendChild(element);

          } else {

            let zx = document.querySelector(".dataFour");
            let element = Common.toDom(`
               <div class="element element-${data}" id="${data}">
               <span class="dataname">${data} :</span>  <span class="outputdata blue">${DataPercent}</span>
               </div>
               `);
             zx.appendChild(element);


          }

          




      }


      // let node = bitCoinData.averages.day;
      // let xx = document.querySelector(".data");
      // let listElement = Common.toDom(`
      //    <div class="note-list-element" id="${node}">
      //    ${node}
      //    </div>
      //    `);
      //  xx.appendChild(listElement);
   }
  }


  export default Lasagne;

 
