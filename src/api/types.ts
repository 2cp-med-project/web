export type ApiResponse<T, E extends Error = Error> =
  | {
      data: T;
      error: null;
    }
  | {
      data: null;
      error: E;
    };

export function apiRequestHadError<T, E extends Error>(
  res: ApiResponse<T, E>,
): res is { data: null; error: E } {
  return res.error !== null;
}
