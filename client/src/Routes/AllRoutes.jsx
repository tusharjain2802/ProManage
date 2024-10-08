import { Route, Routes } from "react-router-dom";
import PrivateLayout from "../Layout/PrivateLayout";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import HomePage from "../Pages/HomePage";
import ProtectedRoute from "../utils/ProtectedRoute";
import ProjectPage from "../Pages/ProjectPage";
import TaskPage from "../Pages/TaskPage";
import DeadlinesPage from "../Pages/DeadlinesPage";
import TaskDeadlinesPage from "../Pages/TaskDeadlinesPage";


function AllRoutes() {
  
  return (
    <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <PrivateLayout>
              <HomePage />
              </PrivateLayout>
            </ProtectedRoute>
          }
        />
         <Route
          path="/projects"
          element={
            <ProtectedRoute>
              <PrivateLayout>
              <ProjectPage />
              </PrivateLayout>
            </ProtectedRoute>
          }
        />
           <Route
          path="/tasks"
          element={
            <ProtectedRoute>
              <PrivateLayout>
              <TaskPage />
              </PrivateLayout>
            </ProtectedRoute>
          }
        />
          <Route
          path="/deadlines"
          element={
            <ProtectedRoute>
              <PrivateLayout>
              <DeadlinesPage />
              </PrivateLayout>
            </ProtectedRoute>
          }
        />
         <Route
          path="/taskDeadlines/:projectId"
          element={
            <ProtectedRoute>
              <PrivateLayout>
              <TaskDeadlinesPage />
              </PrivateLayout>
            </ProtectedRoute>
          }
        />
      <Route
        path="/login"
        element={
          <PrivateLayout>
            <LoginPage />
          </PrivateLayout>
        }
      />
      <Route
        path="/register"
        element={
          <PrivateLayout>
            <RegisterPage />
          </PrivateLayout>
        }
      />
    </Routes>
  );
}

export default AllRoutes;
