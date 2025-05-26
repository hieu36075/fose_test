import React from "react";

interface NavItemProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
}

const NavItem: React.FC<NavItemProps> = React.memo(({ Icon, label }) => {
  console.log(`Render NavItem: ${label}`);

  return (
    <div className="flex items-center justify-center gap-2">
      <Icon className="w-9 h-9" />
      <p className="text-primary text-base/4 font-medium">{label}</p>
    </div>
  );
});

export default NavItem;
