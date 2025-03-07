import { Facebook } from "@/components/icons/Facebook";
import { Instagram } from "@/components/icons/Instagram";
import { NavLink } from "react-router";

export const LayoutFooter = () => {
  const list1 = {
    header: { name: "Destinations" },
    items: [
      { label: "Countries", link: "#" },
      { label: "Regions", link: "#" },
      { label: "Cities", link: "#" },
      { label: "Districts", link: "#" },
      { label: "Airports", link: "#" },
      { label: "Hotels", link: "#" },
      { label: "Places of interest", link: "#" },
    ],
  };
  const list2 = {
    header: { name: "Accommodation Types" },
    items: [
      { label: "Homes", link: "#" },
      { label: "Apartments", link: "#" },
      { label: "Resorts", link: "#" },
      { label: "Villas", link: "#" },
      { label: "Hostels", link: "#" },
      { label: "Guest houses", link: "#" },
      { label: "Hotel", link: "#" },
    ],
  };
  const list3 = {
    header: { name: "Travel & Experiences" },
    items: [
      { label: "Unique places to stay", link: "#" },
      { label: "All destinations", link: "#" },
      { label: "All flight destinations", link: "#" },
      { label: "All car rental locations", link: "#" },
      { label: "Discover", link: "#" },
      { label: "Reviews", link: "#" },
      { label: "Unpacked: Travel articles", link: "#" },
      { label: "Travel communities", link: "#" },
      { label: "Seasonal and holiday deals", link: "#" },
    ],
  };
  const list4 = {
    header: { name: "Transportation & Services" },
    items: [
      { label: "Car rental", link: "#" },
      { label: "Flight finder", link: "#" },
      { label: "Restaurant reservations", link: "#" },
      { label: "Travel Agents", link: "#" },
    ],
  };
  const list5 = {
    header: { name: "Support & Company" },
    items: [
      { label: "Curtomer Service", link: "#" },
      { label: "Partner help", link: "#" },
      { label: "Careers", link: "#" },
      { label: "Sustainability", link: "#" },
      { label: "Press center", link: "#" },
      { label: "Safety Resource Center", link: "#" },
      { label: "Investor relations", link: "#" },
      { label: "Terms & conditions", link: "#" },
    ],
  };
  return (
    <footer className="bg-primary">
      {/* First row */}
      <div className="container flex flex-wrap justify-between gap-10 py-4">
        {[list1, list2, list3, list4, list5].map((list, index) => (
          <ul key={index} className=" text-white flex flex-col gap-2">
            <li className="text-base font-semibold mb-2">{list.header.name}</li>
            {list.items.map((item, index) => (
              <li key={item.label + index} className="text-xs">
                <NavLink className="underline underline-offset-2" to={item.link}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        ))}
      </div>

      {/* Second Row */}
      <div className="flex items-center justify-between border-t text-white px-4 py-3">
        <div className="flex items-center gap-4">
          <Instagram width={24} height={24}/> 
		  <Facebook fill="" stroke="white" width={24} height={24}/>
        </div>
        <div className="text-xs"> &copy; 2025 EasyStay. All rights reserved.</div>
      </div>
    </footer>
  );
};
