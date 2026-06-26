import{i as e}from"./preload-helper-DaCzexP6.js";import{u as t}from"./iframe-BeshMaXC.js";var n,r,i,a,o;e((()=>{n=t(),r=[{role:`control`,classe:`rounded-control`,valeur:`8px`,usage:`bouton, input`},{role:`card`,classe:`rounded-card`,valeur:`16px`,usage:`carte, tuile`},{role:`panel`,classe:`rounded-panel`,valeur:`24px`,usage:`CTA, hero`},{role:`tile`,classe:`rounded-tile`,valeur:`32px`,usage:`collage, dalle XL`},{role:`pill`,classe:`rounded-full`,valeur:`full`,usage:`chip, pastille`}],i={title:`Candidats/Vitrine/Socle/Échelle de rayons`,tags:[`autodocs`,`!manifest`],parameters:{espace:`vitrine`,layout:`fullscreen`}},a={render:()=>(0,n.jsx)(`div`,{className:`flex flex-wrap gap-8 bg-[#faf8f3] p-12`,children:r.map(e=>(0,n.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,n.jsx)(`div`,{className:`size-28 bg-white shadow-repos ring-1 ring-filet ${e.classe}`}),(0,n.jsxs)(`div`,{className:`text-center`,children:[(0,n.jsx)(`div`,{className:`text-sm font-semibold text-(--color-dsfr-text-title-grey)`,children:e.role}),(0,n.jsxs)(`div`,{className:`font-mono text-[11px] text-(--color-dsfr-text-mention-grey)`,children:[e.classe,` · `,e.valeur]}),(0,n.jsx)(`div`,{className:`text-[11px] text-(--color-dsfr-text-mention-grey)`,children:e.usage})]})]},e.role))})},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-8 bg-[#faf8f3] p-12">
      {RAYONS.map(r => <div key={r.role} className="flex flex-col items-center gap-2">
          <div className={\`size-28 bg-white shadow-repos ring-1 ring-filet \${r.classe}\`} />
          <div className="text-center">
            <div className="text-sm font-semibold text-(--color-dsfr-text-title-grey)">{r.role}</div>
            <div className="font-mono text-[11px] text-(--color-dsfr-text-mention-grey)">
              {r.classe} · {r.valeur}
            </div>
            <div className="text-[11px] text-(--color-dsfr-text-mention-grey)">{r.usage}</div>
          </div>
        </div>)}
    </div>
}`,...a.parameters?.docs?.source},description:{story:`Les 5 rôles, rendus via les classes réelles (source de vérité).`,...a.parameters?.docs?.description}}},o=[`Echelle`]}))();export{a as Echelle,o as __namedExportsOrder,i as default};