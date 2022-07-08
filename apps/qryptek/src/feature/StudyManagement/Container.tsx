import Button from "components/lib/Button";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Container: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="study-builder-container">
      <div>Study builder container</div>
      <Button onClick={() => navigate("study-builder")}>Go</Button>
      <Outlet />
    </div>
  );
};
