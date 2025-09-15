/// <reference types="vite/client" />

declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  export = classes;
}

declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}
