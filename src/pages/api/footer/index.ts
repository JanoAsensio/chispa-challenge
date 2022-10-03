import { NextApiResponse, NextApiRequest } from "next";
import { footer } from "../../../../data";

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<typeof footer>
) {
  return res.status(200).json(footer);
}
