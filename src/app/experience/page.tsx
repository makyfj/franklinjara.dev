import { Briefcase } from "lucide-react"
import { Metadata } from "next"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "src/components/ui/card"

export const metadata: Metadata = {
  title: "Franklin Jara | Experience",
}

const Experience = () => {
  return (
    <main className="flex flex-col gap-4 md:gap-8">
      <h1 className="custom-h1 justify-center flex items-center gap-2">
        Experience
        <Briefcase className="w-7 h-7 md:w-10 md:h-10" />
      </h1>
      <p className="custom-p md:max-w-2xl md:mx-auto mx-4">
        Driven by my passion for Software Engineering and a thirst for
        knowledge, I am constantly challenging myself to expand my abilities by
        delving into new technologies and concepts beyond the scope of my work
        through personal projects and self-learning. Alongside my professional
        pursuits, I enjoy listening to techno music and staying active through
        regular workouts.
      </p>
      <Card className="w-[360px] md:w-[650px] mx-auto p-2 flex flex-col gap-2">
        <CardHeader className="text-center custom-h2">
          Software Engineer
        </CardHeader>
        <CardDescription className="text-center">
          January 2022 - Present
        </CardDescription>
        <CardContent>
          <h4 className="custom-h4 font-bold">Cherry Hill Programs</h4>
          <p className="custom-p">
            As a Software Engineer at Cherry Hill Programs, I am tasked with the
            development and integration of several web applications utilizing
            cutting-edge technologies, including React, GraphQL, Node, NextJS,
            DynamoDB, AWS, TypeScript, TailwindCSS, Postgresql, Prisma, tRPC,
            AuthJS and more. My responsibilities include ensuring the seamless
            operation of these apps, collaborating with cross-functional teams
            to ensure optimal user experience, and staying up-to-date on
            emerging trends and best practices in the field.
          </p>
        </CardContent>
      </Card>
      <Card className="w-[360px] md:w-[650px] mx-auto p-2 flex flex-col gap-2">
        <CardHeader className="text-center custom-h2">
          Graduate Teaching Assistant
        </CardHeader>
        <CardDescription className="text-center">
          August 2021 - December 2021
        </CardDescription>
        <CardContent>
          <h4 className="custom-h4 font-bold">Adelphi University</h4>
          <p className="custom-p">
            In my role as an Assistant for the Computer Science Department, I
            specialize in teaching the fundamentals of programming using Python.
            My responsibilities include developing and delivering engaging
            lesson plans, providing individualized support to students, and
            fostering a positive and inclusive learning environment. I am
            passionate about empowering the next generation of programmers and
            am committed to equipping them with the skills and knowledge they
            need to succeed in the field.
          </p>
        </CardContent>
      </Card>
    </main>
  )
}

export default Experience
