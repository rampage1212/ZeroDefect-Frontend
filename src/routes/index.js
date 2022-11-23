import BoardAdmin from "../components/BoardAdmin";
import BoardModerator from "../components/BoardModerator";
import BoardUser from "../components/BoardUser";
import CreateTask from "../components/CreateTask";
import Home from "../components/Home";
import Login from "../components/Login";
import Profile from "../components/Profile";
import Register from "../components/Register";
import TaskDetail from "../components/TaskDetail";
import TaskList from "../components/TaskList";

export const protectedRoutes = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/profile",
    element: Profile,
  },
  {
    path: "/task/create",
    element: CreateTask,
  },
  {
    path: "/task/list",
    element: TaskList,
  },
  {
    path: "/task/:id/detail",
    element: TaskDetail,
  },
  {
    path: "/user",
    element: BoardUser,
  },
  {
    path: "/mod",
    element: BoardModerator,
  },
  {
    path: "/admin",
    element: BoardAdmin,
  },
];

export const publicRoutes = [
  {
    path: "/login",
    element: Login,
  },
  {
    path: "/register",
    element: Register,
  },
];
