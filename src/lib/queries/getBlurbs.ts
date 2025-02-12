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

//! Explore Page:
export async function getNewestBlurbs(): Promise<Blurb[]> {
  const blurbs = await prisma.blurb.findMany({
    include: {
      author: true,
    },
    orderBy: { createdAt: "desc" },
    take: 6,
  });

  return blurbs;
}

export async function getTrendingBlurbs(): Promise<Blurb[]> {
  const now = new Date();
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1); // Get the date 24 hours ago

  const blurbs = await prisma.blurb.findMany({
    where: {
      createdAt: {
        gte: yesterday, // Filter for blurbs created in the last 24 hours
      },
    },
    include: {
      author: true,
    },
    orderBy: {
      views: "desc", // Order by views in descending order
    },
    take: 6, // Adjust the number of blurbs you want to fetch
  });

  return blurbs;
}