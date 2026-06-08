import{c as e,i as t}from"./preload-helper-DaCzexP6.js";import{P as n,u as r}from"./iframe-DUmzo3jT.js";import{_ as i,m as a,v as o}from"./ri-CeM5-Mwn.js";import{n as s,t as c}from"./utils-CEt5KEI0.js";import{n as l,p as u}from"./ri-UVkE9Ro9.js";var d,f,p,m,h,g,_,v,y,b,x=t((()=>{d=r(),f=e(n(),1),u(),s(),p={accent:`text-(--color-dsfr-text-action-high-blue-france)`,neutre:`text-(--color-dsfr-text-mention-grey)`},m={"16/9":`aspect-[16/9]`,"3/2":`aspect-[3/2]`,"4/3":`aspect-[4/3]`,"1/1":`aspect-square`},h={tiers:`w-1/3`,moitie:`w-1/2`},g={sm:`gap-2 p-4`,md:`gap-3 p-6`},_={sm:`text-base leading-6`,md:`text-lg leading-7`},v={sm:`text-xs leading-4`,md:`text-sm leading-5`},y={sm:`px-4 py-2`,md:`px-6 py-2.5`},b=f.forwardRef(function({titre:e,href:t,niveauTitre:n=`h3`,lienLibelle:r=`En savoir plus`,description:i,badge:a,surtitre:o,tonSurtitre:s=`accent`,meta:u,image:f,orientation:b=`verticale`,taille:x=`sm`,ratioImage:S=`16/9`,largeurImage:C=`tiers`,lien:w=`complet`,className:T},E){let D=n,O=b===`horizontale`,k=w===`picto`&&!!t,A=f?(0,d.jsx)(`div`,{className:c(`shrink-0 overflow-hidden bg-(--color-dsfr-background-alt-grey)`,O?h[C]:c(`w-full`,m[S]),`[&_img]:size-full [&_img]:object-cover`),children:f}):null,j=(0,d.jsx)(D,{className:c(`font-bold text-(--color-dsfr-text-title-grey)`,_[x]),children:k?(0,d.jsx)(`a`,{href:t,className:`after:absolute after:inset-0 after:content-[''] hover:underline`,children:e}):e}),M=(0,d.jsxs)(`div`,{className:`flex min-w-0 flex-1 flex-col`,children:[(0,d.jsxs)(`div`,{className:c(`flex flex-1 flex-col`,g[x]),children:[(a||o)&&(0,d.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[a,o&&(0,d.jsx)(`span`,{className:c(`text-sm font-medium`,p[s]),children:o})]}),(0,d.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[j,i&&(0,d.jsx)(`p`,{className:c(`text-(--color-dsfr-text-mention-grey)`,v[x]),children:i})]}),u&&(0,d.jsx)(`div`,{className:`mt-auto flex flex-wrap items-center gap-3 pt-1.5 text-xs text-(--color-dsfr-text-disabled-grey)`,children:u})]}),w===`complet`&&t&&(0,d.jsx)(`div`,{className:c(`border-t border-(--color-dsfr-border-default-grey)`,y[x]),children:(0,d.jsxs)(`a`,{href:t,className:`inline-flex items-center gap-1.5 text-sm font-medium text-(--color-dsfr-text-action-high-blue-france) hover:underline`,children:[(0,d.jsx)(`span`,{children:r}),(0,d.jsx)(l,{"aria-hidden":!0,className:`size-4`})]})})]});return(0,d.jsxs)(`div`,{ref:E,className:c(`relative overflow-hidden rounded-xl border border-(--color-dsfr-border-default-grey) bg-(--color-dsfr-background-default-grey)`,O?`flex flex-row`:`flex flex-col`,k&&`transition-shadow hover:shadow-[0_0_0_1px_var(--color-dsfr-border-default-grey-hover)]`,T),children:[A,M,w===`picto`&&t&&(0,d.jsx)(l,{className:`absolute bottom-3 right-3 size-5 text-(--color-dsfr-text-action-high-blue-france)`,"aria-hidden":!0})]})})})),S,C,w,T,E,D,O,k,A,j,M,N,P;t((()=>{S=r(),o(),x(),C={title:`Design system/Briques/Partagé/Carte de contenu`,component:b,tags:[`autodocs`],parameters:{docs:{description:{component:[`Carte de contenu versatile, partagée entre la vitrine et l’espace`,`membre moderne.`,``,"Axes de variation : `orientation` (verticale / horizontale),","`taille` (sm / md), `ratioImage`, `largeurImage`, et `lien`","(`complet` = pied CTA, `picto` = flèche dans le coin + carte","cliquable, `aucun`).",``,"Slots : `badge`, `surtitre`, `meta`, `image`, `description`."].join(`
`)}}},argTypes:{orientation:{control:`inline-radio`,options:[`verticale`,`horizontale`]},taille:{control:`inline-radio`,options:[`sm`,`md`]},ratioImage:{control:`inline-radio`,options:[`16/9`,`3/2`,`4/3`,`1/1`]},largeurImage:{control:`inline-radio`,options:[`tiers`,`moitie`]},lien:{control:`inline-radio`,options:[`complet`,`picto`,`aucun`]},niveauTitre:{control:`inline-radio`,options:[`h2`,`h3`,`h4`]}},decorators:[(e,t)=>{let{orientation:n,taille:r,titre:i}=t.args,a=`w-full`;return i&&(a=n===`horizontale`?`max-w-[480px]`:r===`md`?`max-w-[420px]`:`max-w-[320px]`),(0,S.jsx)(`div`,{className:`flex justify-center bg-dsfr-background-default-grey p-8 font-sans text-(--color-dsfr-text-default-grey)`,children:(0,S.jsx)(`div`,{className:`w-full ${a}`,children:(0,S.jsx)(e,{})})})}]},w=()=>(0,S.jsx)(`img`,{src:`https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=640&q=70`,alt:``}),T=({children:e})=>(0,S.jsx)(`span`,{className:`rounded bg-(--color-dsfr-background-alt-grey) px-1.5 py-0.5 text-xs font-bold uppercase text-(--color-dsfr-text-mention-grey)`,children:e}),E=()=>(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(`span`,{className:`inline-flex items-center gap-1`,children:[(0,S.jsx)(a,{className:`size-3`,"aria-hidden":!0}),`Paris`]}),(0,S.jsxs)(`span`,{className:`inline-flex items-center gap-1`,children:[(0,S.jsx)(i,{className:`size-3`,"aria-hidden":!0}),`2 h`]})]}),D={name:`Verticale — SM`,args:{titre:`Titre de la carte`,description:`Description optionnelle de la carte.`,href:`#`,badge:(0,S.jsx)(T,{children:`Rencontre`}),meta:(0,S.jsx)(E,{}),image:(0,S.jsx)(w,{}),orientation:`verticale`,taille:`sm`,lien:`complet`,lienLibelle:`Libellé`}},O={name:`Verticale — MD`,args:{titre:`Titre de la carte`,description:`Description optionnelle de la carte sur deux lignes environ.`,href:`#`,badge:(0,S.jsx)(T,{children:`Guide`}),meta:(0,S.jsx)(E,{}),image:(0,S.jsx)(w,{}),orientation:`verticale`,taille:`md`,lien:`complet`,lienLibelle:`Libellé`}},k={name:`Horizontale (MD)`,args:{titre:`Titre de la carte`,description:`Description optionnelle de la carte.`,href:`#`,surtitre:`12 juin 2026`,meta:(0,S.jsx)(E,{}),image:(0,S.jsx)(w,{}),orientation:`horizontale`,taille:`md`,largeurImage:`tiers`,lien:`complet`,lienLibelle:`Voir l’événement`}},A={name:`Lien picto (carte cliquable)`,parameters:{docs:{description:{story:`Le pied CTA est remplacé par une flèche dans le coin. La carte entière devient cliquable (lien agrandi sur le titre).`}}},args:{titre:`Actualité sans pied CTA`,description:`Toute la carte est cliquable, une flèche signale le lien.`,href:`#`,surtitre:`Actualité`,image:(0,S.jsx)(w,{}),orientation:`verticale`,taille:`sm`,lien:`picto`}},j={name:`Sans image`,args:{titre:`Ressource documentaire`,description:`Une carte sans zone visuelle, utile pour des listes denses.`,href:`#`,badge:(0,S.jsx)(T,{children:`Guide`}),meta:(0,S.jsx)(E,{}),orientation:`verticale`,taille:`sm`,lien:`complet`,lienLibelle:`Télécharger`}},M={name:`Ratio image 1/1`,args:{titre:`Image carrée`,description:`Variante de ratio d’image.`,href:`#`,image:(0,S.jsx)(w,{}),orientation:`verticale`,taille:`sm`,ratioImage:`1/1`,lien:`picto`}},N={name:`Galerie (grille de 3)`,parameters:{layout:`fullscreen`},render:()=>(0,S.jsxs)(`div`,{className:`mx-auto grid max-w-5xl grid-cols-1 gap-6 p-8 sm:grid-cols-2 lg:grid-cols-3`,children:[(0,S.jsx)(b,{titre:`Premier contenu`,description:`Description courte.`,href:`#`,badge:(0,S.jsx)(T,{children:`Guide`}),image:(0,S.jsx)(w,{}),lien:`picto`}),(0,S.jsx)(b,{titre:`Deuxième contenu`,description:`Description courte.`,href:`#`,badge:(0,S.jsx)(T,{children:`Rencontre`}),image:(0,S.jsx)(w,{}),lien:`picto`}),(0,S.jsx)(b,{titre:`Troisième contenu`,description:`Description courte.`,href:`#`,badge:(0,S.jsx)(T,{children:`Actualité`}),image:(0,S.jsx)(w,{}),lien:`picto`})]})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Verticale — SM',
  args: {
    titre: 'Titre de la carte',
    description: 'Description optionnelle de la carte.',
    href: '#',
    badge: <Pastille>Rencontre</Pastille>,
    meta: <MetaExemple />,
    image: <ImageExemple />,
    orientation: 'verticale',
    taille: 'sm',
    lien: 'complet',
    lienLibelle: 'Libellé'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Verticale — MD',
  args: {
    titre: 'Titre de la carte',
    description: 'Description optionnelle de la carte sur deux lignes environ.',
    href: '#',
    badge: <Pastille>Guide</Pastille>,
    meta: <MetaExemple />,
    image: <ImageExemple />,
    orientation: 'verticale',
    taille: 'md',
    lien: 'complet',
    lienLibelle: 'Libellé'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Horizontale (MD)',
  args: {
    titre: 'Titre de la carte',
    description: 'Description optionnelle de la carte.',
    href: '#',
    surtitre: '12 juin 2026',
    meta: <MetaExemple />,
    image: <ImageExemple />,
    orientation: 'horizontale',
    taille: 'md',
    largeurImage: 'tiers',
    lien: 'complet',
    lienLibelle: 'Voir l’événement'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Lien picto (carte cliquable)',
  parameters: {
    docs: {
      description: {
        story: 'Le pied CTA est remplacé par une flèche dans le coin. La carte entière devient cliquable (lien agrandi sur le titre).'
      }
    }
  },
  args: {
    titre: 'Actualité sans pied CTA',
    description: 'Toute la carte est cliquable, une flèche signale le lien.',
    href: '#',
    surtitre: 'Actualité',
    image: <ImageExemple />,
    orientation: 'verticale',
    taille: 'sm',
    lien: 'picto'
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Sans image',
  args: {
    titre: 'Ressource documentaire',
    description: 'Une carte sans zone visuelle, utile pour des listes denses.',
    href: '#',
    badge: <Pastille>Guide</Pastille>,
    meta: <MetaExemple />,
    orientation: 'verticale',
    taille: 'sm',
    lien: 'complet',
    lienLibelle: 'Télécharger'
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Ratio image 1/1',
  args: {
    titre: 'Image carrée',
    description: 'Variante de ratio d’image.',
    href: '#',
    image: <ImageExemple />,
    orientation: 'verticale',
    taille: 'sm',
    ratioImage: '1/1',
    lien: 'picto'
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Galerie (grille de 3)',
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 p-8 sm:grid-cols-2 lg:grid-cols-3">
      <CarteContenu titre="Premier contenu" description="Description courte." href="#" badge={<Pastille>Guide</Pastille>} image={<ImageExemple />} lien="picto" />
      <CarteContenu titre="Deuxième contenu" description="Description courte." href="#" badge={<Pastille>Rencontre</Pastille>} image={<ImageExemple />} lien="picto" />
      <CarteContenu titre="Troisième contenu" description="Description courte." href="#" badge={<Pastille>Actualité</Pastille>} image={<ImageExemple />} lien="picto" />
    </div>
}`,...N.parameters?.docs?.source}}},P=[`VerticaleSm`,`VerticaleMd`,`Horizontale`,`LienPicto`,`SansImage`,`RatioCarre`,`Galerie`]}))();export{N as Galerie,k as Horizontale,A as LienPicto,M as RatioCarre,j as SansImage,O as VerticaleMd,D as VerticaleSm,P as __namedExportsOrder,C as default};