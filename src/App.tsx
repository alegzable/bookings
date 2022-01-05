import { ReactElement } from "react";
import GlobalStyles from "./globalStyles";
import ManageBookingsPage from "./Pages/ManageBookings";

const App = (): ReactElement => {
	return (
		<>
			<GlobalStyles />
			<ManageBookingsPage />
		</>
	);
};

export default App;
