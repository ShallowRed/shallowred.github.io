import{i as e}from"./preload-helper-DaCzexP6.js";import{u as t}from"./iframe-BBC5HgxN.js";import{n,t as r}from"./fil-ariane-DGnE0DAp.js";import{n as i,t as a}from"./section-vitrine-DtwHVNO2.js";var o,s,c,l,u,d,f;e((()=>{o=t(),n(),i(),s={title:`Candidats/Vitrine/Socle/Fil d’Ariane`,component:r,tags:[`autodocs`,`!manifest`],parameters:{espace:`vitrine`,layout:`fullscreen`,docs:{description:{component:"Brique `FilAriane` — fil d'Ariane canonique des pages vitrine. Couleur héritée\ndu fond de section : aucune variante de ton à passer."}}}},c=[{libelle:`Accueil`,href:`#`},{libelle:`Les thématiques d’engagement`}],l={name:`Sur fond clair`,render:()=>(0,o.jsx)(a,{fond:`white`,taille:`legere`,children:(0,o.jsx)(r,{items:c})})},u={name:`Sur fond bleu`,render:()=>(0,o.jsx)(a,{fond:`blue`,taille:`legere`,children:(0,o.jsx)(r,{items:c})})},d={name:`Trois niveaux`,render:()=>(0,o.jsx)(a,{fond:`greige`,taille:`legere`,children:(0,o.jsx)(r,{items:[{libelle:`Accueil`,href:`#`},{libelle:`Les thématiques d’engagement`,href:`#`},{libelle:`Inclusion des jeunes`}]})})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Sur fond clair',
  render: () => <SectionVitrine fond="white" taille="legere">
      <FilAriane items={items} />
    </SectionVitrine>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Sur fond bleu',
  render: () => <SectionVitrine fond="blue" taille="legere">
      <FilAriane items={items} />
    </SectionVitrine>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Trois niveaux',
  render: () => <SectionVitrine fond="greige" taille="legere">
      <FilAriane items={[{
      libelle: 'Accueil',
      href: '#'
    }, {
      libelle: 'Les thématiques d’engagement',
      href: '#'
    }, {
      libelle: 'Inclusion des jeunes'
    }]} />
    </SectionVitrine>
}`,...d.parameters?.docs?.source}}},f=[`SurFondClair`,`SurFondBleu`,`TroisNiveaux`]}))();export{u as SurFondBleu,l as SurFondClair,d as TroisNiveaux,f as __namedExportsOrder,s as default};