import { lazy } from "react";

export const LazyDoctorPage = lazy(async () => await import("./DoctorPage"));
