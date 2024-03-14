import type { NextApiRequest, NextApiResponse } from "next";
import { Chapter } from "@prisma/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "POST") {
      return res.status(500).json({ message: "Method not allowed" });
    }

    const { content } = req.body;
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default handler;
