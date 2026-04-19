declare module "*.svelte" {
  import type { Component } from "svelte";

  const SvelteComponent: Component<any, any, any>;
  export default SvelteComponent;
}
