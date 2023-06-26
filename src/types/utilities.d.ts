type Nullable<T> = T | null;

type Nullish = null | undefined;

/** Type can be undefined or null */
type Nullishable<T> = T | Nullish;

type Dictionary<T = unknown> = { [key: string]: T };
