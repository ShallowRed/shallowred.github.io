import{i as e}from"./preload-helper-DaCzexP6.js";import{u as t}from"./iframe-BeshMaXC.js";import{u as n,yt as r}from"./ri-CHURB-Na.js";var i,a,o,s,c;e((()=>{i=t(),r(),a={title:`Candidats/Vitrine/Socle/Motion (doctrine)`,tags:[`autodocs`,`!manifest`],parameters:{espace:`vitrine`,layout:`fullscreen`,docs:{description:{component:`# Motion — doctrine de retenue

**Principe : la motion doit servir, pas s'annoncer.** On veut **peu de
transitions**, et seulement celles qui *confirment une interaction* sans
suggérer une affordance absente. La profondeur d'A1 (l'ombre) porte déjà le
feedback : inutile d'y ajouter du mouvement.

## ✅ Encouragé — feedback discret, l'objet ne bouge pas

- **Ombre \`repos → survol\`** sur une carte cliquable (\`hover:shadow-survol\`).
  C'est LE feedback par défaut.
- **Couleur / bordure** (\`hover:border-…\`, \`hover:text-…\`) — signale
  l'interactivité sans bruit.
- **Translation d'un *indice*** : une flèche qui avance de quelques pixels
  (\`group-hover:translate-x-0.5\`), une opacité révélée. L'indice bouge, pas le
  bloc.

## ❌ Banni — suggère une interactivité absente, ou trop voyant

- **Zoom / \`scale\` sur une image** : suggère qu'on peut manipuler la photo —
  faux signal. Retiré de la vitrine.
- **Soulèvement \`-translate-y\` du bloc** : l'objet « décolle » ; l'ombre seule
  fait le travail, plus calme. Retiré.
- **\`transition-all\`** (anime des propriétés non voulues), **durée ≥ 500ms** sur
  du hover (trop lent — viser < 300ms), **parallax**, entrées décoratives sur
  du texte.

## Durées

\`duration-200\` rapide (hover) · \`duration-300\` standard (drawer) ·
\`duration-500\` réservé aux rares transitions amples non-hover. Toujours une
\`transition-*\` **ciblée** (\`transition-shadow\`, \`transition-colors\`), jamais
\`transition-all\`. Respecter \`prefers-reduced-motion\` au câblage.

> **Garde-fou explorations/IA** : ne pas réintroduire de zoom photo, de
> soulèvement de carte, ni de \`transition-all\`. En cas de doute : ombre +
> couleur suffisent.`}}}},o={render:()=>(0,i.jsxs)(`div`,{className:`flex flex-wrap items-start gap-8 bg-surface-greige p-12`,children:[(0,i.jsx)(`a`,{href:`#`,onClick:e=>e.preventDefault(),className:`flex h-32 w-56 items-end rounded-card bg-white p-4 ring-1 ring-filet shadow-repos transition-shadow duration-200 hover:shadow-survol`,children:(0,i.jsxs)(`span`,{className:`text-sm font-semibold text-(--color-dsfr-text-title-grey)`,children:[`Carte cliquable`,(0,i.jsx)(`span`,{className:`block text-[11px] font-normal text-(--color-dsfr-text-mention-grey)`,children:`hover:shadow-survol (sans déplacement)`})]})}),(0,i.jsxs)(`a`,{href:`#`,onClick:e=>e.preventDefault(),className:`group inline-flex items-center gap-1.5 self-center text-sm font-semibold text-(--color-dsfr-text-action-high-blue-france)`,children:[`Lien avec indice`,(0,i.jsx)(n,{"aria-hidden":!0,className:`size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5`})]}),(0,i.jsx)(`a`,{href:`#`,onClick:e=>e.preventDefault(),className:`inline-flex items-center self-center rounded-full border border-(--color-dsfr-border-default-grey) px-4 py-2 text-sm font-medium text-(--color-dsfr-text-mention-grey) transition-colors duration-200 hover:border-(--color-dsfr-text-action-high-blue-france) hover:text-(--color-dsfr-text-action-high-blue-france)`,children:`Bordure + couleur`})]})},s={render:()=>(0,i.jsxs)(`div`,{className:`flex flex-wrap items-start gap-8 bg-surface-greige p-12`,children:[(0,i.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,i.jsx)(`span`,{className:`text-xs font-semibold text-red-700`,children:`✗ Zoom photo`}),(0,i.jsx)(`div`,{className:`group h-32 w-56 overflow-hidden rounded-card ring-1 ring-filet`,children:(0,i.jsx)(`div`,{className:`h-full w-full bg-gradient-to-br from-[#6b7a8f] to-[#c2b8a8] transition-transform duration-500 group-hover:scale-105`})}),(0,i.jsx)(`span`,{className:`text-[11px] text-(--color-dsfr-text-mention-grey)`,children:`suggère une manip de l'image`})]}),(0,i.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,i.jsx)(`span`,{className:`text-xs font-semibold text-red-700`,children:`✗ Soulèvement de carte`}),(0,i.jsx)(`div`,{className:`h-32 w-56 rounded-card bg-white p-4 ring-1 ring-filet shadow-repos transition-transform duration-200 hover:-translate-y-1.5`,children:(0,i.jsx)(`span`,{className:`text-sm text-(--color-dsfr-text-mention-grey)`,children:`l'objet « décolle »`})}),(0,i.jsx)(`span`,{className:`text-[11px] text-(--color-dsfr-text-mention-grey)`,children:`préférer l'ombre seule`})]})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-start gap-8 bg-surface-greige p-12">
      {/* ombre repos → survol, l'objet ne bouge pas */}
      <a href="#" onClick={e => e.preventDefault()} className="flex h-32 w-56 items-end rounded-card bg-white p-4 ring-1 ring-filet shadow-repos transition-shadow duration-200 hover:shadow-survol">
        <span className="text-sm font-semibold text-(--color-dsfr-text-title-grey)">
          Carte cliquable
          <span className="block text-[11px] font-normal text-(--color-dsfr-text-mention-grey)">
            hover:shadow-survol (sans déplacement)
          </span>
        </span>
      </a>

      {/* flèche-indice qui avance */}
      <a href="#" onClick={e => e.preventDefault()} className="group inline-flex items-center gap-1.5 self-center text-sm font-semibold text-(--color-dsfr-text-action-high-blue-france)">
        Lien avec indice
        <RiArrowRightUpLine aria-hidden className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>

      {/* couleur / bordure */}
      <a href="#" onClick={e => e.preventDefault()} className="inline-flex items-center self-center rounded-full border border-(--color-dsfr-border-default-grey) px-4 py-2 text-sm font-medium text-(--color-dsfr-text-mention-grey) transition-colors duration-200 hover:border-(--color-dsfr-text-action-high-blue-france) hover:text-(--color-dsfr-text-action-high-blue-france)">
        Bordure + couleur
      </a>
    </div>
}`,...o.parameters?.docs?.source},description:{story:`**Les effets encouragés, en vrai.** Survole : la carte réagit par l'ombre
(sans bouger), la flèche avance, le lien change de couleur. Aucun zoom, aucun
soulèvement.`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-start gap-8 bg-surface-greige p-12">
      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold text-red-700">✗ Zoom photo</span>
        <div className="group h-32 w-56 overflow-hidden rounded-card ring-1 ring-filet">
          <div className="h-full w-full bg-gradient-to-br from-[#6b7a8f] to-[#c2b8a8] transition-transform duration-500 group-hover:scale-105" />
        </div>
        <span className="text-[11px] text-(--color-dsfr-text-mention-grey)">
          suggère une manip de l'image
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold text-red-700">
          ✗ Soulèvement de carte
        </span>
        <div className="h-32 w-56 rounded-card bg-white p-4 ring-1 ring-filet shadow-repos transition-transform duration-200 hover:-translate-y-1.5">
          <span className="text-sm text-(--color-dsfr-text-mention-grey)">
            l'objet « décolle »
          </span>
        </div>
        <span className="text-[11px] text-(--color-dsfr-text-mention-grey)">
          préférer l'ombre seule
        </span>
      </div>
    </div>
}`,...s.parameters?.docs?.source},description:{story:`**Contre-exemples — ce qu'on évite.** Le zoom photo et le soulèvement de carte
sont montrés ici **uniquement pour mémoire** (marqués ✗) : ils suggèrent une
interactivité absente. Ne pas reproduire.`,...s.parameters?.docs?.description}}},c=[`Encourage`,`AEviter`]}))();export{s as AEviter,o as Encourage,c as __namedExportsOrder,a as default};