import { createContext, useContext } from "react";
import BookingUpdateModel from "../Models/BookingUpdateModel";

export const BookingsContext = createContext<{
	updateBooking: (bookingId: string, booking: BookingUpdateModel) => Promise<void>;
	deleteBooking: (bookingId: string) => Promise<void>;
	setPageNumber: (pageNumber: number) => void;
}>(undefined!);

export const useBookingsContext = () => {
	const bookingsContext = useContext(BookingsContext);

	if (
		bookingsContext.updateBooking === undefined ||
		bookingsContext.deleteBooking === undefined ||
		bookingsContext.setPageNumber === undefined
	) {
		throw new Error("BookingsContext consumers must be rendered within a BookingsContext provider");
	}

	return bookingsContext;
};
