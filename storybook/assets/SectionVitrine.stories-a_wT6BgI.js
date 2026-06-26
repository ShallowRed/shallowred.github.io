import{i as e}from"./preload-helper-DaCzexP6.js";import{u as t}from"./iframe-BeshMaXC.js";import{n,t as r}from"./section-vitrine-C4L8fAEi.js";var i,a,o,s,c,l,u,d,f,p;e((()=>{i=t(),n(),a={title:`Candidats/Vitrine/Socle/Briques/Section`,component:r,tags:[`autodocs`,`!manifest`],parameters:{espace:`vitrine`,layout:`fullscreen`,docs:{description:{component:["Wrapper canonique d'une `<section>` vitrine : pose le **fond**, le",`padding vertical et le **container de largeur lisible**. Une page se`,"compose en empilant des `SectionVitrine` ; l’alternance des fonds porte",`le découpage, sans marge custom entre sections.`,``,"Le fond `thematique` est ponctuel (≤ 1 par page) et accepte une teinte","pastel libre via `accent`. Le rythme d’alternance d’une page entière est","démontré dans `Couleurs de fond & alternance`.",``,`**Règles d’enchaînement** (rythme) :`,`- deux sections de même fond ne se touchent jamais — on alterne`,"  `greige` ↔ `blanc` ;","- une **dalle/carte greige** (`greige-carte`) ne se pose pas sur un fond","  `greige` (teintes trop proches, la dalle disparaît) : sur greige, une",`  dalle de collage prend le **blanc** ; la dalle greige-carte est réservée`,`  aux fonds blancs ;`,"- le **`PanneauCTA`** (carte bleue signée) se pose sur un fond clair",'  (`alt-blue`), **jamais sur `fond="blue"`** (panneau bleu sur bleu = nul).'].join(`
`)}}},argTypes:{fond:{control:`inline-radio`,options:[`white`,`greige`,`alt-blue`,`blue`,`thematique`]},taille:{control:`inline-radio`,options:[`legere`,`defaut`,`large`]},accent:{control:`color`},sansContainer:{control:`boolean`}}},o=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(`h2`,{className:`text-2xl font-bold md:text-[2rem]`,children:`Titre de section`}),(0,i.jsx)(`p`,{className:`mt-4 max-w-2xl`,children:`Chapeau introductif placé sur deux ou trois lignes. La largeur lisible du container interne empêche les lignes de devenir trop longues, même sur grand écran.`})]}),s={name:`Fond blanc (défaut)`,args:{fond:`white`,children:(0,i.jsx)(o,{})}},c={name:`Fond greige (alternance neutre chaude)`,args:{fond:`greige`,children:(0,i.jsx)(o,{})}},l={name:`Fond alt-bleu (alternance identitaire)`,args:{fond:`alt-blue`,children:(0,i.jsx)(o,{})}},u={name:`Fond bleu (hero ou CTA fort)`,args:{fond:`blue`,children:(0,i.jsx)(o,{})}},d={name:`Fond thématique (ponctuel, ≤ 1 par page)`,parameters:{docs:{description:{story:"Habillage thématique ponctuel d'une section. La teinte pastel est passée via `accent`. Exemple : `#fef4f2` pour la thématique « Jeunes » (Figma)."}}},args:{fond:`thematique`,accent:`#fef4f2`,children:(0,i.jsx)(o,{})}},f={name:`Tailles (padding vertical)`,parameters:{docs:{description:{story:`Les trois paliers de padding vertical, alignés sur l’échelle DSFR (fonds alternés ici seulement pour les rendre lisibles).`}}},render:()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{fond:`white`,taille:`legere`,children:(0,i.jsx)(`h2`,{className:`text-xl font-bold`,children:`taille « legere » — 32 / 48 px`})}),(0,i.jsx)(r,{fond:`greige`,taille:`defaut`,children:(0,i.jsx)(`h2`,{className:`text-xl font-bold`,children:`taille « defaut » — 48 / 64 px`})}),(0,i.jsx)(r,{fond:`white`,taille:`large`,children:(0,i.jsx)(`h2`,{className:`text-xl font-bold`,children:`taille « large » — 64 / 96 px (hero)`})})]})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Fond blanc (défaut)',
  args: {
    fond: 'white',
    children: <ExempleContenu />
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Fond greige (alternance neutre chaude)',
  args: {
    fond: 'greige',
    children: <ExempleContenu />
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Fond alt-bleu (alternance identitaire)',
  args: {
    fond: 'alt-blue',
    children: <ExempleContenu />
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Fond bleu (hero ou CTA fort)',
  args: {
    fond: 'blue',
    children: <ExempleContenu />
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Fond thématique (ponctuel, ≤ 1 par page)',
  parameters: {
    docs: {
      description: {
        story: "Habillage thématique ponctuel d'une section. La teinte pastel est passée via \`accent\`. Exemple : \`#fef4f2\` pour la thématique « Jeunes » (Figma)."
      }
    }
  },
  args: {
    fond: 'thematique',
    accent: '#fef4f2',
    children: <ExempleContenu />
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Tailles (padding vertical)',
  parameters: {
    docs: {
      description: {
        story: 'Les trois paliers de padding vertical, alignés sur l’échelle DSFR (fonds alternés ici seulement pour les rendre lisibles).'
      }
    }
  },
  render: () => <>
      <SectionVitrine fond="white" taille="legere">
        <h2 className="text-xl font-bold">taille « legere » — 32 / 48 px</h2>
      </SectionVitrine>
      <SectionVitrine fond="greige" taille="defaut">
        <h2 className="text-xl font-bold">taille « defaut » — 48 / 64 px</h2>
      </SectionVitrine>
      <SectionVitrine fond="white" taille="large">
        <h2 className="text-xl font-bold">taille « large » — 64 / 96 px (hero)</h2>
      </SectionVitrine>
    </>
}`,...f.parameters?.docs?.source}}},p=[`FondBlanc`,`FondGreige`,`FondAltBleu`,`FondBleu`,`FondThematique`,`Tailles`]}))();export{l as FondAltBleu,s as FondBlanc,u as FondBleu,c as FondGreige,d as FondThematique,f as Tailles,p as __namedExportsOrder,a as default};