import prisma from "../lib/prisma";

export async function createContext({ _req, _res }) {
	return { prisma };
}
