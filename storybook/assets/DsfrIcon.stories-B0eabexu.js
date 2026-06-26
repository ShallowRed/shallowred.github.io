import{i as e}from"./preload-helper-DaCzexP6.js";import{u as t}from"./iframe-BeshMaXC.js";import{b as n,c as r,ft as i,i as a,s as o,t as s,yt as c}from"./ri-CHURB-Na.js";var l,u,d=e((()=>{l=t(),u=({icon:e,size:t=`1.5rem`,className:n,style:r,"aria-hidden":i=!0,...a})=>(0,l.jsx)(e,{"aria-hidden":i,className:n,style:{display:`inline-block`,flex:`0 0 auto`,width:t,height:t,verticalAlign:`calc((0.75em - ${t}) * 0.5)`,fill:`currentColor`,...r},...a})})),f,p=e((()=>{c(),f={"fr-icon-account-fill":s,"fr-icon-arrow-down-line":a,"fr-icon-arrow-left-line":o,"fr-icon-arrow-right-line":r,"fr-icon-arrow-right-s-last-line":i,"fr-icon-checkbox-circle-fill":n}})),m,h,g,_,v,y,b,x,S;e((()=>{m=t(),c(),d(),p(),h={title:`Design system/Briques/Partagé/DsfrIcon`,component:u,tags:[`autodocs`],parameters:{docs:{description:{component:["Composant transitoire pour la migration des classes `fr-icon-*` du DSFR",`vers des composants Remix Icon. Reproduit iso-pixel le sizing`,"(`--icon-size`), le `vertical-align` magique et le `currentColor` du",`DSFR. Voir LES-262.`].join(`
`)}}},argTypes:{size:{control:`text`},icon:{control:!1}}},g={args:{icon:r}},_={render:e=>(0,m.jsxs)(`p`,{style:{fontSize:`1rem`,margin:0},children:[`Un lien avec `,(0,m.jsx)(u,{...e}),` une icône inline pour vérifier le vertical-align par rapport à la baseline du texte.`]}),args:{icon:r}},v={render:()=>(0,m.jsxs)(`div`,{style:{display:`flex`,gap:`2rem`,alignItems:`baseline`,fontSize:`1rem`},children:[(0,m.jsxs)(`span`,{children:[`défaut `,(0,m.jsx)(u,{icon:r})]}),(0,m.jsxs)(`span`,{children:[`1.25rem `,(0,m.jsx)(u,{icon:r,size:`1.25rem`})]}),(0,m.jsxs)(`span`,{children:[`2rem `,(0,m.jsx)(u,{icon:r,size:`2rem`})]}),(0,m.jsxs)(`span`,{children:[`5rem `,(0,m.jsx)(u,{icon:r,size:`5rem`})]})]})},y={render:()=>(0,m.jsxs)(`div`,{style:{display:`flex`,gap:`1.5rem`,alignItems:`baseline`},children:[(0,m.jsxs)(`span`,{style:{color:`var(--blue-france-sun-113, #000091)`},children:[`Bleu France `,(0,m.jsx)(u,{icon:r})]}),(0,m.jsxs)(`span`,{style:{color:`var(--red-marianne-main-472, #e1000f)`},children:[`Rouge Marianne `,(0,m.jsx)(u,{icon:r})]}),(0,m.jsxs)(`span`,{style:{color:`var(--green-emeraude-main-632, #00a95f)`},children:[`Vert Émeraude `,(0,m.jsx)(u,{icon:n})]})]})},b={render:()=>(0,m.jsxs)(`table`,{style:{borderCollapse:`collapse`,fontFamily:`system-ui, sans-serif`},children:[(0,m.jsx)(`thead`,{children:(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`th`,{style:x,children:`Original DSFR`}),(0,m.jsx)(`th`,{style:x,children:`Iso-pixel`}),(0,m.jsx)(`th`,{style:x,children:`Classe DSFR`}),(0,m.jsx)(`th`,{style:x,children:`Composant Remix`})]})}),(0,m.jsx)(`tbody`,{children:[{className:`fr-icon-account-fill`,Icon:s},{className:`fr-icon-arrow-down-line`,Icon:a},{className:`fr-icon-arrow-left-line`,Icon:o},{className:`fr-icon-arrow-right-line`,Icon:r},{className:`fr-icon-arrow-right-s-last-line`,Icon:i},{className:`fr-icon-checkbox-circle-fill`,Icon:n}].map(({className:e,Icon:t})=>(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{style:x,children:(0,m.jsx)(`i`,{className:e,"aria-hidden":`true`})}),(0,m.jsx)(`td`,{style:x,children:(0,m.jsx)(u,{icon:t})}),(0,m.jsx)(`td`,{style:{...x,fontFamily:`monospace`},children:e}),(0,m.jsx)(`td`,{style:{...x,fontFamily:`monospace`},children:f[e]?t.name||`Ri…`:`—`})]},e))})]})},x={border:`1px solid #e5e7eb`,padding:`0.5rem 0.75rem`,textAlign:`left`},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    icon: RiArrowRightLine
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <p style={{
    fontSize: '1rem',
    margin: 0
  }}>
      Un lien avec <DsfrIcon {...args} /> une icône inline pour vérifier le
      vertical-align par rapport à la baseline du texte.
    </p>,
  args: {
    icon: RiArrowRightLine
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '2rem',
    alignItems: 'baseline',
    fontSize: '1rem'
  }}>
      <span>
        défaut <DsfrIcon icon={RiArrowRightLine} />
      </span>
      <span>
        1.25rem <DsfrIcon icon={RiArrowRightLine} size="1.25rem" />
      </span>
      <span>
        2rem <DsfrIcon icon={RiArrowRightLine} size="2rem" />
      </span>
      <span>
        5rem <DsfrIcon icon={RiArrowRightLine} size="5rem" />
      </span>
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'baseline'
  }}>
      <span style={{
      color: 'var(--blue-france-sun-113, #000091)'
    }}>
        Bleu France <DsfrIcon icon={RiArrowRightLine} />
      </span>
      <span style={{
      color: 'var(--red-marianne-main-472, #e1000f)'
    }}>
        Rouge Marianne <DsfrIcon icon={RiArrowRightLine} />
      </span>
      <span style={{
      color: 'var(--green-emeraude-main-632, #00a95f)'
    }}>
        Vert Émeraude <DsfrIcon icon={RiCheckboxCircleFill} />
      </span>
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ICONS = [{
      className: 'fr-icon-account-fill',
      Icon: RiAccountCircleFill
    }, {
      className: 'fr-icon-arrow-down-line',
      Icon: RiArrowDownLine
    }, {
      className: 'fr-icon-arrow-left-line',
      Icon: RiArrowLeftLine
    }, {
      className: 'fr-icon-arrow-right-line',
      Icon: RiArrowRightLine
    }, {
      className: 'fr-icon-arrow-right-s-last-line',
      Icon: RiSkipRightLine
    }, {
      className: 'fr-icon-checkbox-circle-fill',
      Icon: RiCheckboxCircleFill
    }] as const;
    return <table style={{
      borderCollapse: 'collapse',
      fontFamily: 'system-ui, sans-serif'
    }}>
        <thead>
          <tr>
            <th style={cellStyle}>Original DSFR</th>
            <th style={cellStyle}>Iso-pixel</th>
            <th style={cellStyle}>Classe DSFR</th>
            <th style={cellStyle}>Composant Remix</th>
          </tr>
        </thead>
        <tbody>
          {ICONS.map(({
          className,
          Icon
        }) => <tr key={className}>
              <td style={cellStyle}>
                <i className={className} aria-hidden="true" />
              </td>
              <td style={cellStyle}>
                <DsfrIcon icon={Icon} />
              </td>
              <td style={{
            ...cellStyle,
            fontFamily: 'monospace'
          }}>
                {className}
              </td>
              <td style={{
            ...cellStyle,
            fontFamily: 'monospace'
          }}>
                {DSFR_ICON_MAPPING[className] ? Icon.name || 'Ri…' : '—'}
              </td>
            </tr>)}
        </tbody>
      </table>;
  }
}`,...b.parameters?.docs?.source},description:{story:"Mapping `fr-icon-*` → composant Remix Icon utilisé pour la migration.",...b.parameters?.docs?.description}}},S=[`Defaut`,`DansUnTexte`,`Tailles`,`Couleur`,`Mapping`]}))();export{y as Couleur,_ as DansUnTexte,g as Defaut,b as Mapping,v as Tailles,S as __namedExportsOrder,h as default};