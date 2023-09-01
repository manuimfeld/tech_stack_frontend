import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <Link to=".." className="absolute top-4">
      ← Volver
    </Link>
  );
};

export default BackButton;
