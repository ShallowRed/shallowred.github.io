import{i as e}from"./preload-helper-DaCzexP6.js";import{u as t}from"./iframe-BBC5HgxN.js";function n({classe:e,role:t,quand:n}){return(0,r.jsxs)(`div`,{className:`flex w-48 flex-col gap-1.5`,children:[(0,r.jsx)(`span`,{className:`text-[11px] font-medium text-(--color-dsfr-text-mention-grey)`,children:t}),(0,r.jsx)(`div`,{className:`flex h-24 items-end rounded-card bg-white p-3 ${e}`,children:(0,r.jsx)(`span`,{className:`font-mono text-[10px] text-(--color-dsfr-text-mention-grey)`,children:e||`(aucune)`})}),(0,r.jsx)(`span`,{className:`text-[10px] text-(--color-dsfr-text-mention-grey)`,children:n})]})}var r,i,a,o,s,c,l,u;e((()=>{r=t(),i=[{role:`Plate`,classe:``,quand:`au ras du fond`},{role:`Repos`,classe:`shadow-repos`,quand:`carte posée (défaut)`},{role:`Survol`,classe:`shadow-survol`,quand:`levée hover / focus`},{role:`Flottant`,classe:`shadow-flottant`,quand:`bloc détaché`},{role:`Vedette`,classe:`shadow-vedette`,quand:`mise en avant forte`}],a=[{bg:`#ffffff`,label:`Sur fond blanc`},{bg:`#f4f1ec`,label:`Sur fond greige (≈ section vitrine)`}],o={title:`Candidats/Vitrine/Socle/Échelle d’ombres`,tags:[`autodocs`,`!manifest`],parameters:{espace:`vitrine`,layout:`fullscreen`}},s={render:()=>(0,r.jsx)(`div`,{className:`flex flex-col`,children:a.map(e=>(0,r.jsxs)(`div`,{className:`p-10`,style:{background:e.bg},children:[(0,r.jsx)(`div`,{className:`mb-6 text-xs font-semibold uppercase tracking-wide text-(--color-dsfr-text-mention-grey)`,children:e.label}),(0,r.jsx)(`div`,{className:`flex flex-wrap gap-6`,children:i.map(e=>(0,r.jsx)(n,{classe:e.classe,role:e.role,quand:e.quand},e.role))})]},e.bg))})},c={render:()=>(0,r.jsx)(`div`,{className:`flex flex-wrap gap-8 bg-white p-12`,children:a.map(e=>(0,r.jsxs)(`div`,{className:`flex flex-col gap-3 rounded-panel p-6`,style:{background:e.bg},children:[(0,r.jsx)(`span`,{className:`text-[11px] font-medium text-(--color-dsfr-text-mention-grey)`,children:e.label}),(0,r.jsx)(`a`,{href:`#`,onClick:e=>e.preventDefault(),className:`flex h-28 w-56 items-end rounded-card bg-white p-4 text-xs text-(--color-dsfr-text-mention-grey) shadow-repos transition-shadow duration-200 hover:shadow-survol`,children:`shadow-repos → hover:shadow-survol`})]},e.bg))})},l={render:()=>(0,r.jsxs)(`div`,{className:`flex flex-col gap-8 bg-[#f4f1ec] p-12`,children:[(0,r.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,r.jsx)(`div`,{className:`grid size-11 place-items-center rounded-xl bg-white shadow-repos`,children:(0,r.jsx)(`span`,{className:`text-xs`,children:`●`})}),(0,r.jsxs)(`span`,{className:`text-sm text-(--color-dsfr-text-mention-grey)`,children:[`Pastille / tuile — `,(0,r.jsx)(`code`,{className:`font-mono text-xs`,children:`shadow-repos`})]})]}),(0,r.jsx)(`a`,{href:`#`,onClick:e=>e.preventDefault(),className:`flex max-w-md items-center gap-4 rounded-card bg-white p-5 shadow-repos transition-shadow duration-200 hover:shadow-survol`,children:(0,r.jsxs)(`span`,{className:`text-sm text-(--color-dsfr-text-mention-grey)`,children:[`Carte-lien — `,(0,r.jsx)(`code`,{className:`font-mono text-xs`,children:`shadow-repos`}),` →`,` `,(0,r.jsx)(`code`,{className:`font-mono text-xs`,children:`hover:shadow-survol`})]})}),(0,r.jsxs)(`div`,{className:`max-w-2xl rounded-panel bg-dsfr-background-action-high-blue-france p-8 text-white shadow-flottant`,children:[(0,r.jsx)(`p`,{className:`text-lg font-bold`,children:`Panneau CTA`}),(0,r.jsxs)(`p`,{className:`text-sm opacity-90`,children:[`Bloc détaché sur fond coloré — `,(0,r.jsx)(`code`,{className:`font-mono text-xs`,children:`shadow-flottant`})]})]}),(0,r.jsxs)(`div`,{className:`max-w-2xl rounded-panel bg-white p-10 shadow-vedette`,children:[(0,r.jsx)(`p`,{className:`text-lg font-bold text-(--color-dsfr-text-title-grey)`,children:`Hero / carte vedette`}),(0,r.jsxs)(`p`,{className:`text-sm text-(--color-dsfr-text-mention-grey)`,children:[`Mise en avant forte et unique — `,(0,r.jsx)(`code`,{className:`font-mono text-xs`,children:`shadow-vedette`})]})]})]})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col">
      {FONDS.map(f => <div key={f.bg} className="p-10" style={{
      background: f.bg
    }}>
          <div className="mb-6 text-xs font-semibold uppercase tracking-wide text-(--color-dsfr-text-mention-grey)">
            {f.label}
          </div>
          <div className="flex flex-wrap gap-6">
            {NIVEAUX.map(n => <Echantillon key={n.role} classe={n.classe} role={n.role} quand={n.quand} />)}
          </div>
        </div>)}
    </div>
}`,...s.parameters?.docs?.source},description:{story:`**L'échelle, sur les deux fonds réels.** C'est la story de référence : chaque
carte porte la classe indiquée, rendue par le token. Comparer blanc vs greige
fait apparaître la chaleur du taupe sur greige et sa discrétion sur blanc.`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-8 bg-white p-12">
      {FONDS.map(f => <div key={f.bg} className="flex flex-col gap-3 rounded-panel p-6" style={{
      background: f.bg
    }}>
          <span className="text-[11px] font-medium text-(--color-dsfr-text-mention-grey)">
            {f.label}
          </span>
          <a href="#" onClick={e => e.preventDefault()} className="flex h-28 w-56 items-end rounded-card bg-white p-4 text-xs text-(--color-dsfr-text-mention-grey) shadow-repos transition-shadow duration-200 hover:shadow-survol">
            shadow-repos → hover:shadow-survol
          </a>
        </div>)}
    </div>
}`,...c.parameters?.docs?.source},description:{story:"**Interaction repos → survol.** Le motif le plus fréquent : une carte cliquable\npasse de `shadow-repos` à `shadow-survol` au survol. Vérifie que la levée se\n*sent* sans être brutale (transition 200 ms). C'est exactement ce que pose\n`carte-contenu.tsx` en prod.",...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8 bg-[#f4f1ec] p-12">
      {/* repos — pastille sur tuile */}
      <div className="flex items-center gap-6">
        <div className="grid size-11 place-items-center rounded-xl bg-white shadow-repos">
          <span className="text-xs">●</span>
        </div>
        <span className="text-sm text-(--color-dsfr-text-mention-grey)">
          Pastille / tuile — <code className="font-mono text-xs">shadow-repos</code>
        </span>
      </div>

      {/* repos → survol — carte cliquable */}
      <a href="#" onClick={e => e.preventDefault()} className="flex max-w-md items-center gap-4 rounded-card bg-white p-5 shadow-repos transition-shadow duration-200 hover:shadow-survol">
        <span className="text-sm text-(--color-dsfr-text-mention-grey)">
          Carte-lien — <code className="font-mono text-xs">shadow-repos</code> →{' '}
          <code className="font-mono text-xs">hover:shadow-survol</code>
        </span>
      </a>

      {/* flottant — panneau CTA */}
      <div className="max-w-2xl rounded-panel bg-dsfr-background-action-high-blue-france p-8 text-white shadow-flottant">
        <p className="text-lg font-bold">Panneau CTA</p>
        <p className="text-sm opacity-90">
          Bloc détaché sur fond coloré — <code className="font-mono text-xs">shadow-flottant</code>
        </p>
      </div>

      {/* vedette — hero */}
      <div className="max-w-2xl rounded-panel bg-white p-10 shadow-vedette">
        <p className="text-lg font-bold text-(--color-dsfr-text-title-grey)">Hero / carte vedette</p>
        <p className="text-sm text-(--color-dsfr-text-mention-grey)">
          Mise en avant forte et unique — <code className="font-mono text-xs">shadow-vedette</code>
        </p>
      </div>
    </div>
}`,...l.parameters?.docs?.source},description:{story:`**Mise en situation.** Les niveaux posés sur des éléments représentatifs de la
Home, pour juger l'échelle en contexte plutôt qu'en abstrait : pastille (repos),
carte cliquable (repos→survol), panneau CTA (flottant), hero (vedette).`,...l.parameters?.docs?.description}}},u=[`Echelle`,`ReposVersSurvol`,`EnContexte`]}))();export{s as Echelle,l as EnContexte,c as ReposVersSurvol,u as __namedExportsOrder,o as default};