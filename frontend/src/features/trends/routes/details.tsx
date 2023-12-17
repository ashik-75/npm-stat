import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetDownloadList } from "@/features/trends/api/npm";
import LineChartX from "../components/line-chart";
import { getUniqueArray } from "@/features/trends/utils/helper";
import { NpmDownload } from "../types";
import SelectYear from "../components/select-year";
import { downloadRange } from "@/features/trends/utils/constant";

const Details: React.FC = () => {
  const params = useParams();
  const [range, setRange] = useState(downloadRange[0]?.value);
  const packages = getUniqueArray(params.packages);
  const downloadResponse = useGetDownloadList({ packages, range });
  const isLoading = downloadResponse.some((dt) => dt.isLoading);

  const packageList =
    (downloadResponse
      ?.map((pkg) => pkg.data)
      .filter((pkg) => pkg?.package) as NpmDownload[]) || [];

  return (
    <div className="relative space-y-5">
      <SelectYear range={range} setRange={setRange} />

      <LineChartX
        npmDownloadList={packageList?.length > 0 ? packageList : []}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Details;
