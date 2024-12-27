interface Toast {
	id: number;
	message: string;
	timeout?: number;
}

interface ToastState {
	nextId: number;
	toasts: Toast[];
}

export const toastState = $state<ToastState>({ nextId: 0, toasts: [] });

export function addToast(message: string, option?: { timeout?: number }) {
	toastState.toasts.push({
		id: toastState.nextId++,
		message,
		timeout: option?.timeout
	});
}

export function deleteToast(id: number) {
	toastState.toasts = toastState.toasts.filter((toast) => toast.id !== id);
}
