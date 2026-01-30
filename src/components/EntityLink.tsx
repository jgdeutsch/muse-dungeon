import Link from "next/link";
import { findEntityByName, type EntityData } from "@/lib/entity-lookup";

type Props = {
  /** The entity name to link (e.g., "Fireball", "Rogue", "Prone") */
  name: string;
  /** Optional: custom display text (defaults to name) */
  children?: React.ReactNode;
  /** Optional: pre-resolved entity data (avoids lookup) */
  entity?: EntityData;
};

export function EntityLink({ name, children, entity: providedEntity }: Props) {
  // Look up entity data if not provided
  const entity = providedEntity || findEntityByName(name);

  // If no entity found, just render the text without special styling
  if (!entity) {
    return <>{children || name}</>;
  }

  return (
    <Link href={entity.url} className="underline">
      {children || name}
    </Link>
  );
}
