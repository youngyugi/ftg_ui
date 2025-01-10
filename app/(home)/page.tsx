import DataLineChart from "@/components/chart";

const dashboard_items = [
  {
    title: "total phones",
    value: "72",
  },
  {
    title: "working phones",
    value: "64",
  },
  {
    title: "total groups",
    value: "8",
  },
  {
    title: "errors",
    value: "0",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0 h-[calc(100vh-64px)]">
      <div className="grid auto-rows-min gap-4 md:grid-cols-4">
        {dashboard_items.map((item) => {
          return (
            <div
              key={item.title}
              className="relative aspect-video rounded-xl bg-muted/50 flex flex-col">
              <div className="p-4 capitalize absolute top-0 left-0 text-responsiveHeading">
                {item.title}
              </div>
              <div className="flex-1 flex justify-center items-center text-responsiveBody">
                {item.value}
              </div>
            </div>
          );
        })}
      </div>
      <div className="hidden md:block flex-grow rounded-xl bg-muted/50">
        <DataLineChart />
      </div>
    </div>
  );
}
