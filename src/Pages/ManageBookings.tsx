import { ReactElement, useCallback, useEffect, useState } from "react";
import ManageBookings from "../Components/ManageBookings";
import { BookingsContext } from "../Contexts/BookingsContext";
import useLoader from "../hooks/useLoader";
import BookingModel from "../Models/BookingModel";
import BookingUpdateModel from "../Models/BookingUpdateModel";
import * as api from "../Services/api";

const ManageBookingsPage = (): ReactElement => {
	const { isLoading, runLoadingAction } = useLoader();
	const [pageNumber, setPageNumber] = useState(1);
	const [totalCount, setTotalCount] = useState(0);
	const [bookings, setBookings] = useState<BookingModel[]>([]);

	const loadBookings = useCallback(
		(pageNumber) =>
			runLoadingAction(async () => {
				const result = await api.getBookings(pageNumber);

				setBookings(result.bookings);
				setTotalCount(result.totalCount);
			}),
		[runLoadingAction]
	);

	useEffect(() => {
		loadBookings(pageNumber);
	}, [loadBookings, pageNumber]);

	const updateBooking = async (bookingId: string, booking: BookingUpdateModel) => {
		runLoadingAction(async () => {
			const result = await api.updateBooking(bookingId, booking);

			if (result.success) {
				// only updating the changed booking
				// so that it doesn't disappear from the screen due to sorting
				const newBookings = bookings.map((booking) => {
					if (booking.id === bookingId)
						return {
							...result.data!,
						};
					return booking;
				});

				setBookings(newBookings);
			}
		});
	};

	const deleteBooking = async (bookingId: string) => {
		runLoadingAction(async () => {
			const result = await api.deleteBooking(bookingId);

			if (result.success) {
				loadBookings(pageNumber);
			}
		});
	};

	return (
		<BookingsContext.Provider value={{ updateBooking, deleteBooking, setPageNumber }}>
			<ManageBookings
				bookings={bookings}
				isLoading={isLoading}
				pagingData={{ pageNumber, totalCount, pageSize: api.PAGE_SIZE }}
			/>
		</BookingsContext.Provider>
	);
};

export default ManageBookingsPage;
