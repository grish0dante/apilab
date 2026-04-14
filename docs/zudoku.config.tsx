import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  basePath: "/apilab",
  site: {
    logo: {
      src: { light: "/logo-light.svg", dark: "/logo-dark.svg" },
      alt: "Zudoku",
      width: "130px",
    },
  },
  
  navigation: [
    {
      type: "category",
      label: "Documentation",
      items: [
        {
          type: "category",
          label: "Getting Started",
          icon: "sparkles",
          items: [
            "/introduction",
            {
              type: "link",
              icon: "folder-cog",
              label: "API Reference",
              to: "/api",
            },
            "/about",
            "/installation",
            "/authorization",
            
          ],
        },
        
      ],
    },
    {
      type: "link",
      to: "/api",
      label: "API Reference",
    },
    {
      type: "link",
      to: "/about",
      label: "Author",
    },
    {
      type: "link",
      to: "/installation",
      label: "Installation",
    },
    {
      type: "link",
      to: "/authorization",
      label: "Authorization",
    },
  ],
  
  redirects: [{ from: "/", to: "/introduction" }],
  apis: [
    {
      type: "file",
      input: "./apis/openapi.yaml",
      path: "/api",
    },
  ],
};

export default config;
