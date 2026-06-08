import{c as e,i as t}from"./preload-helper-DaCzexP6.js";import{P as n,u as r}from"./iframe-D8970kkn.js";import{D as i,E as a,b as o,i as s}from"./ri-CCUM8ZFQ.js";import{n as c,t as l}from"./utils-CEt5KEI0.js";var u,d,f,p,m,h,g,_,v,y,b=t((()=>{u=r(),d=e(n(),1),i(),c(),f={accent:`text-(--color-dsfr-text-action-high-blue-france)`,neutre:`text-(--color-dsfr-text-mention-grey)`},p={"16/9":`aspect-[16/9]`,"3/2":`aspect-[3/2]`,"4/3":`aspect-[4/3]`,"1/1":`aspect-square`},m={tiers:`w-1/3`,moitie:`w-1/2`},h={sm:`gap-2 p-4`,md:`gap-3 p-6`},g={sm:`text-base leading-6`,md:`text-lg leading-7`},_={sm:`text-xs leading-4`,md:`text-sm leading-5`},v={sm:`px-4 py-2`,md:`px-6 py-2.5`},y=d.forwardRef(function({titre:e,href:t,niveauTitre:n=`h3`,lienLibelle:r=`En savoir plus`,description:i,badge:a,surtitre:o,tonSurtitre:c=`accent`,meta:d,image:y,orientation:b=`verticale`,taille:x=`sm`,ratioImage:S=`16/9`,largeurImage:C=`tiers`,lien:w=`complet`,className:T},E){let D=n,O=b===`horizontale`,k=w===`picto`&&!!t,A=y?(0,u.jsx)(`div`,{className:l(`shrink-0 overflow-hidden bg-(--color-dsfr-background-alt-grey)`,O?m[C]:l(`w-full`,p[S]),`[&_img]:size-full [&_img]:object-cover`),children:y}):null,j=(0,u.jsx)(D,{className:l(`font-bold text-(--color-dsfr-text-title-grey)`,g[x]),children:k?(0,u.jsx)(`a`,{href:t,className:`after:absolute after:inset-0 after:content-[''] hover:underline`,children:e}):e}),M=(0,u.jsxs)(`div`,{className:`flex min-w-0 flex-1 flex-col`,children:[(0,u.jsxs)(`div`,{className:l(`flex flex-1 flex-col`,h[x]),children:[(a||o)&&(0,u.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[a,o&&(0,u.jsx)(`span`,{className:l(`text-sm font-medium`,f[c]),children:o})]}),(0,u.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[j,i&&(0,u.jsx)(`p`,{className:l(`text-(--color-dsfr-text-mention-grey)`,_[x]),children:i})]}),d&&(0,u.jsx)(`div`,{className:`mt-auto flex flex-wrap items-center gap-3 pt-1.5 text-xs text-(--color-dsfr-text-disabled-grey)`,children:d})]}),w===`complet`&&t&&(0,u.jsx)(`div`,{className:l(`border-t border-(--color-dsfr-border-default-grey)`,v[x]),children:(0,u.jsxs)(`a`,{href:t,className:`inline-flex items-center gap-1.5 text-sm font-medium text-(--color-dsfr-text-action-high-blue-france) hover:underline`,children:[(0,u.jsx)(`span`,{children:r}),(0,u.jsx)(s,{"aria-hidden":!0,className:`size-4`})]})})]});return(0,u.jsxs)(`div`,{ref:E,className:l(`relative overflow-hidden rounded-xl border border-(--color-dsfr-border-default-grey) bg-(--color-dsfr-background-default-grey)`,O?`flex flex-row`:`flex flex-col`,k&&`transition-shadow hover:shadow-[0_0_0_1px_var(--color-dsfr-border-default-grey-hover)]`,T),children:[A,M,w===`picto`&&t&&(0,u.jsx)(s,{className:`absolute bottom-3 right-3 size-5 text-(--color-dsfr-text-action-high-blue-france)`,"aria-hidden":!0})]})})})),x,S,C,w,T,E,D,O,k,A,j,M,N;t((()=>{x=r(),i(),b(),S={title:`Design system/Briques/Partagé/Carte de contenu`,component:y,tags:[`autodocs`],parameters:{docs:{description:{component:[`Carte de contenu versatile, partagée entre la vitrine et l’espace`,`membre moderne.`,``,"Axes de variation : `orientation` (verticale / horizontale),","`taille` (sm / md), `ratioImage`, `largeurImage`, et `lien`","(`complet` = pied CTA, `picto` = flèche dans le coin + carte","cliquable, `aucun`).",``,"Slots : `badge`, `surtitre`, `meta`, `image`, `description`."].join(`
`)}}},argTypes:{orientation:{control:`inline-radio`,options:[`verticale`,`horizontale`]},taille:{control:`inline-radio`,options:[`sm`,`md`]},ratioImage:{control:`inline-radio`,options:[`16/9`,`3/2`,`4/3`,`1/1`]},largeurImage:{control:`inline-radio`,options:[`tiers`,`moitie`]},lien:{control:`inline-radio`,options:[`complet`,`picto`,`aucun`]},niveauTitre:{control:`inline-radio`,options:[`h2`,`h3`,`h4`]}},decorators:[(e,t)=>{let{orientation:n,taille:r,titre:i}=t.args,a=`w-full`;return i&&(a=n===`horizontale`?`max-w-[480px]`:r===`md`?`max-w-[420px]`:`max-w-[320px]`),(0,x.jsx)(`div`,{className:`flex justify-center bg-dsfr-background-default-grey p-8 font-sans text-(--color-dsfr-text-default-grey)`,children:(0,x.jsx)(`div`,{className:`w-full ${a}`,children:(0,x.jsx)(e,{})})})}]},C=()=>(0,x.jsx)(`img`,{src:`https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=640&q=70`,alt:``}),w=({children:e})=>(0,x.jsx)(`span`,{className:`rounded bg-(--color-dsfr-background-alt-grey) px-1.5 py-0.5 text-xs font-bold uppercase text-(--color-dsfr-text-mention-grey)`,children:e}),T=()=>(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(`span`,{className:`inline-flex items-center gap-1`,children:[(0,x.jsx)(o,{className:`size-3`,"aria-hidden":!0}),`Paris`]}),(0,x.jsxs)(`span`,{className:`inline-flex items-center gap-1`,children:[(0,x.jsx)(a,{className:`size-3`,"aria-hidden":!0}),`2 h`]})]}),E={name:`Verticale — SM`,args:{titre:`Titre de la carte`,description:`Description optionnelle de la carte.`,href:`#`,badge:(0,x.jsx)(w,{children:`Rencontre`}),meta:(0,x.jsx)(T,{}),image:(0,x.jsx)(C,{}),orientation:`verticale`,taille:`sm`,lien:`complet`,lienLibelle:`Libellé`}},D={name:`Verticale — MD`,args:{titre:`Titre de la carte`,description:`Description optionnelle de la carte sur deux lignes environ.`,href:`#`,badge:(0,x.jsx)(w,{children:`Guide`}),meta:(0,x.jsx)(T,{}),image:(0,x.jsx)(C,{}),orientation:`verticale`,taille:`md`,lien:`complet`,lienLibelle:`Libellé`}},O={name:`Horizontale (MD)`,args:{titre:`Titre de la carte`,description:`Description optionnelle de la carte.`,href:`#`,surtitre:`12 juin 2026`,meta:(0,x.jsx)(T,{}),image:(0,x.jsx)(C,{}),orientation:`horizontale`,taille:`md`,largeurImage:`tiers`,lien:`complet`,lienLibelle:`Voir l’événement`}},k={name:`Lien picto (carte cliquable)`,parameters:{docs:{description:{story:`Le pied CTA est remplacé par une flèche dans le coin. La carte entière devient cliquable (lien agrandi sur le titre).`}}},args:{titre:`Actualité sans pied CTA`,description:`Toute la carte est cliquable, une flèche signale le lien.`,href:`#`,surtitre:`Actualité`,image:(0,x.jsx)(C,{}),orientation:`verticale`,taille:`sm`,lien:`picto`}},A={name:`Sans image`,args:{titre:`Ressource documentaire`,description:`Une carte sans zone visuelle, utile pour des listes denses.`,href:`#`,badge:(0,x.jsx)(w,{children:`Guide`}),meta:(0,x.jsx)(T,{}),orientation:`verticale`,taille:`sm`,lien:`complet`,lienLibelle:`Télécharger`}},j={name:`Ratio image 1/1`,args:{titre:`Image carrée`,description:`Variante de ratio d’image.`,href:`#`,image:(0,x.jsx)(C,{}),orientation:`verticale`,taille:`sm`,ratioImage:`1/1`,lien:`picto`}},M={name:`Galerie (grille de 3)`,parameters:{layout:`fullscreen`},render:()=>(0,x.jsxs)(`div`,{className:`mx-auto grid max-w-5xl grid-cols-1 gap-6 p-8 sm:grid-cols-2 lg:grid-cols-3`,children:[(0,x.jsx)(y,{titre:`Premier contenu`,description:`Description courte.`,href:`#`,badge:(0,x.jsx)(w,{children:`Guide`}),image:(0,x.jsx)(C,{}),lien:`picto`}),(0,x.jsx)(y,{titre:`Deuxième contenu`,description:`Description courte.`,href:`#`,badge:(0,x.jsx)(w,{children:`Rencontre`}),image:(0,x.jsx)(C,{}),lien:`picto`}),(0,x.jsx)(y,{titre:`Troisième contenu`,description:`Description courte.`,href:`#`,badge:(0,x.jsx)(w,{children:`Actualité`}),image:(0,x.jsx)(C,{}),lien:`picto`})]})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Galerie (grille de 3)',
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 p-8 sm:grid-cols-2 lg:grid-cols-3">
      <CarteContenu titre="Premier contenu" description="Description courte." href="#" badge={<Pastille>Guide</Pastille>} image={<ImageExemple />} lien="picto" />
      <CarteContenu titre="Deuxième contenu" description="Description courte." href="#" badge={<Pastille>Rencontre</Pastille>} image={<ImageExemple />} lien="picto" />
      <CarteContenu titre="Troisième contenu" description="Description courte." href="#" badge={<Pastille>Actualité</Pastille>} image={<ImageExemple />} lien="picto" />
    </div>
}`,...M.parameters?.docs?.source}}},N=[`VerticaleSm`,`VerticaleMd`,`Horizontale`,`LienPicto`,`SansImage`,`RatioCarre`,`Galerie`]}))();export{M as Galerie,O as Horizontale,k as LienPicto,j as RatioCarre,A as SansImage,D as VerticaleMd,E as VerticaleSm,N as __namedExportsOrder,S as default};