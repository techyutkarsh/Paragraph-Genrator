 const genrateword = (n) => {
  let text = "";
  const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for(let i=0;i<n;i++){
  let rand = (Math.random()*(letter.length - 1) ).toFixed(0);
  text += letter[rand];
  }
  return text ; 
 }
 //console.log(genrateword(1));

  //*********second function *******************/
const Genratepara =()=> {
    const input1 = document.getElementById("numofwords"); 
    const container = document.querySelector(".container");
    
    let enternumberis ;
    enternumberis = (Number(input1.value));
    const para = document.createElement("P");
    para.setAttribute("class","paras");
    let data = "";
    for(let i=0;i<enternumberis ;i++){
        let randomnumber = (Math.random()*15).toFixed(0);
        data += genrateword(randomnumber); 
     // data += genrateword(randomnumber).toLowerCase();
        data += " ";
    }
    //console.log(data);
    para.innerText = data ;
    container.append(para);
 };
