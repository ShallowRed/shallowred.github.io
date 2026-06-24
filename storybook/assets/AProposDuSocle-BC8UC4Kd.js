import{i as e}from"./preload-helper-DaCzexP6.js";import{u as t}from"./iframe-BBC5HgxN.js";import{L as n,a as r,s as i}from"./blocks-OSr9w5sB.js";import{t as a}from"./mdx-react-shim-BSGQEDAS.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`Candidats/Vitrine/Socle/À propos du socle`,tags:[`!manifest`]}),`
`,(0,c.jsx)(t.h1,{id:`le-socle-vitrine--état--dépendances`,children:`Le socle vitrine — état & dépendances`}),`
`,(0,c.jsxs)(t.p,{children:[`Point d'entrée du `,(0,c.jsx)(t.strong,{children:`socle de composition du site vitrine`}),` : les briques,
gestes et compositions partagés par tous les écrans publics (Home, Référentiel,
Thématique, En savoir plus). Cette note dit `,(0,c.jsx)(t.strong,{children:`ce qui est prêt à consommer`}),` et
`,(0,c.jsx)(t.strong,{children:`ce qui reste à câbler`}),` avant l'intégration en production. Cap d'ensemble :
voir `,(0,c.jsx)(t.strong,{children:`DDR-019`}),`.`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Statut global : candidat mûr.`}),` Le socle est éprouvé par les écrans
candidats. Deux dépendances `,(0,c.jsx)(t.strong,{children:`Partagé`}),` (carte, scope thématique) sont prêtes
mais `,(0,c.jsx)(t.strong,{children:`non encore câblées en prod`}),` — ce sont les prérequis du chemin critique
Home.`]}),`
`]}),`
`,(0,c.jsxs)(t.h2,{id:`briques-socle-vitrinebriques`,children:[`Briques (`,(0,c.jsx)(t.code,{children:`socle-vitrine/briques/`}),`)`]}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:`Brique`}),(0,c.jsx)(t.th,{children:`Rôle`}),(0,c.jsx)(t.th,{children:`Statut`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`SectionVitrine`})}),(0,c.jsx)(t.td,{children:`conteneur de section + ton de fond (white/greige/alt-blue/blue)`}),(0,c.jsx)(t.td,{children:`mûr`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`EyebrowHeading`})}),(0,c.jsx)(t.td,{children:`sur-titre + titre de section`}),(0,c.jsx)(t.td,{children:`mûr`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`FilAriane`})}),(0,c.jsx)(t.td,{children:`fil d'Ariane (items + page courante), couleur héritée du fond`}),(0,c.jsx)(t.td,{children:`mûr`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`GrilleColonnes`})}),(0,c.jsx)(t.td,{children:`grille multi-colonnes responsive`}),(0,c.jsx)(t.td,{children:`mûr`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`PanneauCTA`})}),(0,c.jsx)(t.td,{children:`panneau d'appel à l'action`}),(0,c.jsx)(t.td,{children:`mûr`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`BlocPedagogique`})}),(0,c.jsx)(t.td,{children:`bloc pédagogique (surtout Thématique)`}),(0,c.jsx)(t.td,{children:`mûr`})]})]})]}),`
`,(0,c.jsxs)(t.h2,{id:`gestes-gestes-vitrinetsx`,children:[`Gestes (`,(0,c.jsx)(t.code,{children:`gestes-vitrine.tsx`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Composants et helpers de composition fine :
`,(0,c.jsx)(t.code,{children:`CollageMedia`}),`, `,(0,c.jsx)(t.code,{children:`TuilePhoto`}),`, `,(0,c.jsx)(t.code,{children:`CarteChiffre`}),`, `,(0,c.jsx)(t.code,{children:`ChiffrePreuve`}),`, `,(0,c.jsx)(t.code,{children:`BandeauPreuve`}),`,
`,(0,c.jsx)(t.code,{children:`PastillePicto`}),`, `,(0,c.jsx)(t.code,{children:`NumeroRepere`}),`, `,(0,c.jsx)(t.code,{children:`ChipThematique`}),`, `,(0,c.jsx)(t.code,{children:`couleursThematique()`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Constantes de surface/élévation exposées ici, désormais `,(0,c.jsx)(t.strong,{children:`alias ralliés`}),` sur les
fondations A1/A2 (elles ne portent plus de valeurs propres) :
`,(0,c.jsx)(t.code,{children:`CANVAS_GREIGE`}),`/`,(0,c.jsx)(t.code,{children:`SECTION_GREIGE`}),` (→ `,(0,c.jsx)(t.code,{children:`--color-surface-greige`}),`),
`,(0,c.jsx)(t.code,{children:`DALLE_GREIGE*`}),`/`,(0,c.jsx)(t.code,{children:`BANDEAU_GREIGE_*`}),` (→ `,(0,c.jsx)(t.code,{children:`--color-surface-greige-carte`}),`),
`,(0,c.jsx)(t.code,{children:`OMBRE_BASSE`}),` (→ `,(0,c.jsx)(t.code,{children:`shadow-repos`}),`), `,(0,c.jsx)(t.code,{children:`OMBRE_CARTE`}),` (→ `,(0,c.jsx)(t.code,{children:`shadow-flottant`}),`).
L'ancien système `,(0,c.jsx)(t.code,{children:`var(--greige-*, galet)`}),` + toolbar Storybook est abandonné.`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Élévation : tranchée (A1).`}),` L'échelle d'ombres est désormais une `,(0,c.jsx)(t.strong,{children:`fondation
documentée`}),` — 5 niveaux par rôle (`,(0,c.jsx)(t.code,{children:`shadow-repos/survol/flottant/vedette`}),`),
teinte `,(0,c.jsx)(t.strong,{children:`taupe-greige chaude`}),` unique, 2 ombres superposées par niveau. Voir la
story `,(0,c.jsx)(t.strong,{children:`« Échelle d'ombres »`}),` et `,(0,c.jsx)(t.strong,{children:`DDR-019 §3.1`}),`. Les écrans candidats
`,(0,c.jsx)(t.strong,{children:`vitrine`}),` sont `,(0,c.jsx)(t.strong,{children:`ralliés`}),` sur les utilitaires (`,(0,c.jsx)(t.code,{children:`shadow-repos/survol/flottant`}),`).
Restent les `,(0,c.jsx)(t.code,{children:`shadow-[…]`}),` côté `,(0,c.jsx)(t.code,{children:`apps/web/src`}),` et `,(0,c.jsx)(t.code,{children:`webapp`}),`, hors de ce passage.
La part `,(0,c.jsx)(t.strong,{children:`surfaces/greige`}),` (A2) est aussi `,(0,c.jsx)(t.strong,{children:`tranchée`}),` : taupe léger en 5e fond
`,(0,c.jsx)(t.code,{children:`greige`}),` de `,(0,c.jsx)(t.code,{children:`SectionVitrine`}),` (cf. story « Couleurs de fond & alternance »).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`compositions-documentées`,children:`Compositions documentées`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Sections canoniques`}),` (`,(0,c.jsx)(t.code,{children:`SectionsCanoniques.stories.tsx`}),`) — séquences de
section types.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Gestes de composition`}),` (`,(0,c.jsx)(t.code,{children:`GestesVitrine.stories.tsx`}),`) — catalogue des gestes.`]}),`
`]}),`
`,(0,c.jsxs)(t.h2,{id:`données-socle-vitrinedata`,children:[`Données (`,(0,c.jsx)(t.code,{children:`socle-vitrine/data/`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`referentiel-engagement`}),` (thématiques + couleurs), `,(0,c.jsx)(t.code,{children:`icones-thematiques`}),`,
`,(0,c.jsx)(t.code,{children:`actualites`}),`, `,(0,c.jsx)(t.code,{children:`clubs`}),`, `,(0,c.jsx)(t.code,{children:`photos-thematiques`}),`.`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Dette`}),` : doublon partiel avec `,(0,c.jsx)(t.code,{children:`stories/_data/`}),` (contenus `,(0,c.jsx)(t.strong,{children:`divergents`}),`, pas
de simples copies). À réconcilier — cf. DDR-019 §3.4.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`dépendances-partagé-à-câbler-chemin-critique-home--2506`,children:`Dépendances Partagé à câbler (chemin critique Home — 25/06)`}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:`Dépendance`}),(0,c.jsx)(t.th,{children:`Où`}),(0,c.jsx)(t.th,{children:`État`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`ThematiqueScope`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`@client/composants/shared/thematique-scope`})}),(0,c.jsxs)(t.td,{children:[`composant `,(0,c.jsx)(t.strong,{children:`prêt`}),` (forwardRef, `,(0,c.jsx)(t.code,{children:`asChild`}),`, CSS vars scopées, cf. DDR-004), `,(0,c.jsx)(t.strong,{children:`0 consommateur prod`})]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`CarteContenu`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`@candidats/shared/briques/carte-contenu`})}),(0,c.jsxs)(t.td,{children:[`composant `,(0,c.jsx)(t.strong,{children:`prêt`}),` (orientation/taille/ratio…), `,(0,c.jsx)(t.strong,{children:`0 consommateur prod`})]})]})]})]}),`
`,(0,c.jsxs)(t.p,{children:[`Ces deux briques ne sont pas inachevées : elles `,(0,c.jsx)(t.strong,{children:`n'ont pas encore d'hôte de
production`}),` (la face vitrine refondue n'existe pas encore en App Router). Leur
promotion = les consommer dans la première page vitrine refondue.`]}),`
`,(0,c.jsx)(t.h2,{id:`ce-qui-nest-pas-décidé-ici`,children:`Ce qui n'est PAS décidé ici`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hôte & routage de la vitrine refondue`}),` (Pages Router legacy `,(0,c.jsx)(t.code,{children:`src/pages`}),` +
`,(0,c.jsx)(t.code,{children:`client/vitrine/*`}),` → cible App Router). `,(0,c.jsx)(t.strong,{children:`Décision ouverte`}),`, hors socle.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Échelle d'élévation / surfaces`}),` unifiée (DDR-019 §3) — attend arbitrage.`]}),`
`,(0,c.jsx)(t.li,{children:`Le contenu réel de la Home (textes, images) — fourni par les maquettes.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),i()}))();export{s as default};