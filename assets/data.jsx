import { useState } from "react";

export const defaultList = [
  {
    id: 1,
    title: "My Day",
    icon: "white-balance-sunny",
    color: "#fff700cc",
    tasks: [
      "Check college timetable",
      "Quick workout (15 mins)",
      "Review today's goals",
      "Reply to important emails/messages",
    ],
  },
  {
    id: 2,
    title: "Important",
    icon: "star-outline",
    color: "#ff69b4", // a better shade of pink
    tasks: [
      "Submit assignment before deadline",
      "Prepare for coding test",
      "Update resume on LinkedIn",
      "Backup important project files",
    ],
  },
  {
    id: 3,
    title: "Planned",
    icon: "calendar-range-outline",
    color: "#87ceeb", // skyblue shade
    tasks: [
      "Go to Shimla",
      "Go to Chandigarh",
      "Go to Manali",
      "Family trip in October",
      "Attend workshop next Saturday",
    ],
  },
  {
    id: 4,
    title: "Assigned to me",
    icon: "account",
    color: "#cccccc",
    tasks: [
      "Team research on AI tools",
      "Front-end UI fixes for hackathon project",
      "Write documentation for backend setup",
    ],
  },
  {
    id: 5,
    title: "Tasks",
    icon: "text-box-check-outline",
    color: "#75d165ff", // calm green
    tasks: [
      "Organize desk",
      "Clean system temp files",
      "Set goals for the week",
      "Check budget sheet",
    ],
  },
];

export const UserList = [
  {
    id: 6,
    title: "College Work",
    icon: "school",
    color: "#a1a1a1ff",
    tasks: [
      "Complete DSA assignment",
      "Revise DBMS notes",
      "Prepare for internal exams",
      "Group meeting for project",
      "Submit practical file",
    ],
  },
  {
    id: 7,
    title: "Hackathon Work",
    icon: "code-braces-box",
    color: "#808080", // slightly distinct gray
    tasks: [
      "Finish login page UI",
      "Integrate Firebase Auth",
      "Fix bugs in API",
      "Deploy prototype to Vercel",
      "Create pitch presentation",
    ],
  },
  {
    id: 8,
    title: "Shop",
    icon: "shopping",
    color: "#6a6a6aff",
    tasks: [
      "Buy sticker rolls",
      "Order vinyl sheets",
      "Check lamination stock",
      "Collect pending payments",
      "Visit supplier for new catalog",
    ],
  },
];


