import{u as t,j as s}from"./entry.client-CVuyubSN.js";const h="This section describes how to access the protected resources of the Financial System API.",a=[{depth:2,text:"SDK Usage Example",id:"sdk-usage-example"}],l={title:"Authorization",lastModifiedTime:"2026-04-14T12:26:37.000Z"},o="pages/authorization.mdx";function n(i){const e={code:"code",h2:"h2",p:"p",pre:"pre",span:"span",strong:"strong",...t(),...i.components};return s.jsxs(s.Fragment,{children:[s.jsx(e.p,{children:"This section describes how to access the protected resources of the Financial System API."}),`
`,s.jsxs(e.p,{children:[`##Authorization Method\r
The API utilizes the standard `,s.jsx(e.strong,{children:"Bearer Token (JWT)"})," protocol. This means that for every request to the server, you must provide a specific token in the HTTP request header."]}),`
`,s.jsxs(e.p,{children:[`###How It Works\r
All requests must include the `,s.jsx(e.code,{inline:"true",children:"Authorization"})," header in the following format:"]}),`
`,s.jsx(e.p,{children:s.jsx(e.code,{inline:"true",children:"Authorization: Bearer <your_token>"})}),`
`,s.jsx(e.p,{children:`##Obtaining a Token\r
To gain access, follow these steps:`}),`
`,s.jsx(e.p,{children:"1.Authenticate through your organization's internal system."}),`
`,s.jsx(e.p,{children:"2.Copy the provided JWT token."}),`
`,s.jsx(e.p,{children:"3.Add it to your SDK configuration or HTTP client settings."}),`
`,s.jsx(e.p,{children:`##Response Status Codes\r
When handling authorization, you may encounter the following errors:`}),`
`,s.jsx(e.p,{children:"Status Code	Description	Reason"}),`
`,s.jsxs(e.p,{children:[`| :--- | :--- | :--- |\r
| `,s.jsx(e.strong,{children:"401 Unauthorized"}),` |	Unauthorized|	The token is missing, expired, or invalid.|\r
| `,s.jsx(e.strong,{children:"403 Forbidden"})," |	Forbidden|	The token is valid, but you do not have permission to access this specific resource.|"]}),`
`,s.jsx(e.h2,{id:"sdk-usage-example",children:"SDK Usage Example"}),`
`,s.jsxs(e.p,{children:["If you are using the generated ",s.jsx(e.strong,{children:"TypeScript"})," SDK, the authorization setup looks like this:"]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{children:s.jsxs(e.code,{className:"language-typescript shiki shiki-themes github-light github-dark",inline:"false",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"import"}),s.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" { Configuration } "}),s.jsx(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"from"}),s.jsx(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:' "./sdk-client"'}),s.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),`
`,s.jsx(e.span,{className:"line"}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"const"}),s.jsx(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" apiConfig"}),s.jsx(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" ="}),s.jsx(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" new"}),s.jsx(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" Configuration"}),s.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"({"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  accessToken: "}),s.jsx(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"your_jwt_token_here"'}),s.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  basePath: "}),s.jsx(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"https://api.finance-app.local/v1"'})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"});"})})]})})})]})}function d(i={}){const{wrapper:e}={...t(),...i.components};return e?s.jsx(e,{...i,children:s.jsx(n,{...i})}):n(i)}export{o as __filepath,d as default,h as excerpt,l as frontmatter,a as tableOfContents};
//# sourceMappingURL=authorization-CbfLA_hn.js.map
