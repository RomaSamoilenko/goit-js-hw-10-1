import"./assets/styles-bafd295b.js";import{i}from"./assets/vendor-77e16229.js";document.querySelector(".form").addEventListener("submit",function(s){s.preventDefault();const t=parseInt(this.elements.delay.value),r=this.elements.state.value;new Promise((e,a)=>{setTimeout(()=>{r==="fulfilled"?e(t):a(t)},t)}).then(e=>{i.success({title:"✅",message:` Fulfilled promise in ${e}ms`})}).catch(e=>{i.error({title:"❌",message:` Rejected promise in ${e}ms`})}),s.target.reset()});
//# sourceMappingURL=commonHelpers2.js.map