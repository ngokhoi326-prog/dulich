import React,{useEffect,useRef} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export default function VisualEffects(){
 const canvasRef=useRef();
 useEffect(()=>{
  const media=matchMedia('(prefers-reduced-motion: reduce)');
  if(media.matches)return;
  const ctx=gsap.context(()=>{
   gsap.fromTo('.hero-content .eyebrow',{y:16,opacity:0},{y:0,opacity:1,duration:.8,delay:.15});
   gsap.fromTo('.title-line',{y:65,opacity:0,filter:'blur(10px)'},{y:0,opacity:1,filter:'blur(0px)',duration:1.25,stagger:.16,ease:'power3.out',delay:.2});
   gsap.fromTo('.hero-content>p,.hero-content>.button',{y:20,opacity:0},{y:0,opacity:1,duration:.9,stagger:.15,delay:.85});
   gsap.to('.hero-image',{yPercent:4,scale:1.04,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1}});
   gsap.to('.hero-content',{yPercent:10,opacity:.3,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1}});
   document.querySelectorAll('.intro-photo,.value-photo,.bio-visual').forEach(el=>{
    gsap.fromTo(el,{clipPath:'inset(10% 0% 10% 0% round 12px)'},{clipPath:'inset(0% 0% 0% 0% round 0px)',duration:1.2,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 94%',once:true}});
   });
   gsap.to('.scroll-progress',{scaleX:1,ease:'none',scrollTrigger:{start:0,end:'max',scrub:.15}});
  });
  let frame=0,active=true;const canvas=canvasRef.current,c=canvas.getContext('2d');
  const points=Array.from({length:22},()=>({x:Math.random(),y:Math.random(),r:Math.random()*1.8+.7,v:Math.random()*.00018+.00008}));
  const resize=()=>{canvas.width=canvas.clientWidth;canvas.height=canvas.clientHeight};resize();window.addEventListener('resize',resize);
  const io=new IntersectionObserver(([entry])=>{active=entry.isIntersecting});io.observe(canvas);
  const draw=()=>{if(active&&!document.hidden){c.clearRect(0,0,canvas.width,canvas.height);points.forEach(p=>{p.y-=p.v;if(p.y<0)p.y=1;c.beginPath();c.arc((p.x+Math.sin(p.y*9)*.018)*canvas.width,p.y*canvas.height,p.r,0,Math.PI*2);c.fillStyle='rgba(212,242,162,.55)';c.shadowBlur=12;c.shadowColor='#d2eea0';c.fill()})}frame=requestAnimationFrame(draw)};draw();
  const move=e=>{if(!matchMedia('(pointer:fine)').matches)return;const el=e.target.closest('.value-card,.gallery-photo');if(!el)return;const rect=el.getBoundingClientRect();el.style.setProperty('--mx',`${(e.clientX-rect.left)/rect.width*100}%`);el.style.setProperty('--my',`${(e.clientY-rect.top)/rect.height*100}%`)};
  document.addEventListener('pointermove',move,{passive:true});
  const fontsReady=()=>ScrollTrigger.refresh();document.fonts.ready.then(fontsReady);
  // Expanded research, heritage and gallery items change the reading height.
  let layoutFrame=0;
  const layoutObserver=new ResizeObserver(()=>{cancelAnimationFrame(layoutFrame);layoutFrame=requestAnimationFrame(()=>ScrollTrigger.refresh())});
  const main=document.querySelector('main');if(main)layoutObserver.observe(main);
  return()=>{layoutObserver.disconnect();cancelAnimationFrame(layoutFrame);ctx.revert();cancelAnimationFrame(frame);io.disconnect();window.removeEventListener('resize',resize);document.removeEventListener('pointermove',move)};
 },[]);
 return <><div className="scroll-progress" aria-hidden="true"/><canvas ref={canvasRef} className="forest-lights" aria-hidden="true"/></>;
}
export function CountUp({value,suffix=''}){
 const ref=useRef();
 useEffect(()=>{
  const el=ref.current;if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  let raf=0;const io=new IntersectionObserver(([entry])=>{if(!entry.isIntersecting)return;io.disconnect();const start=performance.now();const render=now=>{const progress=Math.min((now-start)/1500,1);el.textContent=Math.round(value*(1-Math.pow(1-progress,3))).toLocaleString('vi-VN')+suffix;if(progress<1)raf=requestAnimationFrame(render)};raf=requestAnimationFrame(render)},{threshold:.5});io.observe(el);return()=>{io.disconnect();cancelAnimationFrame(raf)};
 },[value,suffix]);
 return <span ref={ref} aria-label={value.toLocaleString('vi-VN')+suffix}>{value.toLocaleString('vi-VN')}{suffix}</span>;
}
