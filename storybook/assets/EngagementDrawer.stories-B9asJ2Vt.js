import{c as e,i as t}from"./preload-helper-DaCzexP6.js";import{F as n,u as r}from"./iframe-BBC5HgxN.js";import{n as i,t as a}from"./button-nfgklFkl.js";import{n as o,t as s}from"./referentiel-engagement-B2mKUGu9.js";import{n as c,t as l}from"./parti-retenu-engagement-drawer-DPQQzQ4G.js";var u,d,f,p,m,h,g,_;t((()=>{u=r(),d=e(n(),1),i(),s(),c(),f={id:`parti-retenu-engagement-drawer`,title:`Candidats/Vitrine/Parcours thématiques/Landing/Drawer engagement`,tags:[`autodocs`,`!manifest`],parameters:{espace:`vitrine`,layout:`centered`,docs:{description:{component:`Drawer « détail d'un engagement », ouvert au clic sur « Voir l'engagement » dans
la landing thématique ; isolé ici pour itérer sur la mise en forme.`}}}},p=o.find(e=>e.slug===`jeunes`)??o[0],m=p.engagements[0],h={name:`Détail d’un engagement`,render:()=>(0,u.jsx)(()=>{let[e,t]=(0,d.useState)(!1);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a,{onClick:()=>t(!0),children:`Voir l’engagement`}),(0,u.jsx)(l,{engagement:m,thematiqueId:p.id,open:e,onOpenChange:t})]})},{})},g={name:`Données minimales (dégradation)`,render:()=>(0,u.jsx)(()=>{let[e,t]=(0,d.useState)(!1);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a,{onClick:()=>t(!0),children:`Voir l’engagement`}),(0,u.jsx)(l,{engagement:m,thematiqueId:p.id,detail:{},open:e,onOpenChange:t})]})},{})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Détail d’un engagement',
  render: () => {
    const Demo = () => {
      const [open, setOpen] = useState(false);
      return <>
          <Button onClick={() => setOpen(true)}>Voir l’engagement</Button>
          <EngagementDrawer engagement={engagement} thematiqueId={thematique.id} open={open} onOpenChange={setOpen} />
        </>;
    };
    return <Demo />;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Données minimales (dégradation)',
  render: () => {
    const Demo = () => {
      const [open, setOpen] = useState(false);
      return <>
          <Button onClick={() => setOpen(true)}>Voir l’engagement</Button>
          <EngagementDrawer engagement={engagement} thematiqueId={thematique.id} detail={{}} open={open} onOpenChange={setOpen} />
        </>;
    };
    return <Demo />;
  }
}`,...g.parameters?.docs?.source},description:{story:`Dégradation propre : un engagement sans aucun enrichissement n'affiche que le
socle (eyebrow, titre, description) + le CTA, sans section vide.`,...g.parameters?.docs?.description}}},_=[`Defaut`,`DonneesMinimales`]}))();export{h as Defaut,g as DonneesMinimales,_ as __namedExportsOrder,f as default};