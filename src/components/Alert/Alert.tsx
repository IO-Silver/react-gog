import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  hidden: boolean;
  onClose: () => void;
}

const Alert = ({ children, hidden, onClose }: Props) => {
  if (hidden) return null;
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button type="button" className="btn-close" data-bs-dismiss="alert" onClick={onClose} aria-label="Close"></button>
    </div>
  );
};

export default Alert;
