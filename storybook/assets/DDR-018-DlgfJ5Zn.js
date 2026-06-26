import{i as e}from"./preload-helper-DaCzexP6.js";import{u as t}from"./iframe-BeshMaXC.js";import{L as n,a as r,s as i}from"./blocks-DpqSezW4.js";import{t as a}from"./mdx-react-shim-DSKVbLXU.js";function o(e){let t={blockquote:`blockquote`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`DDR/DDR-018 : Cycle de vie des présentations diffusées (alias stable, registre, freeze)`,created:`2026-06-22`,status:`proposé`}),`
`,(0,c.jsx)(t.h1,{id:`ddr-018--cycle-de-vie-des-présentations-diffusées`,children:`DDR-018 : Cycle de vie des présentations diffusées`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsxs)(t.strong,{children:[`Statut `,(0,c.jsx)(t.code,{children:`proposé`}),`.`]}),` Prolonge [DDR-017] (gel d'un deck) côté `,(0,c.jsx)(t.strong,{children:`diffusion`}),` :
comment un lien partagé reste `,(0,c.jsx)(t.strong,{children:`stable et accessible à vie`}),` alors que sa source
passe de `,(0,c.jsx)(t.em,{children:`live collaboratif`}),` (CodiMD) à `,(0,c.jsx)(t.em,{children:`gelé`}),` (bundle autoportant) puis
`,(0,c.jsx)(t.em,{children:`archivé`}),`. Opposable au passage en `,(0,c.jsx)(t.code,{children:`accepté`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`contexte`,children:`Contexte`}),`
`,(0,c.jsx)(t.p,{children:`Une présentation traverse aujourd'hui trois états mal articulés :`}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:`État`}),(0,c.jsx)(t.th,{children:`Où`}),(0,c.jsx)(t.th,{children:`Sert à`}),(0,c.jsx)(t.th,{children:`Lien Storybook`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.strong,{children:`Live`})}),(0,c.jsxs)(t.td,{children:[`note CodiMD (`,(0,c.jsx)(t.code,{children:`md.…/<noteId>`}),`)`]}),(0,c.jsx)(t.td,{children:`éditer à plusieurs en séance`}),(0,c.jsx)(t.td,{children:`preview de PR / publié`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.strong,{children:`Repo`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`presentations/<statut>/<slug>.md`})}),(0,c.jsx)(t.td,{children:`versionner`}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`localhost:6007`})})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.strong,{children:`Gelé`})}),(0,c.jsx)(t.td,{children:`bundle autoportant ([DDR-017])`}),(0,c.jsx)(t.td,{children:`survivre sans Storybook live`}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`/_storybook`})})]})]})]}),`
`,(0,c.jsx)(t.p,{children:`Frictions constatées :`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Réplication manuelle CodiMD ↔ repo`}),` → forks et versions parallèles qui
divergent.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Le lien Storybook a trois valeurs`}),` pour la même intention (local / preview /
gelé), éditées à la main selon le contexte.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Le lien diffusé pointe vers la source la plus volatile.`}),` L'URL partagée
(`,(0,c.jsx)(t.code,{children:`/slides/codimd/<id>`}),`) `,(0,c.jsx)(t.strong,{children:`re-fetche la note CodiMD à chaque visite`}),`. Archiver
la piste ou nettoyer la note `,(0,c.jsx)(t.strong,{children:`casse un lien déjà diffusé`}),` — l'inverse de ce
qu'on veut.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`/slides/codimd/<id>`}),` est long et opaque`]}),` (id CodiMD non lisible).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Le nœud : `,(0,c.jsx)(t.em,{children:`un lien diffusé doit être le point le plus stable du système, or il
pointe vers le plus instable.`})]}),`
`,(0,c.jsx)(t.h2,{id:`ce-qui-existe-déjà-à-ne-pas-réinventer`,children:`Ce qui existe déjà (à ne pas réinventer)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Un stub repo peut déclarer `,(0,c.jsx)(t.code,{children:`source: codimd`}),` + `,(0,c.jsx)(t.code,{children:`noteId:`}),` : `,(0,c.jsx)(t.code,{children:`/slides/<slug>`}),`
`,(0,c.jsx)(t.strong,{children:`récupère le corps CodiMD en live tout en gardant le frontmatter du repo`}),`
(lien Storybook, thème, contrôle d'accès). Cf.
`,(0,c.jsx)(t.code,{children:`server/api/presentations/[slug].get.ts`}),`. Un slug repo `,(0,c.jsx)(t.em,{children:`peut donc déjà`}),` être une
présentation live-collaborative.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Les `,(0,c.jsx)(t.strong,{children:`dossiers de statut`}),` (`,(0,c.jsx)(t.code,{children:`public/draft/private/semi-private`}),`) portent le
`,(0,c.jsx)(t.strong,{children:`contrôle d'accès`}),` — axe distinct du cycle de vie de contenu.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Il manque : un `,(0,c.jsx)(t.strong,{children:`axe de cycle de vie`}),` (live → gelé → archivé) orthogonal à
l'accès, un `,(0,c.jsx)(t.strong,{children:`alias stable joli`}),`, et leur résolution.`]}),`
`,(0,c.jsx)(t.h2,{id:`décision`,children:`Décision`}),`
`,(0,c.jsx)(t.h3,{id:`1-un-registre-versionné-source-de-vérité-des-alias`,children:`1. Un registre versionné, source de vérité des alias`}),`
`,(0,c.jsxs)(t.p,{children:[`Un fichier unique `,(0,c.jsx)(t.code,{children:`presentations/registry.yml`}),` (versionné) mappe un `,(0,c.jsx)(t.strong,{children:`alias
stable`}),` vers sa résolution. Exemple :`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-yaml`,children:`# slug-joli → résolution
atelier-mecenes:
  title: Atelier mécènes — maquettes live
  lifecycle: frozen          # live | frozen | archived
  source: codimd             # provenance du corps quand live
  noteId: R90umc1HTWeLTAM9Ay90TA
  frozenBundle: atelier-mecenes        # dossier du bundle gelé (si frozen)
  storybook: pr-preview-1234           # alias Storybook (cf. §3)
  access: public
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`lifecycle`})}),` pilote `,(0,c.jsx)(t.em,{children:`d'où vient le contenu`}),` : `,(0,c.jsx)(t.code,{children:`live`}),` → fetch CodiMD ;
`,(0,c.jsx)(t.code,{children:`frozen`}),` → sert le bundle autoportant ([DDR-017]) ; `,(0,c.jsx)(t.code,{children:`archived`}),` → idem gelé, mais
retiré des listes (le lien reste résolu).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`access`})}),` reste l'axe orthogonal (public/draft/…), inchangé.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Le registre est `,(0,c.jsx)(t.strong,{children:`la`}),` liste faisant foi ; les `,(0,c.jsx)(t.code,{children:`.md`}),` du repo deviennent des
`,(0,c.jsx)(t.strong,{children:`stubs`}),` (frontmatter + éventuel corps de repli), plus des répliques à
maintenir à la main.`]}),`
`]}),`
`,(0,c.jsxs)(t.h3,{id:`2-un-chemin-court-et-stable--palias`,children:[`2. Un chemin court et stable : `,(0,c.jsx)(t.code,{children:`/p/<alias>`})]}),`
`,(0,c.jsxs)(t.p,{children:[`Nouvelle route `,(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`/p/<alias>`})}),` (plus court que `,(0,c.jsx)(t.code,{children:`/slides/codimd/<id>`}),`), résolue
`,(0,c.jsx)(t.strong,{children:`via le registre`}),` :`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`lifecycle: live`}),` → comportement actuel (fetch CodiMD), éditable en séance.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`lifecycle: frozen|archived`}),` → sert le `,(0,c.jsx)(t.strong,{children:`bundle gelé`}),`, sans toucher CodiMD.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`L'URL ne change jamais`}),` entre les états : `,(0,c.jsx)(t.code,{children:`/p/atelier-mecenes`}),` pointe vers le
live pendant la prépa, vers le gelé après diffusion. C'est l'alias stable
recherché. `,(0,c.jsx)(t.code,{children:`/slides/codimd/<id>`}),` et `,(0,c.jsx)(t.code,{children:`/slides/<slug>`}),` restent en `,(0,c.jsx)(t.strong,{children:`redirection`}),`
vers `,(0,c.jsx)(t.code,{children:`/p/<alias>`}),` pour ne casser aucun lien déjà partagé.`]}),`
`,(0,c.jsx)(t.h3,{id:`3-un-alias-storybook-unique-fin-de-la-valeur-en-dur`,children:`3. Un alias Storybook unique (fin de la valeur en dur)`}),`
`,(0,c.jsxs)(t.p,{children:[`Le frontmatter ne porte plus une URL Storybook en dur mais un `,(0,c.jsx)(t.strong,{children:`alias`}),` résolu
selon l'environnement, par une table du registre (ou `,(0,c.jsx)(t.code,{children:`.env`}),`) :`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-yaml`,children:`storybookTargets:
  local: http://localhost:6007
  pr-preview-1234: https://storybook-pr-1234.…
  frozen: /_storybook         # injecté par le freeze
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Un deck déclare `,(0,c.jsx)(t.code,{children:`storybook: pr-preview-1234`}),` ; en local on résout vers
`,(0,c.jsx)(t.code,{children:`localhost:6007`}),`, au gel vers `,(0,c.jsx)(t.code,{children:`/_storybook`}),` (déjà fait par [DDR-017]). `,(0,c.jsx)(t.strong,{children:`Une seule
intention, trois résolutions`}),` — fin de l'édition manuelle.`]}),`
`,(0,c.jsx)(t.h3,{id:`4-le-freeze-à-la-diffusion-rituel`,children:`4. Le freeze à la diffusion (rituel)`}),`
`,(0,c.jsxs)(t.p,{children:[`Quand une présentation passe de `,(0,c.jsx)(t.code,{children:`live`}),` à `,(0,c.jsx)(t.code,{children:`frozen`}),` :`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Rapatrier`}),` le corps CodiMD dans le stub repo (commande `,(0,c.jsx)(t.code,{children:`make pull-note BUNDLE_SLUG=<alias>`}),` — fetch `,(0,c.jsx)(t.code,{children:`/<noteId>/download`}),`, écrit le `,(0,c.jsx)(t.code,{children:`.md`}),`). Fin de la
réplication manuelle.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Geler`}),` via `,(0,c.jsx)(t.code,{children:`make bundle-frozen`}),` ([DDR-017]) → bundle autoportant.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Basculer`}),` `,(0,c.jsx)(t.code,{children:`lifecycle: frozen`}),` dans le registre. L'URL `,(0,c.jsx)(t.code,{children:`/p/<alias>`}),` sert
désormais le gel ; le lien diffusé survit.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Sort du live, au cas par cas`}),` : la note CodiMD peut être conservée (lecture
seule) ou archivée/supprimée — le champ `,(0,c.jsx)(t.code,{children:`lifecycle`}),` tranche par présentation,
pas une règle globale.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`5-archivage-côté-repo`,children:`5. Archivage côté repo`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`lifecycle: archived`}),` retire la présentation des `,(0,c.jsx)(t.strong,{children:`listes`}),` (index, navigation)
mais `,(0,c.jsx)(t.strong,{children:`garde l'alias résolu`}),` vers son bundle gelé. C'est l'équivalent decks de la
zone `,(0,c.jsx)(t.code,{children:`_archives`}),` des explorations ([DDR-016]) : on désencombre sans casser les
liens.`]}),`
`,(0,c.jsx)(t.h2,{id:`application-aux-deux-cas-réels`,children:`Application aux deux cas réels`}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:`Alias`}),(0,c.jsx)(t.th,{children:`CodiMD (noteId)`}),(0,c.jsx)(t.th,{children:`Stub repo`}),(0,c.jsx)(t.th,{children:`Cible`}),(0,c.jsx)(t.th,{children:`À faire`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`atelier-mecenes`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`R90umc1HTWeLTAM9Ay90TA`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`public/atelier-mecenes.md`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`frozen`})}),(0,c.jsx)(t.td,{children:`rapatrier + geler + bascule`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`pistes-vitrine-t3`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`Jzryk3IHTS2UUqpMxaZMUg`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`public/pistes-vitrine-t3-2026.md`})}),(0,c.jsxs)(t.td,{children:[`à décider (`,(0,c.jsx)(t.code,{children:`frozen`}),` probable)`]}),(0,c.jsx)(t.td,{children:`idem`})]})]})]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[`⚠️ Les deux liens `,(0,c.jsx)(t.strong,{children:`prod diffusés`}),` fournis pointent vers la `,(0,c.jsx)(t.strong,{children:`même`}),` URL
(`,(0,c.jsx)(t.code,{children:`…/slides/codimd/CXls8xC6-s`}),`) — vraisemblablement un copier-coller. À lever
avant migration : chaque alias doit résoudre vers `,(0,c.jsx)(t.strong,{children:`sa`}),` note. Le registre rend
cette collision visible (deux alias, deux `,(0,c.jsx)(t.code,{children:`noteId`}),`, une seule URL diffusée).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`socle-implémenté-2026-06-22`,children:`Socle implémenté (2026-06-22)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Registre`}),` `,(0,c.jsx)(t.code,{children:`presentations/registry.yml`}),` + `,(0,c.jsx)(t.code,{children:`server/utils/registry.ts`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Route stable`}),` `,(0,c.jsx)(t.code,{children:`/p/<alias>`}),` (`,(0,c.jsx)(t.code,{children:`src/pages/p/[alias].vue`}),` + `,(0,c.jsx)(t.code,{children:`server/api/p/[alias].get.ts`}),`) :
`,(0,c.jsx)(t.code,{children:`live`}),` → frontmatter du stub + corps CodiMD ; `,(0,c.jsx)(t.code,{children:`frozen|archived`}),` → redirige vers
le bundle hébergé. `,(0,c.jsx)(t.strong,{children:`Édition manuelle du frontmatter du stub préservée`}),` (lien
Storybook par fichier conservé), comme demandé.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Convergence des chemins legacy`}),` : middleware `,(0,c.jsx)(t.code,{children:`alias-redirect.ts`}),` 301 `,(0,c.jsx)(t.strong,{children:`tout`}),`
`,(0,c.jsx)(t.code,{children:`/slides/<x>`}),` qui résout à une entrée du registre — par alias canonique, par
`,(0,c.jsx)(t.strong,{children:`slug du stub`}),`, ou par chemin historique (`,(0,c.jsx)(t.code,{children:`/slides/codimd/<id>`}),`) — vers
`,(0,c.jsx)(t.code,{children:`/p/<alias>`}),`. Garantit une `,(0,c.jsx)(t.strong,{children:`source de vérité unique`}),` : `,(0,c.jsx)(t.code,{children:`/slides/<slug>`}),` ne peut
plus servir une copie `,(0,c.jsx)(t.em,{children:`différente`}),` (stub brut, non gelée) de `,(0,c.jsx)(t.code,{children:`/p/<alias>`}),`. Les
decks `,(0,c.jsx)(t.strong,{children:`hors registre`}),` passent sans interception (200), la route canonique
`,(0,c.jsx)(t.code,{children:`/p/<alias>`}),` n'est jamais touchée. `,(0,c.jsxs)(t.em,{children:[`(Risque identifié : `,(0,c.jsx)(t.code,{children:`/slides/<slug>`}),` et
`,(0,c.jsx)(t.code,{children:`/p/<alias>`}),` servaient deux contenus distincts — résolu.)`]})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Rapatriement`}),` : `,(0,c.jsx)(t.code,{children:`make pull-note`}),` (CodiMD → stub, frontmatter préservé).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Champ `,(0,c.jsx)(t.code,{children:`access`})]}),` : lève l'ambiguïté quand un même slug existe dans plusieurs
dossiers (cas réel rencontré : `,(0,c.jsx)(t.code,{children:`atelier-mecenes`}),` en `,(0,c.jsx)(t.code,{children:`public/`}),` ET `,(0,c.jsx)(t.code,{children:`semi-private/`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Id épinglé`}),` : la story embarquée porte `,(0,c.jsx)(t.code,{children:`meta.id`}),` stable (DDR-017 §2.b) — sans
quoi un renommage de story casse le deck (cas réel : la story atelier avait été
renumérotée `,(0,c.jsx)(t.code,{children:`05-…`}),` → `,(0,c.jsx)(t.code,{children:`…-mai-2026`}),`, les embeds du deck étaient cassés).`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`hébergement-des-bundles-gelés--quick-win-retenu`,children:`Hébergement des bundles gelés — quick-win retenu`}),`
`,(0,c.jsxs)(t.p,{children:[`Le bundle gelé est copié sous `,(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`.frozen/<alias>/`})}),` (HORS `,(0,c.jsx)(t.code,{children:`public/`}),`, servi par
`,(0,c.jsx)(t.code,{children:`nitro.publicAssets`}),` à `,(0,c.jsx)(t.code,{children:`/frozen/<alias>/`}),`), via `,(0,c.jsx)(t.code,{children:`make freeze-presentation`}),`.
`,(0,c.jsx)(t.code,{children:`/p/<alias>`}),` redirige vers lui quand `,(0,c.jsx)(t.code,{children:`lifecycle: frozen`}),`. Simple, sans infra,
l'URL diffusée reste stable. `,(0,c.jsxs)(t.em,{children:[`(Hors `,(0,c.jsx)(t.code,{children:`public/`}),` car `,(0,c.jsx)(t.code,{children:`nuxt generate`}),` aspire tout
`,(0,c.jsx)(t.code,{children:`public/`}),` → un bundle aspirerait les autres ; cf. [DDR-017] §2.a-ter.)`]})]}),`
`,(0,c.jsx)(t.h3,{id:`provenance-embarquée--le-bundle-est-ré-engendrable-seul`,children:`Provenance embarquée — le bundle est ré-engendrable seul`}),`
`,(0,c.jsxs)(t.p,{children:[`Chaque bundle gelé embarque un dossier `,(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`source/`})}),` (« au cas où ») pour rester
ré-engendrable et traçable sans le repo :`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`<slug>.md`})}),` — le markdown SOURCE fidèle au repo (frontmatter d'origine).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`<slug>--standalone.md`})}),` — la variante patchée qui a `,(0,c.jsx)(t.em,{children:`réellement`}),` produit le
bundle (`,(0,c.jsx)(t.code,{children:`storybook: /frozen/<alias>/_storybook`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`provenance.json`})}),` — alias, slug, thème, date de gel, `,(0,c.jsx)(t.strong,{children:`commit git`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`registry-entry.yml`})}),` — l'entrée registre complète (noteId source, lifecycle…).`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`Ainsi, depuis le seul bundle diffusé, on sait d'où il vient, à quel commit, et on
peut le re-geler / re-diffuser à l'identique.`}),`
`,(0,c.jsx)(t.h3,{id:`convergence-des-liens--côté-client-aussi-résolu-2026-06-22`,children:`Convergence des liens — côté CLIENT aussi (résolu 2026-06-22)`}),`
`,(0,c.jsxs)(t.p,{children:[`Le middleware `,(0,c.jsx)(t.code,{children:`alias-redirect`}),` est `,(0,c.jsx)(t.strong,{children:`serveur-only`}),` : il converge `,(0,c.jsx)(t.code,{children:`/slides/<slug>`}),`
→ `,(0,c.jsx)(t.code,{children:`/p/<alias>`}),` au reload mais PAS en navigation SPA. Donc l'index ne doit pas lier
le legacy `,(0,c.jsx)(t.code,{children:`/slides/<slug>`}),` mais `,(0,c.jsxs)(t.strong,{children:[`directement `,(0,c.jsx)(t.code,{children:`/p/<alias>`})]}),` : `,(0,c.jsx)(t.code,{children:`/api/presentations`}),`
expose désormais l'`,(0,c.jsx)(t.code,{children:`alias`}),` (depuis le registre), et la home lie `,(0,c.jsx)(t.code,{children:`/p/<alias>`}),` quand
présent (fallback `,(0,c.jsx)(t.code,{children:`/slides/<slug>`}),` hors-registre). Le middleware reste le filet
pour les liens externes déjà diffusés.`]}),`
`,(0,c.jsx)(t.h2,{id:`décisions-ouvertes`,children:`Décisions ouvertes`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Rapatriement & ids`}),` : `,(0,c.jsx)(t.code,{children:`pull-note`}),` réécrit le corps depuis CodiMD ; si la note
porte des ids de story périmés, le gel les ré-introduit. À terme : une `,(0,c.jsx)(t.strong,{children:`table de
réécriture d'ids`}),` au rapatriement, ou corriger la note source.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Push repo → CodiMD`}),` : non implémenté (risque d'écraser une édition live).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Poids/versionnage`}),` des bundles hébergés sous `,(0,c.jsx)(t.code,{children:`public/frozen/`}),` (commit vs
hors-repo). Lié à [DDR-017].`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Renommage de route`}),` : `,(0,c.jsx)(t.code,{children:`/p/`}),` retenu ; alternatives `,(0,c.jsx)(t.code,{children:`/d/`}),`, `,(0,c.jsx)(t.code,{children:`/v/`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`références`,children:`Références`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`[DDR-016] — Archivage du book (zone `,(0,c.jsx)(t.code,{children:`_archives`}),`) · `,(0,c.jsx)(t.code,{children:`stories/ddr/DDR-016.mdx`})]}),`
`,(0,c.jsxs)(t.li,{children:[`[DDR-017] — Gel d'un deck (bundle autoportant) · `,(0,c.jsx)(t.code,{children:`stories/ddr/DDR-017.mdx`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`nuxt-slides/server/api/presentations/[slug].get.ts`}),` — fetch CodiMD + frontmatter repo`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`nuxt-slides/server/api/codimd/[noteId].get.ts`}),` — route CodiMD directe (à rediriger)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`nuxt-slides/server/utils/presentations.ts`}),` — résolution slug + statut d'accès`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),i()}))();export{s as default};