import{i as e}from"./preload-helper-DaCzexP6.js";import{u as t}from"./iframe-BBC5HgxN.js";import{c as n,yt as r}from"./ri-CwakkzoF.js";import{n as i,t as a}from"./button-nfgklFkl.js";import{n as o,t as s}from"./panneau-cta-BaeeA-dq.js";import{n as c,t as l}from"./section-vitrine-DtwHVNO2.js";var u,d,f,p,m,h;e((()=>{u=t(),r(),i(),o(),c(),d={title:`Candidats/Vitrine/Socle/Compositions/Panneau CTA`,component:s,tags:[`autodocs`,`!manifest`],parameters:{espace:`vitrine`,layout:`fullscreen`,docs:{description:{component:[`Carte bleue d'appel à l'action. Le composant rend uniquement la`,"carte : le fond clair de section (`alt-blue` typiquement) reste","porté par `SectionVitrine`.",``,"Le bouton est passé via le slot `action` (variante `contrast`",`recommandée sur ce fond bleu). Fond bleu statique : surface, pas`,`élément interactif.`].join(`
`)}}},argTypes:{niveauTitre:{control:`inline-radio`,options:[`h2`,`h3`]},centre:{control:`boolean`},filigrane:{control:`boolean`}}},f={name:`Aligné à gauche`,render:e=>(0,u.jsx)(l,{fond:`alt-blue`,children:(0,u.jsx)(s,{...e})}),args:{titre:`Rejoignez les entreprises engagées`,children:`Formalisez vos actions, suivez leur progression et inspirez d'autres entreprises de votre territoire.`,action:(0,u.jsxs)(a,{size:`lg`,variant:`contrast`,children:[`Composer mon programme`,(0,u.jsx)(n,{"aria-hidden":!0,className:`size-5`})]})}},p={name:`Centré`,render:e=>(0,u.jsx)(l,{fond:`greige`,children:(0,u.jsx)(s,{...e})}),args:{centre:!0,titre:`Prêt à passer à l'action ?`,children:`La déclaration prend quelques minutes.`,action:(0,u.jsxs)(a,{size:`lg`,variant:`contrast`,children:[`Déclarer mon engagement`,(0,u.jsx)(n,{"aria-hidden":!0,className:`size-5`})]})}},m={name:`Filigrane coq (signé)`,parameters:{docs:{description:{story:"Variante `filigrane` : décor de marque à réserver aux CTA signés, typiquement le panneau de clôture de la page d’accueil."}}},render:e=>(0,u.jsx)(l,{fond:`alt-blue`,children:(0,u.jsx)(s,{...e})}),args:{filigrane:!0,titre:`Prêt à engager votre entreprise ?`,children:`C’est gratuit, et vous progressez pas à pas. Faites un premier pas, la Communauté vous accompagne ensuite.`,action:(0,u.jsxs)(a,{size:`lg`,variant:`contrast`,children:[`Rejoindre la Communauté`,(0,u.jsx)(n,{"aria-hidden":!0,className:`size-5`})]})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Aligné à gauche',
  render: args => <SectionVitrine fond="alt-blue">
      <PanneauCTA {...args} />
    </SectionVitrine>,
  args: {
    titre: 'Rejoignez les entreprises engagées',
    children: "Formalisez vos actions, suivez leur progression et inspirez d\\'autres entreprises de votre territoire.",
    action: <Button size="lg" variant="contrast">
        Composer mon programme
        <RiArrowRightLine aria-hidden className="size-5" />
      </Button>
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Centré',
  render: args => <SectionVitrine fond="greige">
      <PanneauCTA {...args} />
    </SectionVitrine>,
  args: {
    centre: true,
    titre: 'Prêt à passer à l\\'action ?',
    children: 'La déclaration prend quelques minutes.',
    action: <Button size="lg" variant="contrast">
        Déclarer mon engagement
        <RiArrowRightLine aria-hidden className="size-5" />
      </Button>
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Filigrane coq (signé)',
  parameters: {
    docs: {
      description: {
        story: 'Variante \`filigrane\` : décor de marque à réserver aux CTA signés, typiquement le panneau de clôture de la page d’accueil.'
      }
    }
  },
  render: args => <SectionVitrine fond="alt-blue">
      <PanneauCTA {...args} />
    </SectionVitrine>,
  args: {
    filigrane: true,
    titre: 'Prêt à engager votre entreprise ?',
    children: 'C’est gratuit, et vous progressez pas à pas. Faites un premier pas, la Communauté vous accompagne ensuite.',
    action: <Button size="lg" variant="contrast">
        Rejoindre la Communauté
        <RiArrowRightLine aria-hidden className="size-5" />
      </Button>
  }
}`,...m.parameters?.docs?.source}}},h=[`Defaut`,`Centre`,`Filigrane`]}))();export{p as Centre,f as Defaut,m as Filigrane,h as __namedExportsOrder,d as default};