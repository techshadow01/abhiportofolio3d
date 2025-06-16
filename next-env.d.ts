/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.
declare module "@splidejs/react-splide" {
  import type { FC } from "react";
  import type {
    SplideProps as BaseSplideProps,
    SplideSlideProps as BaseSplideSlideProps,
  } from "@splidejs/react-splide/dist/types";

  export const Splide: FC<BaseSplideProps>;
  export const SplideSlide: FC<BaseSplideSlideProps>;
  export const SplideTrack: FC<Record<string, unknown>>;
}
