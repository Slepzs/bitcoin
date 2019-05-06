class Common { 

    static toDom(strHTML) {
        let temp = document.createElement('template');
        temp.innerHTML = strHTML;
        return temp.content;
      }


    static InsertToDom(selector, dataName, data ) {

      let zx = document.querySelector(selector);
      let element = Common.toDom(`
         <div class="element element-${dataName}" id="${dataName}">
         <span class="dataname">${dataName} :</span>  <span class="outputdata">${data}</span>
         </div>
         `);
       zx.appendChild(element);
    }

}


export default Common;