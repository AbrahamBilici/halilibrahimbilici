function telephoneCheck(str) {
  let regex=/^[1][ ]?(\d{3})[-]?(\d{3})[-]?(\d{4})$/;
  let regex1=/^[1]?[\s]{1}?[(]{1}?(\d{3})?[)]?[ ]?(\d{3})[-]?(\d{4})$/;
  let regex2=/^[(]?(\d{3})[)]?(\d{3})[-]?(\d{4})$/;
  let regex3=/^[1][(]?(\d{3})[)]?(\d{3})[-]?(\d{4})$/;
  let regex4=/^[1][ ]?(\d{3})[ ]?(\d{3})[ ]?(\d{4})$/;
  let regex5=/^(\d{10})$/;
  let regex6=/^(\d{3})[-]?(\d{3})[-]?(\d{4})$/
  if(regex1.test(str)==true){
    return true;
  }else if(regex2.test(str)==true){
    return true;
  } else if(regex3.test(str)==true){
    return true;
  } else if(regex4.test(str)==true){
    return true;
  } else if(regex5.test(str)==true){
    return true;
  } else if(regex.test(str)==true){
    return true;
  } else if(regex6.test(str)==true){
    return true;
  }else {return false}
  
  
}

telephoneCheck("555-555-5555");