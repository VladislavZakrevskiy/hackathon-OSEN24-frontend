import { lazy } from "react";

export const LazyClientForViewPage = lazy(async () => await import("./ClientForViewPage"));
