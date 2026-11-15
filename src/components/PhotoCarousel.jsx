import React,{useEffect,useRef,useState} from 'react';
import {animate,motion,useMotionValue,useReducedMotion} from 'motion/react';
import {ArrowLeft,ArrowRight,MapPin,Expand} from 'lucide-react';
import {asset} from '../content';

export default function PhotoCarousel({photos,onOpen}){
 const viewport=useRef(null),dragging=useRef(false),settle=useRef(null),release=useRef(null);
 const [width,setWidth]=useState(0),[active,setActive]=useState(()=>photos.length>2?2:0);
 const x=useMotionValue(0),reduce=useReducedMotion();
 const cardWidth=width<600?Math.round(width*.8):Math.min(540,Math.round(width*.285));
 const gap=width<600?16:28,step=cardWidth+gap;
 const position=index=>(width-cardWidth)/2-index*step;
 const transition=reduce?{duration:0}:{type:'spring',stiffness:175,damping:29,mass:1};
 useEffect(()=>{
  const observer=new ResizeObserver(([entry])=>setWidth(Math.round(entry.contentRect.width)));
  observer.observe(viewport.current);return()=>observer.disconnect();
 },[]);
 useEffect(()=>{
  if(!width)return;
  settle.current?.stop();settle.current=animate(x,position(active),transition);
  return()=>settle.current?.stop();
 },[active,width,reduce]);
 useEffect(()=>()=>clearTimeout(release.current),[]);
 const go=(index,focus=false)=>{const next=Math.max(0,Math.min(photos.length-1,index));setActive(next);settle.current?.stop();settle.current=animate(x,position(next),transition);if(focus)requestAnimationFrame(()=>viewport.current?.querySelector(`[data-photo-index="${next}"]`)?.focus({preventScroll:true}))};
 return <div className="photo-carousel" role="region" aria-roledescription="băng chuyền ảnh" aria-label="Ảnh Khu Bảo tồn Thiên nhiên – Văn hóa Đồng Nai" onKeyDown={event=>{
  if(event.key==='ArrowRight'){event.preventDefault();go(active+1,true)}
  if(event.key==='ArrowLeft'){event.preventDefault();go(active-1,true)}
  if(event.key==='Home'){event.preventDefault();go(0,true)}
  if(event.key==='End'){event.preventDefault();go(photos.length-1,true)}
 }}>
  <div className="carousel-window" ref={viewport} style={{'--slide-width':`${cardWidth}px`,'--slide-gap':`${gap}px`}}>
   {width>0&&<motion.div className="carousel-track" style={{x}} drag={photos.length>1?'x':false} dragConstraints={{left:position(photos.length-1),right:position(0)}} dragElastic={0.12} dragMomentum={false}
    onDragStart={()=>{clearTimeout(release.current);dragging.current=true;settle.current?.stop()}}
    onDragEnd={(_,info)=>{const direction=Math.abs(info.offset.x)>42||Math.abs(info.velocity.x)>450?((Math.abs(info.offset.x)>10?info.offset.x:info.velocity.x)<0?1:-1):0;go(active+direction);release.current=setTimeout(()=>{dragging.current=false},100)}}
    onClickCapture={event=>{if(dragging.current){event.preventDefault();event.stopPropagation()}}}>
    {photos.map((photo,index)=><div className={'carousel-slide '+(index%2?'is-lowered':'')+(photo.height>photo.width?' is-portrait':'')} key={photo.id} role="group" aria-roledescription="ảnh" aria-label={`${index+1} / ${photos.length}`}>
     <button className="carousel-photo" type="button" data-photo-index={index} tabIndex={index===active?0:-1} aria-label={'Xem ảnh: '+photo.title} onClick={()=>{if(!dragging.current){setActive(index);onOpen(photo)}}}>
      {photo.height>photo.width&&<img className="slide-ambience" src={asset(photo.id+'-small')} alt="" aria-hidden="true" draggable="false" loading="lazy"/>}
      <img className="slide-image" src={asset(photo.id+'-small')} srcSet={`${asset(photo.id+'-small')} ${photo.thumbnailWidth}w, ${asset(photo.id)} ${photo.width}w`} sizes="(max-width:600px) 80vw, (min-width:1900px) 540px, 29vw" alt={photo.title} width={photo.width} height={photo.height} loading="lazy" decoding="async" draggable="false"/>
      <div className="slide-caption"><span className="slide-category">{photo.category}</span><h3><MapPin size={17} aria-hidden="true"/>{photo.title}</h3></div>
      <span className="slide-expand" aria-hidden="true"><Expand size={18}/></span>
     </button>
    </div>)}
   </motion.div>}
   <button className="carousel-arrow carousel-prev" aria-label="Ảnh trước trong thư viện" disabled={active===0} onClick={()=>go(active-1)}><ArrowLeft size={22}/></button>
   <button className="carousel-arrow carousel-next" aria-label="Ảnh tiếp trong thư viện" disabled={active===photos.length-1} onClick={()=>go(active+1)}><ArrowRight size={22}/></button>
  </div>
  <div className="carousel-footer"><span>Kéo hoặc vuốt để khám phá · Nhấn ảnh để xem lớn</span><span className="carousel-position" aria-live="polite" aria-atomic="true"><strong>{String(active+1).padStart(2,'0')}</strong> / {String(photos.length).padStart(2,'0')}</span></div>
 </div>;
}
