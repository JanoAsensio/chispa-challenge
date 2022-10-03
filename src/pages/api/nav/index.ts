import { NextApiResponse, NextApiRequest } from "next";
import { nav } from "../../../../data";

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<typeof nav>
) {

  return res.status(200).json(nav);
}
