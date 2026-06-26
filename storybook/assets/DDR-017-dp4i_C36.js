import{i as e}from"./preload-helper-DaCzexP6.js";import{u as t}from"./iframe-BeshMaXC.js";import{L as n,a as r,s as i}from"./blocks-DpqSezW4.js";import{t as a}from"./mdx-react-shim-DSKVbLXU.js";function o(e){let t={blockquote:`blockquote`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`DDR/DDR-017 : Cycle de vie des présentations (gel & bundle autoportant)`,created:`2026-06-22`,status:`proposé`}),`
`,(0,c.jsx)(t.h1,{id:`ddr-017--cycle-de-vie-des-présentations`,children:`DDR-017 : Cycle de vie des présentations`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsxs)(t.strong,{children:[`Statut `,(0,c.jsx)(t.code,{children:`proposé`}),`.`]}),` Ce DDR fixe comment une présentation `,(0,c.jsx)(t.code,{children:`nuxt-slides`}),` qui
embarque des écrans de Storybook `,(0,c.jsx)(t.strong,{children:`survit à l'archivage puis à la suppression`}),`
de ces écrans ([DDR-016]). Il devient opposable au passage en `,(0,c.jsx)(t.code,{children:`accepté`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`contexte`,children:`Contexte`}),`
`,(0,c.jsxs)(t.p,{children:[`Une présentation `,(0,c.jsx)(t.code,{children:`nuxt-slides`}),` peut embarquer des écrans Storybook par `,(0,c.jsx)(t.strong,{children:`iframe`}),`.
Le couplage actuel (cf. `,(0,c.jsx)(t.code,{children:`nuxt-slides/src/utils/storybook.ts`}),`) est :`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`le deck déclare en frontmatter `,(0,c.jsx)(t.code,{children:`storybook: http://localhost:6007`}),` ;`]}),`
`,(0,c.jsxs)(t.li,{children:[`chaque slide référence une story `,(0,c.jsx)(t.strong,{children:`par id`}),` : `,(0,c.jsx)(t.code,{children:`story="parti-retenu-accueil--page"`}),`
(annotation `,(0,c.jsx)(t.code,{children:`:layout{story="…"}`}),` ou composant `,(0,c.jsx)(t.code,{children:`<StoryFrame story="…">`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Conséquence : la présentation `,(0,c.jsx)(t.strong,{children:`dépend d'un Storybook qui tourne`}),` et `,(0,c.jsx)(t.strong,{children:`casse dès
qu'un id de story bouge`}),` (rename, déplacement vers `,(0,c.jsx)(t.code,{children:`_archives/`}),`, suppression). Le
couplage est `,(0,c.jsx)(t.em,{children:`temporel`}),` : la slide a besoin que la story existe au moment où on la
regarde. Tant qu'il subsiste, on ne peut `,(0,c.jsx)(t.strong,{children:`ni archiver ni supprimer`}),` une
exploration sans casser les présentations qui la citent — exactement ce que
[DDR-016] cherche à débloquer.`]}),`
`,(0,c.jsx)(t.h2,{id:`décision`,children:`Décision`}),`
`,(0,c.jsx)(t.h3,{id:`1-une-présentation-diffusée-est-un-livrable-figé-pas-une-vue-live`,children:`1. Une présentation diffusée est un livrable figé, pas une vue live`}),`
`,(0,c.jsxs)(t.p,{children:[`Le Storybook `,(0,c.jsx)(t.strong,{children:`vivant`}),` sert le travail interne en cours. Dès qu'une présentation
doit `,(0,c.jsx)(t.strong,{children:`survivre indépendamment`}),` des écrans qu'elle cite (diffusion externe,
archivage de l'exploration source), elle est `,(0,c.jsx)(t.strong,{children:`gelée`}),` : on en produit un `,(0,c.jsx)(t.strong,{children:`bundle
HTML statique autoportant`}),` qui embarque sa propre photo des écrans, servie à la
même origine (`,(0,c.jsx)(t.code,{children:`/_storybook/`}),`). Le bundle ne dépend plus de l'arborescence vivante.`]}),`
`,(0,c.jsxs)(t.p,{children:[`L'infrastructure existe déjà : `,(0,c.jsx)(t.code,{children:`nuxt-slides/scripts/bundle-standalone.js`}),`
(`,(0,c.jsx)(t.code,{children:`make bundle-standalone`}),`). Elle copie un Storybook compilé dans le bundle, patche
le frontmatter `,(0,c.jsx)(t.code,{children:`storybook:`}),` vers le chemin relatif, et `,(0,c.jsx)(t.code,{children:`nuxt generate`}),` produit un
dossier déployable (GitHub Pages).`]}),`
`,(0,c.jsxs)(t.h3,{id:`2-bundle-réduit-aux-écrans-réellement-cités`,children:[`2. Bundle `,(0,c.jsx)(t.strong,{children:`réduit`}),` aux écrans réellement cités`]}),`
`,(0,c.jsxs)(t.p,{children:[`Le bundle de gel ne compile que les stories `,(0,c.jsx)(t.strong,{children:`référencées par le deck`}),` :`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Extraire les ids`}),` du `,(0,c.jsx)(t.code,{children:`.md`}),` : `,(0,c.jsx)(t.code,{children:`story="([^"]+)"`}),` (annotations `,(0,c.jsx)(t.code,{children:`:layout{…}`}),` +
`,(0,c.jsx)(t.code,{children:`<StoryFrame>`}),`). Exemple vitrine : 6 ids distincts.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Résoudre id → fichier source via `,(0,c.jsx)(t.code,{children:`index.json`}),`.`]}),` On lit l'index d'un build
Storybook (la table autoritaire `,(0,c.jsx)(t.code,{children:`id → importPath`}),`), `,(0,c.jsx)(t.strong,{children:`pas`}),` une re-dérivation
du `,(0,c.jsx)(t.code,{children:`title`}),`. C'est crucial : les écrans vitrine épinglent un `,(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`id`}),` explicite`]}),`
(`,(0,c.jsx)(t.code,{children:`meta.id = 'parti-retenu-…'`}),`) découplé du `,(0,c.jsx)(t.code,{children:`title`}),`
(`,(0,c.jsx)(t.code,{children:`Candidats/Home vitrine/L'accueil`}),`) — voir §2.b. Re-slugifier le titre
donnerait un id faux. Lire l'index rend en prime la `,(0,c.jsx)(t.strong,{children:`détection de référence
cassée`}),` gratuite (id absent ⇒ slide vide).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Build Storybook filtré`}),` sur les fichiers résolus. Storybook 10 construit par
`,(0,c.jsx)(t.strong,{children:`glob de fichiers`}),` (`,(0,c.jsx)(t.code,{children:`stories`}),`), pas par id : on restreint le glob aux
`,(0,c.jsx)(t.code,{children:`.stories.tsx`}),` résolus. Vite suit ensuite le `,(0,c.jsx)(t.strong,{children:`graphe d'imports`}),` (socle, data,
kit) automatiquement — pas besoin de les énumérer.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Bundler`}),` ce mini-Storybook avec le deck via `,(0,c.jsx)(t.code,{children:`bundle-standalone`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[`Outillé de bout en bout par `,(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`make bundle-frozen BUNDLE_SLUG=<deck>`})}),`
(`,(0,c.jsx)(t.code,{children:`nuxt-slides`}),`) : résout les ids (`,(0,c.jsx)(t.code,{children:`freeze-deck.js`}),`), construit le Storybook
réduit (`,(0,c.jsx)(t.code,{children:`STORYBOOK_STORIES_GLOBS`}),` dans `,(0,c.jsx)(t.code,{children:`.storybook/main.ts`}),`), puis enchaîne sur
`,(0,c.jsx)(t.code,{children:`bundle-standalone`}),`. `,(0,c.jsx)(t.strong,{children:`Échoue avant tout build`}),` si le deck référence une story
absente. `,(0,c.jsx)(t.code,{children:`make freeze-check`}),` donne le rapport seul, sans rien construire.
Pré-requis : un `,(0,c.jsx)(t.code,{children:`index.json`}),` issu d'un build complet (`,(0,c.jsx)(t.code,{children:`make bundle-storybook`}),`)
pour la résolution. Validé sur `,(0,c.jsx)(t.code,{children:`vitrine-t3-candidat-retenu`}),` (bundle autoportant,
Storybook réduit à 15 entrées, frontmatter patché vers `,(0,c.jsx)(t.code,{children:`/_storybook`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h4,{id:`2a-bis-deux-pièges-dassets-surgis-à-la-preuve-visuelle`,children:`2.a-bis. Deux pièges d'assets (surgis à la preuve visuelle)`}),`
`,(0,c.jsxs)(t.p,{children:[`Le rendu réel du bundle a révélé deux défauts `,(0,c.jsxs)(t.strong,{children:[`du flow `,(0,c.jsx)(t.code,{children:`bundle-standalone`}),`
lui-même`]}),` (pré-existants, pas introduits par le gel) :`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`staticDirs`}),` du Storybook en URL racine.`]}),` Les écrans référencent leurs
photos/fonts en absolu (`,(0,c.jsx)(t.code,{children:`/vitrine/…`}),`, `,(0,c.jsx)(t.code,{children:`/fonts/…`}),`). Dans le bundle ils vivent
sous `,(0,c.jsx)(t.code,{children:`/_storybook/`}),`, donc l'iframe les demande à la racine du serveur → 404,
écran « en alt-text ». `,(0,c.jsx)(t.strong,{children:`Correctif`}),` : `,(0,c.jsx)(t.code,{children:`scripts/mirror-storybook-assets.js`}),`
recopie les dossiers d'assets du Storybook à la `,(0,c.jsx)(t.strong,{children:`racine`}),` du bundle (sans
écraser les assets Nuxt), appelé par `,(0,c.jsx)(t.code,{children:`bundle-standalone`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Base URL et URLs racine codées en dur.`}),` Le deck Nuxt charge certains assets
en absolu racine (`,(0,c.jsx)(t.code,{children:`/themes/<t>.css`}),`, `,(0,c.jsx)(t.code,{children:`/backgrounds/…`}),`, cf. `,(0,c.jsx)(t.code,{children:`useTheme.ts`}),`,
`,(0,c.jsx)(t.code,{children:`config/presentation.ts`}),`) — `,(0,c.jsxs)(t.strong,{children:[`insensibles à `,(0,c.jsx)(t.code,{children:`baseURL`})]}),`. Servir le bundle sous
un sous-chemin (`,(0,c.jsx)(t.code,{children:`/nuxt-slides/`}),`) les casse. `,(0,c.jsx)(t.strong,{children:`Décision`}),` : un bundle gelé se
sert `,(0,c.jsx)(t.strong,{children:`à son origine`}),` → `,(0,c.jsx)(t.code,{children:`make bundle-frozen`}),` bâtit en `,(0,c.jsxs)(t.strong,{children:[`base `,(0,c.jsx)(t.code,{children:`/`})]}),`
(`,(0,c.jsx)(t.code,{children:`FROZEN_BASE_URL`}),`). Le `,(0,c.jsx)(t.code,{children:`/nuxt-slides/`}),` reste réservé au déploiement GitHub
Pages (`,(0,c.jsx)(t.code,{children:`deploy-standalone`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`GET /api/_auth/session 404`}),` au démarrage est `,(0,c.jsx)(t.strong,{children:`attendu`}),` et bénin : route
serveur sans backend en statique.`]}),`
`]}),`
`,(0,c.jsx)(t.h4,{id:`2a-ce-que-le-bundle-réduit-gagne--et-ne-gagne-pas`,children:`2.a. Ce que le bundle réduit gagne — et ne gagne pas`}),`
`,(0,c.jsx)(t.p,{children:`Vérifié sur le cas vitrine (4 fichiers source, 6 ids) :`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Surface`}),` : l'index passe de ~105 fichiers / 296 entrées à `,(0,c.jsx)(t.strong,{children:`4 fichiers /
15 entrées`}),`. Le bundle ne navigue plus que les écrans du deck — fin de la
confusion « écrans dépassés embarqués ».`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Correction`}),` : les 6 ids résolvent ; toute référence cassée est signalée
`,(0,c.jsx)(t.strong,{children:`avant`}),` gel (le script sort en code 2).`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Poids : énorme, une fois l'élagage ajouté (révisé 2026-06-22).`}),` Le gros du
`,(0,c.jsx)(t.code,{children:`storybook-static`}),` (~95 Mo) vient des `,(0,c.jsx)(t.strong,{children:`assets statiques`}),` : `,(0,c.jsx)(t.code,{children:`staticDirs`}),` =
`,(0,c.jsx)(t.code,{children:`apps/web/public`}),` est copié `,(0,c.jsx)(t.strong,{children:`en bloc`}),` (87 Mo, ~116 photos vitrine) quelle que
soit la liste de stories. Or un deck réduit n'en référence qu'une fraction —
l'atelier mécènes en utilise `,(0,c.jsx)(t.strong,{children:`0`}),` (que des fontes, 800 Ko), la vitrine `,(0,c.jsx)(t.strong,{children:`12`}),`
photos. Le reste est du déchet pur. `,(0,c.jsx)(t.strong,{children:`Contrairement à l'hypothèse initiale,
l'élagage est robuste et à très fort rendement`}),` : on bâtit le Storybook réduit,
puis on `,(0,c.jsx)(t.strong,{children:`scanne son JS/CSS bâti`}),` pour les URL d'assets racine-absolues — après
bundling, toute référence transitive (data files, kit partagé, `,(0,c.jsx)(t.code,{children:`url()`}),` CSS) est
un littéral de chaîne, donc le scan attrape ce que le scan de source manque.`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.em,{children:`Piège validé`}),` : les chemins photos sont émis en `,(0,c.jsx)(t.strong,{children:`template literals`}),`
(`,(0,c.jsx)(t.code,{children:` `}),`/vitrine/…jpg`,(0,c.jsx)(t.code,{children:` `}),`) — le scanner doit inclure le backtick, sinon il
supprimerait des assets utilisés (attrapé en validation sur la vitrine).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.em,{children:`Garde-fou`}),` : `,(0,c.jsx)(t.code,{children:`PRUNE_ASSETS=0`}),` rebâtit avec le staticDir complet pour
diagnostiquer un asset manquant.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.em,{children:`Résultat mesuré`}),` : atelier `,(0,c.jsx)(t.strong,{children:`196 → 21 Mo`}),`, vitrine `,(0,c.jsx)(t.strong,{children:`391 → 26 Mo`}),` (ce
dernier cumulait aussi le bug d'imbrication récursive, cf. ci-dessous). Le
`,(0,c.jsx)(t.code,{children:`_storybook`}),` passe de 95 à ~9–14 Mo. Preuve de justesse : un asset référencé
répond 200, un asset élagué répond 404.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.em,{children:`Outil`}),` : `,(0,c.jsx)(t.code,{children:`nuxt-slides/scripts/prune-storybook-assets.js`}),`, câblé dans
`,(0,c.jsx)(t.code,{children:`make bundle-frozen`}),` (défaut on). Override staticDir via `,(0,c.jsx)(t.code,{children:`STORYBOOK_STATIC_DIR`}),`
dans `,(0,c.jsx)(t.code,{children:`.storybook/main.ts`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Le gain de C est donc `,(0,c.jsx)(t.strong,{children:`la surface, la robustesse ET la taille`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h4,{id:`2a-ter-le-bundle-ne-doit-pas-embarquer-nuxt-ni-les-autres-bundles`,children:`2.a-ter. Le bundle ne doit pas embarquer Nuxt ni les autres bundles`}),`
`,(0,c.jsx)(t.p,{children:`Deux défauts d'architecture surgis à l'industrialisation du gel (révisé 2026-06-22) :`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Imbrication récursive + assets aspirés (résolu 2026-06-22).`}),` `,(0,c.jsx)(t.code,{children:`nuxt generate`}),`
copie tout `,(0,c.jsx)(t.code,{children:`public/`}),` dans sa sortie. Tant que l'hébergement et le mirror d'assets
vivaient SOUS `,(0,c.jsx)(t.code,{children:`public/`}),` (`,(0,c.jsx)(t.code,{children:`public/frozen/<alias>/`}),`, `,(0,c.jsx)(t.code,{children:`public/vitrine/`}),`, `,(0,c.jsx)(t.code,{children:`public/fonts/`}),`),
chaque nouveau bundle `,(0,c.jsx)(t.strong,{children:`aspirait les bundles déjà gelés ET leurs assets mirrorés`}),`
— d'où des photos `,(0,c.jsx)(t.em,{children:`vitrine`}),` retrouvées dans le bundle `,(0,c.jsx)(t.em,{children:`atelier`}),` (qui n'en
référence aucune). `,(0,c.jsx)(t.code,{children:`nitro.ignore`}),` ne gouverne `,(0,c.jsx)(t.strong,{children:`que les routes`}),`, pas la copie de
`,(0,c.jsx)(t.code,{children:`public/`}),`. `,(0,c.jsx)(t.strong,{children:`Correctif en deux temps`}),` :`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Sortir l'hébergement de `,(0,c.jsx)(t.code,{children:`public/`})]}),` : les bundles vivent dans `,(0,c.jsx)(t.code,{children:`.frozen/<alias>/`}),`,
le filet d'assets dans `,(0,c.jsx)(t.code,{children:`.frozen-mirror/`}),`, servis à l'origine par
`,(0,c.jsx)(t.code,{children:`nitro.publicAssets`}),` (`,(0,c.jsx)(t.code,{children:`nuxt.config`}),`). `,(0,c.jsx)(t.code,{children:`nuxt generate`}),` ne les voit plus jamais.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Rendre le bundle autoportant`}),` : `,(0,c.jsx)(t.code,{children:`scripts/rebase-storybook-assets.js`}),` réécrit
les URL root-absolues des stories (`,(0,c.jsx)(t.code,{children:`/vitrine/x`}),`, `,(0,c.jsx)(t.code,{children:`/fonts/x`}),`) en `,(0,c.jsx)(t.strong,{children:`relatif`}),` dans
le `,(0,c.jsx)(t.code,{children:`_storybook`}),` bâti, pour qu'elles résolvent DANS le bundle (`,(0,c.jsx)(t.code,{children:`_storybook/<root>/`}),`).
⚠️ `,(0,c.jsx)(t.strong,{children:`Piège du contexte de résolution`}),` (attrapé à la preuve visuelle, 85 erreurs) :
un `,(0,c.jsx)(t.code,{children:`url()`}),` CSS résout contre la `,(0,c.jsx)(t.strong,{children:`feuille`}),` (`,(0,c.jsx)(t.code,{children:`_storybook/assets/`}),`) → préfixe `,(0,c.jsx)(t.code,{children:`../`}),` ;
un littéral JS devenu `,(0,c.jsx)(t.code,{children:`<img src>`}),` résout contre le `,(0,c.jsx)(t.strong,{children:`document`}),` (iframe.html à
`,(0,c.jsx)(t.code,{children:`_storybook/`}),`) → `,(0,c.jsx)(t.strong,{children:`sans`}),` préfixe. Le rebaser applique donc un préfixe `,(0,c.jsx)(t.strong,{children:`par type
de fichier`}),`. Le mirror `,(0,c.jsx)(t.code,{children:`.frozen-mirror/`}),` n'est plus qu'un filet future-proof
(un consommateur non-rebasé), pas une dépendance.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Nuxt-out : bundle Reveal-only (résolu 2026-06-22).`}),` Le deck gelé était une app
Vue hydratée (`,(0,c.jsx)(t.code,{children:`<div id="__nuxt">`}),`, `,(0,c.jsx)(t.code,{children:`_payload.json`}),`, Reveal monté au runtime). On
embarquait un framework de `,(0,c.jsx)(t.strong,{children:`build`}),` comme dépendance de `,(0,c.jsx)(t.strong,{children:`runtime`}),`. Résolu `,(0,c.jsx)(t.strong,{children:`sans
navigateur headless`}),` — la voie idiomatique passe par le rendu Nuxt, pas un
post-traitement :`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Retirer `,(0,c.jsx)(t.code,{children:`<ClientOnly>`})]}),` autour du deck : il `,(0,c.jsx)(t.em,{children:`tree-shake le contenu du build
serveur`}),`, donc tant qu'il est là le deck ne peut PAS se pré-rendre. Le deck est
SSR-safe (tous les accès `,(0,c.jsx)(t.code,{children:`window`}),` sont en `,(0,c.jsx)(t.code,{children:`onMounted`}),`/`,(0,c.jsx)(t.code,{children:`mounted`}),`), sauf un piège :
une `,(0,c.jsxs)(t.strong,{children:[`directive `,(0,c.jsx)(t.code,{children:`.client`})]}),` (`,(0,c.jsx)(t.code,{children:`v-french-typography`}),`) n'existe pas au SSR →
`,(0,c.jsx)(t.code,{children:`ssrGetDirectiveProps`}),` plante sur `,(0,c.jsx)(t.code,{children:`getSSRProps`}),` undefined. Fix : `,(0,c.jsx)(t.code,{children:`getSSRProps(){}`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`plugin universel (plus `,(0,c.jsx)(t.code,{children:`.client`}),`).`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`features.noScripts`})}),` (gated mode bundle) → Nuxt `,(0,c.jsx)(t.strong,{children:`n'émet jamais`}),` les scripts
d'hydratation, `,(0,c.jsx)(t.code,{children:`_payload`}),`, modulepreload. À la source, pas de strip fragile.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`features.inlineStyles: () => true`})}),` → tout le CSS inliné en `,(0,c.jsx)(t.code,{children:`<style>`}),`
(sinon le CSS scopé, chargé par le graphe JS qu'on retire, est orphelin → slides
non stylées). On garde aussi les `,(0,c.jsx)(t.code,{children:`_nuxt/*.css`}),` (un import composable, `,(0,c.jsx)(t.code,{children:`reveal.css`}),`,
échappe au predicate `,(0,c.jsx)(t.code,{children:`.vue`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Plugin Nitro `,(0,c.jsx)(t.code,{children:`render:html`})]}),` (`,(0,c.jsx)(t.code,{children:`server/plugins/nuxtout-deck.ts`}),`) : `,(0,c.jsx)(t.strong,{children:`ajout pur`}),`
(reveal.css/js + `,(0,c.jsx)(t.code,{children:`Reveal.initialize`}),` depuis `,(0,c.jsx)(t.code,{children:`DEFAULT_REVEAL_CONFIG`}),`) + réécriture
d'`,(0,c.jsx)(t.strong,{children:`attributs d'URL`}),` root-absolus → relatifs `,(0,c.jsx)(t.code,{children:`../../`}),` (le HTML est à
`,(0,c.jsx)(t.code,{children:`slides/<slug>/`}),`, profondeur 2). ⚠️ Le rebase doit être keyé sur la `,(0,c.jsx)(t.strong,{children:`cible du
chemin`}),` (`,(0,c.jsx)(t.code,{children:`/_storybook/`}),`, `,(0,c.jsx)(t.code,{children:`/vitrine/`}),`…), PAS sur le nom d'attribut : sinon le
lightbox Reveal `,(0,c.jsx)(t.code,{children:`data-preview-link`}),` échappe (bug attrapé : iframes 404 +
X-Frame-Options deny). Reveal.js dist copié dans le bundle par le Makefile.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`CSS des composants MDC`}),` : `,(0,c.jsx)(t.code,{children:`inlineStyles`}),` n'inline QUE les composants du sas
SSR statique ; les slides sont rendues via le `,(0,c.jsx)(t.code,{children:`<MDCRenderer>`}),` dynamique, donc le
CSS des composants MDC (`,(0,c.jsx)(t.code,{children:`StoryFrame`}),`, `,(0,c.jsx)(t.code,{children:`SplitSlide`}),`, `,(0,c.jsx)(t.code,{children:`SlideContent`}),`…) échappe à la
collecte → leurs chunks `,(0,c.jsx)(t.code,{children:`_nuxt/*.css`}),` existent mais ne sont pas référencés. Fix :
`,(0,c.jsx)(t.code,{children:`scripts/link-deck-css.js`}),` lie TOUS les `,(0,c.jsx)(t.code,{children:`_nuxt/*.css`}),` dans le HTML (le JS qui les
chargeait est retiré). Sans ça, les iframes chargent mais s'effondrent (CSS de
dimensionnement manquant).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Scaled-iframe SANS JS (CSS-only)`}),` : la vraie dépendance JS résiduelle du deck
est `,(0,c.jsx)(t.code,{children:`useScaledFrame`}),` — un `,(0,c.jsx)(t.code,{children:`ResizeObserver`}),` mesure le pane, calcule `,(0,c.jsx)(t.code,{children:`scale = largeur/1440`}),` et pose `,(0,c.jsx)(t.code,{children:`width/height/transform`}),` inline. `,(0,c.jsx)(t.code,{children:`noScripts`}),` le supprime →
l'inline `,(0,c.jsx)(t.code,{children:`height:0px`}),` figé au SSR reste → iframes effondrées. `,(0,c.jsx)(t.strong,{children:`Reproduit en CSS
pur`}),` via `,(0,c.jsx)(t.em,{children:`container query units`}),` : le pane devient `,(0,c.jsx)(t.code,{children:`container-type:size`}),`, l'iframe
rend à `,(0,c.jsx)(t.code,{children:`width:1440px`}),` (logique desktop), et `,(0,c.jsx)(t.code,{children:`transform:scale(calc(100cqw / 1440px))`}),`
— le truc clé est `,(0,c.jsx)(t.code,{children:`cqw / 1440**px**`}),` (longueur÷longueur = nombre, ce que `,(0,c.jsx)(t.code,{children:`scale()`}),`
exige). La largeur du pane pilote le scale, `,(0,c.jsx)(t.strong,{children:`sans mesure JS`}),`, auto-adaptatif à
tout layout. Injecté par le plugin (mode bundle). Prouvé : 10 iframes 695px, viewport
interne 1425px (fidélité desktop), remplit le pane. `,(0,c.jsxs)(t.em,{children:[`NB lightbox : `,(0,c.jsx)(t.code,{children:`data-preview-fit`}),`
(contain/cover/scale-down) règle le cadrage du media DANS l'overlay Reveal — piste
d'amélioration source `,(0,c.jsx)(t.code,{children:`StoryFrame.vue`}),`, non incluse ici (touche aussi le live).`]})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Résultat`}),` : `,(0,c.jsx)(t.code,{children:`_nuxt`}),` 4 Mo de JS → `,(0,c.jsx)(t.strong,{children:`~270 Ko de CSS seul`}),` (0 JS) ; deck HTML
`,(0,c.jsx)(t.strong,{children:`100% autoportant Reveal`}),` (0 réf Nuxt, `,(0,c.jsx)(t.code,{children:`Reveal.isReady()`}),`=true, 22 slides, 10
iframes Storybook `,(0,c.jsx)(t.strong,{children:`rendues inline en zoom desktop`}),`, `,(0,c.jsx)(t.strong,{children:`0 erreur console`}),`). Bundle
atelier `,(0,c.jsx)(t.strong,{children:`196 → 21 Mo`}),`.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.h4,{id:`2b-pré-requis--épingler-lid-dune-story-embarquée`,children:[`2.b. Pré-requis : épingler l'`,(0,c.jsx)(t.code,{children:`id`}),` d'une story embarquée`]}),`
`,(0,c.jsxs)(t.p,{children:[`Pour qu'un deck survive à la promotion d'un écran (exploration → candidat → DS),
la story doit porter un `,(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`id`}),` explicite stable`]}),` dans son `,(0,c.jsx)(t.code,{children:`meta`}),`, indépendant du
`,(0,c.jsx)(t.code,{children:`title`}),` (qui, lui, suit le rangement Storybook). C'est déjà le cas des écrans
vitrine (`,(0,c.jsx)(t.code,{children:`id: 'parti-retenu-accueil'`}),`). `,(0,c.jsx)(t.strong,{children:`Règle`}),` : toute story susceptible d'être
embarquée par une présentation épingle son `,(0,c.jsx)(t.code,{children:`id`}),` ; déplacer/renommer la story ne
casse alors pas le deck.`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`Garde-fou : si le build filtré casse un écran (dépendance non suivie), repli sûr
sur le bundle complet (mécanisme A).`}),`
`]}),`
`,(0,c.jsxs)(t.h3,{id:`3-déclencheur--par-défaut-gel-à-lentrée-en-_archives`,children:[`3. Déclencheur — par défaut, `,(0,c.jsxs)(t.strong,{children:[`gel à l'entrée en `,(0,c.jsx)(t.code,{children:`_archives`})]})]}),`
`,(0,c.jsxs)(t.p,{children:[`Trois moments possibles de gel ; le `,(0,c.jsx)(t.strong,{children:`défaut retenu`}),` est le premier, les deux
autres restent admis selon le cas :`]}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:`Déclencheur`}),(0,c.jsx)(t.th,{children:`Règle`}),(0,c.jsx)(t.th,{children:`Quand le préférer`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:[(0,c.jsxs)(t.strong,{children:[`À l'entrée en `,(0,c.jsx)(t.code,{children:`_archives`})]}),` `,(0,c.jsx)(t.em,{children:`(défaut)`})]}),(0,c.jsxs)(t.td,{children:[`Quand une exploration entre en `,(0,c.jsx)(t.code,{children:`Explorations/_archives/`}),` ([DDR-016]), on gèle aussitôt les decks qui la citent. La suppression définitive ultérieure ne casse plus rien.`]}),(0,c.jsxs)(t.td,{children:[`Présentation `,(0,c.jsx)(t.strong,{children:`déjà diffusée`}),` publiquement et exploration en voie d'archivage — `,(0,c.jsx)(t.strong,{children:`notre cas vitrine`}),`. Découple tôt, sans surveillance.`]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.strong,{children:`À la suppression`})}),(0,c.jsx)(t.td,{children:`On garde l'exploration archivée (encore vivante) tant qu'on veut ; on ne gèle qu'au moment de supprimer définitivement l'archive.`}),(0,c.jsx)(t.td,{children:`Exploration encore susceptible de re-servir le travail interne ; on limite le nombre de bundles à maintenir.`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.strong,{children:`À la diffusion`})}),(0,c.jsx)(t.td,{children:`Tout deck montré à un public externe est bundlé dès sa diffusion, indépendamment de l'archivage.`}),(0,c.jsx)(t.td,{children:`Decks fréquemment rejoués devant des tiers ; le live ne sert qu'en interne.`})]})]})]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsxs)(t.strong,{children:[`Pour le premier cas (présentation vitrine, `,(0,c.jsx)(t.code,{children:`vitrine-t3-candidat-retenu`}),`)`]}),` : elle
est publique et les explorations vitrine T3 partent en `,(0,c.jsx)(t.code,{children:`_archives`}),` ([DDR-016],
Lot 4). On applique donc le `,(0,c.jsxs)(t.strong,{children:[`gel à l'entrée en `,(0,c.jsx)(t.code,{children:`_archives`})]}),` : on bundle le deck
(réduit aux 6 écrans cités) `,(0,c.jsx)(t.em,{children:`avant`}),` de déplacer les explorations, puis l'archive
peut être supprimée plus tard sans rien casser.`]}),`
`,(0,c.jsx)(t.h3,{id:`4-inventaire-du-couplage-avant-toute-suppression`,children:`4. Inventaire du couplage avant toute suppression`}),`
`,(0,c.jsxs)(t.p,{children:[`Avant d'archiver/supprimer une exploration ([DDR-016] §4), produire la table
`,(0,c.jsx)(t.strong,{children:`deck ↔ stories citées`}),` (`,(0,c.jsx)(t.code,{children:`grep 'story="…"'`}),` sur `,(0,c.jsx)(t.code,{children:`presentations/`}),`). Aucune
exploration n'est supprimée tant qu'un deck `,(0,c.jsx)(t.strong,{children:`non gelé`}),` la cite encore.`]}),`
`,(0,c.jsx)(t.h2,{id:`mécanismes-rappel-des-options-instruites`,children:`Mécanismes (rappel des options instruites)`}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:`Réf`}),(0,c.jsx)(t.th,{children:`Approche`}),(0,c.jsx)(t.th,{children:`Tenu / écarté`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.strong,{children:`A`})}),(0,c.jsxs)(t.td,{children:[`Bundle standalone `,(0,c.jsx)(t.strong,{children:`complet`}),` (`,(0,c.jsx)(t.code,{children:`bundle-standalone`}),` tel quel)`]}),(0,c.jsxs)(t.td,{children:[(0,c.jsx)(t.strong,{children:`Repli sûr`}),` quand le filtrage casse une dépendance.`]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.strong,{children:`B`})}),(0,c.jsx)(t.td,{children:`Snapshot image/PDF des écrans, iframes remplacées par visuels`}),(0,c.jsx)(t.td,{children:`Écarté par défaut : perd l'interactivité (drawer, navigation in-frame). Utile pour un export print/PDF figé.`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.strong,{children:`C`})}),(0,c.jsxs)(t.td,{children:[`Bundle `,(0,c.jsx)(t.strong,{children:`réduit`}),` aux ids cités`]}),(0,c.jsxs)(t.td,{children:[(0,c.jsx)(t.strong,{children:`Retenu`}),` : léger ET interactif.`]})]})]})]}),`
`,(0,c.jsx)(t.h2,{id:`décisions-ouvertes`,children:`Décisions ouvertes`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Build complet préalable`}),` : `,(0,c.jsx)(t.code,{children:`make bundle-frozen`}),` a besoin d'un `,(0,c.jsx)(t.code,{children:`index.json`}),`
(build complet) pour résoudre les ids, `,(0,c.jsx)(t.em,{children:`avant`}),` de reconstruire en réduit. Deux
builds Storybook donc. Acceptable pour un gel ponctuel ; à optimiser (index seul)
si le gel devient fréquent.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Politique de `,(0,c.jsx)(t.strong,{children:`versionnage`}),` des bundles gelés (où les déposer, nommage daté).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Réduction du poids (assets) : faite`}),` (cf. §2.a, révisé 2026-06-22) — élagage
des `,(0,c.jsx)(t.code,{children:`staticDirs`}),` au set réellement référencé, défaut on. Reste ouvert : le
`,(0,c.jsx)(t.strong,{children:`Nuxt-out`}),` (pré-rendre le deck en HTML Reveal autoportant sans runtime Nuxt,
cf. §2.a-ter point 2) — étape suivante, risquée (rendu Vue/MDC).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Bug pré-existant`}),` du flow `,(0,c.jsx)(t.code,{children:`bundle-standalone`}),` (collision de route nitro
`,(0,c.jsx)(t.code,{children:`api/presentations`}),`, `,(0,c.jsx)(t.code,{children:`EISDIR`}),`) : non bloquant (bundle produit), mais à nettoyer
séparément — hors périmètre du gel.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Sort des decks `,(0,c.jsx)(t.code,{children:`semi-private/`}),` (non couverts ici, à instruire si besoin).`]}),`
`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Câblage fait`}),` (2026-06-22) : `,(0,c.jsx)(t.code,{children:`make bundle-frozen`}),` + `,(0,c.jsx)(t.code,{children:`make freeze-check`}),`
opérationnels, garde anti-référence-cassée vérifiée.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`références`,children:`Références`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`[DDR-016] — Archivage et ménage du book · `,(0,c.jsx)(t.code,{children:`stories/ddr/DDR-016.mdx`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`nuxt-slides/scripts/freeze-deck.js`}),` — résolution ids → fichiers + détection de
références cassées (prototype mécanisme C, validé sur le cas vitrine)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`nuxt-slides/scripts/bundle-standalone.js`}),` · `,(0,c.jsx)(t.code,{children:`make bundle-standalone`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`apps/storybook/.storybook/main.ts`}),` · override `,(0,c.jsx)(t.code,{children:`STORYBOOK_STORIES_GLOBS`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`nuxt-slides/src/utils/storybook.ts`}),` · `,(0,c.jsx)(t.code,{children:`buildStoryUrl`}),`, `,(0,c.jsx)(t.code,{children:`EMBED_SANDBOX`})]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),i()}))();export{s as default};