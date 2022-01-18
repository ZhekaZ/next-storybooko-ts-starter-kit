export type InferActionTypes<T> = T extends Record<string, infer U> ? U : never;
