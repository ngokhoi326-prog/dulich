import React,{useEffect,useState} from 'react';
import {Accordion} from '@animate-ui/react/primitives/radix-ui/accordion';
import {Tabs} from '@animate-ui/react/primitives/radix-ui/tabs';
import {Plus,ArrowUpRight,Check} from 'lucide-react';

const panelTransition={duration:0.28,ease:[0.22,1,0.36,1]};

export function FaqAccordion({items}){
 return <Accordion.Root className="faq-list" type="single" collapsible defaultValue="0">
  {items.map(([question,answer],index)=><Accordion.Item className="faq-item" value={String(index)} key={question}>
   <Accordion.Header>
    <Accordion.Trigger>{question}<Plus className="faq-toggle-icon" size={17} aria-hidden="true"/></Accordion.Trigger>
   </Accordion.Header>
   <Accordion.Content className="faq-content" transition={panelTransition} exitTransition={panelTransition}>
    <p>{answer}</p>
   </Accordion.Content>
  </Accordion.Item>)}
 </Accordion.Root>;
}

export function ConservationTabs({items,value,onValueChange}){
 const [compact,setCompact]=useState(()=>matchMedia('(max-width:700px)').matches);
 useEffect(()=>{const query=matchMedia('(max-width:700px)');const update=()=>setCompact(query.matches);query.addEventListener('change',update);return()=>query.removeEventListener('change',update)},[]);
 return <Tabs.Root className="mission-body" value={String(value)} onValueChange={next=>onValueChange(Number(next))} orientation={compact?'horizontal':'vertical'}>
  <Tabs.List className="mission-tabs" aria-label="Các chức năng của khu dự trữ sinh quyển">
   {items.map((item,index)=><Tabs.Trigger key={item.title} value={String(index)}><span>{item.number}</span>{item.title}<ArrowUpRight size={20} aria-hidden="true"/></Tabs.Trigger>)}
  </Tabs.List>
  <div className="mission-panels">{items.map((item,index)=><Tabs.Content key={item.title} className="mission-panel" value={String(index)} transition={panelTransition} exitTransition={panelTransition}>
   <h3>{item.subtitle}</h3><p>{item.text}</p><ul>{item.items.map(text=><li key={text}><Check size={15} aria-hidden="true"/>{text}</li>)}</ul>
  </Tabs.Content>)}</div>
 </Tabs.Root>;
}

export function ZoningTabs({items,value,onValueChange}){
 return <Tabs.Root className="zone-controls" value={String(value)} onValueChange={next=>onValueChange(Number(next))}>
  <Tabs.List className="zone-tabs" aria-label="Phân vùng khu dự trữ sinh quyển">
   {items.map((item,index)=><Tabs.Trigger value={String(index)} key={item.title}><span>0{index+1}</span>{item.title}<small>{item.area}</small></Tabs.Trigger>)}
  </Tabs.List>
  {items.map((item,index)=><Tabs.Content className="zone-panel" value={String(index)} key={item.title} transition={panelTransition} exitTransition={panelTransition}><p>{item.description}</p><small>{item.detail}</small></Tabs.Content>)}
 </Tabs.Root>;
}
