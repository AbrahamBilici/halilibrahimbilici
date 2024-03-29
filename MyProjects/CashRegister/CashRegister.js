function checkCashRegister(price, cash, cid) {
  const change=cash-price;
  cid.reverse();
  let totalCid=cid.map(x=>x[1]).reduce((a,b)=>a+b).toFixed(2);
  let returnObj={status: "", change: []};
  let arrCurrency = [["ONE HUNDRED", 100],["TWENTY", 20],["TEN", 10],["FIVE", 5],
["ONE", 1],["QUARTER", 0.25],  ["DIME", 0.1],["NICKEL", 0.05],["PENNY", 0.01]];

  
  let result=[...arrCurrency];
  let diff=change;
  for(let i=0;i<arrCurrency.length;i++){
        let remon=0;
        let bill=cid[i][1]/arrCurrency[i][1];
        bill.toFixed(2);
        while(diff.toFixed(2)>=arrCurrency[i][1]&&bill>=1){
          diff-=arrCurrency[i][1];
          remon+=arrCurrency[i][1];
          bill--;
        }
        if(remon>0){
          if(remon - Math.floor(remon)!==0){
           result[i][1]=remon.toFixed(2);
           result[i][1]=parseFloat(result[i][1])
          }else{
            result[i][1]=remon;
          }
        }else{
          result[i][1]=remon;
        }
      };


 let sumRes=0;
 for(let j=0;j<cid.length;j++){
   sumRes+=result[j][1];
 } ;
 sumRes=sumRes.toFixed(2);

if(totalCid<change||sumRes<change){
  returnObj.status="INSUFFICIENT_FUNDS";
  
} else if(totalCid==change){
  returnObj.status="CLOSED";
  returnObj.change=cid.reverse();
  }else {
  let resEnd=[];
  for(let k=0;k<result.length;k++){
    if(result[k][1]!==0){
      resEnd.push(result[k]);
    }
  };
  returnObj.status="OPEN";
  returnObj.change=resEnd;
  
} return returnObj;
  
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1],
 ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60],
 ["ONE HUNDRED", 100]]);