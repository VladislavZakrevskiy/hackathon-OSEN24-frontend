import { lazy } from "react";

export const LazyClientPage = lazy(async () => await import("./ClientPage"));
