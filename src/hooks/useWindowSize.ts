import { useState } from "react";
import { useIsomorphicEffect } from "./useIsomorphicEffect";

export type DeepNullable<T> = {
  [K in keyof T]: DeepNullable<T[K]> | null;
};

export type ListenerOptions =
  | boolean
  | {
      capture?: boolean;
      once?: boolean;
      passive?: boolean;
      signal?: AbortSignal;
    };

export type UnknownFunction = (...args: unknown[]) => unknown;
export type ExcludeFunction<T> = Exclude<T, UnknownFunction>;

type WindowDimensions = DeepNullable<Pick<Window, "innerHeight" | "innerWidth" | "outerHeight" | "outerWidth">>;

const nullDimensions: WindowDimensions = {
  innerHeight: null,
  innerWidth: null,
  outerHeight: null,
  outerWidth: null,
};

function getDimensions(): WindowDimensions {
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth,
  };
}

/**
 * useWindowSize hook
 * A hook that provides information of the dimensions of the window
 *
 * @returns Dimensions of the window
 * @see https://react-hooks.org/docs/useWindowSize
 */
export function useWindowSize(): WindowDimensions {
  const [windowSize, setWindowSize] = useState<WindowDimensions>(() => {
    if (typeof window === "undefined") {
      return nullDimensions;
    } else {
      return getDimensions();
    }
  });

  function onResize() {
    setWindowSize(getDimensions());
  }

  // set resize handler once on mount and clean before unmount
  useIsomorphicEffect(() => {
    if (typeof window === "undefined") {
      // @eslint-disable-next-line @typescript-eslint/no-empty-function
      return () => {};
    } else {
      window.addEventListener("resize", onResize);

      return () => {
        window.removeEventListener("resize", onResize);
      };
    }
  }, []);

  return windowSize;
}

