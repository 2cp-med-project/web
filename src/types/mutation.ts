export type MutationCallback<T = unknown, E = Error> = {
  onSuccess?: (data: T) => void;
  onError?: (e: E) => void;
};

export type OptimisticMutationCallback<
  T = unknown,
  E = Error,
> = MutationCallback<T, E> & {
  onMutate?: () => void;
};
