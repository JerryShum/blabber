import { prisma } from "@/db";
import { Blurb } from "@prisma/client";

export async function getBlurbsID(blurbID: string): Promise<Blurb | null> {
  const blurb = await prisma.$transaction(async (prisma) => {
    // Get the blurb
    const blurb = await prisma.blurb.findUnique({
      where: { id: parseInt(blurbID) },
      include: {
        author: { select: { name: true, email: true, image: true } },
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

export async function getTop4Blurbs(): Promise<Blurb[]> {
  const blurbs = await prisma.blurb.findMany({
    include: {
      author: true,
    },
    orderBy: { views: "desc" },
    take: 4,
  });

  return blurbs;
}
