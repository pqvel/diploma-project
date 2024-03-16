import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../lib/db";
import { Prisma } from "@prisma/client";
import { hashPassword } from "../../../utils/hashPassword";

const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    await createUserHandler(req, res);
  } else {
    return res.status(405).json({ message: "Method Not allowed" });
  }
};

export default handle;

// function to create user in our database
const createUserHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  let errors = [];
  const { name, email, password } = req.body;

  if (password.length < 6) {
    errors.push("password length should be more than 6 characters");

    return res.status(400).json({ errors });
  }
  try {
    const user = await db.user.create({
      data: { ...req.body, password: hashPassword(req.body.password) },
    });
    return res.status(201).json({ user });
  } catch (error: unknown) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return res.status(400).json({ message: error.message });
      }
      return res.status(400).json({ message: error.message });
    }
  }
};
