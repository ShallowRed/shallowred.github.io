import{i as e}from"./preload-helper-DaCzexP6.js";import{u as t}from"./iframe-BeshMaXC.js";import{n,yt as r}from"./ri-CHURB-Na.js";import{n as i,t as a}from"./button-CmAnFNOi.js";import{n as o,t as s}from"./building-DdW-eQ5y.js";import{i as c,n as l,r as u,t as d}from"./leviers-BqVaDXal.js";import{n as f,t as p}from"./thematique-scope-5roLUM-1.js";import{a as m,i as h,n as g,o as _,s as v,t as y}from"./surface-BaAv7Fzu.js";function b(e){return d[e.doctrineSurface??`chrome-neutre`]??d[`chrome-neutre`]}function x({num:e,titre:t,intention:n,children:r}){return(0,C.jsxs)(`section`,{className:`flex flex-col gap-4`,children:[(0,C.jsxs)(`div`,{children:[(0,C.jsxs)(`h2`,{className:`text-lg font-bold text-(--color-dsfr-text-title-grey)`,children:[e,` · `,t]}),(0,C.jsx)(`p`,{className:`max-w-2xl text-sm text-(--color-dsfr-text-mention-grey)`,children:n})]}),r]})}function S({titre:e,children:t}){return(0,C.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,C.jsx)(`span`,{className:`text-sm font-bold text-(--color-dsfr-text-title-grey)`,children:e}),(0,C.jsx)(`span`,{className:`text-sm text-(--color-dsfr-text-mention-grey)`,children:t})]})}var C,w,T,E,D,O,k;e((()=>{C=t(),r(),o(),f(),i(),c(),v(),w={title:`Candidats/Webapp/Grammaire de surfaces/Système (spec)`,tags:[`!manifest`],parameters:{espace:`espace-membre`,layout:`fullscreen`},decorators:[(e,{globals:t})=>(0,C.jsx)(`div`,{style:u(b(t)),className:`min-h-screen bg-(--surface-canvas) p-10`,children:(0,C.jsx)(`div`,{className:`mx-auto flex max-w-5xl flex-col gap-12`,children:(0,C.jsx)(e,{})})})]},T={name:`1 · Échelle d’élévation`,render:()=>(0,C.jsx)(x,{num:`1`,titre:`Échelle d’élévation`,intention:`Cinq rôles stricts. L’ombre est réservée au niveau overlay ; le contenu de page ne porte jamais d’ombre. Le contraste structurant vit entre chrome et contenu.`,children:(0,C.jsxs)(`div`,{className:`flex flex-col gap-3 text-sm`,children:[(0,C.jsxs)(`div`,{className:`rounded-md bg-(--chrome-sidebar-bg) p-3 ring-1 ring-(--chrome-border)`,children:[(0,C.jsx)(`strong`,{children:`chrome`}),` — sidebar + header global (var `,(0,C.jsx)(`code`,{children:`--chrome-*`}),`)`]}),(0,C.jsxs)(`div`,{className:`rounded-md bg-(--surface-canvas) p-3 ring-1 ring-(--n2-hairline)`,children:[(0,C.jsx)(`strong`,{children:`0 · canvas`}),` — fond de page (`,(0,C.jsx)(`code`,{children:`--surface-canvas`}),`)`]}),(0,C.jsxs)(m,{children:[(0,C.jsx)(`strong`,{children:`1 · surface`}),` — carte / panneau (bordure, pas d’ombre)`,(0,C.jsxs)(g,{className:`mt-3`,children:[(0,C.jsx)(`strong`,{children:`2 · niché`}),` — sous-section ou item (hairline / carte plate)`]})]}),(0,C.jsxs)(`div`,{className:`w-fit rounded-lg bg-white p-3 shadow-[0_8px_24px_-6px_rgb(0_0_0/0.18)] ring-1 ring-(--n2-hairline)`,children:[(0,C.jsx)(`strong`,{children:`overlay`}),` — popover / dropdown / modale (`,(0,C.jsx)(`em`,{children:`ombre autorisée ici uniquement`}),`)`]})]})})},E={name:`2 · Gamme de conteneurs`,render:()=>(0,C.jsx)(x,{num:`2`,titre:`Gamme de conteneurs`,intention:`Doctrine de carte : outlined (bordure, ni fond ni ombre). Quatre conteneurs canoniques, chacun avec son intention. Le niveau 2 ne se peint jamais en gris et ne porte jamais d’ombre. Le divider a deux rôles, portés par les conteneurs ci-dessous : bleed (carte à en-tête), inset (sous-sections).`,children:(0,C.jsxs)(`div`,{className:`grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2`,children:[(0,C.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,C.jsx)(S,{titre:`Surface (nue) — niveau 1`,children:"Conteneur de base : fond `--surface`, bordure douce, rayon. Aucune ombre. On compose le contenu librement."}),(0,C.jsx)(m,{children:(0,C.jsx)(`p`,{className:`text-sm text-(--color-dsfr-text-mention-grey)`,children:`Contenu de carte.`})})]}),(0,C.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,C.jsxs)(S,{titre:`Carte à en-tête — divider bleed`,children:[`En-tête (titre + actions) séparé du corps par un divider`,` `,(0,C.jsx)(`strong`,{children:`bleed`})," : pleine largeur, il déborde le padding et touche les deux bords (requiert un parent paddé — `CardSection` le garantit). Padding d’en-tête tokenisé (`--header-pad`)."]}),(0,C.jsx)(y,{titre:(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(s,{"aria-hidden":!0,className:`size-5`}),`Carte à en-tête`]}),actions:(0,C.jsxs)(a,{size:`sm`,variant:`outline`,children:[(0,C.jsx)(n,{"aria-hidden":!0,className:`size-4`}),` Action`]}),children:(0,C.jsx)(`p`,{className:`text-sm text-(--color-dsfr-text-mention-grey)`,children:`Le corps suit l’en-tête, à distance tokenisée du divider.`})})]}),(0,C.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,C.jsxs)(S,{titre:`Sous-sections — divider inset + section-gap`,children:[`Niveau 2 d’un conteneur hétérogène : titre + divider`,` `,(0,C.jsx)(`strong`,{children:`inset`})," (reste dans le padding) + corps, sans nouvelle surface. L’enchaînement de deux sous-sections respecte le rythme tokenisé (`--section-gap`), plus de `gap` ad hoc."]}),(0,C.jsxs)(_,{children:[(0,C.jsx)(h,{titre:(0,C.jsx)(`span`,{className:`font-bold`,children:`Sous-section A`}),children:(0,C.jsx)(`span`,{className:`text-sm text-(--color-dsfr-text-mention-grey)`,children:`Titre + divider inset (dans le padding).`})}),(0,C.jsx)(h,{titre:(0,C.jsx)(`span`,{className:`font-bold`,children:`Sous-section B`}),children:(0,C.jsx)(`span`,{className:`text-sm text-(--color-dsfr-text-mention-grey)`,children:"Deuxième bloc de la même surface, à `--section-gap` du premier."})})]})]}),(0,C.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,C.jsx)(S,{titre:`Liste d’items — cartes plates`,children:`Niveau 2 pour items homogènes répétés/cliquables : bordure nette + rayon, sans fond gris ni ombre. Ne pas sur-encarter (NN/G).`}),(0,C.jsxs)(m,{className:`flex flex-col gap-3`,children:[(0,C.jsx)(g,{children:`Item répété A`}),(0,C.jsx)(g,{children:`Item répété B`})]})]})]})})},D={name:`3 · Scope thématique × surfaces`,render:()=>(0,C.jsx)(x,{num:`3`,titre:`Scope thématique appliqué aux surfaces`,intention:`Le scope thématique (--thematique-bg / --thematique-main) habille l’en-tête ou les tags d’une surface, jamais son fond ni le canvas de page. Une même carte se relit sous chaque thématique sans changer de structure.`,children:(0,C.jsx)(`div`,{className:`grid grid-cols-1 gap-6 md:grid-cols-3`,children:[{nom:`Handicap`,color1:`#4763cc`,color2:`#e8ecfb`},{nom:`Sobriété`,color1:`#1f8a4c`,color2:`#def3e6`},{nom:`Jeunes`,color1:`#c0392b`,color2:`#fbe6e4`}].map(e=>(0,C.jsx)(p,{etiquette:{color1:e.color1,color2:e.color2},children:(0,C.jsxs)(m,{padded:!1,className:`overflow-clip`,children:[(0,C.jsxs)(`div`,{className:`flex items-center gap-2 bg-(--thematique-bg) text-sm font-bold text-(--thematique-main)`,style:{padding:`var(--header-pad)`},children:[(0,C.jsx)(s,{"aria-hidden":!0,className:`size-5`}),e.nom]}),(0,C.jsxs)(`div`,{className:`flex flex-col gap-3`,style:{padding:`var(--padding-bloc)`},children:[(0,C.jsx)(`p`,{className:`text-sm text-(--color-dsfr-text-mention-grey)`,children:`Corps de carte neutre. La couleur reste cantonnée à l’en-tête.`}),(0,C.jsxs)(g,{className:`flex items-center justify-between`,children:[(0,C.jsx)(`span`,{className:`text-sm`,children:`Initiative liée`}),(0,C.jsx)(`span`,{className:`rounded-full bg-(--thematique-bg) px-2.5 py-0.5 text-xs font-bold text-(--thematique-main)`,children:e.nom})]})]})]})},e.nom))})})},O={name:`4 · Tableau comparatif des doctrines`,render:()=>(0,C.jsx)(x,{num:`4`,titre:`Tableau comparatif des doctrines`,intention:`Les leviers de chaque doctrine, côte à côte. Comparer des doctrines, c’est comparer des systèmes de tokens — pas des teintes.`,children:(0,C.jsxs)(`table`,{className:`border-collapse text-sm`,children:[(0,C.jsx)(`thead`,{children:(0,C.jsxs)(`tr`,{children:[(0,C.jsx)(`th`,{className:`border-b-2 border-[#e2e2e5] p-3 text-left`}),l.map(e=>(0,C.jsx)(`th`,{className:`border-b-2 border-[#e2e2e5] p-3 text-left font-bold text-(--color-dsfr-text-title-grey)`,children:d[e].nom},e))]})}),(0,C.jsx)(`tbody`,{children:[{label:`Inspiration`,get:e=>d[e].inspiration},{label:`Sidebar`,get:e=>d[e].chrome.sidebarBg},{label:`Header global`,get:e=>d[e].chrome.headerBg},{label:`Hairline chrome`,get:e=>d[e].chrome.borderColor},{label:`Canvas`,get:e=>d[e].canvasBg},{label:`Carte — bordure`,get:e=>d[e].carte.bordure},{label:`Carte — rayon`,get:e=>`${d[e].carte.rayonPx}px`},{label:`Niveau 2 — moyen`,get:e=>d[e].niveau2.moyen},{label:`Gouttière`,get:e=>`${d[e].macro.gouttierePx}px`},{label:`Padding bloc`,get:e=>`${d[e].macro.paddingBlocPx}px`},{label:`Padding en-tête`,get:e=>`${d[e].macro.headerPadPx}px`},{label:`Gap sous-sections`,get:e=>`${d[e].macro.sectionGapPx}px`},{label:`Densité`,get:e=>d[e].macro.densite},{label:`Regroupement`,get:e=>d[e].macro.regroupement}].map(e=>(0,C.jsxs)(`tr`,{children:[(0,C.jsx)(`td`,{className:`border-b border-[#ececec] p-3 font-bold text-(--color-dsfr-text-mention-grey)`,children:e.label}),l.map(t=>(0,C.jsx)(`td`,{className:`border-b border-[#ececec] p-3 font-mono text-xs text-(--color-dsfr-text-title-grey)`,children:e.get(t)},t))]},e.label))})]})})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: '1 · Échelle d’élévation',
  render: () => <Bloc num="1" titre="Échelle d’élévation" intention="Cinq rôles stricts. L’ombre est réservée au niveau overlay ; le contenu de page ne porte jamais d’ombre. Le contraste structurant vit entre chrome et contenu.">
      <div className="flex flex-col gap-3 text-sm">
        <div className="rounded-md bg-(--chrome-sidebar-bg) p-3 ring-1 ring-(--chrome-border)">
          <strong>chrome</strong> — sidebar + header global (var <code>--chrome-*</code>)
        </div>
        <div className="rounded-md bg-(--surface-canvas) p-3 ring-1 ring-(--n2-hairline)">
          <strong>0 · canvas</strong> — fond de page (<code>--surface-canvas</code>)
        </div>
        <Surface>
          <strong>1 · surface</strong> — carte / panneau (bordure, pas d’ombre)
          <CartePlate className="mt-3">
            <strong>2 · niché</strong> — sous-section ou item (hairline / carte plate)
          </CartePlate>
        </Surface>
        <div className="w-fit rounded-lg bg-white p-3 shadow-[0_8px_24px_-6px_rgb(0_0_0/0.18)] ring-1 ring-(--n2-hairline)">
          <strong>overlay</strong> — popover / dropdown / modale (<em>ombre autorisée ici uniquement</em>)
        </div>
      </div>
    </Bloc>
}`,...T.parameters?.docs?.source},description:{story:`1 — Échelle d'élévation.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: '2 · Gamme de conteneurs',
  render: () => <Bloc num="2" titre="Gamme de conteneurs" intention="Doctrine de carte : outlined (bordure, ni fond ni ombre). Quatre conteneurs canoniques, chacun avec son intention. Le niveau 2 ne se peint jamais en gris et ne porte jamais d’ombre. Le divider a deux rôles, portés par les conteneurs ci-dessous : bleed (carte à en-tête), inset (sous-sections).">
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
        <div className="flex flex-col gap-3">
          <Annotation titre="Surface (nue) — niveau 1">
            Conteneur de base : fond \`--surface\`, bordure douce, rayon. Aucune
            ombre. On compose le contenu librement.
          </Annotation>
          <Surface>
            <p className="text-sm text-(--color-dsfr-text-mention-grey)">
              Contenu de carte.
            </p>
          </Surface>
        </div>

        <div className="flex flex-col gap-3">
          <Annotation titre="Carte à en-tête — divider bleed">
            En-tête (titre + actions) séparé du corps par un divider{' '}
            <strong>bleed</strong> : pleine largeur, il déborde le padding et
            touche les deux bords (requiert un parent paddé — \`CardSection\` le
            garantit). Padding d’en-tête tokenisé (\`--header-pad\`).
          </Annotation>
          <CardSection titre={<>
                <BuildingIcon aria-hidden className="size-5" />
                Carte à en-tête
              </>} actions={<Button size="sm" variant="outline">
                <RiAddLine aria-hidden className="size-4" /> Action
              </Button>}>
            <p className="text-sm text-(--color-dsfr-text-mention-grey)">
              Le corps suit l’en-tête, à distance tokenisée du divider.
            </p>
          </CardSection>
        </div>

        <div className="flex flex-col gap-3">
          <Annotation titre="Sous-sections — divider inset + section-gap">
            Niveau 2 d’un conteneur hétérogène : titre + divider{' '}
            <strong>inset</strong> (reste dans le padding) + corps, sans nouvelle
            surface. L’enchaînement de deux sous-sections respecte le rythme
            tokenisé (\`--section-gap\`), plus de \`gap\` ad hoc.
          </Annotation>
          <SurfaceSections>
            <HairlineSection titre={<span className="font-bold">Sous-section A</span>}>
              <span className="text-sm text-(--color-dsfr-text-mention-grey)">
                Titre + divider inset (dans le padding).
              </span>
            </HairlineSection>
            <HairlineSection titre={<span className="font-bold">Sous-section B</span>}>
              <span className="text-sm text-(--color-dsfr-text-mention-grey)">
                Deuxième bloc de la même surface, à \`--section-gap\` du premier.
              </span>
            </HairlineSection>
          </SurfaceSections>
        </div>

        <div className="flex flex-col gap-3">
          <Annotation titre="Liste d’items — cartes plates">
            Niveau 2 pour items homogènes répétés/cliquables : bordure nette +
            rayon, sans fond gris ni ombre. Ne pas sur-encarter (NN/G).
          </Annotation>
          <Surface className="flex flex-col gap-3">
            <CartePlate>Item répété A</CartePlate>
            <CartePlate>Item répété B</CartePlate>
          </Surface>
        </div>
      </div>
    </Bloc>
}`,...E.parameters?.docs?.source},description:{story:`2 — Gamme de conteneurs (galerie annotée + grille canonique).

Absorbe l'ancienne « Galerie de leviers » ET la doctrine du divider : chaque
conteneur est présenté avec son intention, et le rôle du divider (bleed/inset)
est annoté **sur le conteneur qui le porte** plutôt que dans un bloc séparé
(la carte à en-tête possède le bleed, la sous-section possède l'inset).`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: '3 · Scope thématique × surfaces',
  render: () => <Bloc num="3" titre="Scope thématique appliqué aux surfaces" intention="Le scope thématique (--thematique-bg / --thematique-main) habille l’en-tête ou les tags d’une surface, jamais son fond ni le canvas de page. Une même carte se relit sous chaque thématique sans changer de structure.">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {[{
        nom: 'Handicap',
        color1: '#4763cc',
        color2: '#e8ecfb'
      }, {
        nom: 'Sobriété',
        color1: '#1f8a4c',
        color2: '#def3e6'
      }, {
        nom: 'Jeunes',
        color1: '#c0392b',
        color2: '#fbe6e4'
      }].map(t => <ThematiqueScope key={t.nom} etiquette={{
        color1: t.color1,
        color2: t.color2
      }}>
            <Surface padded={false} className="overflow-clip">
              {/* En-tête thématisé : le scope colore l'en-tête, pas le corps. */}
              <div className="flex items-center gap-2 bg-(--thematique-bg) text-sm font-bold text-(--thematique-main)" style={{
            padding: 'var(--header-pad)'
          }}>
                <BuildingIcon aria-hidden className="size-5" />
                {t.nom}
              </div>
              <div className="flex flex-col gap-3" style={{
            padding: 'var(--padding-bloc)'
          }}>
                <p className="text-sm text-(--color-dsfr-text-mention-grey)">
                  Corps de carte neutre. La couleur reste cantonnée à l’en-tête.
                </p>
                {/* Tag thématisé dans une carte plate (niveau 2). */}
                <CartePlate className="flex items-center justify-between">
                  <span className="text-sm">Initiative liée</span>
                  <span className="rounded-full bg-(--thematique-bg) px-2.5 py-0.5 text-xs font-bold text-(--thematique-main)">
                    {t.nom}
                  </span>
                </CartePlate>
              </div>
            </Surface>
          </ThematiqueScope>)}
      </div>
    </Bloc>
}`,...D.parameters?.docs?.source},description:{story:`Scope thématique appliqué aux surfaces.

Ne montre pas une simple rangée de pastilles, mais **comment le scope thématique
se pose sur les conteneurs de la gamme** : en-tête de carte thématisé, tag dans
une carte plate. C'est l'interaction thématique × surfaces qui est spécifiée ici.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: '4 · Tableau comparatif des doctrines',
  render: () => {
    const lignes: {
      label: string;
      get: (id: string) => string;
    }[] = [{
      label: 'Inspiration',
      get: id => DOCTRINES_V2[id].inspiration
    }, {
      label: 'Sidebar',
      get: id => DOCTRINES_V2[id].chrome.sidebarBg
    }, {
      label: 'Header global',
      get: id => DOCTRINES_V2[id].chrome.headerBg
    }, {
      label: 'Hairline chrome',
      get: id => DOCTRINES_V2[id].chrome.borderColor
    }, {
      label: 'Canvas',
      get: id => DOCTRINES_V2[id].canvasBg
    }, {
      label: 'Carte — bordure',
      get: id => DOCTRINES_V2[id].carte.bordure
    }, {
      label: 'Carte — rayon',
      get: id => \`\${DOCTRINES_V2[id].carte.rayonPx}px\`
    }, {
      label: 'Niveau 2 — moyen',
      get: id => DOCTRINES_V2[id].niveau2.moyen
    }, {
      label: 'Gouttière',
      get: id => \`\${DOCTRINES_V2[id].macro.gouttierePx}px\`
    }, {
      label: 'Padding bloc',
      get: id => \`\${DOCTRINES_V2[id].macro.paddingBlocPx}px\`
    }, {
      label: 'Padding en-tête',
      get: id => \`\${DOCTRINES_V2[id].macro.headerPadPx}px\`
    }, {
      label: 'Gap sous-sections',
      get: id => \`\${DOCTRINES_V2[id].macro.sectionGapPx}px\`
    }, {
      label: 'Densité',
      get: id => DOCTRINES_V2[id].macro.densite
    }, {
      label: 'Regroupement',
      get: id => DOCTRINES_V2[id].macro.regroupement
    }];
    return <Bloc num="4" titre="Tableau comparatif des doctrines" intention="Les leviers de chaque doctrine, côte à côte. Comparer des doctrines, c’est comparer des systèmes de tokens — pas des teintes.">
        <table className="border-collapse text-sm">
          <thead>
            <tr>
              <th className="border-b-2 border-[#e2e2e5] p-3 text-left" />
              {DOCTRINE_V2_ORDER.map(id => <th key={id} className="border-b-2 border-[#e2e2e5] p-3 text-left font-bold text-(--color-dsfr-text-title-grey)">
                  {DOCTRINES_V2[id].nom}
                </th>)}
            </tr>
          </thead>
          <tbody>
            {lignes.map(ligne => <tr key={ligne.label}>
                <td className="border-b border-[#ececec] p-3 font-bold text-(--color-dsfr-text-mention-grey)">
                  {ligne.label}
                </td>
                {DOCTRINE_V2_ORDER.map(id => <td key={id} className="border-b border-[#ececec] p-3 font-mono text-xs text-(--color-dsfr-text-title-grey)">
                    {ligne.get(id)}
                  </td>)}
              </tr>)}
          </tbody>
        </table>
      </Bloc>;
  }
}`,...O.parameters?.docs?.source},description:{story:`4 — Tableau comparatif des doctrines (valeurs de tokens côte à côte).`,...O.parameters?.docs?.description}}},k=[`EchelleElevation`,`GammeConteneurs`,`ScopeThematique`,`TableauComparatif`]}))();export{T as EchelleElevation,E as GammeConteneurs,D as ScopeThematique,O as TableauComparatif,k as __namedExportsOrder,w as default};