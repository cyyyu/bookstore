import { createPortal } from "react-dom";

export default function Modal({ children }: { children: React.ReactNode }) {
  return createPortal(
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      {children}
    </div>,
    document.body
  );
}
