import { CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-99">
      <CircularProgress />
    </div>
  );
};

export default Loading;
