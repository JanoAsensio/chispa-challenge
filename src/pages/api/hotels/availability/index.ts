import { NextApiResponse, NextApiRequest } from "next";
import { hotels } from "../../../../../data";

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<typeof hotels>
) {
  return res.status(200).json(hotels);
}
