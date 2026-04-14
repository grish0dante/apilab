import{u as s,j as e}from"./entry.client-CLZ2wrcG.js";const o="Objective: To design and develop a system for interacting with three-dimensional objects that provides a user-friendly interface for general users.",a=[],l={title:"Technical Task, Technical Report",lastModifiedTime:"2026-04-14T11:57:18.057Z"},c="pages/techzavd.mdx";function t(i){const n={li:"li",ol:"ol",p:"p",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:`Introduction\r
Purpose: This document describes a web application for viewing, managing, and sharing 3D models directly in the browser without the need for third-party plugins.`}),`
`]}),`
`,e.jsx(n.p,{children:"Objective: To design and develop a system for interacting with three-dimensional objects that provides a user-friendly interface for general users."}),`
`,e.jsxs(n.ol,{start:"2",children:[`
`,e.jsx(n.li,{children:`General Description\r
Subject of Study: The process of developing an application for 3D model visualization.`}),`
`]}),`
`,e.jsx(n.p,{children:"System Actors:"}),`
`,e.jsx(n.p,{children:"Guest: Can register and browse the gallery."}),`
`,e.jsx(n.p,{children:"Registered User: Has access to a personal account, can upload, and delete models."}),`
`,e.jsx(n.p,{children:"User (General Actor): Includes shared functions such as viewing models and logging into the system."}),`
`,e.jsxs(n.ol,{start:"3",children:[`
`,e.jsx(n.li,{children:`Functional Requirements\r
The system must support the following functions:`}),`
`]}),`
`,e.jsx(n.p,{children:"FR-1: Format Support. Capability to work with .GLB, .OBJ, and .STL file types."}),`
`,e.jsx(n.p,{children:"FR-2: Model Uploading. Ability to add files from a local device or select from an existing gallery."}),`
`,e.jsx(n.p,{children:"FR-3: Object Manipulation. Viewing models from different angles: scaling, rotation, and translation (moving)."}),`
`,e.jsx(n.p,{children:"FR-4: Scene Configuration. Ability to toggle a grid, coordinate axes, and change the background color."}),`
`,e.jsx(n.p,{children:"FR-5: Data Management. Integration with the backend to store models and their descriptions in the database."}),`
`,e.jsxs(n.ol,{start:"4",children:[`
`,e.jsx(n.li,{children:`Technology Stack and Architecture\r
the following stack choice is justified in the work:`}),`
`]}),`
`,e.jsx(n.p,{children:"Frontend: Vue.js (chosen for its reactivity and ease of integration)."}),`
`,e.jsx(n.p,{children:"3D Engine: Three.js (chosen as a high-level library over WebGL, simplifying work with cameras, lighting, and meshes)."}),`
`,e.jsx(n.p,{children:"Backend: Node.js and Express.js for request handling and authentication logic."}),`
`,e.jsx(n.p,{children:"Database: MongoDB (used for storing data regarding models and users)."}),`
`,e.jsxs(n.ol,{start:"5",children:[`
`,e.jsx(n.li,{children:`Design (UML)\r
The following diagrams are used to visualize the system logic:`}),`
`]}),`
`,e.jsx(n.p,{children:'Use Case Diagram: Describes the interaction of actors with functions such as "Add Model," "Registration," "Browse Gallery," etc.'}),`
`,e.jsx(n.p,{children:"Activity Diagram: Used for modeling business processes."}),`
`,e.jsx(n.p,{children:"Sequence Diagram: To describe the dynamic interaction of objects over time."}),`
`,e.jsxs(n.ol,{start:"6",children:[`
`,e.jsx(n.li,{children:`Non-Functional Requirements\r
Validation: Checking file types and sizes during the upload process.`}),`
`]}),`
`,e.jsx(n.p,{children:"Usability: An intuitively understandable interface for the end-user."}),`
`,e.jsx(n.p,{children:"Optimization: Automatic scaling of the model to fit the scene dimensions."}),`
`,e.jsx(n.p,{children:"Reliability: Handling server errors and incorrect data input."})]})}function d(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{c as __filepath,d as default,o as excerpt,l as frontmatter,a as tableOfContents};
//# sourceMappingURL=techzavd-CUcnAAFf.js.map
