import { VersionSelect } from "~/components/VersionSelect";
import { layout, sprinkles } from "~/styles";

export default function Index() {
  return (
    <div
      style={{
        width: 256,
        padding: "16px 12px 16px 12px",
      }}
    >
      <VersionSelect
        className={sprinkles({ mb: 16 })}
        versions={["2023-03-01", "2023-02-01"]}
        hash={""}
      />
    </div>
  );
}
