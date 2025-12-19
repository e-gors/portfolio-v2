import type { ReactNode } from "react";
import CustomButton from "./CustomButton";

type ModalButton = {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
};

type BaseModalProps = {
  isOpen: boolean;
  title?: string;
  type?: "default" | "success" | "warning" | "danger";
  children: ReactNode;
  buttons?: ModalButton[];
  onClose: () => void;
};

const TYPE_ACCENT = {
  default: "border-subtle",
  success: "border-green-500",
  warning: "border-yellow-500",
  danger: "border-red-500",
};

export default function BaseModal({
  isOpen,
  title,
  type = "default",
  children,
  buttons = [],
  onClose,
}: BaseModalProps) {
  if (!isOpen) return null;

  type ModalButtonVariant = "primary" | "secondary" | "danger" | "warning";

  const modalToButtonVariant: Record<
    ModalButtonVariant,
    "contained" | "outlined" | "danger" | "warning"
  > = {
    primary: "contained",
    secondary: "outlined",
    danger: "danger",
    warning: "warning",
  };

  const handlePanelClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className={`bg-primary w-full max-w-lg rounded-2xl shadow-card border-t-4 ${TYPE_ACCENT[type]} 
          relative flex flex-col max-h-[calc(100vh-50px)]`}
        onClick={handlePanelClick}
      >
        {/* Header - Fixed at top */}
        <div className="flex items-center justify-between px-6 py-4 border-b shrink-0">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 cursor-pointer p-1"
          >
            ✕
          </button>
        </div>

        {/* Content - SCROLLABLE AREA */}
        <div className="px-6 py-6 overflow-y-auto flex-1 custom-scrollbar">
          {children}
        </div>

        {/* Footer Buttons - Fixed at bottom */}
        {buttons.length > 0 && (
          <div className="flex justify-end gap-3 px-6 py-4 border-t shrink-0">
            {buttons.map((btn, index) => (
              <CustomButton
                key={index}
                variant={modalToButtonVariant[btn.variant ?? "primary"]}
                onClick={btn.onClick}
                disabled={btn.disabled}
                className="px-4 py-2 rounded-sm text-sm font-medium"
              >
                {btn.label}
              </CustomButton>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
