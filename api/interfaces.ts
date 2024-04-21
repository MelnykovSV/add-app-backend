export interface IExtendedRequest extends Express.Request {
  query: Record<string, string>;
  body: Record<string, string>;
  params: Record<string, string>;
}

export interface IError extends Error {
  status: number;
}

export type Ctrl = (req: Express.Request, res: Express.Response) => void;
