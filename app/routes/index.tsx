import { VersionSelect } from "~/components/VersionSelect";
import { sprinkles } from "~/styles";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <VersionSelect
        className={sprinkles({ mb: 16 })}
        versions={["2023-03-01","2023-02-01"]}
        hash={""} />
    </div>
  );
}
