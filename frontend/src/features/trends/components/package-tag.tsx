import Icon from "@/components/ui/icon";
import { getUniqueArray } from "@/features/trends/utils/helper";
import { Tooltip } from "@nextui-org/react";
import React from "react";
import { useNavigate } from "react-router-dom";

type PackageTagProps = {
  packageString?: string;
};

const PackageTag: React.FC<PackageTagProps> = ({ packageString }) => {
  const navigate = useNavigate();
  if (!packageString) return null;

  const packages = getUniqueArray(packageString);

  const removePackage = (pkg: string) => {
    const newPackages = packages.filter((pk) => pk !== pkg);
    const pkgString = newPackages.join("-vs-");
    navigate(`/${pkgString}`);
  };
  return (
    <div className="flex gap-5">
      {packages.map((pkg) => (
        <Tooltip key={pkg} content={pkg}>
          <div
            color="primary"
            className="flex cursor-pointer items-center gap-3 rounded-full border border-zinc-200 px-2 py-1 text-zinc-500"
          >
            <span>{pkg}</span>

            <Icon
              onClick={() => removePackage(pkg)}
              className="cursor-pointer"
              name="XCircle"
            />
          </div>
        </Tooltip>
      ))}
    </div>
  );
};

export default PackageTag;
