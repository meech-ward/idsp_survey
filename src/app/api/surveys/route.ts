import { prisma } from "@/db/client";

export async function POST(request: Request) {
  const { questions, comments, project, userId, role } = await request.json();

  const exsists = await prisma.survey.findFirst({
    where: {
      projectId: parseInt(project),
      user_id: userId,
    },
  });

  if (exsists) {
    return new Response(JSON.stringify({ error: "already exists" }), {
      headers: { "content-type": "application/json" },
    });
  }

  const result = await prisma.survey.create({
    data: {
      projectId: parseInt(project),

      // questions
      question1: questions[0].answer,
      question2: questions[1].answer,
      question3: questions[2].answer,
      question4: questions[3].answer,
      // comments
      comments: comments,
      user_id: userId,
      role: role,
    },
  });
  return new Response(JSON.stringify(result), {
    headers: { "content-type": "application/json" },
  });
}
