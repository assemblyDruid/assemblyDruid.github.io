import{W as S,S as f,P as v,a as w,M as h,B as C,b as m}from"./three.module-DQr9-8bK.js";function W(){const i=document.getElementById("threejs-bg");if(!i){console.warn("Canvas element is null.");return}const e=new S;e.setSize(window.innerWidth,window.innerHeight),i.appendChild(e.domElement);const n=new f,t=new v(100,window.innerWidth/window.innerHeight,.1,1e3);t.position.z=0;const M=new w(1e3,16,16),l=new h({color:16777215,side:C}),u=new m(M,l);n.add(u);const p=new h({color:4797195}),y=new w(.1,6,6),b=500;for(let r=0;r<b;r++){const d=new m(y,p),a=100*Math.cbrt(Math.random()),o=Math.acos(2*Math.random()-1),c=2*Math.PI*Math.random();d.position.set(a*Math.sin(o)*Math.cos(c),a*Math.sin(o)*Math.sin(c),a*Math.cos(o)),n.add(d)}function s(){requestAnimationFrame(s),n.rotation.y+=5e-4,e.render(n,t)}s();const g=()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",g,!1)}document.addEventListener("DOMContentLoaded",()=>{W()});
