import { prisma } from "@/db";
import { Blurb } from "@prisma/client";

export async function getBlurbsID(blurbID: string): Promise<Blurb | null> {
  return await prisma.blurb.findUnique({
    where: { id: parseInt(blurbID) },
    include: {
      author: { select: { name: true, email: true } },
    },
  });
}
