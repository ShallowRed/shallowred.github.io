import{i as e}from"./preload-helper-DaCzexP6.js";import{u as t}from"./iframe-BeshMaXC.js";import{ct as n,mt as r,yt as i}from"./ri-CHURB-Na.js";import{i as a,t as o}from"./badge-etiquette-tx0gv_0Q.js";import{i as s,r as c,t as l}from"./leviers-BqVaDXal.js";function u({titre:e,children:t}){return(0,f.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,f.jsx)(`span`,{className:`w-20 text-xs font-semibold text-(--color-dsfr-text-mention-grey)`,children:e}),(0,f.jsx)(`div`,{className:`flex flex-wrap items-center gap-2`,children:t})]})}function d({titre:e,children:t}){return(0,f.jsxs)(`section`,{className:`flex flex-col gap-3`,children:[(0,f.jsx)(`h3`,{className:`text-sm font-bold uppercase tracking-wide text-(--color-dsfr-text-title-grey)`,children:e}),t]})}var f,p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{f=t(),i(),a(),s(),p={title:`Candidats/Partagé/Badges & étiquettes/Badge`,component:o,tags:[`autodocs`,`!manifest`],decorators:[e=>(0,f.jsx)(`div`,{style:c(l[`chrome-neutre`]),children:(0,f.jsx)(e,{})})],args:{label:`Libellé badge`,variant:`default`,size:`md`},argTypes:{type:{control:`inline-radio`,options:[void 0,`info`,`success`,`new`,`warning`,`error`]},variant:{control:`inline-radio`,options:[`default`,`soft`,`outline`]},size:{control:`inline-radio`,options:[`sm`,`md`,`lg`]},icon:{control:!1}},parameters:{docs:{description:{component:"**Badge — état / statut.** Pastille **carrée** qui signale un **état** (l'`Etiquette`,\narrondie, catégorise). Texte en MAJUSCULES (parti-pris CSP, écart assumé au DSFR strict)."}}}},m=[`info`,`success`,`new`,`warning`,`error`],h=[`default`,`soft`,`outline`],g=[`sm`,`md`,`lg`],_={},v={render:()=>(0,f.jsx)(`div`,{className:`flex flex-col gap-3`,children:h.map(e=>(0,f.jsx)(u,{titre:e,children:(0,f.jsx)(o,{variant:e,label:`Libellé badge`})},e))})},y={render:()=>(0,f.jsx)(`div`,{className:`flex flex-col gap-3`,children:g.map(e=>(0,f.jsx)(u,{titre:e,children:(0,f.jsx)(o,{size:e,label:`Libellé badge`})},e))})},b={render:()=>(0,f.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,f.jsx)(o,{icon:(0,f.jsx)(r,{"aria-hidden":!0}),label:`En vedette`}),(0,f.jsx)(o,{icon:(0,f.jsx)(n,{"aria-hidden":!0}),variant:`outline`,label:`Système`})]})},x={render:()=>(0,f.jsx)(`div`,{className:`flex flex-col gap-3`,children:h.map(e=>(0,f.jsxs)(u,{titre:e,children:[(0,f.jsx)(o,{variant:e,color:`var(--color-dsfr-text-title-blue-france)`,label:`Bleu france`}),(0,f.jsx)(o,{variant:e,color:`#9333ea`,label:`Violet`})]},e))})},S={render:()=>(0,f.jsx)(`div`,{className:`flex flex-col gap-3`,children:h.map(e=>(0,f.jsx)(u,{titre:e,children:m.map(t=>(0,f.jsx)(o,{type:t,variant:e,label:t},t))},e))})},C={name:`Aperçu (tout)`,parameters:{controls:{disable:!0}},render:()=>(0,f.jsxs)(`div`,{className:`flex max-w-3xl flex-col gap-8`,children:[(0,f.jsx)(d,{titre:`Variants`,children:(0,f.jsx)(`div`,{className:`flex flex-col gap-2`,children:h.map(e=>(0,f.jsx)(u,{titre:e,children:(0,f.jsx)(o,{variant:e,label:`Libellé badge`})},e))})}),(0,f.jsx)(d,{titre:`Tailles`,children:(0,f.jsx)(`div`,{className:`flex flex-col gap-2`,children:g.map(e=>(0,f.jsx)(u,{titre:e,children:(0,f.jsx)(o,{size:e,label:`Libellé badge`})},e))})}),(0,f.jsx)(d,{titre:`Types × variants`,children:(0,f.jsx)(`div`,{className:`flex flex-col gap-2`,children:h.map(e=>(0,f.jsx)(u,{titre:e,children:m.map(t=>(0,f.jsx)(o,{type:t,variant:e,label:t},t))},e))})}),(0,f.jsx)(d,{titre:`Icône & couleur personnalisées`,children:(0,f.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,f.jsx)(o,{icon:(0,f.jsx)(r,{"aria-hidden":!0}),label:`En vedette`}),(0,f.jsx)(o,{icon:(0,f.jsx)(n,{"aria-hidden":!0}),variant:`outline`,label:`Système`}),(0,f.jsx)(o,{color:`var(--color-dsfr-text-title-blue-france)`,label:`Bleu france`}),(0,f.jsx)(o,{color:`#9333ea`,variant:`soft`,label:`Violet`}),(0,f.jsx)(o,{color:`#9333ea`,variant:`outline`,label:`Violet`})]})})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{}`,..._.parameters?.docs?.source},description:{story:`Cas par défaut, piloté par les contrôles.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">
      {VARIANTS.map(v => <Ligne key={v} titre={v}>
          <Badge variant={v} label="Libellé badge" />
        </Ligne>)}
    </div>
}`,...v.parameters?.docs?.source},description:{story:`Les trois intensités de style.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">
      {TAILLES.map(s => <Ligne key={s} titre={s}>
          <Badge size={s} label="Libellé badge" />
        </Ligne>)}
    </div>
}`,...y.parameters?.docs?.source},description:{story:`Les trois tailles.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-2">
      <Badge icon={<RiStarFill aria-hidden />} label="En vedette" />
      <Badge icon={<RiSettings3Fill aria-hidden />} variant="outline" label="Système" />
    </div>
}`,...b.parameters?.docs?.source},description:{story:"Icône personnalisée (exclusive avec `type`).",...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">
      {VARIANTS.map(v => <Ligne key={v} titre={v}>
          <Badge variant={v} color="var(--color-dsfr-text-title-blue-france)" label="Bleu france" />
          <Badge variant={v} color="#9333ea" label="Violet" />
        </Ligne>)}
    </div>
}`,...x.parameters?.docs?.source},description:{story:"Couleur personnalisée (exclusive avec `type`).",...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">
      {VARIANTS.map(v => <Ligne key={v} titre={v}>
          {TYPES.map(t => <Badge key={t} type={t} variant={v} label={t} />)}
        </Ligne>)}
    </div>
}`,...S.parameters?.docs?.source},description:{story:"Matrice complète `type` × `variant` (couleur + icône préconfigurées).",...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Aperçu (tout)',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="flex max-w-3xl flex-col gap-8">
      <Section titre="Variants">
        <div className="flex flex-col gap-2">
          {VARIANTS.map(v => <Ligne key={v} titre={v}>
              <Badge variant={v} label="Libellé badge" />
            </Ligne>)}
        </div>
      </Section>
      <Section titre="Tailles">
        <div className="flex flex-col gap-2">
          {TAILLES.map(s => <Ligne key={s} titre={s}>
              <Badge size={s} label="Libellé badge" />
            </Ligne>)}
        </div>
      </Section>
      <Section titre="Types × variants">
        <div className="flex flex-col gap-2">
          {VARIANTS.map(v => <Ligne key={v} titre={v}>
              {TYPES.map(t => <Badge key={t} type={t} variant={v} label={t} />)}
            </Ligne>)}
        </div>
      </Section>
      <Section titre="Icône & couleur personnalisées">
        <div className="flex flex-wrap items-center gap-2">
          <Badge icon={<RiStarFill aria-hidden />} label="En vedette" />
          <Badge icon={<RiSettings3Fill aria-hidden />} variant="outline" label="Système" />
          <Badge color="var(--color-dsfr-text-title-blue-france)" label="Bleu france" />
          <Badge color="#9333ea" variant="soft" label="Violet" />
          <Badge color="#9333ea" variant="outline" label="Violet" />
        </div>
      </Section>
    </div>
}`,...C.parameters?.docs?.source},description:{story:`**Aperçu** — toutes les facettes du Badge sur une planche, pour relire la cohérence d'un coup d'œil.`,...C.parameters?.docs?.description}}},w=[`Default`,`Variants`,`Sizes`,`CustomIcon`,`CustomColor`,`WithType`,`Apercu`]}))();export{C as Apercu,x as CustomColor,b as CustomIcon,_ as Default,y as Sizes,v as Variants,S as WithType,w as __namedExportsOrder,p as default};