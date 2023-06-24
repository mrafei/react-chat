import { FunctionComponent, PropsWithChildren } from "react";

export type HOCFunctionalComponent<T = Dictionary> = FunctionComponent<
  PropsWithChildren<T>
>;
