const getTime =() =>{
    const d=new Date();
   let h=d.getHours();
    let amPm=h>=12?'PM':'AM';
    h=h%12;
    h= h == 0 ? 12 : h;

   let m=d.getMinutes();
   m > 9 ? m : '0'+ m;
   let s=d.getSeconds();

   s > 9 ? s : '0'+ s;
   return `${h} :${m} :${s} :${amPm} `;

//    return d.toLocaleTimeString();
};

setInterval(()=>{
    // console.log(getTime());
    let clockOb=document.querySelector(".clock");
    clockOb.innerHTML=getTime();

},1000)