import { useCallback } from "react";

interface ToastOptions {
  title: string;
  description?: string;
  variant?: "default" | "destructive";
}

export const useToast = () => {
  const toast = useCallback(({ title, description, variant = "default" }: ToastOptions) => {
    // Simple browser toast fallback using alert()
    if (variant === "destructive") {
      alert(`❌ ${title}\n${description ?? ""}`);
    } else {
      alert(`✅ ${title}\n${description ?? ""}`);
    }

    // In a real app, replace this with your toast library like `sonner`, `radix`, `shadcn`, etc.
  }, []);

  return { toast };
};
