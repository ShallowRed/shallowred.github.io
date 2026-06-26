import{i as e}from"./preload-helper-DaCzexP6.js";import{u as t}from"./iframe-BeshMaXC.js";import{C as n,H as r,Y as i,_ as a,ht as o,yt as s}from"./ri-CHURB-Na.js";import{i as c,n as l,t as u}from"./badge-etiquette-tx0gv_0Q.js";import{n as d,t as f}from"./thematique-scope-5roLUM-1.js";import{n as p,t as m}from"./carte-contenu-CidE4qt0.js";var h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;e((()=>{h=t(),s(),d(),c(),p(),g={title:`Candidats/Partagé/Briques/Carte de contenu`,component:m,tags:[`autodocs`],parameters:{docs:{description:{component:[`Carte de contenu versatile, partagée entre la vitrine et l’espace`,`membre. C’est l’**instanciation** (slots et libellés) qui définit`,`l’usage : événement, actualité, ressource, amorce, carte de thématique…`,``,`Le détail des props est dans la table de contrôles ci-dessous ; chaque`,"story illustre un registre. À retenir : `categorie` → **Etiquette**","(pill, éditorial), `etat` → **Badge** (carré, système), `meta` → donnée","neutre en gris ; la teinte thématique vient d’un `ThematiqueScope`",`parent (cf. story dédiée).`].join(`
`)}}},argTypes:{orientation:{control:`inline-radio`,options:[`verticale`,`horizontale`]},taille:{control:`inline-radio`,options:[`sm`,`md`,`lg`]},ratioImage:{control:`select`,options:[`16/9`,`3/2`,`4/3`,`1/1`,`2/1`,`5/2`,`12/5`,`auto`]},largeurImage:{control:`inline-radio`,options:[`tiers`,`deuxCinquiemes`,`moitie`]},lien:{control:`inline-radio`,options:[`complet`,`picto`,`bloc`,`aucun`]},piedBordure:{control:`boolean`},niveauTitre:{control:`inline-radio`,options:[`h2`,`h3`,`h4`]},teinte:{control:`inline-radio`,options:[`neutre`,`thematique`]},as:{control:`inline-radio`,options:[`a`,`button`]},...Object.fromEntries([`titre`,`description`,`categorie`,`etat`,`meta`,`image`,`medaillon`,`marqueurImage`,`actionPied`,`onActiver`,`href`,`lienLibelle`,`style`,`className`].map(e=>[e,{table:{disable:!0}}]))},decorators:[(e,t)=>{let{orientation:n,taille:r,titre:i}=t.args,a={sm:`max-w-[320px]`,md:`max-w-[420px]`,lg:`max-w-[480px]`},o=`w-full`;return i&&(o=n===`horizontale`?`max-w-[520px]`:a[r??`sm`]??`max-w-[320px]`),(0,h.jsx)(`div`,{className:`flex justify-center bg-dsfr-background-default-grey p-8 font-sans text-(--color-dsfr-text-default-grey)`,children:(0,h.jsx)(`div`,{className:`w-full ${o}`,children:(0,h.jsx)(e,{})})})}]},_=()=>(0,h.jsx)(`img`,{src:`https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=640&q=70`,alt:``}),v=({children:e})=>(0,h.jsx)(l,{size:`sm`,children:e}),y=()=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(`span`,{className:`inline-flex items-center gap-1`,children:[(0,h.jsx)(i,{className:`size-3`,"aria-hidden":!0}),`Paris`]}),(0,h.jsxs)(`span`,{className:`inline-flex items-center gap-1`,children:[(0,h.jsx)(o,{className:`size-3`,"aria-hidden":!0}),`2 h`]})]}),b={name:`Verticale — SM`,args:{titre:`Titre de la carte`,description:`Description optionnelle de la carte.`,href:`#`,categorie:(0,h.jsx)(v,{children:`Rencontre`}),meta:(0,h.jsx)(y,{}),image:(0,h.jsx)(_,{}),orientation:`verticale`,taille:`sm`,lien:`complet`,lienLibelle:`Libellé`}},x={name:`Verticale — MD`,args:{titre:`Titre de la carte`,description:`Description optionnelle de la carte sur deux lignes environ.`,href:`#`,categorie:(0,h.jsx)(v,{children:`Guide`}),meta:(0,h.jsx)(y,{}),image:(0,h.jsx)(_,{}),orientation:`verticale`,taille:`md`,lien:`complet`,lienLibelle:`Libellé`}},S={name:`Horizontale (MD)`,args:{titre:`Titre de la carte`,description:`Description optionnelle de la carte.`,href:`#`,meta:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(`span`,{className:`inline-flex items-center gap-1`,children:[(0,h.jsx)(a,{className:`size-3`,"aria-hidden":!0}),`12 juin 2026`]}),(0,h.jsxs)(`span`,{className:`inline-flex items-center gap-1`,children:[(0,h.jsx)(i,{className:`size-3`,"aria-hidden":!0}),`Paris`]})]}),image:(0,h.jsx)(_,{}),orientation:`horizontale`,taille:`md`,largeurImage:`tiers`,lien:`complet`,lienLibelle:`Voir l’événement`}},C={name:`Lien picto (carte cliquable)`,parameters:{docs:{description:{story:`Le pied CTA est remplacé par une flèche dans le coin. La carte entière devient cliquable (lien agrandi sur le titre).`}}},args:{titre:`Actualité sans pied CTA`,description:`Toute la carte est cliquable, une flèche signale le lien.`,href:`#`,categorie:(0,h.jsx)(v,{children:`Actualité`}),image:(0,h.jsx)(_,{}),orientation:`verticale`,taille:`sm`,lien:`picto`}},w={name:`Sans image`,args:{titre:`Ressource documentaire`,description:`Une carte sans zone visuelle, utile pour des listes denses.`,href:`#`,categorie:(0,h.jsx)(v,{children:`Guide`}),meta:(0,h.jsx)(y,{}),orientation:`verticale`,taille:`sm`,lien:`complet`,lienLibelle:`Télécharger`}},T={name:`Ratio image 1/1`,args:{titre:`Image carrée`,description:`Variante de ratio d’image.`,href:`#`,image:(0,h.jsx)(_,{}),orientation:`verticale`,taille:`sm`,ratioImage:`1/1`,lien:`picto`}},E={name:`Échelle de taille (sm · md · lg)`,parameters:{layout:`fullscreen`,docs:{description:{story:"`sm` (grille dense) · `md` (confort) · `lg` (mise en avant). Le titre, le padding et le rythme varient ; CTA et meta restent constants."}}},render:()=>(0,h.jsx)(`div`,{className:`flex flex-wrap items-start justify-center gap-6 bg-dsfr-background-default-grey p-8`,children:[`sm`,`md`,`lg`].map(e=>(0,h.jsxs)(`div`,{className:`w-75`,children:[(0,h.jsx)(`p`,{className:`mb-2 text-center text-xs font-bold uppercase text-(--color-dsfr-text-mention-grey)`,children:e}),(0,h.jsx)(m,{titre:`Titre de la carte`,description:`Description sur une à deux lignes pour juger la densité.`,href:`#`,categorie:(0,h.jsx)(v,{children:`Catégorie`}),image:(0,h.jsx)(_,{}),taille:e,lien:`bloc`,lienLibelle:`En savoir plus`})]},e))})},D={name:`Lien bloc (carte cliquable + libellé)`,parameters:{docs:{description:{story:`Carte ENTIÈREMENT cliquable AVEC un libellé de CTA visible en pied (sans filet). Cas « amorce » de la home : l’ensemble réagit en élévation, la flèche glisse.`}}},args:{titre:`Voir ce que veut dire s’engager`,description:`Le principe, les bénéfices, les étapes, de quoi situer la démarche avant de se lancer.`,href:`#`,image:(0,h.jsx)(_,{}),orientation:`horizontale`,largeurImage:`deuxCinquiemes`,ratioImage:`12/5`,taille:`lg`,lien:`bloc`,lienLibelle:`Découvrir la démarche`}},O={name:`Carte vedette (badge image + action bouton)`,parameters:{docs:{description:{story:"Carte mise en avant : image `auto` (remplit la hauteur), `badgeImage` flottant sur la photo, et `actionPied` = bouton sur mesure (au lieu du lien-flèche). Cas « panneau club » de la home."}}},render:()=>(0,h.jsx)(`div`,{className:`flex h-115 justify-center bg-dsfr-background-default-grey p-8`,children:(0,h.jsx)(`div`,{className:`w-95`,children:(0,h.jsx)(m,{titre:`Trouver un club près de chez vous`,description:`Des entreprises engagées se réunissent partout en France.`,taille:`lg`,lien:`aucun`,ratioImage:`auto`,image:(0,h.jsx)(_,{}),marqueurImage:(0,h.jsxs)(`span`,{className:`inline-flex items-center gap-1.5 rounded-full bg-(--color-dsfr-background-default-grey)/95 px-3 py-1.5 text-xs font-semibold text-(--color-dsfr-text-title-grey) shadow-repos backdrop-blur`,children:[(0,h.jsx)(i,{className:`size-3.5`,"aria-hidden":!0}),`Partout en France`]}),actionPied:(0,h.jsxs)(`button`,{type:`button`,className:`inline-flex items-center gap-1.5 rounded bg-dsfr-blue-france-sun-113 px-4 py-2 text-sm font-medium text-white`,children:[(0,h.jsx)(i,{className:`size-4`,"aria-hidden":!0}),`Trouver mon club`]}),className:`h-full shadow-flottant`})})})},k={name:`Pied avec filet (piedBordure)`,parameters:{docs:{description:{story:`Le filet de séparation au-dessus du pied (registre classique). Par défaut le footer est sans filet (plus léger).`}}},args:{titre:`Carte avec pied à filet`,description:`Le filet sépare le corps du pied CTA.`,href:`#`,image:(0,h.jsx)(_,{}),taille:`md`,lien:`complet`,piedBordure:!0,lienLibelle:`En savoir plus`}},A={name:`Galerie (grille de 3)`,parameters:{layout:`fullscreen`},render:()=>(0,h.jsxs)(`div`,{className:`mx-auto grid max-w-5xl grid-cols-1 gap-6 p-8 sm:grid-cols-2 lg:grid-cols-3`,children:[(0,h.jsx)(m,{titre:`Premier contenu`,description:`Description courte.`,href:`#`,categorie:(0,h.jsx)(v,{children:`Guide`}),image:(0,h.jsx)(_,{}),lien:`picto`}),(0,h.jsx)(m,{titre:`Deuxième contenu`,description:`Description courte.`,href:`#`,categorie:(0,h.jsx)(v,{children:`Rencontre`}),image:(0,h.jsx)(_,{}),lien:`picto`}),(0,h.jsx)(m,{titre:`Troisième contenu`,description:`Description courte.`,href:`#`,categorie:(0,h.jsx)(v,{children:`Actualité`}),image:(0,h.jsx)(_,{}),lien:`picto`})]})},j=({Icone:e,teinte:t=!1})=>(0,h.jsx)(`span`,{"aria-hidden":!0,className:t?`grid size-12 place-items-center rounded-control bg-(--thematique-bg) text-(--thematique-main)`:`grid size-12 place-items-center rounded-control bg-(--color-dsfr-background-alt-blue-france) text-(--color-dsfr-text-action-high-blue-france)`,children:(0,h.jsx)(e,{className:`size-6`,"aria-hidden":!0})}),M={name:`Médaillon picto (carte « amorce »)`,parameters:{docs:{description:{story:"Sans image : un `medaillon` (picto en tête de corps) ouvre la carte. Registre « par où commencer » / « bénéfices ». Combinable avec `lien` (ici `bloc`) ou `actionPied`."}}},render:()=>(0,h.jsx)(`div`,{className:`flex justify-center bg-dsfr-background-default-grey p-8`,children:(0,h.jsx)(`div`,{className:`w-95`,children:(0,h.jsx)(m,{medaillon:(0,h.jsx)(j,{Icone:n}),titre:`Partez d’un sujet qui vous parle`,description:`Parcourez le référentiel et choisissez une thématique d’engagement.`,href:`#`,taille:`md`,lien:`bloc`,lienLibelle:`Voir le référentiel`})})})},N={name:`Teinte thématique (ThematiqueScope)`,parameters:{docs:{description:{story:'En `teinte="thematique"`, surface voilée et accents pilotés par un `ThematiqueScope` parent — la carte ne connaît pas la thématique. Deux familles côte à côte.'}}},render:()=>(0,h.jsxs)(`div`,{className:`flex flex-wrap justify-center gap-6 bg-surface-greige p-8`,children:[(0,h.jsx)(f,{asChild:!0,etiquette:{color1:`#1f7a5a`,color2:`#cdeadd`},children:(0,h.jsx)(`div`,{className:`w-80`,children:(0,h.jsx)(m,{teinte:`thematique`,medaillon:(0,h.jsx)(j,{Icone:r,teinte:!0}),titre:`Sobriété & environnement`,description:`Réduire son empreinte, agir sur les ressources et le climat.`,meta:`12 engagements`,href:`#`,taille:`md`,lien:`bloc`,lienLibelle:`Explorer la thématique`})})}),(0,h.jsx)(f,{asChild:!0,etiquette:{color1:`#8a5a1f`,color2:`#f0e2cd`},children:(0,h.jsx)(`div`,{className:`w-80`,children:(0,h.jsx)(m,{teinte:`thematique`,medaillon:(0,h.jsx)(j,{Icone:n,teinte:!0}),titre:`Jeunes & insertion`,description:`Accompagner les parcours, ouvrir l’entreprise aux jeunes.`,meta:`8 engagements`,href:`#`,taille:`md`,lien:`bloc`,lienLibelle:`Explorer la thématique`})})})]})},P={name:`Carte-bouton (as="button", ouvre un drawer)`,parameters:{docs:{description:{story:'Carte qui actionne sans naviguer (ouvrir un drawer) : `as="button"` + `onActiver`. Un seul élément focusable, libellé = titre.'}}},render:()=>(0,h.jsx)(`div`,{className:`flex justify-center bg-surface-greige p-8`,children:(0,h.jsx)(f,{asChild:!0,etiquette:{color1:`#1f5a8a`,color2:`#cddef0`},children:(0,h.jsx)(`div`,{className:`w-80`,children:(0,h.jsx)(m,{teinte:`thematique`,as:`button`,onActiver:()=>window.alert(`Ouvre le drawer d’engagement`),categorie:(0,h.jsx)(l,{size:`sm`,scopeThematique:!0,children:`#sobriete`}),titre:`Former ses équipes à la sobriété numérique`,taille:`md`,lien:`bloc`,lienLibelle:`Voir l’engagement`})})})})},F={name:`Grammaire : catégorie · état · meta · emplacements`,parameters:{layout:`fullscreen`,docs:{description:{story:'La forme dit le rôle : **catégorie** → `Etiquette` pill, **état** → `Badge` carré, **meta** → gris neutre. Marqueurs au-dessus du titre (`start`) ou sur l’image (`emplacementMarqueurs="image"`).'}}},render:()=>(0,h.jsxs)(`div`,{className:`grid grid-cols-1 gap-6 bg-dsfr-background-default-grey p-8 sm:grid-cols-2 lg:grid-cols-3`,children:[(0,h.jsx)(m,{titre:`Rencontre annuelle des clubs`,description:`Une catégorie (Etiquette) et un état (Badge) au-dessus du titre.`,href:`#`,categorie:(0,h.jsx)(l,{size:`sm`,children:`Rencontre`}),etat:(0,h.jsx)(u,{size:`sm`,type:`new`,label:`Nouveau`}),meta:(0,h.jsx)(y,{}),taille:`md`,lien:`complet`,lienLibelle:`S’inscrire`}),(0,h.jsx)(m,{titre:`Guide de l’engagement 2026`,description:`Mêmes marqueurs, mais posés par-dessus l’image.`,href:`#`,image:(0,h.jsx)(_,{}),categorie:(0,h.jsx)(l,{size:`sm`,children:`Guide`}),etat:(0,h.jsx)(u,{size:`sm`,type:`success`,label:`Complet`}),emplacementMarqueurs:`image`,meta:(0,h.jsx)(y,{}),taille:`md`,lien:`complet`,lienLibelle:`Télécharger`}),(0,h.jsx)(m,{titre:`Trois entreprises racontent leur démarche`,description:`Une catégorie éditoriale, une meta neutre — pas de bleu.`,href:`#`,categorie:(0,h.jsx)(l,{size:`sm`,children:`Actualité`}),meta:(0,h.jsxs)(`span`,{className:`inline-flex items-center gap-1`,children:[(0,h.jsx)(o,{className:`size-3`,"aria-hidden":!0}),`12 juin 2026`]}),taille:`md`,lien:`complet`,lienLibelle:`Lire l’article`})]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Verticale — SM',
  args: {
    titre: 'Titre de la carte',
    description: 'Description optionnelle de la carte.',
    href: '#',
    categorie: <CategorieExemple>Rencontre</CategorieExemple>,
    meta: <MetaExemple />,
    image: <ImageExemple />,
    orientation: 'verticale',
    taille: 'sm',
    lien: 'complet',
    lienLibelle: 'Libellé'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Verticale — MD',
  args: {
    titre: 'Titre de la carte',
    description: 'Description optionnelle de la carte sur deux lignes environ.',
    href: '#',
    categorie: <CategorieExemple>Guide</CategorieExemple>,
    meta: <MetaExemple />,
    image: <ImageExemple />,
    orientation: 'verticale',
    taille: 'md',
    lien: 'complet',
    lienLibelle: 'Libellé'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Horizontale (MD)',
  args: {
    titre: 'Titre de la carte',
    description: 'Description optionnelle de la carte.',
    href: '#',
    // La date est une meta (donnée neutre), pas un eyebrow.
    meta: <>
        <span className="inline-flex items-center gap-1">
          <RiCalendarLine className="size-3" aria-hidden />
          12 juin 2026
        </span>
        <span className="inline-flex items-center gap-1">
          <RiMapPin2Line className="size-3" aria-hidden />
          Paris
        </span>
      </>,
    image: <ImageExemple />,
    orientation: 'horizontale',
    taille: 'md',
    largeurImage: 'tiers',
    lien: 'complet',
    lienLibelle: 'Voir l’événement'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
    categorie: <CategorieExemple>Actualité</CategorieExemple>,
    image: <ImageExemple />,
    orientation: 'verticale',
    taille: 'sm',
    lien: 'picto'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Sans image',
  args: {
    titre: 'Ressource documentaire',
    description: 'Une carte sans zone visuelle, utile pour des listes denses.',
    href: '#',
    categorie: <CategorieExemple>Guide</CategorieExemple>,
    meta: <MetaExemple />,
    orientation: 'verticale',
    taille: 'sm',
    lien: 'complet',
    lienLibelle: 'Télécharger'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Échelle de taille (sm · md · lg)',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: '\`sm\` (grille dense) · \`md\` (confort) · \`lg\` (mise en avant). Le titre, le padding et le rythme varient ; CTA et meta restent constants.'
      }
    }
  },
  render: () => <div className="flex flex-wrap items-start justify-center gap-6 bg-dsfr-background-default-grey p-8">
      {(['sm', 'md', 'lg'] as const).map(t => <div key={t} className="w-75">
          <p className="mb-2 text-center text-xs font-bold uppercase text-(--color-dsfr-text-mention-grey)">
            {t}
          </p>
          <CarteContenu titre="Titre de la carte" description="Description sur une à deux lignes pour juger la densité." href="#" categorie={<CategorieExemple>Catégorie</CategorieExemple>} image={<ImageExemple />} taille={t} lien="bloc" lienLibelle="En savoir plus" />
        </div>)}
    </div>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Lien bloc (carte cliquable + libellé)',
  parameters: {
    docs: {
      description: {
        story: 'Carte ENTIÈREMENT cliquable AVEC un libellé de CTA visible en pied (sans filet). Cas « amorce » de la home : l’ensemble réagit en élévation, la flèche glisse.'
      }
    }
  },
  args: {
    titre: 'Voir ce que veut dire s’engager',
    description: 'Le principe, les bénéfices, les étapes, de quoi situer la démarche avant de se lancer.',
    href: '#',
    image: <ImageExemple />,
    orientation: 'horizontale',
    largeurImage: 'deuxCinquiemes',
    ratioImage: '12/5',
    taille: 'lg',
    lien: 'bloc',
    lienLibelle: 'Découvrir la démarche'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Carte vedette (badge image + action bouton)',
  parameters: {
    docs: {
      description: {
        story: 'Carte mise en avant : image \`auto\` (remplit la hauteur), \`badgeImage\` flottant sur la photo, et \`actionPied\` = bouton sur mesure (au lieu du lien-flèche). Cas « panneau club » de la home.'
      }
    }
  },
  render: () => <div className="flex h-115 justify-center bg-dsfr-background-default-grey p-8">
      <div className="w-95">
        <CarteContenu titre="Trouver un club près de chez vous" description="Des entreprises engagées se réunissent partout en France." taille="lg" lien="aucun" ratioImage="auto" image={<ImageExemple />} marqueurImage={<span className="inline-flex items-center gap-1.5 rounded-full bg-(--color-dsfr-background-default-grey)/95 px-3 py-1.5 text-xs font-semibold text-(--color-dsfr-text-title-grey) shadow-repos backdrop-blur">
              <RiMapPin2Line className="size-3.5" aria-hidden />
              Partout en France
            </span>} actionPied={<button type="button" className="inline-flex items-center gap-1.5 rounded bg-dsfr-blue-france-sun-113 px-4 py-2 text-sm font-medium text-white">
              <RiMapPin2Line className="size-4" aria-hidden />
              Trouver mon club
            </button>} className="h-full shadow-flottant" />
      </div>
    </div>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Pied avec filet (piedBordure)',
  parameters: {
    docs: {
      description: {
        story: 'Le filet de séparation au-dessus du pied (registre classique). Par défaut le footer est sans filet (plus léger).'
      }
    }
  },
  args: {
    titre: 'Carte avec pied à filet',
    description: 'Le filet sépare le corps du pied CTA.',
    href: '#',
    image: <ImageExemple />,
    taille: 'md',
    lien: 'complet',
    piedBordure: true,
    lienLibelle: 'En savoir plus'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Galerie (grille de 3)',
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 p-8 sm:grid-cols-2 lg:grid-cols-3">
      <CarteContenu titre="Premier contenu" description="Description courte." href="#" categorie={<CategorieExemple>Guide</CategorieExemple>} image={<ImageExemple />} lien="picto" />
      <CarteContenu titre="Deuxième contenu" description="Description courte." href="#" categorie={<CategorieExemple>Rencontre</CategorieExemple>} image={<ImageExemple />} lien="picto" />
      <CarteContenu titre="Troisième contenu" description="Description courte." href="#" categorie={<CategorieExemple>Actualité</CategorieExemple>} image={<ImageExemple />} lien="picto" />
    </div>
}`,...A.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Médaillon picto (carte « amorce »)',
  parameters: {
    docs: {
      description: {
        story: 'Sans image : un \`medaillon\` (picto en tête de corps) ouvre la carte. Registre « par où commencer » / « bénéfices ». Combinable avec \`lien\` (ici \`bloc\`) ou \`actionPied\`.'
      }
    }
  },
  render: () => <div className="flex justify-center bg-dsfr-background-default-grey p-8">
      <div className="w-95">
        <CarteContenu medaillon={<MedaillonExemple Icone={RiCompass3Line} />} titre="Partez d’un sujet qui vous parle" description="Parcourez le référentiel et choisissez une thématique d’engagement." href="#" taille="md" lien="bloc" lienLibelle="Voir le référentiel" />
      </div>
    </div>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Teinte thématique (ThematiqueScope)',
  parameters: {
    docs: {
      description: {
        story: 'En \`teinte="thematique"\`, surface voilée et accents pilotés par un \`ThematiqueScope\` parent — la carte ne connaît pas la thématique. Deux familles côte à côte.'
      }
    }
  },
  render: () => <div className="flex flex-wrap justify-center gap-6 bg-surface-greige p-8">
      <ThematiqueScope asChild etiquette={{
      color1: '#1f7a5a',
      color2: '#cdeadd'
    }}>
        <div className="w-80">
          <CarteContenu teinte="thematique" medaillon={<MedaillonExemple Icone={RiLeafLine} teinte />} titre="Sobriété & environnement" description="Réduire son empreinte, agir sur les ressources et le climat." meta="12 engagements" href="#" taille="md" lien="bloc" lienLibelle="Explorer la thématique" />
        </div>
      </ThematiqueScope>
      <ThematiqueScope asChild etiquette={{
      color1: '#8a5a1f',
      color2: '#f0e2cd'
    }}>
        <div className="w-80">
          <CarteContenu teinte="thematique" medaillon={<MedaillonExemple Icone={RiCompass3Line} teinte />} titre="Jeunes & insertion" description="Accompagner les parcours, ouvrir l’entreprise aux jeunes." meta="8 engagements" href="#" taille="md" lien="bloc" lienLibelle="Explorer la thématique" />
        </div>
      </ThematiqueScope>
    </div>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Carte-bouton (as="button", ouvre un drawer)',
  parameters: {
    docs: {
      description: {
        story: 'Carte qui actionne sans naviguer (ouvrir un drawer) : \`as="button"\` + \`onActiver\`. Un seul élément focusable, libellé = titre.'
      }
    }
  },
  render: () => <div className="flex justify-center bg-surface-greige p-8">
      <ThematiqueScope asChild etiquette={{
      color1: '#1f5a8a',
      color2: '#cddef0'
    }}>
        <div className="w-80">
          <CarteContenu teinte="thematique" as="button" onActiver={() => window.alert('Ouvre le drawer d’engagement')} categorie={<Etiquette size="sm" scopeThematique>#sobriete</Etiquette>} titre="Former ses équipes à la sobriété numérique" taille="md" lien="bloc" lienLibelle="Voir l’engagement" />
        </div>
      </ThematiqueScope>
    </div>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Grammaire : catégorie · état · meta · emplacements',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'La forme dit le rôle : **catégorie** → \`Etiquette\` pill, **état** → \`Badge\` carré, **meta** → gris neutre. Marqueurs au-dessus du titre (\`start\`) ou sur l’image (\`emplacementMarqueurs="image"\`).'
      }
    }
  },
  render: () => <div className="grid grid-cols-1 gap-6 bg-dsfr-background-default-grey p-8 sm:grid-cols-2 lg:grid-cols-3">
      {/* 1 · catégorie + état au-dessus du titre (start) */}
      <CarteContenu titre="Rencontre annuelle des clubs" description="Une catégorie (Etiquette) et un état (Badge) au-dessus du titre." href="#" categorie={<Etiquette size="sm">Rencontre</Etiquette>} etat={<Badge size="sm" type="new" label="Nouveau" />} meta={<MetaExemple />} taille="md" lien="complet" lienLibelle="S’inscrire" />

      {/* 2 · catégorie + état POSÉS SUR L’IMAGE */}
      <CarteContenu titre="Guide de l’engagement 2026" description="Mêmes marqueurs, mais posés par-dessus l’image." href="#" image={<ImageExemple />} categorie={<Etiquette size="sm">Guide</Etiquette>} etat={<Badge size="sm" type="success" label="Complet" />} emplacementMarqueurs="image" meta={<MetaExemple />} taille="md" lien="complet" lienLibelle="Télécharger" />

      {/* 3 · catégorie seule + meta (cas éditorial courant) */}
      <CarteContenu titre="Trois entreprises racontent leur démarche" description="Une catégorie éditoriale, une meta neutre — pas de bleu." href="#" categorie={<Etiquette size="sm">Actualité</Etiquette>} meta={<span className="inline-flex items-center gap-1">
            <RiTimeLine className="size-3" aria-hidden />
            12 juin 2026
          </span>} taille="md" lien="complet" lienLibelle="Lire l’article" />
    </div>
}`,...F.parameters?.docs?.source}}},I=[`VerticaleSm`,`VerticaleMd`,`Horizontale`,`LienPicto`,`SansImage`,`RatioCarre`,`EchelleTaille`,`ModeBloc`,`CarteVedette`,`PiedAvecFilet`,`Galerie`,`AvecMedaillon`,`Teintee`,`CarteBouton`,`Grammaire`]}))();export{M as AvecMedaillon,P as CarteBouton,O as CarteVedette,E as EchelleTaille,A as Galerie,F as Grammaire,S as Horizontale,C as LienPicto,D as ModeBloc,k as PiedAvecFilet,T as RatioCarre,w as SansImage,N as Teintee,x as VerticaleMd,b as VerticaleSm,I as __namedExportsOrder,g as default};