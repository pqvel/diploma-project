// import { NextApiRequest, NextApiResponse } from "next";
// import bcrypt from "bcryptjs";
// import { db } from "@/db";

// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   if (req.method !== "POST") {
//     return res.status(405).end();
//   }

//   const { name, email, password } = req.body;

//   const hashedPassword = bcrypt.hashSync(password, 10);

//   try {
//     const user = await db.user.create({
//       data: {
//         name,
//         email,
//         password: hashedPassword,
//       },
//     });

//     res.status(201).json(user);
//   } catch (error) {
//     res.status(500).json({ error: "User registration failed" });
//   }
// };

// export { handler as POST };

export async function GET(request) {
  const requestHeaders = new Headers(request.headers);
}
