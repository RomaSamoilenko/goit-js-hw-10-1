import"./assets/styles-bafd295b.js";import{f as l,i as m}from"./assets/vendor-77e16229.js";const r=document.querySelector("#datetime-picker"),a=document.querySelector(".timer"),o=document.querySelector("button[data-start]"),y=document.querySelector("span[data-seconds]"),f=document.querySelector("span[data-minutes]"),h=document.querySelector("span[data-hours]"),p=document.querySelector("span[data-days]");o.disabled=!0;const S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]<new Date?(m.warning({title:"Caution",message:"Please choose a date in the future"}),o.disabled=!0):o.disabled=!1}};l(r,S);function b(t){const c=Math.floor(t/864e5),u=Math.floor(t%864e5/36e5),d=Math.floor(t%864e5%36e5/6e4),i=Math.floor(t%864e5%36e5%6e4/1e3);return{days:c,hours:u,minutes:d,seconds:i}}function s(t){return t.toString().padStart(2,"0")}o.addEventListener("click",()=>{let t=setInterval(()=>{let n=new Date(r.value)-new Date;if(o.disabled=!0,n>=0){let e=b(n);p.textContent=s(e.days),h.textContent=s(e.hours),f.textContent=s(e.minutes),y.textContent=s(e.seconds),n<=1e4&&(a.style.color="red")}else Notiflix.Notify.success("Countdown finished"),a.style.color="black",clearInterval(t)},1e3)});
//# sourceMappingURL=commonHelpers.js.map
