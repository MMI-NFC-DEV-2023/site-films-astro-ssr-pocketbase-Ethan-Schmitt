import type { TypedPocketBase } from "./pocketbase-typegen";

declare import type { TypedPocketBase } from "./pocketbase-typegen";

declare global {
  declare namespace App {
    interface Locals {
      pb: TypedPocketBase;
    }
  }
}global {
  declare namespace App {
    interface Locals {
      pb: TypedPocketBase;
    }
  }
}