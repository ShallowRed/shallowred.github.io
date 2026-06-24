import{i as e}from"./preload-helper-DaCzexP6.js";import{u as t}from"./iframe-BBC5HgxN.js";import{n,t as r}from"./eyebrow-heading-sVL6yuza.js";import{n as i,t as a}from"./section-vitrine-DtwHVNO2.js";var o,s,c,l,u,d,f;e((()=>{o=t(),n(),i(),s={title:`Candidats/Vitrine/Socle/Briques/Eyebrow heading`,component:r,tags:[`autodocs`,`!manifest`],parameters:{espace:`vitrine`,layout:`fullscreen`,docs:{description:{component:[`Surtitre court + heading principal d'une section vitrine.`,``,`Pattern récurrent en tête des sections éditoriales.`,`Hérite de la couleur de la section parente : fonctionne sur les`,`trois fonds (white / grey / blue) sans variante explicite.`].join(`
`)}}},argTypes:{niveau:{control:`inline-radio`,options:[`h1`,`h2`,`h3`]},centre:{control:`boolean`}}},c={name:`Sur fond blanc`,render:e=>(0,o.jsx)(a,{fond:`white`,children:(0,o.jsx)(r,{...e})}),args:{eyebrow:`Les thématiques`,niveau:`h2`,children:`Partez d’un sujet qui vous parle`}},l={name:`Sur fond gris`,render:e=>(0,o.jsx)(a,{fond:`greige`,children:(0,o.jsx)(r,{...e})}),args:{eyebrow:`Comment ça marche`,niveau:`h2`,children:`Trois étapes pour formaliser vos actions`}},u={name:`Sur fond bleu (hero)`,render:e=>(0,o.jsx)(a,{fond:`blue`,children:(0,o.jsx)(r,{...e})}),args:{niveau:`h1`,children:`S'engager pour une société plus inclusive`}},d={name:`Centré (panneau CTA)`,render:e=>(0,o.jsx)(a,{fond:`blue`,children:(0,o.jsx)(r,{...e})}),args:{eyebrow:`Prêt à formaliser vos actions ?`,niveau:`h2`,centre:!0,children:`Rejoignez la Communauté des entreprises engagées`}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Sur fond blanc',
  render: args => <SectionVitrine fond="white">
      <EyebrowHeading {...args} />
    </SectionVitrine>,
  args: {
    eyebrow: 'Les thématiques',
    niveau: 'h2',
    children: 'Partez d’un sujet qui vous parle'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Sur fond gris',
  render: args => <SectionVitrine fond="greige">
      <EyebrowHeading {...args} />
    </SectionVitrine>,
  args: {
    eyebrow: 'Comment ça marche',
    niveau: 'h2',
    children: 'Trois étapes pour formaliser vos actions'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Sur fond bleu (hero)',
  render: args => <SectionVitrine fond="blue">
      <EyebrowHeading {...args} />
    </SectionVitrine>,
  args: {
    niveau: 'h1',
    children: "S'engager pour une société plus inclusive"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Centré (panneau CTA)',
  render: args => <SectionVitrine fond="blue">
      <EyebrowHeading {...args} />
    </SectionVitrine>,
  args: {
    eyebrow: 'Prêt à formaliser vos actions ?',
    niveau: 'h2',
    centre: true,
    children: 'Rejoignez la Communauté des entreprises engagées'
  }
}`,...d.parameters?.docs?.source}}},f=[`SurFondBlanc`,`SurFondGris`,`SurFondBleu`,`Centre`]}))();export{d as Centre,c as SurFondBlanc,u as SurFondBleu,l as SurFondGris,f as __namedExportsOrder,s as default};