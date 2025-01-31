import { prisma } from "@/db";
import { Blurb } from "@prisma/client";

export async function getBlurbsID(blurbID: string): Promise<Blurb | null> {
  const blurb = await prisma.$transaction(async (prisma) => {
    // Get the blurb
    const blurb = await prisma.blurb.findUnique({
      where: { id: parseInt(blurbID) },
      include: {
        author: { select: { name: true, email: true } },
      },
    });

    if (!blurb) return null;

    // Increment the view count
    await prisma.blurb.update({
      where: { id: parseInt(blurbID) },
      data: { views: { increment: 1 } },
    });

    return blurb;
  });

  return blurb;
}
