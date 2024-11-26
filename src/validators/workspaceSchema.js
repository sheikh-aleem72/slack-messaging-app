import { z } from "zod";

export const workspaceSchema = z.object({
  name: z.string().min(1),
});
