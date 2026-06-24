import{i as e}from"./preload-helper-DaCzexP6.js";import{u as t}from"./iframe-BBC5HgxN.js";import{L as n,a as r,s as i}from"./blocks-OSr9w5sB.js";import{t as a}from"./mdx-react-shim-BSGQEDAS.js";function o(e){let t={blockquote:`blockquote`,code:`code`,del:`del`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`DDR/DDR-019 : Feuille de route du socle design system (classement, inventaire, dépendances)`,created:`2026-06-22`,status:`proposé`}),`
`,(0,c.jsx)(t.h1,{id:`ddr-019--feuille-de-route-du-socle-design-system`,children:`DDR-019 : Feuille de route du socle design system`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsxs)(t.strong,{children:[`Statut `,(0,c.jsx)(t.code,{children:`proposé`}),`.`]}),` Boussole du chantier de fond : faire de la zone
`,(0,c.jsx)(t.code,{children:`Candidats`}),` le socle solide d'un vrai design system pour un service à deux
faces — `,(0,c.jsx)(t.strong,{children:`webapp sous auth`}),` + `,(0,c.jsx)(t.strong,{children:`site vitrine`}),`. Ce DDR pose la `,(0,c.jsx)(t.strong,{children:`doctrine de
classement`}),`, l'`,(0,c.jsx)(t.strong,{children:`inventaire cible`}),`, la `,(0,c.jsx)(t.strong,{children:`cartographie des manques de
fondation`}),` et le `,(0,c.jsx)(t.strong,{children:`graphe de dépendances`}),` adossé au planning produit. Il
n'implémente rien : il oriente. Opposable au passage en `,(0,c.jsx)(t.code,{children:`accepté`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`contexte`,children:`Contexte`}),`
`,(0,c.jsxs)(t.p,{children:[`Le ménage des explorations est clos ([DDR-016]). Restait le cœur : les
`,(0,c.jsx)(t.code,{children:`Candidats`}),` ([DDR-011]) étaient un sas hétérogène, sans partition claire entre
ce qui sert la `,(0,c.jsx)(t.strong,{children:`webapp`}),`, la `,(0,c.jsx)(t.strong,{children:`vitrine`}),`, ou les `,(0,c.jsx)(t.strong,{children:`deux`}),`. En parallèle, deux
composants vivaient en « Design system » sans être réellement câblés dans
l'application — un design system n'est crédible que si « stabilisé » veut dire
« utilisé en production ».`]}),`
`,(0,c.jsx)(t.p,{children:`Trois constats ont structuré ce DDR :`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Le critère « câblé » n'était pas tenu.`}),` `,(0,c.jsx)(t.code,{children:`CarteContenu`}),` et `,(0,c.jsx)(t.code,{children:`ThematiqueScope`}),`
étaient documentés en Design system avec `,(0,c.jsx)(t.strong,{children:`zéro consommateur applicatif`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Le socle vitrine candidat est plus mûr que le webapp candidat`}),` — l'inverse
de l'intuition initiale. L'effort de structuration doit donc partir de la
vitrine, qui porte les deux échéances les plus proches.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Les fondations transverses sont implicites et disparates`}),` — l'élévation au
premier chef (tokens existants mais contournés partout), puis les surfaces
greige, les rayons, les espacements.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`décision`,children:`Décision`}),`
`,(0,c.jsx)(t.h3,{id:`1-doctrine-de-classement`,children:`1. Doctrine de classement`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Design system`}),` = un composant n'y figure que s'il est `,(0,c.jsx)(t.strong,{children:`importé par au
moins une page applicative live`}),` (hors Storybook). Sinon il est `,(0,c.jsx)(t.code,{children:`Candidat`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`Candidats/{Partagé, Vitrine, Webapp}`})}),` : trois zones.`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Partagé`}),` : ce qui sert les deux faces — primitives (carte, badges) et
doctrines transversales (états & messages).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Vitrine`}),` : site public (socle vitrine, home, référentiel, thématique, en
savoir plus, palette vitrine).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Webapp`}),` : espace authentifié (collections, édition, parcours,
embarquement, grammaire de surfaces).`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Convention de nommage`}),` : slug technique (dossiers, routes, ids) = `,(0,c.jsx)(t.code,{children:`shared`}),` ;
label humain (titres Storybook) = `,(0,c.jsx)(t.strong,{children:`« Partagé »`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Principes transversaux`}),` : rangés `,(0,c.jsx)(t.strong,{children:`au cas par cas`}),`, d'après ce que le
sujet dit de lui-même. Exemple tranché : `,(0,c.jsx)(t.code,{children:`grammaire-de-surfaces`}),`, malgré une
portée d'élévation transverse, est ancrée « espace membre » par son DDR-005 →
classée `,(0,c.jsx)(t.strong,{children:`Webapp`}),` (les faits priment sur la vocation prospective).`]}),`
`]}),`
`,(0,c.jsx)(t.h4,{id:`rétrogradations-actées`,children:`Rétrogradations actées`}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:`Sujet`}),(0,c.jsx)(t.th,{children:`Avant`}),(0,c.jsx)(t.th,{children:`Après`}),(0,c.jsx)(t.th,{children:`Motif`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:`Carte de contenu`}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`Design system/Briques/Partagé`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`Candidats/Partagé/Briques`})}),(0,c.jsx)(t.td,{children:`0 consommateur applicatif`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:`Thématiques`}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`Design system/Fondations`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`Candidats/Partagé/Fondations`})}),(0,c.jsxs)(t.td,{children:[`0 consommateur (expose `,(0,c.jsx)(t.code,{children:`thematique-scope`}),`)`]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:`Palette vitrine`}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`Design system/Fondations`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`Candidats/Vitrine/Fondations`})}),(0,c.jsx)(t.td,{children:`sous-ensemble thématique vitrine`})]})]})]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[`Le `,(0,c.jsx)(t.strong,{children:`code`}),` de ces composants reste sa source dans `,(0,c.jsx)(t.code,{children:`apps/web/src`}),` (intouché) ;
seule la `,(0,c.jsx)(t.strong,{children:`classification Storybook`}),` change. La rétrogradation n'est pas un
abandon : carte et `,(0,c.jsx)(t.code,{children:`thematique-scope`}),` sont au contraire `,(0,c.jsx)(t.strong,{children:`en tête de file de
promotion`}),` (cf. §4, chemin critique Home).`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`2-inventaire-cible-par-zone--échelle`,children:`2. Inventaire cible (par zone × échelle)`}),`
`,(0,c.jsxs)(t.p,{children:[`Échelles : `,(0,c.jsx)(t.strong,{children:`fondations → briques → compositions → modèles de pages`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Partagé`})}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:`Échelle`}),(0,c.jsx)(t.th,{children:`Sujet`}),(0,c.jsx)(t.th,{children:`Statut`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:`Fondations`}),(0,c.jsx)(t.td,{children:`Thématiques (référentiel + couleurs)`}),(0,c.jsx)(t.td,{children:`candidat mûr`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:`Briques`}),(0,c.jsx)(t.td,{children:`Carte de contenu`}),(0,c.jsxs)(t.td,{children:[`candidat mûr, `,(0,c.jsx)(t.strong,{children:`à câbler`})]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:`Briques`}),(0,c.jsx)(t.td,{children:`Badges & étiquettes`}),(0,c.jsx)(t.td,{children:`candidat`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:`Doctrine`}),(0,c.jsx)(t.td,{children:`États & messages (vides/erreurs/toasts)`}),(0,c.jsx)(t.td,{children:`candidat`})]})]})]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Vitrine`})}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:`Échelle`}),(0,c.jsx)(t.th,{children:`Sujet`}),(0,c.jsx)(t.th,{children:`Statut`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:`Fondations`}),(0,c.jsx)(t.td,{children:`Palette vitrine`}),(0,c.jsx)(t.td,{children:`candidat mûr`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:`Briques`}),(0,c.jsx)(t.td,{children:`Section, Eyebrow heading, Grille colonnes, Bloc pédagogique`}),(0,c.jsx)(t.td,{children:`candidat mûr`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:`Compositions`}),(0,c.jsx)(t.td,{children:`Panneau CTA, Gestes de composition, Sections canoniques`}),(0,c.jsx)(t.td,{children:`candidat mûr`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:`Écrans`}),(0,c.jsx)(t.td,{children:`Home, Référentiel, Thématique (+ drawer), En savoir plus`}),(0,c.jsx)(t.td,{children:`candidat mûr`})]})]})]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Webapp`})}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:`Échelle`}),(0,c.jsx)(t.th,{children:`Sujet`}),(0,c.jsx)(t.th,{children:`Statut`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:`Fondations`}),(0,c.jsx)(t.td,{children:`Grammaire de surfaces (élévation, conteneurs)`}),(0,c.jsxs)(t.td,{children:[`candidat, `,(0,c.jsx)(t.strong,{children:`chrome ouvert`})]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:`Briques`}),(0,c.jsxs)(t.td,{children:[`(PageContent, PageHeader, Sidebar… déjà `,(0,c.jsx)(t.strong,{children:`stabilisés`}),` en DS)`]}),(0,c.jsx)(t.td,{children:`DS câblé`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:`Écrans`}),(0,c.jsx)(t.td,{children:`Embarquement, Parcours, Collections, Édition`}),(0,c.jsx)(t.td,{children:`candidat`})]})]})]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Manque structurel webapp`}),` : le candidat webapp est moins fourni que la
vitrine. À étoffer après les échéances vitrine (layout espace, 09/07).`]}),`
`]}),`
`,(0,c.jsxs)(t.h3,{id:`3-cartographie-des-manques-de-fondation-enjeux-sans-implémentation`,children:[`3. Cartographie des manques de fondation (enjeux, `,(0,c.jsx)(t.strong,{children:`sans implémentation`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Ces fondations sont `,(0,c.jsx)(t.strong,{children:`identifiées`}),` ; l'élévation (§3.1) et les surfaces greige
(§3.2) sont `,(0,c.jsx)(t.strong,{children:`tranchées`}),`, les rayons/espacements/typo (§3.3) attendent encore.
On ne réplique pas le DSFR — on s'en éloigne en partie pour gagner en `,(0,c.jsx)(t.strong,{children:`chaleur`}),`.`]}),`
`,(0,c.jsxs)(t.h4,{id:`31-élévation--ombres--tranché-a1-22062026`,children:[`3.1 Élévation / ombres — `,(0,c.jsx)(t.em,{children:`tranché (A1, 22/06/2026)`})]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Statut : décidé et gravé.`}),` Anciennement l'enjeu phare (4 tokens
`,(0,c.jsx)(t.code,{children:`--shadow-carte*`}),` froids, mono-couche, non documentés, contournés par ~25
valeurs `,(0,c.jsx)(t.code,{children:`shadow-[…]`}),` ad hoc à 3 teintes mélangées). Arbitré par Lucas.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Échelle canonique retenue`}),` — 5 niveaux `,(0,c.jsx)(t.strong,{children:`nommés par rôle`}),`, gravés dans
`,(0,c.jsx)(t.code,{children:`apps/web/src/client/composants/tailwind.css`}),` (`,(0,c.jsx)(t.code,{children:`@theme`}),`) :`]}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:`Rôle`}),(0,c.jsx)(t.th,{children:`Utilitaire`}),(0,c.jsx)(t.th,{children:`Token`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:`plate`}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.em,{children:`(aucun)`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`none`})})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:`repos`}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`shadow-repos`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`--shadow-repos`})})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:`survol`}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`shadow-survol`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`--shadow-survol`})})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:`flottant`}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`shadow-flottant`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`--shadow-flottant`})})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:`vedette`}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`shadow-vedette`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`--shadow-vedette`})})]})]})]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Doctrine`}),` (divergence assumée du DSFR, pour la chaleur) :`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`teinte unique chaude`}),` `,(0,c.jsx)(t.code,{children:`--ombre-teinte: 40 34 28`}),` (taupe-greige), en
remplacement du noir pur et des 3 teintes mélangées — accordée au greige des
surfaces ;`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`2 ombres superposées par niveau`}),` : `,(0,c.jsx)(t.em,{children:`contact`}),` (offset/blur courts, dense) +
`,(0,c.jsx)(t.em,{children:`ambiance`}),` (offset/blur larges, diffuse) — une ombre simple « fait cheap » ;`]}),`
`,(0,c.jsxs)(t.li,{children:[`les anciens noms `,(0,c.jsx)(t.code,{children:`--shadow-carte*`}),` (jamais mergés sur `,(0,c.jsx)(t.code,{children:`main`}),`, introduits sur
cette branche le 20/06) sont `,(0,c.jsx)(t.strong,{children:`renommés par rôle`}),` : « carte » était trompeur,
l'échelle sert aussi hero et drawer.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Fondation documentée : story `,(0,c.jsx)(t.strong,{children:`« Échelle d'ombres »`}),` — spec d'intégration (table
de référence + à faire/à éviter + mises en situation). À articuler avec l'« échelle
d'élévation (5 rôles) » webapp de [DDR-005] — convergence, pas duplication.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Ralliement`}),` : les `,(0,c.jsx)(t.strong,{children:`écrans candidats vitrine`}),` (Storybook) sont `,(0,c.jsx)(t.strong,{children:`ralliés`}),` sur
les utilitaires (référentiel, thématique, panneau CTA + démos). Restent à traiter,
hors de ce passage : les `,(0,c.jsx)(t.code,{children:`shadow-[…]`}),` côté `,(0,c.jsx)(t.code,{children:`apps/web/src`}),` et la zone `,(0,c.jsx)(t.code,{children:`webapp`}),`, plus
le drawer latéral asymétrique `,(0,c.jsx)(t.code,{children:`-16px 0 …`}),` (à traiter comme `,(0,c.jsx)(t.strong,{children:`variante
directionnelle`}),`).`]}),`
`,(0,c.jsxs)(t.h4,{id:`32-surfaces--greige--tranché-a2-22062026`,children:[`3.2 Surfaces / greige — `,(0,c.jsx)(t.em,{children:`tranché (A2, 22/06/2026)`})]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Statut : décidé et gravé.`}),` Recadrage clé : le greige n'est `,(0,c.jsx)(t.strong,{children:`pas une échelle
de profondeur`}),` (ce rôle est tenu par l'ombre, §3.1). C'est une `,(0,c.jsx)(t.strong,{children:`teinte de
fond`}),` qui ne parle qu'`,(0,c.jsx)(t.strong,{children:`en combinaison`}),` — empilée sur elle-même, elle se
neutralise.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Décision.`}),` Le `,(0,c.jsx)(t.strong,{children:`taupe léger`}),` (undertone chaud R>G>B, accordé à
`,(0,c.jsx)(t.code,{children:`--ombre-teinte`}),`, volontairement très clair) devient le fond `,(0,c.jsx)(t.code,{children:`greige`}),` de
`,(0,c.jsx)(t.code,{children:`SectionVitrine`}),` et `,(0,c.jsxs)(t.strong,{children:[`remplace le gris froid `,(0,c.jsx)(t.code,{children:`alt-grey`})]}),` dans le rôle
d'alternance neutre — plus clair, plus chaud, cohérent avec l'ombre. La grammaire
vitrine est donc : `,(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`white`}),` · `,(0,c.jsx)(t.code,{children:`greige`}),` · `,(0,c.jsx)(t.code,{children:`alt-blue`}),` · `,(0,c.jsx)(t.code,{children:`blue`})]}),` (+ `,(0,c.jsx)(t.code,{children:`thematique`}),`
ponctuel). `,(0,c.jsx)(t.code,{children:`alt-grey`}),` est `,(0,c.jsx)(t.strong,{children:`retiré côté vitrine`}),` mais reste valide en `,(0,c.jsx)(t.strong,{children:`classe
brute côté webapp`}),` (page-shell, [DDR-005]).`]}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:`Token`}),(0,c.jsx)(t.th,{children:`Valeur`}),(0,c.jsx)(t.th,{children:`Utilitaire`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`--color-surface-greige`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`#faf8f3`})}),(0,c.jsxs)(t.td,{children:[(0,c.jsx)(t.code,{children:`bg-surface-greige`}),` (fond de section)`]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`--color-surface-greige-carte`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`#f4efe7`})}),(0,c.jsxs)(t.td,{children:[(0,c.jsx)(t.code,{children:`bg-surface-greige-carte`}),` (fond de carte)`]})]})]})]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Règle d'or`}),` : jamais deux fonds de même famille superposés — section greige →
cartes blanches, section blanche → cartes greige ; l'`,(0,c.jsx)(t.strong,{children:`ombre`}),` porte la
profondeur. La chaleur est subliminale, elle parle par `,(0,c.jsx)(t.em,{children:`contraste`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Où c'est gravé.`}),` Feuille `,(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`tokens-candidats.css`})}),` (Storybook-only, importée
par `,(0,c.jsx)(t.code,{children:`stories.css`}),` ; l'app charge `,(0,c.jsx)(t.code,{children:`core.css`}),`) — pas dans `,(0,c.jsx)(t.code,{children:`tailwind.css`}),` de prod,
tant que non câblé. Promotion = déplacer le token vers `,(0,c.jsx)(t.code,{children:`tailwind.css`}),`. Fondation
documentée : story `,(0,c.jsx)(t.strong,{children:`« Couleurs de fond & alternance »`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Ralliement fait.`}),` Les constantes `,(0,c.jsx)(t.code,{children:`*_GREIGE`}),` de `,(0,c.jsx)(t.code,{children:`gestes-vitrine.tsx`}),` sont
devenues des `,(0,c.jsx)(t.strong,{children:`alias`}),` des deux tokens (`,(0,c.jsx)(t.code,{children:`CANVAS/SECTION_GREIGE → surface-greige`}),`,
`,(0,c.jsx)(t.code,{children:`DALLE_GREIGE* → surface-greige-carte`}),`) ; les valeurs en dur `,(0,c.jsx)(t.code,{children:`beige-gris-galet`}),`
des écrans sont ralliées ; la `,(0,c.jsx)(t.strong,{children:`toolbar greige`}),` (presets custom/dsfr) est
`,(0,c.jsx)(t.strong,{children:`retirée`}),` (système `,(0,c.jsx)(t.code,{children:`var(--greige-*)`}),` mort). Recoupe la « gamme de conteneurs »
de [DDR-005].`]}),`
`,(0,c.jsxs)(t.h4,{id:`33-rayons--tranché-audit-du-2206`,children:[`3.3 Rayons — `,(0,c.jsx)(t.em,{children:`tranché (audit du 22/06)`})]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Statut : décidé et gravé.`}),` Audit fait : `,(0,c.jsx)(t.code,{children:`rounded-2xl`}),` (×33), `,(0,c.jsx)(t.code,{children:`3xl`}),` (×9),
`,(0,c.jsx)(t.code,{children:`full`}),` (×10) + `,(0,c.jsx)(t.strong,{children:`4 valeurs ad hoc`}),` `,(0,c.jsx)(t.code,{children:`rounded-[1.75rem/2rem/2.5rem]`}),`. Des rôles
nets se dégageaient ; on les a `,(0,c.jsx)(t.strong,{children:`nommés sans changer le rendu`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Échelle de rayons par rôle`}),` (tokens dans `,(0,c.jsx)(t.code,{children:`tokens-candidats.css`}),`) :`]}),`
`,(0,c.jsxs)(t.p,{children:[`Rôles en `,(0,c.jsx)(t.strong,{children:`anglais`}),` (convention tokens) :`]}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:`Rôle`}),(0,c.jsx)(t.th,{children:`Token`}),(0,c.jsx)(t.th,{children:`Valeur`}),(0,c.jsx)(t.th,{children:`Usage`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:`control`}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`rounded-control`})}),(0,c.jsx)(t.td,{children:`8px`}),(0,c.jsx)(t.td,{children:`bouton, input, petit encart`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:`card`}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`rounded-card`})}),(0,c.jsx)(t.td,{children:`16px`}),(0,c.jsx)(t.td,{children:`carte de contenu, tuile`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:`panel`}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`rounded-panel`})}),(0,c.jsx)(t.td,{children:`24px`}),(0,c.jsx)(t.td,{children:`panneau CTA, hero, grande carte`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:`tile`}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`rounded-tile`})}),(0,c.jsx)(t.td,{children:`32px`}),(0,c.jsx)(t.td,{children:`collage photo, dalle, grille XL`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:`pill`}),(0,c.jsxs)(t.td,{children:[(0,c.jsx)(t.code,{children:`rounded-full`}),` natif`]}),(0,c.jsx)(t.td,{children:`—`}),(0,c.jsx)(t.td,{children:`chip, pastille`})]})]})]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Ralliement fait`}),` : les 4 ad hoc + tous les `,(0,c.jsx)(t.code,{children:`rounded-2xl→carte`}),` / `,(0,c.jsx)(t.code,{children:`3xl→panneau`}),`
des candidats vitrine sont ralliés (rendu identique, valeurs égales). Le code lit
désormais un `,(0,c.jsx)(t.strong,{children:`rôle`}),`, jamais une taille. `,(0,c.jsx)(t.code,{children:`apps/web/src`}),` intouché.`]}),`
`,(0,c.jsxs)(t.h4,{id:`34-gris-de-texte--tranché-audit-du-2206`,children:[`3.4 Gris de texte — `,(0,c.jsx)(t.em,{children:`tranché (audit du 22/06)`})]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Statut : décidé et rallié.`}),` Deux gammes de gris de texte coexistaient : la
gamme `,(0,c.jsx)(t.strong,{children:`DSFR`}),` tokenisée (title / default / mention grey, ~117 usages, dans les
vrais écrans) et la gamme `,(0,c.jsxs)(t.strong,{children:[`Tailwind `,(0,c.jsx)(t.code,{children:`neutral-*`})]}),` (~20 usages, `,(0,c.jsx)(t.strong,{children:`uniquement
dans les bancs de fondation`}),`, dette introduite par ces bancs).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Décision : une seule gamme de texte, la DSFR.`}),` `,(0,c.jsx)(t.code,{children:`text-neutral-*`}),` est `,(0,c.jsx)(t.strong,{children:`banni`}),`
de la vitrine. Mapping rallié :`]}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:`Tailwind`}),(0,c.jsx)(t.th,{children:`→ Rôle DSFR`}),(0,c.jsx)(t.th,{children:`Valeur`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`neutral-800`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`text-(--color-dsfr-text-title-grey)`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`#161616`})})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`neutral-700`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`text-(--color-dsfr-text-default-grey)`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`#161616`})})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`neutral-600/500/400`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`text-(--color-dsfr-text-mention-grey)`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`#666666`})})]})]})]}),`
`,(0,c.jsxs)(t.p,{children:[`Aucun autre gris hors-système (`,(0,c.jsx)(t.code,{children:`text-[#…]`}),`, `,(0,c.jsx)(t.code,{children:`gray/slate/zinc`}),`) dans la vitrine.
`,(0,c.jsx)(t.code,{children:`apps/web/src`}),` intouché.`]}),`
`,(0,c.jsxs)(t.h4,{id:`35-hairline-filet--tranché-audit-du-2206`,children:[`3.5 Hairline (filet) — `,(0,c.jsx)(t.em,{children:`tranché (audit du 22/06)`})]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Statut : décidé et rallié.`}),` `,(0,c.jsx)(t.code,{children:`ring-1 ring-black/5`}),` (×20, + 2× `,(0,c.jsx)(t.code,{children:`/6`}),`) = un filet
de séparation discret, identifiable mais non nommé.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Décision.`}),` Token `,(0,c.jsx)(t.code,{children:`--color-filet`}),` (→ `,(0,c.jsx)(t.code,{children:`ring-filet`}),` / `,(0,c.jsx)(t.code,{children:`border-filet`}),`), `,(0,c.jsx)(t.strong,{children:`accordé à
la chaleur`}),` : `,(0,c.jsx)(t.code,{children:`rgb(40 34 28 / 0.08)`}),` — undertone taupe (`,(0,c.jsx)(t.code,{children:`--ombre-teinte`}),`) au lieu
du noir pur. Les 22 `,(0,c.jsx)(t.code,{children:`ring-black/N`}),` des candidats vitrine sont `,(0,c.jsx)(t.strong,{children:`ralliés`}),` sur
`,(0,c.jsx)(t.code,{children:`ring-filet`}),` (à poser avec `,(0,c.jsx)(t.code,{children:`ring-1`}),`). `,(0,c.jsx)(t.code,{children:`apps/web/src`}),` intouché.`]}),`
`,(0,c.jsxs)(t.h4,{id:`36-motion--doctrine-de-retenue-audit-du-2206-sans-token`,children:[`3.6 Motion — `,(0,c.jsx)(t.em,{children:`doctrine de retenue (audit du 22/06, sans token)`})]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Statut : doctrine documentée + nettoyage appliqué.`}),` Tailwind v4 n'expose pas
de namespace pour des durées nommées ; on documente la convention, le code reste
idiomatique. `,(0,c.jsx)(t.strong,{children:`Principe : la motion sert, elle ne s'annonce pas.`}),` Peu de
transitions ; la profondeur (l'ombre A1) porte déjà le feedback.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`✅ Encouragé`}),` (l'objet ne bouge pas) : ombre `,(0,c.jsx)(t.code,{children:`repos→survol`}),`
(`,(0,c.jsx)(t.code,{children:`hover:shadow-survol`}),`), couleur/bordure, translation d'un `,(0,c.jsx)(t.em,{children:`indice`}),` (flèche
`,(0,c.jsx)(t.code,{children:`group-hover:translate-x-0.5`}),`, opacité révélée).`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`❌ Banni`}),` (suggère une interactivité absente / trop voyant) : `,(0,c.jsxs)(t.strong,{children:[`zoom/`,(0,c.jsx)(t.code,{children:`scale`}),`
sur image`]}),`, `,(0,c.jsxs)(t.strong,{children:[`soulèvement `,(0,c.jsx)(t.code,{children:`-translate-y`}),` du bloc`]}),`, `,(0,c.jsx)(t.code,{children:`transition-all`}),`, durée
≥ 500ms sur du hover, parallax, entrées décoratives sur du texte.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Nettoyage appliqué (22/06)`}),` : 2 zooms photo (`,(0,c.jsx)(t.code,{children:`scale`}),`, `,(0,c.jsx)(t.code,{children:`duration-500`}),`) retirés,
7 soulèvements `,(0,c.jsx)(t.code,{children:`-translate-y`}),` retirés (carte/chip/bouton), `,(0,c.jsx)(t.code,{children:`transition-[transform, box-shadow]`}),` ramené à `,(0,c.jsx)(t.code,{children:`transition-shadow`}),` quand seul le shadow anime, transitions
orphelines supprimées. Les flèches-indices (`,(0,c.jsx)(t.code,{children:`group-hover:translate-x`}),`) conservées.`]}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:`Durée`}),(0,c.jsx)(t.th,{children:`Rôle`}),(0,c.jsx)(t.th,{children:`Quand`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`duration-200`})}),(0,c.jsx)(t.td,{children:`rapide`}),(0,c.jsx)(t.td,{children:`hover (ombre, couleur, indice)`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`duration-300`})}),(0,c.jsx)(t.td,{children:`standard`}),(0,c.jsx)(t.td,{children:`drawer, transition interne`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`duration-500`})}),(0,c.jsx)(t.td,{children:`ample`}),(0,c.jsxs)(t.td,{children:[(0,c.jsx)(t.strong,{children:`rare`}),`, transitions non-hover seulement`]})]})]})]}),`
`,(0,c.jsxs)(t.p,{children:[`Story de référence : `,(0,c.jsx)(t.strong,{children:`« Motion (doctrine) »`}),` (effets encouragés + contre-exemples).`]}),`
`,(0,c.jsx)(t.h4,{id:`37-reste-à-instruire-typo-espacements`,children:`3.7 Reste à instruire (typo, espacements)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Typographie`}),` : titres sur l'échelle Tailwind (`,(0,c.jsx)(t.code,{children:`text-2xl→5xl`}),`), 1 ad hoc. Le
trou est la `,(0,c.jsx)(t.strong,{children:`doctrine de rôle`}),` (H1 hero vs H2 section), pas les valeurs.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Espacements`}),` : sur l'échelle Tailwind, pas de dispersion notable — rien à
graver.`]}),`
`]}),`
`,(0,c.jsx)(t.h4,{id:`38-dette-adjacente`,children:`3.8 Dette adjacente`}),`
`,(0,c.jsxs)(t.p,{children:[`Duplication de données : `,(0,c.jsx)(t.code,{children:`stories/_data/{icones-thematiques, referentiel-engagement}`}),`
coexiste avec `,(0,c.jsx)(t.code,{children:`candidats/vitrine/socle-vitrine/data/`}),` (contenus `,(0,c.jsx)(t.strong,{children:`divergents`}),`,
pas de simples copies). À réconcilier — hors périmètre de ce chantier.`]}),`
`,(0,c.jsx)(t.h3,{id:`4-graphe-de-dépendances-home-et-catalogue-dabord`,children:`4. Graphe de dépendances (Home et Catalogue d'abord)`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Home vitrine — 25/06`}),` · `,(0,c.jsx)(t.code,{children:`PageAccueilRetenue`})]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{children:`PageAccueilRetenue
├─ HeroBentoNet ............ Socle + Gestes + ⚠ ThematiqueScope
├─ BeneficesCollagePicto ... Socle + Gestes
└─ ParOuCommencerImages .... Socle + Gestes + ⚠ CarteContenu
`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Catalogue d'engagement — 01/07`}),` · Référentiel + Thématique`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{children:`Référentiel ──► CarteVedette ........ Socle + ⚠ ThematiqueScope
Thématique  ──► CarteEngagement ...... Socle + ⚠ ThematiqueScope
            └─► EngagementDrawer ...... Socle + ⚠ ThematiqueScope
`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Fondations communes`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{children:`Socle vitrine (candidat mûr)
  briques ...... Section · Eyebrow · Grille · PanneauCTA · BlocPedagogique
  gestes ....... CollageMedia · TuilePhoto · CarteChiffre · PastillePicto
  données ...... thématiques · actualités · clubs · photos

⚠ Partagé — à câbler EN PREMIER (non câblé aujourd'hui)
  CarteContenu · ThematiqueScope
`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Chemin critique 25/06`}),` : la Home dépend de `,(0,c.jsx)(t.code,{children:`ThematiqueScope`}),` (hero) et de
`,(0,c.jsx)(t.code,{children:`CarteContenu`}),` (par-où-commencer), tous deux `,(0,c.jsx)(t.strong,{children:`non câblés`}),` aujourd'hui. Leur
`,(0,c.jsx)(t.strong,{children:`promotion en Partagé câblé est le prérequis n°1`}),` de la Home.`]}),`
`,(0,c.jsx)(t.h3,{id:`5-séquencement-macro-adossé-au-planning-produit`,children:`5. Séquencement macro (adossé au planning produit)`}),`
`,(0,c.jsxs)(t.p,{children:[`Ordre de promotion, énoncé comme cap — `,(0,c.jsx)(t.strong,{children:`sans création d'issues à ce stade`}),` :`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Partagé câblé`}),` : `,(0,c.jsx)(t.code,{children:`ThematiqueScope`}),` + `,(0,c.jsx)(t.code,{children:`CarteContenu`}),` (prérequis Home).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Socle vitrine`}),` stabilisé (Section/Eyebrow/Grille/PanneauCTA + gestes).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Home`}),` — `,(0,c.jsx)(t.em,{children:`25 juin 2026`}),` (maquettes Lucas le 23/06, textes+images le 25/06).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Catalogue d'engagement`}),` (référentiel + thématique + drawer) — `,(0,c.jsx)(t.em,{children:`1er juillet 2026`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Layout espace entreprise`}),` (webapp ; étoffer le candidat webapp, grammaire
de surfaces) — `,(0,c.jsx)(t.em,{children:`9 juillet 2026`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Pages événement`}),` (s'appuie sur Carte de contenu partagée + socle) — `,(0,c.jsx)(t.em,{children:`23 juillet 2026`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`6-brique-pivot--la-carte-de-contenu`,children:`6. Brique pivot : la carte de contenu`}),`
`,(0,c.jsxs)(t.p,{children:[`La carte est l'objet le plus dupliqué de la vitrine : chaque écran réinventait la
sienne. Doctrine : `,(0,c.jsx)(t.strong,{children:`une brique pivot couvre la plupart des cas`}),`, on n'autorise
des cartes ad hoc que pour des registres qu'elle ne sait pas porter sans se
dénaturer.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`CarteContenu`})}),` (`,(0,c.jsx)(t.code,{children:`@candidats/shared/briques/carte-contenu`}),`) est cette brique.
Rapatriée du code applicatif (0 conso prod → candidat, cf. §1), elle est le
squelette versatile : c'est l'instanciation (slots + libellés) qui définit
l'usage. Axes :`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Structure`}),` : `,(0,c.jsx)(t.code,{children:`orientation`}),` (verticale / horizontale), `,(0,c.jsx)(t.code,{children:`taille`}),`
(`,(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`sm · md · lg`})}),` — 3 registres ; l'usage réel n'en demande pas plus),
`,(0,c.jsx)(t.code,{children:`ratioImage`}),`, `,(0,c.jsx)(t.code,{children:`largeurImage`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lien`}),` : `,(0,c.jsx)(t.code,{children:`complet`}),` (pied CTA) · `,(0,c.jsx)(t.code,{children:`picto`}),` (cliquable, flèche coin) · `,(0,c.jsx)(t.code,{children:`bloc`}),`
(cliquable + libellé en pied) · `,(0,c.jsx)(t.code,{children:`aucun`}),`. `,(0,c.jsx)(t.code,{children:`as="a"|"button"`}),` : naviguer `,(0,c.jsx)(t.strong,{children:`ou`}),`
actionner (drawer/dialog) sans changer de page — un seul focusable.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Teinte`}),` : `,(0,c.jsx)(t.code,{children:`neutre`}),` (blanc + filet) · `,(0,c.jsx)(t.code,{children:`thematique`}),` (voile `,(0,c.jsx)(t.code,{children:`--thematique-bg`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`accents `,(0,c.jsx)(t.code,{children:`--thematique-main`}),`, `,(0,c.jsxs)(t.strong,{children:[`pilotés par un `,(0,c.jsx)(t.code,{children:`ThematiqueScope`}),` parent`]}),` ;
la carte est agnostique, elle lit les variables). La carte fusionne le `,(0,c.jsx)(t.code,{children:`style`}),`
injecté par le scope (`,(0,c.jsx)(t.code,{children:`asChild`}),`) avec son voile — sinon `,(0,c.jsx)(t.code,{children:`color-mix`}),` est vide.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Grammaire de contenu (slots typés par rôle — la forme dit le rôle, DDR-010).`}),`
Une carte porte, au-delà de `,(0,c.jsx)(t.code,{children:`titre`}),` / `,(0,c.jsx)(t.code,{children:`description`}),` / CTA :`]}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:`Slot`}),(0,c.jsx)(t.th,{children:`Rôle`}),(0,c.jsx)(t.th,{children:`Primitive`}),(0,c.jsx)(t.th,{children:`Forme`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`categorie`})}),(0,c.jsx)(t.td,{children:`catégorie / mot-clé (éditorial, stable)`}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`Etiquette`})})}),(0,c.jsx)(t.td,{children:`pill, casse normale`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`etat`})}),(0,c.jsx)(t.td,{children:`statut (système, varie dans le temps)`}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`Badge`})})}),(0,c.jsx)(t.td,{children:`carré, MAJUSCULES`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`meta`})}),(0,c.jsxs)(t.td,{children:[`donnée neutre (lieu, durée, `,(0,c.jsx)(t.strong,{children:`date`}),`)`]}),(0,c.jsx)(t.td,{children:`gris muted + picto`}),(0,c.jsx)(t.td,{children:`au-dessus du CTA`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`medaillon`})}),(0,c.jsx)(t.td,{children:`picto d'accroche (cartes sans image)`}),(0,c.jsx)(t.td,{children:`en tête de corps`}),(0,c.jsx)(t.td,{children:`—`})]})]})]}),`
`,(0,c.jsxs)(t.p,{children:[`Mémo `,(0,c.jsx)(t.strong,{children:`arrondi = catégorie, carré = état`}),`. La `,(0,c.jsx)(t.strong,{children:`meta n'est jamais bleue`}),` (le
bleu est réservé à l'interactif) ; une catégorie n'est PAS une meta (« Actualité »
= `,(0,c.jsx)(t.code,{children:`categorie`}),`, pas une ligne meta).`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsxs)(t.strong,{children:[`Pas de `,(0,c.jsx)(t.code,{children:`surtitre`}),` / eyebrow.`]}),` L'ancien surtitre gris au-dessus du titre est
`,(0,c.jsx)(t.strong,{children:`supprimé`}),` : il mélangeait dates (→ `,(0,c.jsx)(t.code,{children:`meta`}),`), catégories (→ `,(0,c.jsx)(t.code,{children:`categorie`}),`) et
numéros (souvent un doublon du titre). Chaque donnée a désormais un slot typé —
plus d'eyebrow ambigu.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Emplacement des marqueurs`}),` : `,(0,c.jsx)(t.code,{children:`emplacementMarqueurs="start"`}),` (défaut,
au-dessus du titre — zone `,(0,c.jsx)(t.code,{children:`__start`}),` du DSFR) ou `,(0,c.jsx)(t.code,{children:`"image"`}),` (par-dessus la photo).
`,(0,c.jsx)(t.code,{children:`marqueurImage`}),` reste un slot LIBRE pour une pastille posée sur l'image
(« Partout en France »), distinct des marqueurs typés.`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Rythme vertical`}),` calé sur le modèle DSFR (`,(0,c.jsx)(t.code,{children:`fr-card__content`}),`) : marges
SÉMANTIQUES par relation, pas un `,(0,c.jsx)(t.code,{children:`gap`}),` uniforme. Marqueurs `,(0,c.jsx)(t.strong,{children:`détachés`}),` du
titre ; titre `,(0,c.jsx)(t.strong,{children:`aéré`}),` de sa description ; meta `,(0,c.jsx)(t.strong,{children:`détachée`}),` en bas, au-dessus
du CTA. Ce qui VARIE par taille : titre, padding, rythme. Ce qui reste
CONSTANT (lisibilité) : CTA, meta ; la description ne grandit qu'en `,(0,c.jsx)(t.code,{children:`lg`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Fondations ralliées`}),` : `,(0,c.jsx)(t.code,{children:`rounded-card`}),` (§3.3), `,(0,c.jsx)(t.code,{children:`ring-filet`}),` (§3.5), ombre
`,(0,c.jsx)(t.code,{children:`shadow-repos → survol`}),` au survol (§3.1), motion de retenue — ombre seule, pas
de soulèvement (§3.6).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Cartes ralliées`}),` (registre canonique, à valeurs lissées) : cartes bénéfices
(médaillon), amorces home (médaillon + `,(0,c.jsx)(t.code,{children:`bloc`}),`/`,(0,c.jsx)(t.code,{children:`actionPied`}),`), cartes vedettes
référentiel (`,(0,c.jsx)(t.code,{children:`thematique`}),` + image/médaillon), cartes engagement
(`,(0,c.jsx)(t.code,{children:`thematique`}),` + `,(0,c.jsx)(t.code,{children:`as="button"`}),` → drawer).`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Exception assumée`}),` : `,(0,c.jsx)(t.code,{children:`CarteFamilleCompacte`}),` (référentiel) — registre `,(0,c.jsx)(t.strong,{children:`liste
horizontale à pastille`}),` (pastille picto à gauche + texte + flèche). Ni l'`,(0,c.jsx)(t.code,{children:`image`}),`
(zone pleine) ni le `,(0,c.jsx)(t.code,{children:`medaillon`}),` (en tête de corps) ne reproduisent la pastille
latérale ; la rallier dénaturerait la carte ou la brique. Laissée ad hoc, à
réévaluer si un slot « visuel latéral compact » émerge.`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Garde-fou explorations/IA`}),` : avant de créer une carte, vérifier que
`,(0,c.jsx)(t.code,{children:`CarteContenu`}),` ne couvre pas le cas (teinte, médaillon, bouton, slots). Une
carte ad hoc doit nommer le registre qu'elle ouvre — sinon, c'est une
instanciation de la brique pivot.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`décisions-ouvertes`,children:`Décisions ouvertes`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Échelle d'élévation`}),` (§3.1) : nombre de rôles, valeurs, articulation avec
les 5 rôles de [DDR-005]. À trancher par Lucas avant implémentation.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.del,{children:`Échelle de surfaces greige (§3.2)`}),` — `,(0,c.jsx)(t.strong,{children:`tranché`}),` : taupe léger, 5e fond
`,(0,c.jsx)(t.code,{children:`greige`}),` de `,(0,c.jsx)(t.code,{children:`SectionVitrine`}),` (token candidat) ; constantes `,(0,c.jsx)(t.code,{children:`*_GREIGE`}),` ralliées`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`toolbar retirée.`}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Mise en issues`}),` du séquencement : outil non arrêté (Linear suspendu pour
raisons d'API ; retour possible à GitHub Issues). `,(0,c.jsx)(t.strong,{children:`Hors de ce DDR.`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Réconciliation `,(0,c.jsx)(t.code,{children:`_data/`})]}),` (§3.4).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`références`,children:`Références`}),`
`,(0,c.jsx)(t.p,{children:`[DDR-005] grammaire de surfaces (élévation webapp) · [DDR-011] sas Candidats ·
[DDR-012]/[DDR-013]/[DDR-014] sujets vitrine · [DDR-016] ménage des explorations.`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),i()}))();export{s as default};