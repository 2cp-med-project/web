export type MutationCallback<T = unknown, E = Error> = {
  onSuccess?: (data: T) => void;
  onError?: (e: E) => void;
};
