import { lazy } from "react";

export const LazyDoctorForViewPage = lazy(async () => await import("./DoctorForViewPage"));
