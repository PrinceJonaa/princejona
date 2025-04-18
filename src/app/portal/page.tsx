/**
 * The Portal Page
 * Hidden route for visual representation of "the truth".
 * Currently a placeholder—integrate unique visuals/interactivity here.
 */
import PortalExperience from "../../components/PortalExperience";

export default function PortalPage() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "radial-gradient(ellipse at center, #210038 70%, #120214 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <PortalExperience />
    </main>
  );
}
