import type { TypedPocketBase } from "./pocketbase-typegen";

declare global {
  declare namespace App {
    interface Locals {
      pb: TypedPocketBase;
    }
  }
}
