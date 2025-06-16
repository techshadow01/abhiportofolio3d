/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.
declare module "@splidejs/react-splide" {
  import { FC, ReactNode } from "react";
  import {
    Options as SplideOptions,
    Splide as SplideInstance,
  } from "@splidejs/splide";

  export interface SplideProps {
    options?: SplideOptions;
    hasTrack?: boolean;
    children?: ReactNode;
    // Add other props if needed, like extensions or ref handling
  }

  export interface SplideSlideProps {
    children?: ReactNode;
    className?: string;
  }

  export interface SplideTrackProps {
    children?: ReactNode;
    className?: string;
  }

  export const Splide: FC<SplideProps>;
  export const SplideSlide: FC<SplideSlideProps>;
  export const SplideTrack: FC<SplideTrackProps>;
}
