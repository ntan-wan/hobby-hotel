import {ReactNode} from 'react';
import { cn } from "@/lib/utils";
import { Link } from "react-router";

import { Button } from "@/components/ui/button";
import { Bed, TicketsPlane, FerrisWheel } from "lucide-react";

interface LinkButtonProps extends React.ComponentProps<typeof Button> {
	icon?: ReactNode;
	label: string;
}
const LinkButton = ({ icon, label, ...props} : LinkButtonProps) => {
  return (
    <Button asChild variant="ghost" {...props} className={cn(" hover:bg-blue-600 text-base !text-white rounded-full transition-colors")}>
      <Link to="/">{icon} {label}</Link>
    </Button>
  );
};

export const LayoutNavbar = () => {
  const categories = [
    { name: "Stays", link: "/", icon: <Bed style={{ width: "20px", height: "20px" }}/> },
    { name: "Flights", link: "/", icon: <TicketsPlane  style={{ width: "20px", height: "20px" }}/> },
    { name: "Attractions", link: "/", icon: <FerrisWheel   style={{ width: "20px", height: "20px" }}/> },
  ];

  return (
    <nav className="z-10 bg-primary text-white pt-4 pb-3 fixed top-0 w-full">
      <div className="container">
        {/* First Row */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-semibold">EasyStay.com</p>
          </div>
          <div className="flex items-center gap-3">
            <Button className="bg-white hover:bg-blue-50 text-primary">Register</Button>
            <Button className="bg-white hover:bg-blue-50 text-primary">Sign In</Button>
          </div>
        </div>

        {/* Second Row */}
        <div className="mt-4 relative left-[-16px] flex items-center gap-3">
		  {
			categories.map((category) => (
				<LinkButton key={category.name} icon={category.icon} label={category.name} />
			))
		  }
        </div>
      </div>
    </nav>
  );
};
