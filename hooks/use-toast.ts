"use client";

import * as React from "react";

type ToastProps = {
  title?: string;
  description?: string;
  action?: React.ReactNode;
  duration?: number;
};

type Toast = ToastProps & {
  id: string;
};

const listeners: Array<(state: Toast[]) => void> = [];
let memoryState: Toast[] = [];

function dispatch(newState: Toast[]) {
  memoryState = newState;
  listeners.forEach((listener) => listener(memoryState));
}

function generateId() {
  return Math.random().toString(36).slice(2, 10);
}

function dismiss(id?: string) {
  if (id) {
    dispatch(memoryState.filter((toast) => toast.id !== id));
    return;
  }
  dispatch([]);
}

function toast(input: ToastProps) {
  const id = generateId();
  const next = [{ id, ...input }, ...memoryState].slice(0, 3);
  dispatch(next);

  setTimeout(() => dismiss(id), input.duration ?? 4000);

  return {
    id,
    dismiss: () => dismiss(id),
  };
}

function useToast() {
  const [toasts, setToasts] = React.useState<Toast[]>(memoryState);

  React.useEffect(() => {
    listeners.push(setToasts);
    return () => {
      const index = listeners.indexOf(setToasts);
      if (index > -1) listeners.splice(index, 1);
    };
  }, []);

  return {
    toasts,
    toast,
    dismiss,
  };
}

export { useToast, toast };
