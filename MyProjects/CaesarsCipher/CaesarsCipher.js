function rot13(str) {
  let arr=str.split("");
  let alf="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let trans="NOPQRSTUVWXYZABCDEFGHIJKLM";
  let result=[];
  for(let i=0;i<arr.length;i++){
    switch(arr[i]){
      case alf[0]:result.push(trans[0]);break;
      case alf[1]:result.push(trans[1]);break;
      case alf[2]:result.push(trans[2]);break;
      case alf[3]:result.push(trans[3]);break;
      case alf[4]:result.push(trans[4]);break;
      case alf[5]:result.push(trans[5]);break;
      case alf[6]:result.push(trans[6]);break;
      case alf[7]:result.push(trans[7]);break;
      case alf[8]:result.push(trans[8]);break;
      case alf[9]:result.push(trans[9]);break;
      case alf[10]:result.push(trans[10]);break;
      case alf[11]:result.push(trans[11]);break;
      case alf[12]:result.push(trans[12]);break;
      case alf[13]:result.push(trans[13]);break;
      case alf[14]:result.push(trans[14]);break;
      case alf[15]:result.push(trans[15]);break;
      case alf[16]:result.push(trans[16]);break;
      case alf[17]:result.push(trans[17]);break;
      case alf[18]:result.push(trans[18]);break;
      case alf[19]:result.push(trans[19]);break;
      case alf[20]:result.push(trans[20]);break;
      case alf[21]:result.push(trans[21]);break;
      case alf[22]:result.push(trans[22]);break;
      case alf[23]:result.push(trans[23]);break;
      case alf[24]:result.push(trans[24]);break;
      case alf[25]:result.push(trans[25]);break;
      case alf[26]:result.push(trans[26]);break;
      default:result.push(arr[i]);
    }
  }  return result.join("")
  

}

rot13("SERR PBQR PNZC");