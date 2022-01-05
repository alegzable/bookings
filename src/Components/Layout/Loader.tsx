import { ReactElement } from "react";
import { PropsWithChildren } from "react";
import Spinner from "./Spinner";

type LoaderProps = { isLoading?: boolean };

export const Loader = ({ isLoading, children }: PropsWithChildren<LoaderProps>): ReactElement => {
	return isLoading ? <Spinner /> : <>{children}</>;
};
