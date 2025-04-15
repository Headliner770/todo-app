import React from "react";
import { Route, Routes } from "react-router-dom";
import { TasksPage } from "./components/TasksPage/TasksPage.jsx";

export const AppRoutes = () => {
  <Routes>
    <Route path="tasks/*" element={<TasksPage />} />
    <Route path="tasks/all" element={<AllTasks />} />
    <Route path="tasks/today" element={<TodayTasks />} />
    <Route path="tasks/completed" element={<CompletedTasks />} />
    <Route path="tasks/deleted" element={<DeleteTasks />} />
  </Routes>;
};
