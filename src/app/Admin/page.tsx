import {prisma } from "@/db/client"

export default async function Admin() {

  const surveys = await prisma.survey.findMany({})

  return (
    <div>
      <h1>Admin</h1>
      <ul>
        {surveys.map((survey) => (
          <li key={survey.id}>
            {JSON.stringify(survey)}
          </li>
        ))}
      </ul>
    </div>
  )
}