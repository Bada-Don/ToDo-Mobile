import { useState } from "react";

export const defaultList = [
  {
    id: 1,
    title: "My Day",
    icon: "white-balance-sunny",
    color: "#fff700cc",
    tasks: [
      { task: "Check college timetable", done: false },
      { task: "Quick workout (15 mins)", done: false },
      { task: "Review today's goals", done: true },
      { task: "Reply to important emails", done: false },
    ],
  },
  {
    id: 2,
    title: "Important",
    icon: "star-outline",
    color: "#ff69b4", // a better shade of pink
    tasks: [
      { task: "Submit assignment before deadline", done: false },
      { task: "Prepare for coding test", done: false },
      { task: "Update resume on LinkedIn", done: true },
      { task: "Backup important project files", done: false },
    ],
  },
  {
    id: 3,
    title: "Planned",
    icon: "calendar-range-outline",
    color: "#87ceeb", // skyblue shade
    tasks: [
      { task: "Go to Shimla", done: true },
      { task: "Go to Chandigarh", done: false },
      { task: "Go to Manali", done: true },
      { task: "Family trip in October", done: false },
      { task: "Attend workshop next Saturday", done: true },
    ],
  },
  {
    id: 4,
    title: "Assigned to me",
    icon: "account",
    color: "#cccccc",
    tasks: [
      { task: "Team research on AI tools", done: false },
      { task: "Front-end UI fixes for hackathon project", done: true },
      { task: "Write documentation for backend setup", done: false },
    ],
  },
  {
    id: 5,
    title: "Tasks",
    icon: "text-box-check-outline",
    color: "#75d165ff", // calm green
    tasks: [
      { task: "Organize desk", done: true },
      { task: "Clean system temp files", done: false },
      { task: "Set goals for the week", done: false },
      { task: "Check budget sheet", done: true },
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
      { task: "Complete DSA assignment", done: false },
      { task: "Revise DBMS notes", done: true },
      { task: "Prepare for internal exams", done: false },
      { task: "Group meeting for project", done: true },
      { task: "Submit practical file", done: false },
    ],
  },
  {
    id: 7,
    title: "Hackathon Work",
    icon: "code-braces-box",
    color: "#808080", // slightly distinct gray
    tasks: [
      { task: "Finish login page UI", done: true },
      { task: "Integrate Firebase Auth", done: false },
      { task: "Fix bugs in API", done: true },
      { task: "Deploy prototype to Vercel", done: false },
      { task: "Create pitch presentation", done: false },
    ],
  },
  {
    id: 8,
    title: "Shop",
    icon: "shopping",
    color: "#6a6a6aff",
    tasks: [
      { task: "Buy sticker rolls", done: true },
      { task: "Order vinyl sheets", done: false },
      { task: "Check lamination stock", done: true },
      { task: "Collect pending payments", done: true },
      { task: "Visit supplier for new catalog", done: false },
    ],
  },
];
