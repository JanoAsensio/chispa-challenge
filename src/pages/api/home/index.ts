import { NextApiResponse, NextApiRequest } from "next";
import { home } from "../../../../data";

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<typeof home>
) {
  return res.status(200).json(home);
}
