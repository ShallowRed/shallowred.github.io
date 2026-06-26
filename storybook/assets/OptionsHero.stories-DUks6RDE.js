import{i as e}from"./preload-helper-DaCzexP6.js";import{u as t}from"./iframe-BeshMaXC.js";import{a as n,i as r,n as i,r as a,t as o}from"./parti-retenu-hero-Ch9pJoVf.js";var s,c,l,u,d,f,p;e((()=>{s=t(),n(),c={id:`parti-retenu-options-header`,title:`Candidats/Vitrine/Home/L’accueil — Options de hero`,tags:[`autodocs`,`!manifest`],parameters:{espace:`vitrine`,layout:`fullscreen`,docs:{description:{component:`Quatre compositions de hero d'accueil confrontées : Bento net, Asymétrie,
Collage, Cadre éditorial. La page d'accueil consomme Bento net par défaut.

Doctrine commune : greige par touche, Bleu France seule couleur d'action,
chiffre-preuve non répété dans le hero (il vit dans la section preuve). Copy
variabilisée via \`HERO_COPY\`. Historique des affinages : story « REPRISE ».`}}}},l={name:`Bento net`,parameters:{docs:{description:{story:`Texte **centré** + mosaïque bento alignée de photos. La plus proche de l’existant ; geste consommé par défaut sur la page d’accueil.`}}},render:()=>(0,s.jsx)(i,{})},u={name:`Asymétrie`,parameters:{docs:{description:{story:`Texte **à gauche** + bento vertical de trois photos à droite. Lecture directe, titre et CTA hauts.`}}},render:()=>(0,s.jsx)(o,{})},d={name:`Collage`,parameters:{docs:{description:{story:`Texte à gauche + **une image en collage** (rotation + dalle greige adossée), sans bento. Le geste collage isolé et assumé.`}}},render:()=>(0,s.jsx)(r,{})},f={name:`Cadre éditorial`,parameters:{docs:{description:{story:`Carte de titre **ancrée à gauche**, remontée, qui déborde sur du blanc et chevauche une photo large décalée à droite (+ dalle greige).`}}},render:()=>(0,s.jsx)(a,{})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Bento net',
  parameters: {
    docs: {
      description: {
        story: 'Texte **centré** + mosaïque bento alignée de photos. La plus proche ' + 'de l’existant ; geste consommé par défaut sur la page d’accueil.'
      }
    }
  },
  render: () => <HeroBentoNet />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Asymétrie',
  parameters: {
    docs: {
      description: {
        story: 'Texte **à gauche** + bento vertical de trois photos à droite. Lecture ' + 'directe, titre et CTA hauts.'
      }
    }
  },
  render: () => <HeroAsymetrie />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Collage',
  parameters: {
    docs: {
      description: {
        story: 'Texte à gauche + **une image en collage** (rotation + dalle greige ' + 'adossée), sans bento. Le geste collage isolé et assumé.'
      }
    }
  },
  render: () => <HeroCollageSignature />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Cadre éditorial',
  parameters: {
    docs: {
      description: {
        story: 'Carte de titre **ancrée à gauche**, remontée, qui déborde sur du blanc ' + 'et chevauche une photo large décalée à droite (+ dalle greige).'
      }
    }
  },
  render: () => <HeroCadreEditorial />
}`,...f.parameters?.docs?.source}}},p=[`BentoNet`,`Asymetrie`,`Collage`,`CadreEditorial`]}))();export{u as Asymetrie,l as BentoNet,f as CadreEditorial,d as Collage,p as __namedExportsOrder,c as default};