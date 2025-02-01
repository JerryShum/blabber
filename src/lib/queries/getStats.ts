import { prisma } from "@/db";

export async function getStats(): Promise<string[]> {
  // function implementation here
  const userCount = await prisma.user.count();
  const blurbCount = await prisma.blurb.count();
  const topContributor = await prisma.user.findFirst({
    orderBy: { blurbs: { _count: "desc" } },
  });

  return [
    userCount.toString(),
    blurbCount.toString(),
    topContributor?.name ?? "No top contributor",
  ];
}
