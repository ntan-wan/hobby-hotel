import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router";

interface LayoutFooterProps extends React.HTMLAttributes<HTMLDivElement> {}
export const LayoutFooter = ({ className, ...props }: LayoutFooterProps) => {
  const list1 = [
    { label: "Countries", link: "#" },
    { label: "Regions", link: "#" },
    { label: "Cities", link: "#" },
    { label: "Districts", link: "#" },
    { label: "Airports", link: "#" },
    { label: "Hotels", link: "#" },
    { label: "Places of interest", link: "#" },
  ];
  const list2 = [
    { label: "Homes", link: "#" },
    { label: "Apartments", link: "#" },
    { label: "Resorts", link: "#" },
    { label: "Villas", link: "#" },
    { label: "Hostels", link: "#" },
    { label: "Guest houses", link: "#" },
    { label: "Hotel", link: "#" },
  ];
  const list3 = [
    { label: "Unique places to stay", link: "#" },
    { label: "All destinations", link: "#" },
    { label: "All flight destinations", link: "#" },
    { label: "All car rental locations", link: "#" },
    { label: "Discover", link: "#" },
    { label: "Reviews", link: "#" },
    { label: "Unpacked: Travel articles", link: "#" },
    { label: "Travel communities", link: "#" },
    { label: "Seasonal and holiday deals", link: "#" },
  ];
  const list4 = [
    { label: "Car rental", link: "#" },
    { label: "Flight finder", link: "#" },
    { label: "Restaurant reservations", link: "#" },
    { label: "Travel Agents", link: "#" },
  ];
  const list5 = [
    { label: "Curtomer Service", link: "#" },
    { label: "Partner help", link: "#" },
    { label: "Careers", link: "#" },
    { label: "Sustainability", link: "#" },
    { label: "Press center", link: "#" },
    { label: "Safety Resource Center", link: "#" },
    { label: "Investor relations", link: "#" },
    { label: "Terms & conditions", link: "#" },
  ];

  const links = [
    { label: "Mobile version", link: "#" },
    { label: "Your account", link: "#" },
    { label: "Make changes to your booking online", link: "#" },
    { label: "Customer Service help", link: "#" },
    { label: "Become a partner", link: "#" },
    { label: "Bookings for travel agents", link: "#" },
  ];

  return (
    <footer className={cn("", className)} {...props}>
      {/* First row */}
      <div className="bg-primary flex justify-center border-b py-3">
        <Button variant="outline" className="bg-transparent text-white">
          List your property
        </Button>
      </div>

      {/* Second row */}
      <div className=" bg-primary py-3 text-white">
        <div className="container flex items-center gap-5 justify-center">
          {links.map((link, index) => (
            <NavLink key={link.label + index} to={link.link} className="underline underline-offset-2 text-sm">
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Third row */}
      <div className="bg-neutral-50">
        <div className="container flex flex-wrap justify-between gap-10 py-3">
          {[list1, list2, list3, list4, list5].map((list, index) => (
            <ul key={index} className="text-sm text-blue-600 flex flex-col gap-2">
              {list.map((item, index) => (
                <li key={item.label + index}>
                  <NavLink to={item.link}>{item.label}</NavLink>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </footer>
  );
};
