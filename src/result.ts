import type { Result } from 'neverthrow';

export { ok as Ok, err as Err, Result } from 'neverthrow';

export type AppResult<T> = Result<T, Error>;
