"use client";
import React, { useState, useContext } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { RoleContext } from "@/app/RoleContext";

interface Question {
  id: number;
  text: string;
  answer: number;
}

const SurveyForm: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { userId, isLoading, role } = useContext(RoleContext);

  const project = searchParams.get("project");

  const [questions, setQuestions] = useState<Question[]>([
    {
      id: 1,
      text: "How satisfied were you with the overall presentation of the web development project?",
      answer: 1,
    },
    {
      id: 2,
      text: "Did the students effectively communicate the purpose and goals of their project?",
      answer: 1,
    },
    {
      id: 3,
      text: "How well did they demonstrate their knowledge of the subject matter?",
      answer: 1,
    },
    {
      id: 4,
      text: "How likely are you to recommend this project to others?",
      answer: 1,
    },
  ]);
  const [comments, setComments] = useState<string>("");

  const goBack = () => {
    router.back();
  }

  const updateAnswer = (index: number, value: number) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].answer = value;
    setQuestions(updatedQuestions);
  };

  const renderOptions = (index: number) => {
    return [1, 2, 3, 4, 5].map((value) => (
      <button
        type="button"
        key={value}
        className={`w-1/5 text-center py-2 ${
          questions[index].answer === value
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-gray-700"
        }`}
        onClick={() => updateAnswer(index, value)}
      >
        {value}
      </button>
    ));
  };

  const renderQuestions = () => {
    return questions.map((question, index) => (
      <div key={question.id} className="mb-5">
        <p className="block mb-2 text-gray-700 text-sm font-medium">
          {question.text}
        </p>
        <div className="flex border border-gray-300 rounded-md">
          {renderOptions(index)}
        </div>
      </div>
    ));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ questions, comments, project });
    const result = await fetch("/api/surveys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ questions, comments, project, userId, role }),
    });
    const data = await result.json();
    if (data.error) {
      alert(data.error);
      return
    } 
    if (result.ok) {
      router.push("/Success");
    }
  };

  if (isLoading) {
    return <></>
  }

  if (!project) {
    router.push("/");
    return <></>
  }

  if (!userId || !role) {
    router.push("/RoleSelect");
    return <></>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>

        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <div className="h-14 w-14 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl font-medium hover:cursor-pointer" onClick={goBack}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path

                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
              </div>
              <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                <h2 className="leading-relaxed">Survey</h2>
                <p className="text-sm text-gray-500 font-normal leading-relaxed">
                  Please rate the following questions
                </p>
              </div>
            </div>
              <div className="flex justify-between pt-6">
            <p className="font-semibold text-center mb-6 text-black">
              1: worst
            </p>
            <p className="font-semibold text-center mb-6 text-black">
              5: best
            </p>
          </div>
          </div>
          
          <form onSubmit={handleSubmit}>
            {renderQuestions()}
            <div className="mb-5">
              <label
                htmlFor="comments"
                className="block mb-2 text-gray-700 text-sm font-medium"
              >
                Optional comments
              </label>
              <textarea
                id="comments"
                className="w-full p-2 border border-gray-300 rounded-md text-black"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 mt-10 bg-blue-600 text-white text-center font-medium rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SurveyForm;
