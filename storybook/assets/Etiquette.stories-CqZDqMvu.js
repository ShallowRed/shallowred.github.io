import{c as e,i as t}from"./preload-helper-DaCzexP6.js";import{F as n,u as r}from"./iframe-BBC5HgxN.js";import{H as i,tt as a,yt as o}from"./ri-CwakkzoF.js";import{i as s,n as c,r as l}from"./badge-etiquette-CIoDaKP1.js";import{i as u,r as d,t as f}from"./leviers-BqVaDXal.js";import{n as p,t as m}from"./thematique-scope-BHXNpb8q.js";function h({titre:e,children:t}){return(0,v.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,v.jsx)(`span`,{className:`w-24 text-xs font-semibold text-(--color-dsfr-text-mention-grey)`,children:e}),(0,v.jsx)(`div`,{className:`flex flex-wrap items-center gap-2`,children:t})]})}function g({titre:e,children:t}){return(0,v.jsxs)(`section`,{className:`flex flex-col gap-3`,children:[(0,v.jsx)(`h3`,{className:`text-sm font-bold uppercase tracking-wide text-(--color-dsfr-text-title-grey)`,children:e}),t]})}function _(){let[e,t]=(0,y.useState)(new Set([`envt`]));return(0,v.jsx)(l,{valeurs:e,onToggle:e=>t(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n}),children:[{value:`envt`,label:`Environnement`},{value:`social`,label:`Social`},{value:`gouv`,label:`Gouvernance`}].map(e=>(0,v.jsx)(c,{variant:`selectable`,value:e.value,label:e.label},e.value))})}var v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P;t((()=>{v=r(),y=e(n(),1),o(),p(),s(),u(),b=[{nom:`Handicap`,color1:`#4763cc`,color2:`#e8ecfb`},{nom:`Sobriété`,color1:`#1f8a4c`,color2:`#def3e6`},{nom:`Jeunes`,color1:`#c0392b`,color2:`#fbe6e4`},{nom:`Climat`,color1:`#0063cb`,color2:`#e8edff`}],x={title:`Candidats/Partagé/Badges & étiquettes/Étiquette`,component:c,tags:[`autodocs`,`!manifest`],decorators:[e=>(0,v.jsx)(`div`,{style:d(f[`chrome-neutre`]),children:(0,v.jsx)(e,{})})],args:{label:`Catégorie`,variant:`static`,size:`md`},argTypes:{variant:{control:`inline-radio`,options:[`static`,`clickable`,`selectable`,`dismissible`]},size:{control:`inline-radio`,options:[`sm`,`md`,`lg`]},icon:{control:!1}},parameters:{docs:{description:{component:"**Étiquette — catégorie / mot-clé.** Pastille **arrondie** qui **catégorise ou filtre**\n(le `Badge`, carré, signale un état). `clickable` rend un `<a>` si `href`, sinon un\n`<button>` ; `dismissible` est toujours un `<button>` (croix exclusive d'une icône gauche).\nTeinte neutre par défaut, illustrative avec parcimonie."}}}},S=[`static`,`clickable`,`selectable`,`dismissible`],C=[`sm`,`md`,`lg`],w={name:`Par défaut`},T={render:()=>(0,v.jsx)(`div`,{className:`flex flex-col gap-3`,children:S.map(e=>(0,v.jsx)(h,{titre:e,children:(0,v.jsx)(c,{variant:e,label:`Catégorie`})},e))})},E={name:`Avec icône`,render:()=>(0,v.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,v.jsx)(c,{icon:(0,v.jsx)(a,{"aria-hidden":!0}),label:`Thématique`}),(0,v.jsx)(c,{icon:(0,v.jsx)(i,{"aria-hidden":!0}),fond:`var(--color-dsfr-background-contrast-success)`,texte:`var(--color-dsfr-text-default-success)`,label:`Environnement`})]})},D={render:()=>(0,v.jsx)(`div`,{className:`flex flex-col gap-3`,children:C.map(e=>(0,v.jsx)(h,{titre:e,children:(0,v.jsx)(c,{size:e,label:`Catégorie`})},e))})},O={name:`Sélectable (autonome)`,render:()=>(0,v.jsx)(()=>{let[e,t]=(0,y.useState)(!1);return(0,v.jsx)(c,{variant:`selectable`,pressed:e,onClick:()=>t(e=>!e),label:e?`Filtre actif`:`Filtre`})},{})},k={name:`Sélectable (groupe)`,render:()=>(0,v.jsx)(()=>{let[e,t]=(0,y.useState)(new Set([`envt`]));return(0,v.jsx)(l,{valeurs:e,onToggle:e=>t(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n}),children:[{value:`envt`,label:`Environnement`},{value:`social`,label:`Social`},{value:`gouv`,label:`Gouvernance`},{value:`eco`,label:`Économie`}].map(e=>(0,v.jsx)(c,{variant:`selectable`,value:e.value,label:e.label},e.value))})},{})},A={render:()=>(0,v.jsx)(()=>{let[e,t]=(0,y.useState)([`Environnement`,`Social`,`Île-de-France`]);return(0,v.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[e.map(e=>(0,v.jsx)(c,{variant:`dismissible`,label:e,onDismiss:()=>t(t=>t.filter(t=>t!==e))},e)),e.length===0?(0,v.jsx)(`span`,{className:`text-sm text-(--color-dsfr-text-mention-grey)`,children:`Tous les filtres retirés.`}):null]})},{})},j={name:`États`,render:()=>(0,v.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,v.jsxs)(h,{titre:`clickable`,children:[(0,v.jsx)(c,{variant:`clickable`,label:`Actif`}),(0,v.jsx)(c,{variant:`clickable`,disabled:!0,label:`Désactivé`})]}),(0,v.jsxs)(h,{titre:`selectable`,children:[(0,v.jsx)(c,{variant:`selectable`,pressed:!0,label:`Pressé`}),(0,v.jsx)(c,{variant:`selectable`,disabled:!0,label:`Désactivé`})]}),(0,v.jsxs)(h,{titre:`dismissible`,children:[(0,v.jsx)(c,{variant:`dismissible`,label:`Actif`}),(0,v.jsx)(c,{variant:`dismissible`,disabled:!0,label:`Désactivé`})]})]})},M={name:`Thématique (scope de couleurs)`,parameters:{controls:{disable:!0}},render:()=>(0,v.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,v.jsx)(`div`,{className:`flex flex-wrap items-center gap-2`,children:b.map(e=>(0,v.jsx)(m,{etiquette:{color1:e.color1,color2:e.color2},asChild:!0,children:(0,v.jsx)(c,{scopeThematique:!0,icon:(0,v.jsx)(a,{"aria-hidden":!0}),label:e.nom})},e.nom))}),(0,v.jsx)(`p`,{className:`max-w-xl text-sm text-(--color-dsfr-text-mention-grey)`,children:`Même composant, même structure : seules les variables de scope changent.`})]})},N={name:`Aperçu (tout)`,parameters:{controls:{disable:!0}},render:()=>(0,v.jsxs)(`div`,{className:`flex max-w-3xl flex-col gap-8`,children:[(0,v.jsx)(g,{titre:`Variantes d'interaction`,children:(0,v.jsx)(`div`,{className:`flex flex-col gap-2`,children:S.map(e=>(0,v.jsx)(h,{titre:e,children:(0,v.jsx)(c,{variant:e,label:`Catégorie`})},e))})}),(0,v.jsx)(g,{titre:`Tailles`,children:(0,v.jsx)(`div`,{className:`flex flex-col gap-2`,children:C.map(e=>(0,v.jsx)(h,{titre:e,children:(0,v.jsx)(c,{size:e,label:`Catégorie`})},e))})}),(0,v.jsx)(g,{titre:`Icône & teinte illustrative`,children:(0,v.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,v.jsx)(c,{icon:(0,v.jsx)(a,{"aria-hidden":!0}),label:`Thématique`}),(0,v.jsx)(c,{icon:(0,v.jsx)(i,{"aria-hidden":!0}),fond:`var(--color-dsfr-background-contrast-success)`,texte:`var(--color-dsfr-text-default-success)`,label:`Environnement`})]})}),(0,v.jsx)(g,{titre:`Scope thématique`,children:(0,v.jsx)(`div`,{className:`flex flex-wrap items-center gap-2`,children:b.map(e=>(0,v.jsx)(m,{etiquette:{color1:e.color1,color2:e.color2},asChild:!0,children:(0,v.jsx)(c,{scopeThematique:!0,icon:(0,v.jsx)(a,{"aria-hidden":!0}),label:e.nom})},e.nom))})}),(0,v.jsx)(g,{titre:`Groupe selectable (filtres)`,children:(0,v.jsx)(_,{})})]})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Par défaut'
}`,...w.parameters?.docs?.source},description:{story:`Cas par défaut, piloté par les contrôles.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">
      {VARIANTS.map(v => <Ligne key={v} titre={v}>
          <Etiquette variant={v} label="Catégorie" />
        </Ligne>)}
    </div>
}`,...T.parameters?.docs?.source},description:{story:`Les quatre modes d'interaction.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Avec icône',
  render: () => <div className="flex flex-wrap items-center gap-2">
      <Etiquette icon={<RiPriceTag3Line aria-hidden />} label="Thématique" />
      <Etiquette icon={<RiLeafLine aria-hidden />} fond="var(--color-dsfr-background-contrast-success)" texte="var(--color-dsfr-text-default-success)" label="Environnement" />
    </div>
}`,...E.parameters?.docs?.source},description:{story:"Icône gauche (sauf `dismissible`).",...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">
      {TAILLES.map(s => <Ligne key={s} titre={s}>
          <Etiquette size={s} label="Catégorie" />
        </Ligne>)}
    </div>
}`,...D.parameters?.docs?.source},description:{story:`Les trois tailles.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Sélectable (autonome)',
  render: () => {
    const Demo = () => {
      const [on, setOn] = useState(false);
      return <Etiquette variant="selectable" pressed={on} onClick={() => setOn(v => !v)} label={on ? 'Filtre actif' : 'Filtre'} />;
    };
    return <Demo />;
  }
}`,...O.parameters?.docs?.source},description:{story:"`selectable` autonome (filtre on/off, `pressed`).",...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Sélectable (groupe)',
  render: () => {
    const Demo = () => {
      const [sel, setSel] = useState<ReadonlySet<string | number>>(new Set(['envt']));
      const toggle = (v: string | number) => setSel(prev => {
        const next = new Set(prev);
        next.has(v) ? next.delete(v) : next.add(v);
        return next;
      });
      const options = [{
        value: 'envt',
        label: 'Environnement'
      }, {
        value: 'social',
        label: 'Social'
      }, {
        value: 'gouv',
        label: 'Gouvernance'
      }, {
        value: 'eco',
        label: 'Économie'
      }];
      return <EtiquetteGroupe valeurs={sel} onToggle={toggle}>
          {options.map(o => <Etiquette key={o.value} variant="selectable" value={o.value} label={o.label} />)}
        </EtiquetteGroupe>;
    };
    return <Demo />;
  }
}`,...k.parameters?.docs?.source},description:{story:"`selectable` en groupe (`EtiquetteGroupe`, multi-sélection partagée).",...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const Demo = () => {
      const [tags, setTags] = useState(['Environnement', 'Social', 'Île-de-France']);
      return <div className="flex flex-wrap items-center gap-2">
          {tags.map(t => <Etiquette key={t} variant="dismissible" label={t} onDismiss={() => setTags(prev => prev.filter(x => x !== t))} />)}
          {tags.length === 0 ? <span className="text-sm text-(--color-dsfr-text-mention-grey)">
              Tous les filtres retirés.
            </span> : null}
        </div>;
    };
    return <Demo />;
  }
}`,...A.parameters?.docs?.source},description:{story:"`dismissible` (rappel de filtre, croix).",...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'États',
  render: () => <div className="flex flex-col gap-3">
      <Ligne titre="clickable">
        <Etiquette variant="clickable" label="Actif" />
        <Etiquette variant="clickable" disabled label="Désactivé" />
      </Ligne>
      <Ligne titre="selectable">
        <Etiquette variant="selectable" pressed label="Pressé" />
        <Etiquette variant="selectable" disabled label="Désactivé" />
      </Ligne>
      <Ligne titre="dismissible">
        <Etiquette variant="dismissible" label="Actif" />
        <Etiquette variant="dismissible" disabled label="Désactivé" />
      </Ligne>
    </div>
}`,...j.parameters?.docs?.source},description:{story:"États : normal vs `disabled` sur les variantes interactives.",...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Thématique (scope de couleurs)',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-2">
        {THEMATIQUES.map(t => <ThematiqueScope key={t.nom} etiquette={{
        color1: t.color1,
        color2: t.color2
      }} asChild>
            <Etiquette scopeThematique icon={<RiPriceTag3Line aria-hidden />} label={t.nom} />
          </ThematiqueScope>)}
      </div>
      <p className="max-w-xl text-sm text-(--color-dsfr-text-mention-grey)">
        Même composant, même structure : seules les variables de scope changent.
      </p>
    </div>
}`,...M.parameters?.docs?.source},description:{story:"**Étiquette thématique (scope de couleurs).** Posée dans un `ThematiqueScope`, elle peint\navec `--thematique-bg` / `--thematique-main` via `scopeThematique`, sans connaître les hex.\nCas d'usage canonique d'une étiquette illustrative dans le produit.",...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Aperçu (tout)',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="flex max-w-3xl flex-col gap-8">
      <Section titre="Variantes d'interaction">
        <div className="flex flex-col gap-2">
          {VARIANTS.map(v => <Ligne key={v} titre={v}>
              <Etiquette variant={v} label="Catégorie" />
            </Ligne>)}
        </div>
      </Section>
      <Section titre="Tailles">
        <div className="flex flex-col gap-2">
          {TAILLES.map(s => <Ligne key={s} titre={s}>
              <Etiquette size={s} label="Catégorie" />
            </Ligne>)}
        </div>
      </Section>
      <Section titre="Icône & teinte illustrative">
        <div className="flex flex-wrap items-center gap-2">
          <Etiquette icon={<RiPriceTag3Line aria-hidden />} label="Thématique" />
          <Etiquette icon={<RiLeafLine aria-hidden />} fond="var(--color-dsfr-background-contrast-success)" texte="var(--color-dsfr-text-default-success)" label="Environnement" />
        </div>
      </Section>
      <Section titre="Scope thématique">
        <div className="flex flex-wrap items-center gap-2">
          {THEMATIQUES.map(t => <ThematiqueScope key={t.nom} etiquette={{
          color1: t.color1,
          color2: t.color2
        }} asChild>
              <Etiquette scopeThematique icon={<RiPriceTag3Line aria-hidden />} label={t.nom} />
            </ThematiqueScope>)}
        </div>
      </Section>
      <Section titre="Groupe selectable (filtres)">
        <ApercuGroupe />
      </Section>
    </div>
}`,...N.parameters?.docs?.source},description:{story:`**Aperçu** — toutes les facettes de l'étiquette sur une planche.`,...N.parameters?.docs?.description}}},P=[`ParDefaut`,`Variantes`,`AvecIcone`,`Tailles`,`SelectableAutonome`,`SelectableGroupe`,`Supprimable`,`Etats`,`Thematique`,`Apercu`]}))();export{N as Apercu,E as AvecIcone,j as Etats,w as ParDefaut,O as SelectableAutonome,k as SelectableGroupe,A as Supprimable,D as Tailles,M as Thematique,T as Variantes,P as __namedExportsOrder,x as default};