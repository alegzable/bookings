import { ReactElement } from "react";
import BookingModel from "../../Models/BookingModel";
import Booking from "./Booking";

type Props = {
	bookings: BookingModel[];
};

const Bookings = ({ bookings }: Props): ReactElement => {
	return (
		<ul>
			{bookings.map((booking) => (
				<Booking key={booking.id} booking={booking} />
			))}
		</ul>
	);
};

export default Bookings;
