import { useState, useCallback } from "react";

const useLoader = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const runLoadingAction = async (action: () => Promise<void>) => {
		setIsLoading(false);
		await action();
		setIsLoading(false);
	};

	return {
		isLoading,
		runLoadingAction: useCallback(runLoadingAction, []),
	};
};

export default useLoader;
