import { Outlet } from "react-router";
import { LayoutNavbar } from "@/layouts/LayoutNavbar";
import {LayoutFooter} from "@/layouts/LayoutFooter";

export const RootLayout = () => {
  return (
    <div>
		<LayoutNavbar />

		{/* Content */}
		<main className="container page-content">
      		<Outlet />
		</main>

		<LayoutFooter />
    </div>
  );
};
