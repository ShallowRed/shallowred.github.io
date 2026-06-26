import{i as e}from"./preload-helper-DaCzexP6.js";import{u as t}from"./iframe-BeshMaXC.js";import{L as n,a as r,s as i}from"./blocks-DpqSezW4.js";import{t as a}from"./mdx-react-shim-DSKVbLXU.js";function o(e){let t={blockquote:`blockquote`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`DDR/DDR-016 : Archivage et ménage du book (zone Archives)`,created:`2026-06-22`,status:`proposé`}),`
`,(0,c.jsx)(t.h1,{id:`ddr-016--archivage-et-ménage-du-book`,children:`DDR-016 : Archivage et ménage du book`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsxs)(t.strong,{children:[`Statut `,(0,c.jsx)(t.code,{children:`proposé`}),`.`]}),` Ce DDR fixe une `,(0,c.jsx)(t.strong,{children:`convention de ménage`}),` (zone d'archives,
critères d'archivage, repli des galeries d'options) et un `,(0,c.jsx)(t.strong,{children:`plan de tri par
lots`}),`. Il devient opposable au passage en `,(0,c.jsx)(t.code,{children:`accepté`}),`. Il ne décide rien sur le
`,(0,c.jsx)(t.em,{children:`contenu`}),` des sujets candidats — chaque arbitrage de design reste porté par son
DDR (005→015).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`contexte`,children:`Contexte`}),`
`,(0,c.jsxs)(t.p,{children:[`La promotion des écrans vitrine vers `,(0,c.jsx)(t.code,{children:`Candidats`}),` (juin 2026, [DDR-012]→[DDR-015])
a été faite `,(0,c.jsx)(t.strong,{children:`sans replier la matière d'exploration source`}),`. C'était assumé
(`,(0,c.jsx)(t.code,{children:`Apercu.mdx`}),` : « leur ménage se fera plus tard, séparément » ; [DDR-012] : les
galeries `,(0,c.jsx)(t.code,{children:`Options · …`}),` « restent la matière… à replier une fois la direction
confirmée »). Ce ménage différé arrive aujourd'hui à échéance : le book empile du
contenu redondant entre `,(0,c.jsx)(t.code,{children:`Explorations`}),` et `,(0,c.jsx)(t.code,{children:`Candidats`}),`, et un lecteur ne sait plus
ce qui est encore une hypothèse de ce qui est dépassé.`]}),`
`,(0,c.jsx)(t.p,{children:`Trois natures de désordre, à ne pas confondre :`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Redondance`}),` — une exploration dont un candidat plus abouti reprend la
matière (la décision a été extraite, l'écran source ne sert plus de référence).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Convergence en attente`}),` — une galerie d'options candidate dont la décision
n'est `,(0,c.jsx)(t.em,{children:`pas encore tranchée`}),` : ce n'est pas du déchet, c'est de la promotion en
attente. On ne replie qu'`,(0,c.jsx)(t.strong,{children:`après`}),` l'arbitrage.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Dette technique`}),` — un même composant dupliqué entre `,(0,c.jsx)(t.code,{children:`kit-explo`}),` et
`,(0,c.jsx)(t.code,{children:`socle-vitrine`}),`, avec des imports encore branchés sur l'ancienne copie.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`décision`,children:`Décision`}),`
`,(0,c.jsxs)(t.h3,{id:`1-zone-explorations_archives`,children:[`1. Zone `,(0,c.jsx)(t.code,{children:`Explorations/_archives/`})]}),`
`,(0,c.jsxs)(t.p,{children:[`Le ménage `,(0,c.jsx)(t.strong,{children:`ne supprime pas`}),` : il déplace. On introduit une branche
`,(0,c.jsx)(t.code,{children:`Explorations/_archives/`}),` (tag `,(0,c.jsx)(t.code,{children:`!manifest`}),`, hors navigation active) qui accueille
les explorations `,(0,c.jsx)(t.strong,{children:`supersédées`}),` — celles dont un candidat reprend et dépasse la
matière. Le code reste lisible et réversible ; git conserve l'historique mais
n'est pas le seul filet.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Une exploration n'entre en archives que si `,(0,c.jsx)(t.strong,{children:`les trois`}),` conditions tiennent :`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`un `,(0,c.jsx)(t.strong,{children:`candidat (ou DDR)`}),` reprend explicitement sa matière ;`]}),`
`,(0,c.jsxs)(t.li,{children:[`elle ne sert `,(0,c.jsx)(t.strong,{children:`plus de référence`}),` d'écran (le candidat est plus abouti) ;`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`aucun import vivant`}),` ne la tire (vérification graphe obligatoire — voir §4).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Les `,(0,c.jsx)(t.code,{children:`.mdx`}),` de `,(0,c.jsx)(t.strong,{children:`synthèse décisionnelle`}),` (`,(0,c.jsx)(t.code,{children:`Apercu`}),`, `,(0,c.jsx)(t.code,{children:`PartiRetenu`}),`, `,(0,c.jsx)(t.code,{children:`Analyse*`}),`,
`,(0,c.jsx)(t.code,{children:`Decisions*`}),`, `,(0,c.jsx)(t.code,{children:`Modele*`}),`) ne sont `,(0,c.jsx)(t.strong,{children:`pas`}),` archivés : leur valeur est documentaire,
pas exécutable. Ils restent comme trace du raisonnement.`]}),`
`,(0,c.jsx)(t.h3,{id:`2-repli-des-galeries-doptions--archivage`,children:`2. Repli des galeries d'options (≠ archivage)`}),`
`,(0,c.jsxs)(t.p,{children:[`Une galerie `,(0,c.jsx)(t.code,{children:`Options · …`}),` candidate se replie `,(0,c.jsx)(t.strong,{children:`au moment où sa décision ouverte
est tranchée`}),`, pas avant : on garde le parti retenu (câblé), on retire les
variantes confrontées. Tant que l'arbitrage est ouvert, la galerie `,(0,c.jsx)(t.strong,{children:`reste`}),` —
c'est la matière de décision, sa présence est légitime.`]}),`
`,(0,c.jsx)(t.h3,{id:`3-convention-de-statut`,children:`3. Convention de statut`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Fuite manifeste`}),` : une story candidate qui n'a pas `,(0,c.jsx)(t.code,{children:`!manifest`}),` apparaît au
manifeste comme stabilisée. Toute story sous `,(0,c.jsx)(t.code,{children:`Candidats/`}),` porte `,(0,c.jsx)(t.code,{children:`!manifest`}),`
jusqu'à promotion explicite vers `,(0,c.jsx)(t.code,{children:`Design system`}),` (cf. [DDR-011], étage B).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Avancement de l'étage A`}),` : un DDR candidat dont les décisions ouvertes sont
mûres est passé en `,(0,c.jsx)(t.code,{children:`accepté`}),` dans `,(0,c.jsx)(t.code,{children:`stories/ddr/`}),` (numéro conservé), et non
laissé indéfiniment en `,(0,c.jsx)(t.code,{children:`candidat`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`plan-de-tri-par-lots`,children:`Plan de tri par lots`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`Ordre = risque croissant. Chaque lot est livrable indépendamment.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Avancement (2026-06-22).`}),` Lot 1 ✅ et Lot 4 ✅ exécutés (zone
`,(0,c.jsx)(t.code,{children:`explorations/_archives/`}),` créée, 19 stories supersédées déplacées, fuites
`,(0,c.jsx)(t.code,{children:`!manifest`}),` du socle corrigées, build vérifié : 0 fuite `,(0,c.jsx)(t.code,{children:`_archives`}),`, zones
intactes, bundle gelé `,(0,c.jsx)(t.code,{children:`pistes-vitrine-t3`}),` toujours autoportant). `,(0,c.jsx)(t.strong,{children:`Matière
récupérée avant archivage`}),` : l'anatomie pédagogique de `,(0,c.jsx)(t.code,{children:`composition-vivante`}),`
(catalogue de gestes) est promue en story `,(0,c.jsx)(t.code,{children:`Candidats/Socle vitrine/Gestes de composition`}),` — le socle avait les gestes câblés mais aucune doc qui les montre.
Le geste « Mouvement tenu » (micro-animations a11y-safe) reste en `,(0,c.jsx)(t.code,{children:`_archives`}),`,
non promu (récupérable). `,(0,c.jsx)(t.strong,{children:`Lot 3 ✅`}),` : shim `,(0,c.jsx)(t.code,{children:`bloc-pedagogique`}),` supprimé +
18 écrans orphelins (résidu Lot 4) balayés en `,(0,c.jsx)(t.code,{children:`_archives`}),`. `,(0,c.jsx)(t.strong,{children:`Lot 5 ✅`}),` :
exploration réduite à l'essentiel (13 stories + 8 docs → 10 stories + 0 doc) ;
matière sauvée rapatriée au candidat (spec du modèle de données du drawer,
depuis fusionnée dans la note « Modèle de contenu » ; `,(0,c.jsx)(t.code,{children:`SectionsCanoniques`}),`
enrichie). `,(0,c.jsx)(t.strong,{children:`Lot 2`}),` : revu le 22/06, `,(0,c.jsx)(t.strong,{children:`délibérément laissé
ouvert`}),` (aucun arbitrage de galerie tranché ; promotion des DDR reportée). Le
ménage est traité jusqu'à sa limite actionnable — la suite dépend d'arbitrages
produit, pas de dette technique.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`lot-1--quick-wins-sans-risque`,children:`Lot 1 — Quick wins (sans risque)`}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:`Action`}),(0,c.jsx)(t.th,{children:`Cible`}),(0,c.jsx)(t.th,{children:`Justification`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:`Archiver le doublon strict`}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`explorations/.../parti-retenu/OptionsCommencer.stories.tsx`})}),(0,c.jsxs)(t.td,{children:[`Prédécesseur exact de `,(0,c.jsx)(t.code,{children:`candidats/home-vitrine/OptionsParOuCommencer`}),` (version câblée, parti C).`]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:`Corriger la fuite manifeste`}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`candidats/socle-vitrine/briques/{Section,Eyebrow,Grille,PanneauCTA}.stories.tsx`})}),(0,c.jsxs)(t.td,{children:[`Ajouter `,(0,c.jsx)(t.code,{children:`!manifest`}),` : le socle reste candidat tant que la tokenisation DSFR n'est pas faite ([DDR-012] étage B).`]})]})]})]}),`
`,(0,c.jsx)(t.h3,{id:`lot-2--convergence-des-candidats-promotion-pas-archivage`,children:`Lot 2 — Convergence des candidats (promotion, pas archivage)`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Revue 2026-06-22 — délibérément laissé OUVERT.`}),` Les 6 galeries d'options ont
été passées en revue avec Lucas ; décision : `,(0,c.jsx)(t.strong,{children:`rien replier pour l'instant`}),`.
Aucune décision n'est assez tranchée (O3 et thématique/hero ont un parti câblé
« par défaut » mais l'arbitrage final n'est pas posé ; O1/O2/référentiel restent
en confrontation active). Conforme au principe : une galerie est de la matière
de décision tant que l'arbitrage est ouvert — sa présence est légitime. La
promotion des DDR candidats (005/006/015 → `,(0,c.jsx)(t.code,{children:`accepté`}),`) est `,(0,c.jsx)(t.strong,{children:`reportée`}),` de même.
Ce lot n'est donc pas « fait » : il est en attente d'arbitrages produit.`]}),`
`]}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:`Action`}),(0,c.jsx)(t.th,{children:`Cible`}),(0,c.jsx)(t.th,{children:`Statut de la décision`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:[`Passer en `,(0,c.jsx)(t.code,{children:`accepté`})]}),(0,c.jsx)(t.td,{children:`DDR-005 (surfaces), DDR-006 (états), DDR-015 (en savoir plus)`}),(0,c.jsxs)(t.td,{children:[`Principes « stabilisés » / parti « tranché » selon leurs propres docs. `,(0,c.jsx)(t.strong,{children:`Reporté`}),` (22/06).`]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:`Replier la galerie d'options après arbitrage`}),(0,c.jsxs)(t.td,{children:[(0,c.jsx)(t.code,{children:`home-vitrine/Options*`}),` (O1/O2/O3), `,(0,c.jsx)(t.code,{children:`referentiel-vitrine/Options*`}),` (A vs C), `,(0,c.jsx)(t.code,{children:`thematique-vitrine/Options*`}),` (voile uni vs fondu)`]}),(0,c.jsxs)(t.td,{children:[(0,c.jsx)(t.strong,{children:`Ouvertes`}),` — revues le 22/06, maintenues ouvertes par Lucas.`]})]})]})]}),`
`,(0,c.jsxs)(t.h3,{id:`lot-3--résorber-la-dette-kit-explo--socle-vitrine--2026-06-22`,children:[`Lot 3 — Résorber la dette `,(0,c.jsx)(t.code,{children:`kit-explo`}),` ↔ `,(0,c.jsx)(t.code,{children:`socle-vitrine`}),` ✅ (2026-06-22)`]}),`
`,(0,c.jsxs)(t.p,{children:[`À l'inspection, le « doublon » `,(0,c.jsx)(t.code,{children:`kit-explo/bloc-pedagogique.tsx`}),` n'était déjà plus
qu'un `,(0,c.jsx)(t.strong,{children:`ré-export`}),` vers `,(0,c.jsx)(t.code,{children:`@candidats/vitrine/socle-vitrine/briques/bloc-pedagogique`}),`
(factorisation déjà faite). Le Lot 3 s'est donc résumé à un nettoyage de shim :`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`✅ Migré tous les importeurs `,(0,c.jsx)(t.code,{children:`@vitrine/kit-explo/bloc-pedagogique`}),` → source socle
(5 écrans vivants + les stories kit-explo + 1 écran legacy-t2 orphelin).`]}),`
`,(0,c.jsxs)(t.li,{children:[`✅ Supprimé le shim `,(0,c.jsx)(t.code,{children:`kit-explo/bloc-pedagogique.tsx`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Balayage adjacent`}),` : l'audit du graphe a révélé `,(0,c.jsxs)(t.strong,{children:[`18 modules `,(0,c.jsx)(t.code,{children:`ecrans/`}),`
orphelins`]}),` (résidu du Lot 4 : stories archivées, modules `,(0,c.jsx)(t.code,{children:`ecrans/`}),` restés).
Tous des feuilles (aucun n'importe un autre écran) → déplacés en
`,(0,c.jsx)(t.code,{children:`_archives/.../ecrans/`}),`, imports des stories archivées réparés en relatif
(`,(0,c.jsx)(t.code,{children:`../ecrans/`}),`) pour que `,(0,c.jsx)(t.code,{children:`_archives`}),` reste une île rebuildable. 9 écrans vivants
conservés (scenarios 1/4/5/6 + catalogue). Story `,(0,c.jsx)(t.code,{children:`BlocPedagogique.stories.tsx`}),`
(redondante, doc non critique) archivée. Build vérifié : 0 fuite, 0 import cassé.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Le reste de `,(0,c.jsx)(t.code,{children:`kit-explo`}),` (`,(0,c.jsx)(t.code,{children:`bandeau-chiffres`}),`, `,(0,c.jsx)(t.code,{children:`image-debordante`}),`, `,(0,c.jsx)(t.code,{children:`palette-vitrine`}),`)
`,(0,c.jsx)(t.strong,{children:`reste vivant`}),` — hors périmètre de cette dette précise.`]}),`
`,(0,c.jsx)(t.h3,{id:`lot-5--réduire-lexploration-à-lessentiel--2026-06-22`,children:`Lot 5 — Réduire l'exploration à l'essentiel ✅ (2026-06-22)`}),`
`,(0,c.jsxs)(t.p,{children:[`Objectif (Lucas) : ne garder dans `,(0,c.jsx)(t.code,{children:`explorations/vitrine-T3-2026/`}),` que ce qui
mérite vraiment d'être une exploration vivante — `,(0,c.jsx)(t.strong,{children:`peu de stories et de docs`}),`,
quitte à modifier l'arborescence. Tri par nature :`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Rapatrié (matière à sauver)`}),` : la spec du modèle de données du drawer →
`,(0,c.jsx)(t.code,{children:`candidats/vitrine/`}),` (complète [DDR-014]) ; depuis fusionnée avec le modèle de
contenu de base dans la note unique « Modèle de contenu ». Le
catalogue `,(0,c.jsx)(t.code,{children:`SectionsCanoniques`}),` → `,(0,c.jsx)(t.strong,{children:`promu ET enrichi`}),` en
`,(0,c.jsx)(t.code,{children:`candidats/socle-vitrine/Sections canoniques`}),` (photos réelles, geste
`,(0,c.jsx)(t.code,{children:`BandeauPreuve`}),`, section Chiffres-preuve ajoutée, story « Rythme de page »
DDR-005, `,(0,c.jsx)(t.strong,{children:`zéro dépendance au kit d'explo`}),` — Hero via `,(0,c.jsx)(t.code,{children:`TuilePhoto`}),` socle, pas
`,(0,c.jsx)(t.code,{children:`ImageDebordante`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Archivé (a fait son temps)`}),` : les 5 autres docs `,(0,c.jsx)(t.code,{children:`parti-retenu/`}),` (Parti
retenu, Décisions activables, Analyse nous-rejoindre, PAR-OU-COMMENCER,
PASSATION — la décision vit dans les candidats/DDR), l'`,(0,c.jsx)(t.code,{children:`Apercu.mdx`}),` (périmé :
décrivait une structure 00→05 désormais archivée), `,(0,c.jsx)(t.code,{children:`PistesCatalogue`}),` (pistes T2
idiome legacy), les stories `,(0,c.jsx)(t.code,{children:`BandeauChiffres`}),` (design retenu déjà au socle via
`,(0,c.jsx)(t.code,{children:`BandeauPreuve`}),`) et `,(0,c.jsx)(t.code,{children:`SectionsCanoniques`}),` (remplacée par la version candidate).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Gardé (explo vivante)`}),` : les scénarios de parcours catalogue +
`,(0,c.jsx)(t.code,{children:`ImageDebordante`}),` (souhait Lucas).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Résultat (1ʳᵉ passe) : 13 stories + 8 docs → 10 stories + 0 doc.`}),` Build vérifié,
Hero candidat validé au navigateur. Dossiers vides supprimés.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`2ᵉ passe — refonte de l'arborescence (2026-06-22).`}),` Le scénario « Rangé par
grands thèmes » (scenario-1) jugé sans intérêt → archivé, avec ses 3 modules
`,(0,c.jsx)(t.code,{children:`ecrans/`}),` orphelins. L'archivage en cascade a rendu `,(0,c.jsxs)(t.strong,{children:[`tout `,(0,c.jsx)(t.code,{children:`legacy-t2`})]}),` (12
modules), `,(0,c.jsx)(t.code,{children:`05-pistes-anterieures`}),` et `,(0,c.jsx)(t.code,{children:`bandeau-chiffres`}),` orphelins (plus aucune
story vivante ne les tirait) → tout archivé. L'arbo Storybook, qui gardait un
préfixe mort `,(0,c.jsx)(t.code,{children:`02 · Le catalogue/`}),` et un `,(0,c.jsx)(t.code,{children:`Briques & sections (explo)/`}),` à un seul
élément, est `,(0,c.jsx)(t.strong,{children:`mise à plat`}),` : 4 entrées de 1er niveau — `,(0,c.jsx)(t.code,{children:`Composer son programme`}),`,
`,(0,c.jsx)(t.code,{children:`Partir d'une envie`}),`, `,(0,c.jsx)(t.code,{children:`Partir de son entreprise`}),` (chaque parcours regroupe ses 2
étapes par un `,(0,c.jsx)(t.code,{children:`title`}),` commun, l'étape passe en `,(0,c.jsx)(t.code,{children:`name`}),`), et `,(0,c.jsx)(t.code,{children:`Image débordante`}),`.
Dossiers physiques renommés en conséquence (`,(0,c.jsx)(t.code,{children:`scenario-N-*`}),` → nom du parcours).
Imports des modules déplacés réparés en relatif dans `,(0,c.jsx)(t.code,{children:`_archives`}),` (sauf
`,(0,c.jsx)(t.code,{children:`image-debordante`}),`, resté vivant → gardé en alias `,(0,c.jsx)(t.code,{children:`@vitrine`}),`). `,(0,c.jsx)(t.strong,{children:`Final : 7 stories,
0 doc`}),` ; build 234 entrées, 0 fuite.`]}),`
`,(0,c.jsx)(t.h3,{id:`lot-4--archivage-des-explorations-supersédées-par-sujet-après-vérif-imports`,children:`Lot 4 — Archivage des explorations supersédées (par sujet, après vérif imports)`}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:`Exploration`}),(0,c.jsx)(t.th,{children:`Reprise par`}),(0,c.jsx)(t.th,{children:`Archive`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:[(0,c.jsx)(t.code,{children:`01-accueil/*`}),` (5 postures)`]}),(0,c.jsxs)(t.td,{children:[`Home arbitrée → `,(0,c.jsx)(t.code,{children:`candidats/home-vitrine`}),` ([DDR-012])`]}),(0,c.jsx)(t.td,{children:`Oui`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`02-catalogue/scenario-2-a-plat`})}),(0,c.jsxs)(t.td,{children:[(0,c.jsx)(t.code,{children:`candidats/referentiel-vitrine`}),` ([DDR-013])`]}),(0,c.jsx)(t.td,{children:`Oui`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`02-catalogue/scenario-3-activables`})}),(0,c.jsxs)(t.td,{children:[(0,c.jsx)(t.code,{children:`candidats/thematique-vitrine`}),` ([DDR-014])`]}),(0,c.jsx)(t.td,{children:`Oui`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`03-style/{registre-accueil,style-vivant,cran-1,referentiel-vivant}`})}),(0,c.jsx)(t.td,{children:`DA arbitrée ([DDR-012] : greige + Bleu France)`}),(0,c.jsx)(t.td,{children:`Oui`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:[(0,c.jsx)(t.code,{children:`03-style/composition-vivante`}),` (catalogue de gestes)`]}),(0,c.jsxs)(t.td,{children:[`Gestes câblés dans `,(0,c.jsx)(t.code,{children:`candidats/socle-vitrine/gestes-vitrine.tsx`}),` ; `,(0,c.jsx)(t.strong,{children:`anatomie pédagogique promue`}),` en `,(0,c.jsx)(t.code,{children:`Candidats/Socle vitrine/Gestes de composition`}),` (story-catalogue)`]}),(0,c.jsx)(t.td,{children:`Oui`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:[(0,c.jsx)(t.code,{children:`parti-retenu/`}),` (stories d'écran)`]}),(0,c.jsxs)(t.td,{children:[(0,c.jsx)(t.code,{children:`*Retenue`}),` candidats`]}),(0,c.jsxs)(t.td,{children:[`Oui (garder les `,(0,c.jsx)(t.code,{children:`.mdx`}),` de synthèse)`]})]})]})]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Garde-fou.`}),` `,(0,c.jsx)(t.code,{children:`explorations/vitrine-T3-2026/`}),` est un `,(0,c.jsx)(t.strong,{children:`graphe câblé`}),` (dossier
`,(0,c.jsx)(t.code,{children:`ecrans/`}),` partagé, navigation inter-stories, `,(0,c.jsx)(t.code,{children:`legacy-t2`}),` qui importe à la fois
`,(0,c.jsx)(t.code,{children:`kit-explo`}),` ET `,(0,c.jsx)(t.code,{children:`@candidats/socle-vitrine`}),`). L'archivage se fait `,(0,c.jsx)(t.strong,{children:`par sujet, en
réparant les imports`}),`, jamais en bloc.`]}),`
`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Présentations.`}),` Certaines explorations sont embarquées par iframe dans des
présentations `,(0,c.jsx)(t.code,{children:`nuxt-slides`}),` (couplage par id de story). Avant de déplacer une
telle exploration en `,(0,c.jsx)(t.code,{children:`_archives`}),` ou de la supprimer, `,(0,c.jsx)(t.strong,{children:`geler les decks qui la
citent`}),` en bundle autoportant — voir [DDR-017]. Pour notre cas vitrine, c'est le
gel du deck `,(0,c.jsx)(t.code,{children:`pistes-vitrine-t3`}),` (qui embarque 01-accueil / 02-catalogue / 03-style)
qui débloque le Lot 4 ; il a été gelé le 2026-06-22, Lot 4 exécuté dans la foulée.
Le deck `,(0,c.jsx)(t.code,{children:`vitrine-t3-candidat-retenu`}),`, lui, ne cite que des écrans `,(0,c.jsx)(t.strong,{children:`candidats`}),`
(`,(0,c.jsx)(t.code,{children:`parti-retenu-*`}),` → `,(0,c.jsx)(t.code,{children:`candidats/*-vitrine`}),`), hors périmètre d'archivage : pas à geler.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`hors-périmètre-de-ce-ménage-à-instruire-séparément`,children:`Hors-périmètre de ce ménage (à instruire séparément)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`explorations/atelier-mecenes/`}),` — sujet distinct, non supersédé, pas concerné.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`02-catalogue/scenario-{4,5,6}`}),` (panier / intention / siret) — `,(0,c.jsx)(t.strong,{children:`aucun candidat
ne les reprend`}),` : ce sont des hypothèses de parcours encore vivantes, pas de la
redondance. À garder en l'état.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`références`,children:`Références`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`[DDR-000] — Qu'est-ce qu'un DDR · `,(0,c.jsx)(t.code,{children:`stories/ddr/DDR-000.mdx`})]}),`
`,(0,c.jsxs)(t.li,{children:[`[DDR-001] — Organisation du book · `,(0,c.jsx)(t.code,{children:`stories/ddr/DDR-001.mdx`})]}),`
`,(0,c.jsxs)(t.li,{children:[`[DDR-011] — Zone « Candidats » · `,(0,c.jsx)(t.code,{children:`stories/ddr/DDR-011.mdx`})]}),`
`,(0,c.jsxs)(t.li,{children:[`[DDR-012]→[DDR-015] — sujets vitrine candidats · `,(0,c.jsx)(t.code,{children:`stories/candidats/*-vitrine/`})]}),`
`,(0,c.jsxs)(t.li,{children:[`[DDR-017] — Cycle de vie des présentations (gel & bundle) · `,(0,c.jsx)(t.code,{children:`stories/ddr/DDR-017.mdx`})]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),i()}))();export{s as default};