import{i as e}from"./preload-helper-DaCzexP6.js";import{u as t}from"./iframe-BeshMaXC.js";import{L as n,a as r,s as i}from"./blocks-DpqSezW4.js";import{t as a}from"./mdx-react-shim-DSKVbLXU.js";function o(e){let t={blockquote:`blockquote`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`Candidats/Vitrine/Parcours thématiques/Modèle de contenu`,created:`2026-06-24`,status:`candidat`,tags:[`!manifest`]}),`
`,(0,c.jsx)(t.h1,{id:`modèle-de-contenu--parcours-thématiques-candidat`,children:`Modèle de contenu — Parcours thématiques (candidat)`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Spécification de contenu unique, à l'échelle du lot « Parcours
thématiques ».`}),` Couvre les `,(0,c.jsx)(t.strong,{children:`deux niveaux`}),` du référentiel — `,(0,c.jsx)(t.strong,{children:`thématique`}),` et
`,(0,c.jsx)(t.strong,{children:`engagement`}),` — et les `,(0,c.jsx)(t.strong,{children:`deux couches`}),` de contenu : le
`,(0,c.jsx)(t.em,{children:`contenu de base`}),` (accroche, description) que tous les écrans consomment, et les
`,(0,c.jsx)(t.em,{children:`enrichissements du drawer`}),` (effort, preuve, ressources). Consommateurs : index
des thématiques (DDR-013), landing de thématique (DDR-014), drawer d'engagement.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.em,{children:[`Wording : le retour métier de juin 2026 nomme l'item « engagement » en façade
(on revient de « initiative » ; basculement possible l'an prochain). Le schéma
prod l'a toujours nommé `,(0,c.jsx)(t.code,{children:`Engagement`}),`.`]})}),`
`,(0,c.jsxs)(t.p,{children:[`Vit dans le `,(0,c.jsx)(t.strong,{children:`sas Candidats`}),` : opposable une fois le lot promu (cf. qu'est-ce
qu'un DDR).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`problème--la-copy-actuelle-est-pauvre-redondante-et-figée-en-démo`,children:`Problème : la copy actuelle est pauvre, redondante et figée en démo`}),`
`,(0,c.jsxs)(t.p,{children:[`Les écrans candidats veulent `,(0,c.jsx)(t.strong,{children:`donner du contenu`}),` (accroches, descriptions qui
enrichissent, aide à la projection, preuve), mais la donnée Hygraph actuelle ne le
permet pas — et ce qui manque est aujourd'hui `,(0,c.jsx)(t.strong,{children:`figuré en données de démo dans le
code de rendu`}),`, ce qui n'est pas tenable.`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Niveau thématique`}),` : le schéma n'expose qu'un `,(0,c.jsx)(t.code,{children:`shortName`}),` (nom court). `,(0,c.jsx)(t.strong,{children:`Pas
de champ d'accroche ni de description éditoriale.`}),` L'index a donc dû inventer
une accroche par thématique (`,(0,c.jsx)(t.code,{children:`copy.ts`}),`), faute de source.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Niveau engagement`}),` (`,(0,c.jsx)(t.code,{children:`Engagement`}),`) : `,(0,c.jsx)(t.code,{children:`descriptionText`}),` / `,(0,c.jsx)(t.code,{children:`descriptionHtml`}),`
existent, mais en prod ils sont `,(0,c.jsxs)(t.strong,{children:[`très redondants avec le `,(0,c.jsx)(t.code,{children:`label`})]}),` — souvent une
paraphrase du titre, qui n'apporte rien au visiteur.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Détail d’engagement (drawer)`}),` : pour décider, un visiteur doit se `,(0,c.jsx)(t.strong,{children:`projeter`}),`
(effort, délai), être `,(0,c.jsx)(t.strong,{children:`rassuré`}),` (preuve qu'une entreprise l'a fait) et savoir
`,(0,c.jsx)(t.strong,{children:`passer à l'action`}),` (ressources). Rien de tout cela n'est porté par le CMS ;
c'est figuré en données de démo dans `,(0,c.jsx)(t.code,{children:`EngagementDrawer`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Le schéma CMS actuel (`,(0,c.jsx)(t.code,{children:`SEngagerEngagementReader`}),` → `,(0,c.jsx)(t.code,{children:`EngagementDTO`}),`) porte déjà un
`,(0,c.jsx)(t.strong,{children:`socle solide`}),`, à `,(0,c.jsx)(t.strong,{children:`garder inchangé`}),` :`]}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:`Champ CMS`}),(0,c.jsx)(t.th,{children:`Rôle`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`label`})}),(0,c.jsx)(t.td,{children:`Titre de l’engagement`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:[(0,c.jsx)(t.code,{children:`descriptionText`}),` / `,(0,c.jsx)(t.code,{children:`descriptionRichText`})]}),(0,c.jsx)(t.td,{children:`Description d'introduction`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`illustration`})}),(0,c.jsx)(t.td,{children:`Visuel`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`avantages.entreprise[]`})}),(0,c.jsx)(t.td,{children:`Bloc « Pour votre entreprise » (drawer)`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`avantages.beneficiaires[]`})}),(0,c.jsx)(t.td,{children:`Bloc « Pour les bénéficiaires » (drawer)`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`actions[]`})}),(0,c.jsx)(t.td,{children:`Bloc « Comment passer à l'action ? » (drawer)`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:[`thématique (`,(0,c.jsx)(t.code,{children:`actionsCategory`}),`)`]}),(0,c.jsx)(t.td,{children:`Scope couleur (eyebrow, accents)`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`anneesActives`})}),(0,c.jsx)(t.td,{children:`Filtrage de validité`})]})]})]}),`
`,(0,c.jsx)(t.h2,{id:`où-vit-la-copy-en-attendant`,children:`Où vit la copy en attendant`}),`
`,(0,c.jsxs)(t.p,{children:[`Toute la copy éditoriale du candidat est `,(0,c.jsx)(t.strong,{children:`isolée`}),` dans
`,(0,c.jsx)(t.code,{children:`referentiel-vitrine/copy.ts`}),` (accroches par thématique, textes de sections),
séparée de la donnée structurelle
(`,(0,c.jsx)(t.code,{children:`socle-vitrine/data/referentiel-engagement.ts`}),` — slugs, couleurs, hiérarchie).
Objectif : `,(0,c.jsx)(t.strong,{children:`reprise manuelle précise`}),` et `,(0,c.jsx)(t.strong,{children:`point de bascule clair`}),` vers le CMS
une fois le schéma étendu — la copy migre d'un fichier vers des champs, le rendu
ne bouge pas.`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[`Une même source sert plusieurs écrans : l'accroche de thématique
(`,(0,c.jsx)(t.code,{children:`accrochesThematique`}),`, clé = slug) alimente `,(0,c.jsx)(t.strong,{children:`à la fois`}),` la carte riche de
l'index `,(0,c.jsx)(t.strong,{children:`et`}),` le hero de la landing de thématique. Un seul texte par
thématique, réutilisé — pas de redite à maintenir.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`décision-proposée--enrichir-le-schéma-de-contenu`,children:`Décision proposée : enrichir le schéma de contenu`}),`
`,(0,c.jsx)(t.p,{children:`Trois couches, pour ne migrer que ce qui doit l'être et laisser le reste calculé.`}),`
`,(0,c.jsx)(t.h3,{id:`niveau-thématique--nouveaux-champs-contenu-de-base`,children:`Niveau THÉMATIQUE — nouveaux champs (contenu de base)`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`type ThematiqueContenu = {
  /** Accroche courte de carte (≈ 90-120 car.) : ce que recouvre la thématique,
   *  formulé pour donner envie d'agir. NI le nom, NI un compteur. Sert la carte
   *  riche de l'index ET le hero de la landing de thématique. */
  accrocheCarte?: string;

  /** Chapô de page (2-3 phrases) : introduit la landing au-delà de l'accroche.
   *  Optionnel ; à défaut, la landing retombe sur l'accroche. */
  chapoPage?: string;
};
`})}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[`Aujourd'hui, `,(0,c.jsx)(t.code,{children:`cardTitle`}),` / `,(0,c.jsx)(t.code,{children:`pageTitle`}),` traînent dans la donnée du prototype
(`,(0,c.jsx)(t.code,{children:`referentiel-engagement.ts`}),`) : ce sont des `,(0,c.jsx)(t.strong,{children:`inventions de maquette`}),`, pas des
champs du schéma prod. `,(0,c.jsx)(t.code,{children:`accrocheCarte`}),` / `,(0,c.jsx)(t.code,{children:`chapoPage`}),` les remplacent proprement,
côté CMS.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`niveau-engagement--assainir-la-description-contenu-de-base`,children:`Niveau ENGAGEMENT — assainir la description (contenu de base)`}),`
`,(0,c.jsxs)(t.p,{children:[`La cible n'est pas d'ajouter un champ, mais de `,(0,c.jsx)(t.strong,{children:`clarifier le rôle`}),` de l'existant
et de `,(0,c.jsx)(t.strong,{children:`dé-dupliquer`}),` :`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`type EngagementContenu = {
  // label : le geste, à l'infinitif. INCHANGÉ.
  // (ex. « Accueillir des stagiaires de 3ᵉ »)

  /** description : ce que l’engagement implique CONCRÈTEMENT — une information que
   *  le label ne donne pas (ce que ça demande, à qui ça profite). Règle
   *  éditoriale : JAMAIS une paraphrase du label. Si rien à ajouter, vide. */
  description?: string;
};
`})}),`
`,(0,c.jsxs)(t.p,{children:[`C'est une `,(0,c.jsx)(t.strong,{children:`dette de contenu`}),`, pas seulement de schéma : il faut `,(0,c.jsx)(t.strong,{children:`réécrire`}),` les
descriptions prod redondantes selon cette règle (chantier éditorial métier).`]}),`
`,(0,c.jsx)(t.h3,{id:`niveau-engagement--enrichissements-du-drawer-nouveau`,children:`Niveau ENGAGEMENT — enrichissements du drawer (nouveau)`}),`
`,(0,c.jsxs)(t.p,{children:[`Trois groupes de champs, `,(0,c.jsx)(t.strong,{children:`tous optionnels`}),` (un engagement reste valide sans
eux) ; servent la présentation du `,(0,c.jsx)(t.strong,{children:`drawer de détail`}),` :`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`type EngagementEnrichissements = {
  /** Aide à la projection. */
  effort?: {
    // Valeur FERMÉE (enum) — garantit un badge cohérent, pas de texte libre.
    niveau: 'accessible' | 'intermediaire' | 'engageant';
    // Délai de mise en œuvre. Libellé affiché ; un couple min/max en mois
    // serait préférable à terme (permet de filtrer/trier).
    delaiMiseEnOeuvre: string;
  };

  /** Preuve concrète — crédibilité. 0..1. */
  preuve?: {
    verbatim: string;
    // À terme : RELATION vers une entreprise membre plutôt que texte libre,
    // pour réutiliser logo + chiffres réels sans ressaisie.
    source: string;
  };

  /** Ressources utiles — prolonge le « comment ». 0..n. */
  ressources?: {
    label: string;
    url: string;
    // Type FERMÉ — pilote l'icône et le traitement visuel.
    type: 'guide' | 'modele' | 'contact' | 'lien';
  }[];
};
`})}),`
`,(0,c.jsx)(t.h3,{id:`ce-qui-reste-calculé-non-saisi`,children:`Ce qui reste calculé (non saisi)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Compteur d’engagements`}),` par thématique : dérivé de la hiérarchie ; devient un
`,(0,c.jsx)(t.strong,{children:`complément`}),` de l'accroche, pas le contenu principal de la carte.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`nombreEntreprisesEngagees`}),` (drawer) : compteur réel, renforce la preuve sans
saisie manuelle.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`engagementsLies[]`}),` : autres engagements de la même thématique, déductibles du
scope. `,(0,c.jsx)(t.em,{children:`(Non rendu dans le drawer actuel : jugé superflu en revue — la donnée
reste « gratuite » si on change d'avis.)`})]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`principes-retenus`,children:`Principes retenus`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Une accroche n'est ni le nom ni un compteur.`}),` Si un champ ne peut que répéter
le titre, il ne doit pas exister : mieux vaut un compteur honnête.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Une description d’engagement ne paraphrase jamais le label`}),` (règle
anti-redondance opposable en revue éditoriale).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Valeurs fermées (enum)`}),` pour `,(0,c.jsx)(t.code,{children:`effort.niveau`}),` et `,(0,c.jsx)(t.code,{children:`ressources.type`}),` : la
cohérence visuelle ne doit pas dépendre d'un texte libre saisi au CMS.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tout l'enrichissement est optionnel et le rendu dégrade proprement`}),` : les
écrans masquent les sections vides plutôt que d'afficher un trou.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`preuve.source`}),` en relation, pas en texte`]}),`, à terme — réutiliser les
entreprises membres réelles (logo, chiffres).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Copy d'abord en fichier, puis en CMS.`}),` `,(0,c.jsx)(t.code,{children:`copy.ts`}),` est la V0 rédactionnelle ;
la migration CMS ne change que la source, pas le rendu (migration douce :
champs ajoutés en optionnel → DTO/ReadModel `,(0,c.jsx)(t.em,{children:`nullable`}),` → rendu conditionnel,
aucune rupture sur l'existant).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`doctrine-respectée`,children:`Doctrine respectée`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Couleur`}),` : la teinte de famille n'est qu'un `,(0,c.jsx)(t.strong,{children:`accent fin`}),` (eyebrow
thématique, étiquette) ; Bleu France pour les actions et les coches ; aucun texte
`,(0,c.jsx)(t.strong,{children:`fonctionnel`}),` colorié (cf. doctrine couleur affinée, DDR-014).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Icônes (DDR-003)`}),` : pictos `,(0,c.jsx)(t.strong,{children:`illustratifs`}),` de section et d'effort en
`,(0,c.jsx)(t.strong,{children:`Magicoon`}),` (`,(0,c.jsx)(t.code,{children:`buildings`}),`, `,(0,c.jsx)(t.code,{children:`users-group`}),`, `,(0,c.jsx)(t.code,{children:`rocket`}),`, `,(0,c.jsx)(t.code,{children:`bolt`}),`, `,(0,c.jsx)(t.code,{children:`clock`}),`,
`,(0,c.jsx)(t.code,{children:`life-ring`}),`) ; `,(0,c.jsx)(t.strong,{children:`Remix`}),` réservé au `,(0,c.jsx)(t.strong,{children:`fonctionnel`}),` (flèche de CTA, coche de
liste, lien externe).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`intégration--passation`,children:`Intégration / passation`}),`
`,(0,c.jsx)(t.p,{children:`Découpage des chantiers (pas de ticket Linear — suivi GitHub / repo, comme la
roadmap Home) :`}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:`Chantier`}),(0,c.jsx)(t.th,{children:`Nature`}),(0,c.jsx)(t.th,{children:`Détail`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.strong,{children:`Schéma thématique`})}),(0,c.jsx)(t.td,{children:`Hygraph + reader`}),(0,c.jsxs)(t.td,{children:[`Ajouter `,(0,c.jsx)(t.code,{children:`accrocheCarte`}),`, `,(0,c.jsx)(t.code,{children:`chapoPage`}),` (nullable) au modèle `,(0,c.jsx)(t.code,{children:`actionsCategory`}),` ; les exposer dans `,(0,c.jsx)(t.code,{children:`ThematiqueReader`}),` (`,(0,c.jsx)(t.code,{children:`ThematiqueViewModel`}),`).`]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.strong,{children:`Schéma engagement — description`})}),(0,c.jsx)(t.td,{children:`Hygraph + éditorial`}),(0,c.jsxs)(t.td,{children:[`Garder `,(0,c.jsx)(t.code,{children:`descriptionText`}),` ; `,(0,c.jsx)(t.strong,{children:`réécrire`}),` les descriptions redondantes (règle anti-paraphrase). Pas de nouveau champ.`]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.strong,{children:`Schéma engagement — enrichissements`})}),(0,c.jsx)(t.td,{children:`Hygraph + reader`}),(0,c.jsxs)(t.td,{children:[`Ajouter `,(0,c.jsx)(t.code,{children:`effort`}),`, `,(0,c.jsx)(t.code,{children:`preuve`}),`, `,(0,c.jsx)(t.code,{children:`ressources`}),` (tous optionnels, enums fermées) ; les exposer en `,(0,c.jsx)(t.em,{children:`nullable`}),` pour le drawer.`]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.strong,{children:`Reader`})}),(0,c.jsx)(t.td,{children:`Code`}),(0,c.jsxs)(t.td,{children:[`Exposer les nouveaux champs en `,(0,c.jsx)(t.em,{children:`nullable`}),` ; le rendu les consomme conditionnellement.`]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.strong,{children:`Bascule copy`})}),(0,c.jsx)(t.td,{children:`Code`}),(0,c.jsxs)(t.td,{children:[`Remplacer les imports depuis `,(0,c.jsx)(t.code,{children:`copy.ts`}),` par la donnée du reader, une fois les champs peuplés. `,(0,c.jsx)(t.code,{children:`copy.ts`}),` retiré au passage.`]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.strong,{children:`Saisie`})}),(0,c.jsx)(t.td,{children:`Métier`}),(0,c.jsxs)(t.td,{children:[`Rédiger les ~13 accroches de thématique (base = `,(0,c.jsx)(t.code,{children:`copy.ts`}),`) + revue des descriptions d’engagements + saisie des enrichissements drawer.`]})]})]})]}),`
`,(0,c.jsx)(t.p,{children:`Ordre conseillé : schéma thématique → saisie des accroches → bascule copy de
l'index et du hero de landing ; en parallèle, chantier éditorial des descriptions
d’engagements, puis enrichissements du drawer (effort / preuve / ressources).`}),`
`,(0,c.jsx)(t.h2,{id:`décisions-ouvertes-à-arbitrer-avant-promotion`,children:`Décisions ouvertes (à arbitrer avant promotion)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`delaiMiseEnOeuvre`}),` : libellé libre ou couple `,(0,c.jsx)(t.code,{children:`min/max`}),` en mois (pour
filtrer/trier) ?`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`preuve.source`}),` : passer dès maintenant en relation « entreprise membre », ou
garder un texte libre en V1 ?`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`effort.niveau`}),` : trois paliers suffisent-ils, et avec quels libellés publics ?`]}),`
`,(0,c.jsxs)(t.li,{children:[`Faut-il exposer `,(0,c.jsx)(t.code,{children:`engagementsLies`}),` malgré son retrait du drawer (maillage SEO,
suggestions) ?`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`voir-aussi`,children:`Voir aussi`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`referentiel-vitrine/copy.ts`}),` — la copy isolée, V0 rédactionnelle à reprendre.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Story `,(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`.../Index des thématiques/Les options`})}),` (carte riche : consomme
`,(0,c.jsx)(t.code,{children:`accrocheCarte`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Story `,(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`.../Landing/La page`})}),` (hero : consomme `,(0,c.jsx)(t.code,{children:`accrocheCarte`}),` ; cartes
engagement légères) et `,(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`.../Landing/Drawer engagement`})}),` (consomme les
enrichissements).`]}),`
`,(0,c.jsx)(t.li,{children:`DDR-013 (index des thématiques) et DDR-014 (landing + drawer) — consommateurs.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),i()}))();export{s as default};