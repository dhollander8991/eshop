import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";

import { Header } from "./components/Header/Header";

import { Home } from "./components/Home/Home.tsx";
export interface TabsProps {
  tabName: string;
  href: string;
}
export interface UserProps {
  name: string;
  email: string;
  image: string;
}

interface DataProps {
  user: UserProps;
  tabs: TabsProps[];
}

const data: DataProps = {
  user: {
    name: "Jane Spoonfighter",
    email: "janspoon@fighter.dev",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80",
  },
  tabs: [
    { tabName: "Home", href: "/" },
    { tabName: "Orders", href: "/" },
    { tabName: "Education", href: "/" },
    { tabName: "Community", href: "/" },
    { tabName: "Forums", href: "/" },
    { tabName: "Support", href: "/" },
    { tabName: "Account", href: "/" },
    { tabName: "Helpdesk", href: "/" },
  ],
};

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Header user={data.user} tabs={data.tabs} />}>
      <Route path="/" element={<Home />} />
      <Route path="one" element={<h2>One</h2>} />
      <Route path="two" element={<h2>Two</h2>} />
      <Route path="three" element={<h2>Three</h2>} />
      <Route path="four" element={<h2>Four</h2>} />
      <Route path="five" element={<h2>Five</h2>} />
    </Route>
  )
);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Outlet />
    </QueryClientProvider>
  );
}
