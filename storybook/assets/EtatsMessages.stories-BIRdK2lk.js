import{i as e}from"./preload-helper-DaCzexP6.js";import{F as t,u as n}from"./iframe-BeshMaXC.js";import{n as r,yt as i}from"./ri-CHURB-Na.js";import{n as a,t as o}from"./button-CmAnFNOi.js";import{i as s,r as c,t as l}from"./leviers-BqVaDXal.js";import{n as u,t as d}from"./search-BWTCpdoM.js";import{n as f,t as p}from"./rocket-launch-sOg1tM81.js";import{a as m,i as h,o as g,s as _,t as v}from"./surface-BaAv7Fzu.js";import{a as y,c as b,i as x,l as S,n as C,o as w,r as T,s as E,t as D}from"./etats-messages-BT8rmdOt.js";var O,k,A=e((()=>{t(),O=n(),k=e=>(0,O.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,width:`1em`,height:`1em`,...e,children:[(0,O.jsx)(`style`,{children:`.icon-fill { fill: currentColor; }`}),(0,O.jsxs)(`symbol`,{id:`magicoon-inbox-empty`,viewBox:`0 0 24 24`,children:[(0,O.jsx)(`path`,{d:`M3.03711 13H6.9519C7.9909 13 8.88201 13.619 9.40601 14.516C9.92601 15.405 10.8901 16 11.9971 16C13.1041 16 14.0679 15.404 14.5879 14.516C15.1129 13.619 16.003 13 17.042 13H20.957H20.96C20.99 13.16 21 13.32 21 13.49V18C21 20 20 21 18 21H6C4 21 3 20 3 18V13.49C3 13.32 3.01004 13.16 3.04004 13H3.03711Z`,className:`icon-fill`}),(0,O.jsx)(`path`,{opacity:.4,d:`M16 4H8C6.709 4 5.72492 4.82599 5.31592 6.05099L3.15405 12.538C3.05205 12.844 3 13.164 3 13.487V18C3 20 4 21 6 21H18C20 21 21 20 21 18V13.487C21 13.165 20.9479 12.844 20.8459 12.538L18.6841 6.05099C18.2751 4.82599 17.291 4 16 4Z`,className:`icon-fill`})]}),(0,O.jsx)(`use`,{href:`#magicoon-inbox-empty`})]})}));function j(e){return l[e.doctrineSurface??`chrome-neutre`]??l[`chrome-neutre`]}function M({num:e,titre:t,intention:n,children:r}){return(0,P.jsxs)(`section`,{className:`flex flex-col gap-4`,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsxs)(`h2`,{className:`text-lg font-bold text-(--color-dsfr-text-title-grey)`,children:[e,` · `,t]}),(0,P.jsx)(`p`,{className:`max-w-2xl text-sm text-(--color-dsfr-text-mention-grey)`,children:n})]}),r]})}function N({titre:e,children:t}){return(0,P.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,P.jsx)(`span`,{className:`text-sm font-bold text-(--color-dsfr-text-title-grey)`,children:e}),(0,P.jsx)(`span`,{className:`text-sm text-(--color-dsfr-text-mention-grey)`,children:t})]})}var P,F,I,L,R,z;e((()=>{P=n(),i(),A(),u(),f(),a(),s(),_(),S(),F={title:`Candidats/Partagé/États & messages/États & messages (spec)`,tags:[`!manifest`],parameters:{espace:`espace-membre`,layout:`fullscreen`},decorators:[(e,{globals:t})=>(0,P.jsx)(`div`,{style:c(j(t)),className:`min-h-screen bg-(--surface-canvas) p-10`,children:(0,P.jsx)(`div`,{className:`mx-auto flex max-w-5xl flex-col gap-12`,children:(0,P.jsx)(e,{})})})]},I={name:`1 · Messagerie graduée`,render:()=>(0,P.jsx)(M,{num:`1`,titre:`Messagerie graduée par portée`,intention:`Un message se classe d'abord par sa portée (page / section / inline / toast), pas par son ton. Le ton (info / succès / alerte / erreur) est orthogonal. Tous peignent avec des rôles DSFR tokenisés ; seul le toast porte une élévation (niveau overlay).`,children:(0,P.jsxs)(`div`,{className:`grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2`,children:[(0,P.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,P.jsx)(N,{titre:`Bannière — portée page / système`,children:`Pleine largeur, en tête de zone de contenu. Persistante (publication en attente, mode dégradé). Fond teinté du ton.`}),(0,P.jsx)(D,{ton:`warning`,titre:`Fiche entreprise non publiée`,actions:(0,P.jsx)(o,{size:`sm`,variant:`outline`,children:`Publier la fiche`}),onDismiss:()=>{},children:`Vos modifications ne sont visibles qu'en interne tant que la fiche n'est pas publiée.`})]}),(0,P.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,P.jsx)(N,{titre:`Message de section — au-dessus d'une zone`,children:`Posé dans une surface, au-dessus de la zone concernée. Filet d'accent à gauche, surface neutre. Persistant tant que l'état dure.`}),(0,P.jsxs)(g,{children:[(0,P.jsx)(h,{children:(0,P.jsx)(x,{ton:`info`,titre:`Bilan annuel ouvert jusqu'au 30 juin`,children:`Renseignez vos initiatives avant la clôture pour qu'elles soient valorisées.`})}),(0,P.jsx)(h,{titre:(0,P.jsx)(`span`,{className:`font-bold`,children:`Initiatives`}),children:(0,P.jsx)(`span`,{className:`text-sm text-(--color-dsfr-text-mention-grey)`,children:`Le message coiffe la zone qu'il concerne, sans la quitter.`})})]})]}),(0,P.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,P.jsx)(N,{titre:`Message inline — près d'un champ`,children:`Compact, sans fond : icône + texte coloré du ton. Validation de formulaire, aide locale.`}),(0,P.jsxs)(m,{className:`flex flex-col gap-2`,children:[(0,P.jsx)(`label`,{htmlFor:`exemple-siret`,className:`text-sm font-bold text-(--color-dsfr-text-title-grey)`,children:`SIRET`}),(0,P.jsx)(`input`,{id:`exemple-siret`,defaultValue:`000 000 000`,className:`rounded-md border border-(--color-dsfr-border-plain-error) px-3 py-2 text-sm`}),(0,P.jsx)(T,{ton:`error`,children:`SIRET invalide : 14 chiffres attendus.`})]})]}),(0,P.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,P.jsx)(N,{titre:`Toast / flag — transitoire, événementiel`,children:`Déclenché par une action (sauvegarde, envoi), empilable, auto-dismiss. Seul message à porter une ombre (niveau overlay). Aperçu visuel.`}),(0,P.jsxs)(`div`,{className:`flex flex-col items-end gap-3`,children:[(0,P.jsx)(b,{ton:`success`,titre:`Bilan envoyé`,onDismiss:()=>{},children:`Votre bilan 2025 a bien été transmis.`}),(0,P.jsx)(b,{ton:`error`,titre:`Échec de l'envoi`,onDismiss:()=>{},children:`Réessayez dans quelques instants.`})]})]})]})})},L={name:`2 · États vides`,render:()=>(0,P.jsx)(M,{num:`2`,titre:`États vides`,intention:`Pattern de première classe : icône illustrative Magicoon + titre + aide + action optionnelle, sur une Surface, sans ombre. Trois intentions distinctes — ne pas confondre « rien encore » et « rien trouvé ».`,children:(0,P.jsxs)(`div`,{className:`grid grid-cols-1 gap-6 lg:grid-cols-3`,children:[(0,P.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,P.jsx)(N,{titre:`Première utilisation`,children:`Aucune donnée parce que le parcours commence : on invite à l'action.`}),(0,P.jsx)(C,{variante:`premiere-utilisation`,icone:(0,P.jsx)(k,{"aria-hidden":!0}),titre:`Aucune filiale pour l'instant`,aide:`Ajoutez votre première filiale pour suivre ses engagements.`,action:(0,P.jsxs)(o,{size:`sm`,children:[(0,P.jsx)(r,{"aria-hidden":!0,className:`size-4`}),` Ajouter une filiale`]})})]}),(0,P.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,P.jsx)(N,{titre:`Aucun résultat de filtre`,children:`Des données existent, mais le filtre courant ne renvoie rien : on propose de réinitialiser, pas de créer.`}),(0,P.jsx)(C,{variante:`aucun-resultat`,icone:(0,P.jsx)(d,{"aria-hidden":!0}),titre:`Aucun engagement ne correspond`,aide:`Aucun résultat pour ces filtres. Élargissez la recherche.`,action:(0,P.jsx)(o,{size:`sm`,variant:`outline`,children:`Réinitialiser les filtres`})})]}),(0,P.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,P.jsx)(N,{titre:`À venir (coming-soon)`,children:`La fonctionnalité n'est pas encore disponible : pas d'action, juste une attente cadrée. Cas Club / Événements / Actualités / Référentiel.`}),(0,P.jsx)(C,{variante:`a-venir`,icone:(0,P.jsx)(p,{"aria-hidden":!0}),titre:`Le Club arrive bientôt`,aide:`Cet espace est en préparation. Revenez prochainement.`})]})]})})},R={name:`3 · États de chargement`,render:()=>(0,P.jsx)(M,{num:`3`,titre:`États de chargement`,intention:`Trois moyens, un par contexte. Skeleton pour les zones de contenu (mime la mise en page, jamais de layout-shift). Spinner pour une action. Barre de progression quand l'avancement est déterminé.`,children:(0,P.jsxs)(`div`,{className:`grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3`,children:[(0,P.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,P.jsx)(N,{titre:`Skeleton — zone de contenu`,children:`Reproduit la silhouette du contenu à venir. Préféré pour les cartes, listes, tableaux : pas de saut de mise en page à l'arrivée.`}),(0,P.jsx)(v,{titre:(0,P.jsx)(w,{style:{height:16,width:140}}),children:(0,P.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,P.jsx)(w,{style:{height:12,width:`90%`}}),(0,P.jsx)(w,{style:{height:12,width:`75%`}}),(0,P.jsx)(w,{style:{height:12,width:`60%`}})]})})]}),(0,P.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,P.jsx)(N,{titre:`Spinner — action`,children:`Indéterminé, attaché à une action ou un bouton (soumission, envoi). Pas pour remplir une page entière.`}),(0,P.jsxs)(m,{className:`flex items-center gap-4`,children:[(0,P.jsx)(E,{}),(0,P.jsxs)(o,{size:`sm`,disabled:!0,className:`gap-2`,children:[(0,P.jsx)(E,{size:16}),` Envoi en cours…`]})]})]}),(0,P.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,P.jsx)(N,{titre:`Barre de progression — déterminé`,children:`Quand l'avancement est connu (téléversement, étape n/N). Préférée au spinner dès qu'un pourcentage existe.`}),(0,P.jsxs)(m,{className:`flex flex-col gap-3`,children:[(0,P.jsx)(y,{valeur:64}),(0,P.jsx)(`span`,{className:`text-sm text-(--color-dsfr-text-mention-grey)`,children:`Téléversement — 64 %`})]})]})]})})},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: '1 · Messagerie graduée',
  render: () => <Bloc num="1" titre="Messagerie graduée par portée" intention="Un message se classe d'abord par sa portée (page / section / inline / toast), pas par son ton. Le ton (info / succès / alerte / erreur) est orthogonal. Tous peignent avec des rôles DSFR tokenisés ; seul le toast porte une élévation (niveau overlay).">
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
        {/* Bannière — portée page/système */}
        <div className="flex flex-col gap-3">
          <Annotation titre="Bannière — portée page / système">
            Pleine largeur, en tête de zone de contenu. Persistante (publication
            en attente, mode dégradé). Fond teinté du ton.
          </Annotation>
          <Banniere ton="warning" titre="Fiche entreprise non publiée" actions={<Button size="sm" variant="outline">
                Publier la fiche
              </Button>} onDismiss={() => {}}>
            Vos modifications ne sont visibles qu'en interne tant que la fiche
            n'est pas publiée.
          </Banniere>
        </div>

        {/* Message de section */}
        <div className="flex flex-col gap-3">
          <Annotation titre="Message de section — au-dessus d'une zone">
            Posé dans une surface, au-dessus de la zone concernée. Filet
            d'accent à gauche, surface neutre. Persistant tant que l'état dure.
          </Annotation>
          <SurfaceSections>
            <HairlineSection>
              <MessageSection ton="info" titre="Bilan annuel ouvert jusqu'au 30 juin">
                Renseignez vos initiatives avant la clôture pour qu'elles soient
                valorisées.
              </MessageSection>
            </HairlineSection>
            <HairlineSection titre={<span className="font-bold">Initiatives</span>}>
              <span className="text-sm text-(--color-dsfr-text-mention-grey)">
                Le message coiffe la zone qu'il concerne, sans la quitter.
              </span>
            </HairlineSection>
          </SurfaceSections>
        </div>

        {/* Message inline */}
        <div className="flex flex-col gap-3">
          <Annotation titre="Message inline — près d'un champ">
            Compact, sans fond : icône + texte coloré du ton. Validation de
            formulaire, aide locale.
          </Annotation>
          <Surface className="flex flex-col gap-2">
            <label htmlFor="exemple-siret" className="text-sm font-bold text-(--color-dsfr-text-title-grey)">
              SIRET
            </label>
            <input id="exemple-siret" defaultValue="000 000 000" className="rounded-md border border-(--color-dsfr-border-plain-error) px-3 py-2 text-sm" />
            <MessageInline ton="error">
              SIRET invalide : 14 chiffres attendus.
            </MessageInline>
          </Surface>
        </div>

        {/* Toast */}
        <div className="flex flex-col gap-3">
          <Annotation titre="Toast / flag — transitoire, événementiel">
            Déclenché par une action (sauvegarde, envoi), empilable, auto-dismiss.
            Seul message à porter une ombre (niveau overlay). Aperçu visuel.
          </Annotation>
          <div className="flex flex-col items-end gap-3">
            <Toast ton="success" titre="Bilan envoyé" onDismiss={() => {}}>
              Votre bilan 2025 a bien été transmis.
            </Toast>
            <Toast ton="error" titre="Échec de l'envoi" onDismiss={() => {}}>
              Réessayez dans quelques instants.
            </Toast>
          </div>
        </div>
      </div>
    </Bloc>
}`,...I.parameters?.docs?.source},description:{story:`1 — Messagerie graduée par portée (les quatre scopes).`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: '2 · États vides',
  render: () => <Bloc num="2" titre="États vides" intention="Pattern de première classe : icône illustrative Magicoon + titre + aide + action optionnelle, sur une Surface, sans ombre. Trois intentions distinctes — ne pas confondre « rien encore » et « rien trouvé ».">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="flex flex-col gap-3">
          <Annotation titre="Première utilisation">
            Aucune donnée parce que le parcours commence : on invite à l'action.
          </Annotation>
          <EmptyState variante="premiere-utilisation" icone={<InboxEmptyIcon aria-hidden />} titre="Aucune filiale pour l'instant" aide="Ajoutez votre première filiale pour suivre ses engagements." action={<Button size="sm">
                <RiAddLine aria-hidden className="size-4" /> Ajouter une filiale
              </Button>} />
        </div>

        <div className="flex flex-col gap-3">
          <Annotation titre="Aucun résultat de filtre">
            Des données existent, mais le filtre courant ne renvoie rien : on
            propose de réinitialiser, pas de créer.
          </Annotation>
          <EmptyState variante="aucun-resultat" icone={<SearchIcon aria-hidden />} titre="Aucun engagement ne correspond" aide="Aucun résultat pour ces filtres. Élargissez la recherche." action={<Button size="sm" variant="outline">
                Réinitialiser les filtres
              </Button>} />
        </div>

        <div className="flex flex-col gap-3">
          <Annotation titre="À venir (coming-soon)">
            La fonctionnalité n'est pas encore disponible : pas d'action, juste
            une attente cadrée. Cas Club / Événements / Actualités / Référentiel.
          </Annotation>
          <EmptyState variante="a-venir" icone={<RocketIcon aria-hidden />} titre="Le Club arrive bientôt" aide="Cet espace est en préparation. Revenez prochainement." />
        </div>
      </div>
    </Bloc>
}`,...L.parameters?.docs?.source},description:{story:`2 — États vides (les trois variantes).`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: '3 · États de chargement',
  render: () => <Bloc num="3" titre="États de chargement" intention="Trois moyens, un par contexte. Skeleton pour les zones de contenu (mime la mise en page, jamais de layout-shift). Spinner pour une action. Barre de progression quand l'avancement est déterminé.">
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3">
        {/* Skeleton */}
        <div className="flex flex-col gap-3">
          <Annotation titre="Skeleton — zone de contenu">
            Reproduit la silhouette du contenu à venir. Préféré pour les cartes,
            listes, tableaux : pas de saut de mise en page à l'arrivée.
          </Annotation>
          <CardSection titre={<Skeleton style={{
          height: 16,
          width: 140
        }} />}>
            <div className="flex flex-col gap-3">
              <Skeleton style={{
              height: 12,
              width: '90%'
            }} />
              <Skeleton style={{
              height: 12,
              width: '75%'
            }} />
              <Skeleton style={{
              height: 12,
              width: '60%'
            }} />
            </div>
          </CardSection>
        </div>

        {/* Spinner */}
        <div className="flex flex-col gap-3">
          <Annotation titre="Spinner — action">
            Indéterminé, attaché à une action ou un bouton (soumission, envoi).
            Pas pour remplir une page entière.
          </Annotation>
          <Surface className="flex items-center gap-4">
            <Spinner />
            <Button size="sm" disabled className="gap-2">
              <Spinner size={16} /> Envoi en cours…
            </Button>
          </Surface>
        </div>

        {/* Progress */}
        <div className="flex flex-col gap-3">
          <Annotation titre="Barre de progression — déterminé">
            Quand l'avancement est connu (téléversement, étape n/N). Préférée au
            spinner dès qu'un pourcentage existe.
          </Annotation>
          <Surface className="flex flex-col gap-3">
            <ProgressBar valeur={64} />
            <span className="text-sm text-(--color-dsfr-text-mention-grey)">
              Téléversement — 64 %
            </span>
          </Surface>
        </div>
      </div>
    </Bloc>
}`,...R.parameters?.docs?.source},description:{story:`3 — États de chargement (skeleton / spinner / progress).`,...R.parameters?.docs?.description}}},z=[`MessagerieGraduee`,`EtatsVides`,`EtatsChargement`]}))();export{R as EtatsChargement,L as EtatsVides,I as MessagerieGraduee,z as __namedExportsOrder,F as default};