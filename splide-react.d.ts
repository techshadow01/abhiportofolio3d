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
