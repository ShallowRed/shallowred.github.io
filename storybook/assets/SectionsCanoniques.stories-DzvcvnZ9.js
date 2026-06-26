import{i as e}from"./preload-helper-DaCzexP6.js";import{u as t}from"./iframe-BeshMaXC.js";import{_ as n,c as r,yt as i}from"./ri-CHURB-Na.js";import{n as a,t as o}from"./button-CmAnFNOi.js";import{n as s,t as c}from"./carte-contenu-CidE4qt0.js";import{n as l,t as u}from"./users-group-C8isGOED.js";import{n as d,t as f}from"./award-star-t9Tb_Xd5.js";import{n as p,t as m}from"./eyebrow-heading-BRdNq_y2.js";import{n as h,t as g}from"./grille-colonnes-DE5rQJiV.js";import{n as _,t as v}from"./panneau-cta-B665S2WL.js";import{n as y,t as b}from"./section-vitrine-C4L8fAEi.js";import{_ as x,f as S,m as C,t as w}from"./gestes-vitrine-kCjXLaAL.js";import{n as T,t as E}from"./bloc-pedagogique-gxjlSDTh.js";import{n as D,t as O}from"./tool-DwbR9irS.js";var k,A,j,M,N,P,F,I,L,R;e((()=>{k=t(),i(),a(),s(),d(),D(),l(),T(),p(),h(),_(),y(),C(),A={title:`Candidats/Vitrine/Socle/Sections canoniques`,tags:[`autodocs`,`!manifest`],parameters:{espace:`vitrine`,layout:`fullscreen`,docs:{description:{component:[`Anatomie de référence d’une page vitrine, montée sur le socle.`,``,`Sept sections de référence : Hero, Éditoriale, Galerie d’actualités,`,`Bénéfices, Chiffres-preuve, CTA, Témoignage. Chacune n’utilise que des`,"briques socle (`SectionVitrine`, `EyebrowHeading`, `GrilleColonnes`,","`BlocPedagogique`, `PanneauCTA`) et des gestes du socle (`BandeauPreuve`,","`TuilePhoto`) — aucune dépendance au kit d’exploration."].join(`
`)}}}},j={name:`1 — Hero (bleu contrasté)`,parameters:{docs:{description:{story:"Hero en fond `blue` contrasté, split 7/5 : message à gauche, photo réelle cadrée (`TuilePhoto`) à droite. Version sobre et autoportante du socle."}}},render:()=>(0,k.jsx)(b,{fond:`blue`,taille:`large`,children:(0,k.jsxs)(`div`,{className:`grid grid-cols-1 items-center gap-8 md:grid-cols-12`,children:[(0,k.jsxs)(`div`,{className:`md:col-span-7`,children:[(0,k.jsx)(`h1`,{className:`text-4xl leading-tight font-bold md:text-5xl`,children:`Titre principal de la page vitrine`}),(0,k.jsx)(`p`,{className:`mt-6 max-w-xl text-xl leading-8 text-(--color-dsfr-text-inverted-blue-france)`,children:`Chapeau introductif, deux à trois phrases au maximum. Pose le contexte et l'enjeu sans entrer dans les détails.`}),(0,k.jsxs)(`div`,{className:`mt-8 flex flex-col items-start gap-4`,children:[(0,k.jsxs)(o,{size:`lg`,variant:`contrast`,children:[`Créer un compte`,(0,k.jsx)(r,{"aria-hidden":!0})]}),(0,k.jsx)(`p`,{className:`text-sm font-bold`,children:`100\xA0% gratuit\xA0·\xA0Sans contrainte\xA0·\xA0À votre échelle`})]})]}),(0,k.jsx)(`div`,{className:`md:col-span-5`,children:(0,k.jsx)(S,{src:x.collectif,alt:`Dirigeantes lors d'un rendez-vous du réseau`,className:`aspect-4/3`})})]})})},M={name:`2 — Éditoriale (corps texte)`,render:()=>(0,k.jsx)(b,{fond:`white`,children:(0,k.jsxs)(`div`,{className:`mx-auto max-w-3xl`,children:[(0,k.jsx)(m,{eyebrow:`Rubrique`,niveau:`h2`,children:`Titre de section éditoriale`}),(0,k.jsx)(`p`,{className:`mt-4`,children:`Bloc de texte long. Les paragraphes restent dans une largeur lisible pour préserver la mesure typographique. La hiérarchie suit h2 → h3 → texte.`}),(0,k.jsx)(`h3`,{className:`mt-8 text-xl font-bold md:text-2xl`,children:`Sous-section`}),(0,k.jsx)(`p`,{className:`mt-2`,children:`Détail complémentaire, exemples, références. Pas de carte, pas de grille à ce niveau — c'est le rôle de la section dédiée.`})]})})},N={name:`3 — Galerie d'actualités (cartes de contenu)`,parameters:{docs:{description:{story:"`CarteContenu` partagées : surtitre date, lien picto (carte cliquable), bouton secondaire centré dessous. Fond `alt-blue`."}}},render:()=>(0,k.jsxs)(b,{fond:`alt-blue`,children:[(0,k.jsx)(m,{eyebrow:`En ce moment`,niveau:`h2`,className:`mb-8`,children:`Les actualités de la Communauté`}),(0,k.jsx)(g,{colonnes:3,gap:`lg`,children:[{t:`Le Rapport d'activité 2025 de la Communauté`,d:`24 mars 2026`,img:x.reseau},{t:`Campagne « Chaque entreprise a le pouvoir d'agir »`,d:`24 janv. 2026`,img:x.terrain},{t:`La Communauté dévoile son Baromètre 2025`,d:`24 nov. 2026`,img:x.rencontre}].map(e=>(0,k.jsx)(c,{titre:e.t,meta:(0,k.jsxs)(`span`,{className:`inline-flex items-center gap-1`,children:[(0,k.jsx)(n,{className:`size-3`,"aria-hidden":!0}),e.d]}),href:`#`,image:(0,k.jsx)(`img`,{src:e.img,alt:``}),lien:`picto`},e.t))}),(0,k.jsx)(`div`,{className:`mt-8 flex justify-center`,children:(0,k.jsxs)(o,{variant:`outline`,size:`lg`,children:[`Consulter toutes les actualités`,(0,k.jsx)(r,{"aria-hidden":!0})]})})]})},P={name:`4 — Bénéfices (cartes pédagogiques)`,parameters:{docs:{description:{story:"Grille de cartes « bénéfice » via la brique `BlocPedagogique` (variante `carte`) : picto Magicoon illustratif, titre, texte court. Fond `alt-blue`."}}},render:()=>(0,k.jsxs)(b,{fond:`alt-blue`,children:[(0,k.jsx)(m,{eyebrow:`Ce que la Communauté vous apporte`,niveau:`h2`,className:`mb-8`,children:`Des bénéfices concrets, dès le premier mois`}),(0,k.jsx)(g,{colonnes:3,gap:`md`,children:[{icone:(0,k.jsx)(O,{className:`size-6`}),t:`Accéder à des outils pour réaliser vos ambitions`,d:`Catalogue d'engagements documentés, fiches pratiques, ressources thématiques, mises en relation avec des opérateurs.`},{icone:(0,k.jsx)(u,{className:`size-6`}),t:`Rejoindre un réseau de pairs`,d:`101 clubs départementaux animés par des entreprises locales. Événements, rencontres, retours d'expérience entre dirigeants.`},{icone:(0,k.jsx)(f,{className:`size-6`}),t:`Valoriser votre engagement`,d:`Une page entreprise, un compteur d'actions et un bilan annuel partageable en interne comme en externe.`}].map(e=>(0,k.jsx)(E,{variante:`carte`,icone:e.icone,titre:e.t,children:e.d},e.t))})]})},F={name:`5 — Chiffres-preuve`,parameters:{docs:{description:{story:"Le geste `BandeauPreuve` du socle posé entre deux sections de contenu pour matérialiser l’échelle de la Communauté. Fond `white`."}}},render:()=>(0,k.jsx)(b,{fond:`white`,children:(0,k.jsx)(w,{chiffres:[{valeur:`60 000`,suffixe:`+`,label:`entreprises engagées`},{valeur:`13`,label:`thématiques d'action`},{valeur:`101`,label:`clubs départementaux`}]})})},I={name:`6 — CTA (panneau bleu signé sur fond clair)`,parameters:{docs:{description:{story:"Le CTA est la brique `PanneauCTA` : carte bleue arrondie et ombrée, posée sur un fond clair `alt-blue` — pas une section pleine largeur en bleu. Variante signée (`filigrane`) avec le coq lee ton sur ton."}}},render:()=>(0,k.jsx)(b,{fond:`alt-blue`,children:(0,k.jsx)(v,{centre:!0,filigrane:!0,titre:`Et vous, quel sera votre prochain engagement ?`,action:(0,k.jsxs)(o,{size:`lg`,variant:`contrast`,children:[`Créer un compte`,(0,k.jsx)(r,{"aria-hidden":!0})]}),children:`Rejoindre la Communauté est gratuit. L'inscription prend 5 minutes. Vous choisissez vos thématiques et vous agissez à votre rythme.`})})},L={name:`7 — Témoignage / verbatim`,render:()=>(0,k.jsx)(b,{fond:`white`,children:(0,k.jsxs)(`figure`,{className:`mx-auto max-w-3xl`,children:[(0,k.jsx)(`blockquote`,{className:`border-l-4 border-(--color-dsfr-border-active-blue-france) pl-6 text-2xl leading-9 font-medium`,children:`« Une citation forte tient en deux ou trois phrases. Elle porte une conviction concrète, pas une généralité. »`}),(0,k.jsx)(`figcaption`,{className:`mt-4 text-sm text-(--color-dsfr-text-mention-grey)`,children:`Prénom Nom — Fonction, Organisation`})]})})},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: '1 — Hero (bleu contrasté)',
  parameters: {
    docs: {
      description: {
        story: 'Hero en fond \`blue\` contrasté, split 7/5 : message à gauche, photo réelle cadrée (\`TuilePhoto\`) à droite. Version sobre et autoportante du socle.'
      }
    }
  },
  render: () => <SectionVitrine fond="blue" taille="large">
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
        <div className="md:col-span-7">
          <h1 className="text-4xl leading-tight font-bold md:text-5xl">
            Titre principal de la page vitrine
          </h1>
          <p className="mt-6 max-w-xl text-xl leading-8 text-(--color-dsfr-text-inverted-blue-france)">
            Chapeau introductif, deux à trois phrases au maximum. Pose le
            contexte et l'enjeu sans entrer dans les détails.
          </p>
          <div className="mt-8 flex flex-col items-start gap-4">
            <Button size="lg" variant="contrast">
              Créer un compte
              <RiArrowRightLine aria-hidden />
            </Button>
            <p className="text-sm font-bold">
              100&nbsp;% gratuit&nbsp;·&nbsp;Sans contrainte&nbsp;·&nbsp;À votre
              échelle
            </p>
          </div>
        </div>
        <div className="md:col-span-5">
          <TuilePhoto src={PHOTOS.collectif} alt="Dirigeantes lors d'un rendez-vous du réseau" className="aspect-4/3" />
        </div>
      </div>
    </SectionVitrine>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: '2 — Éditoriale (corps texte)',
  render: () => <SectionVitrine fond="white">
      <div className="mx-auto max-w-3xl">
        <EyebrowHeading eyebrow="Rubrique" niveau="h2">
          Titre de section éditoriale
        </EyebrowHeading>
        <p className="mt-4">
          Bloc de texte long. Les paragraphes restent dans une largeur lisible
          pour préserver la mesure typographique. La hiérarchie suit h2 → h3 →
          texte.
        </p>
        <h3 className="mt-8 text-xl font-bold md:text-2xl">Sous-section</h3>
        <p className="mt-2">
          Détail complémentaire, exemples, références. Pas de carte, pas de
          grille à ce niveau — c'est le rôle de la section dédiée.
        </p>
      </div>
    </SectionVitrine>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: "3 — Galerie d'actualités (cartes de contenu)",
  parameters: {
    docs: {
      description: {
        story: '\`CarteContenu\` partagées : surtitre date, lien picto (carte cliquable), bouton secondaire centré dessous. Fond \`alt-blue\`.'
      }
    }
  },
  render: () => <SectionVitrine fond="alt-blue">
      <EyebrowHeading eyebrow="En ce moment" niveau="h2" className="mb-8">
        Les actualités de la Communauté
      </EyebrowHeading>
      <GrilleColonnes colonnes={3} gap="lg">
        {[{
        t: "Le Rapport d'activité 2025 de la Communauté",
        d: '24 mars 2026',
        img: PHOTOS.reseau
      }, {
        t: "Campagne « Chaque entreprise a le pouvoir d'agir »",
        d: '24 janv. 2026',
        img: PHOTOS.terrain
      }, {
        t: 'La Communauté dévoile son Baromètre 2025',
        d: '24 nov. 2026',
        img: PHOTOS.rencontre
      }].map(a => <CarteContenu key={a.t} titre={a.t} meta={<span className="inline-flex items-center gap-1">
                <RiCalendarLine className="size-3" aria-hidden />
                {a.d}
              </span>} href="#" image={<img src={a.img} alt="" />} lien="picto" />)}
      </GrilleColonnes>
      <div className="mt-8 flex justify-center">
        <Button variant="outline" size="lg">
          Consulter toutes les actualités
          <RiArrowRightLine aria-hidden />
        </Button>
      </div>
    </SectionVitrine>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: '4 — Bénéfices (cartes pédagogiques)',
  parameters: {
    docs: {
      description: {
        story: 'Grille de cartes « bénéfice » via la brique \`BlocPedagogique\` (variante \`carte\`) : picto Magicoon illustratif, titre, texte court. Fond \`alt-blue\`.'
      }
    }
  },
  render: () => <SectionVitrine fond="alt-blue">
      <EyebrowHeading eyebrow="Ce que la Communauté vous apporte" niveau="h2" className="mb-8">
        Des bénéfices concrets, dès le premier mois
      </EyebrowHeading>
      <GrilleColonnes colonnes={3} gap="md">
        {[{
        icone: <ToolIcon className="size-6" />,
        t: 'Accéder à des outils pour réaliser vos ambitions',
        d: "Catalogue d'engagements documentés, fiches pratiques, ressources thématiques, mises en relation avec des opérateurs."
      }, {
        icone: <UsersGroupIcon className="size-6" />,
        t: 'Rejoindre un réseau de pairs',
        d: "101 clubs départementaux animés par des entreprises locales. Événements, rencontres, retours d'expérience entre dirigeants."
      }, {
        icone: <AwardStarIcon className="size-6" />,
        t: 'Valoriser votre engagement',
        d: "Une page entreprise, un compteur d'actions et un bilan annuel partageable en interne comme en externe."
      }].map(b => <BlocPedagogique key={b.t} variante="carte" icone={b.icone} titre={b.t}>
            {b.d}
          </BlocPedagogique>)}
      </GrilleColonnes>
    </SectionVitrine>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: '5 — Chiffres-preuve',
  parameters: {
    docs: {
      description: {
        story: 'Le geste \`BandeauPreuve\` du socle posé entre deux sections de contenu pour matérialiser l’échelle de la Communauté. Fond \`white\`.'
      }
    }
  },
  render: () => <SectionVitrine fond="white">
      <BandeauPreuve chiffres={[{
      valeur: '60 000',
      suffixe: '+',
      label: 'entreprises engagées'
    }, {
      valeur: '13',
      label: "thématiques d'action"
    }, {
      valeur: '101',
      label: 'clubs départementaux'
    }]} />
    </SectionVitrine>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: '6 — CTA (panneau bleu signé sur fond clair)',
  parameters: {
    docs: {
      description: {
        story: 'Le CTA est la brique \`PanneauCTA\` : carte bleue arrondie et ombrée, posée sur un fond clair \`alt-blue\` — pas une section pleine largeur en bleu. Variante signée (\`filigrane\`) avec le coq lee ton sur ton.'
      }
    }
  },
  render: () => <SectionVitrine fond="alt-blue">
      <PanneauCTA centre filigrane titre="Et vous, quel sera votre prochain engagement ?" action={<Button size="lg" variant="contrast">
            Créer un compte
            <RiArrowRightLine aria-hidden />
          </Button>}>
        Rejoindre la Communauté est gratuit. L'inscription prend 5 minutes. Vous
        choisissez vos thématiques et vous agissez à votre rythme.
      </PanneauCTA>
    </SectionVitrine>
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: '7 — Témoignage / verbatim',
  render: () => <SectionVitrine fond="white">
      <figure className="mx-auto max-w-3xl">
        <blockquote className="border-l-4 border-(--color-dsfr-border-active-blue-france) pl-6 text-2xl leading-9 font-medium">
          « Une citation forte tient en deux ou trois phrases. Elle porte une
          conviction concrète, pas une généralité. »
        </blockquote>
        <figcaption className="mt-4 text-sm text-(--color-dsfr-text-mention-grey)">
          Prénom Nom — Fonction, Organisation
        </figcaption>
      </figure>
    </SectionVitrine>
}`,...L.parameters?.docs?.source}}},R=[`Hero`,`Editoriale`,`GalerieActualites`,`Benefices`,`ChiffresPreuve`,`CTA`,`Temoignage`]}))();export{P as Benefices,I as CTA,F as ChiffresPreuve,M as Editoriale,N as GalerieActualites,j as Hero,L as Temoignage,R as __namedExportsOrder,A as default};