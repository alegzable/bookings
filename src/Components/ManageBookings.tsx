import { ReactElement } from "react";
import styled from "styled-components";
import { useBookingsContext } from "../Contexts/BookingsContext";
import BookingModel from "../Models/BookingModel";
import Bookings from "./Bookings/Bookings";
import Paging, { PagingData } from "./Common/Paging";
import { Loader } from "./Layout/Loader";

type Props = {
	bookings: BookingModel[];
	pagingData: PagingData;
	isLoading: boolean;
};

const Container = styled.div`
	padding: 4rem;
	height: 100%;
`;

const ManageBookings = ({ bookings, pagingData, isLoading }: Props): ReactElement => {
	const { setPageNumber } = useBookingsContext();

	return (
		<Container>
			<h2 style={{ marginBottom: "1.4rem" }}>Your bookings</h2>
			<div style={{ marginBottom: "4rem" }}>
				If a booking is missing, ask your couple to mark your venue as booked in the app, and they will appear
				below automatically.
			</div>
			<Loader isLoading={isLoading}>
				<div style={{ marginBottom: "1.4rem" }}>
					<Paging data={pagingData} updatePageNumber={setPageNumber} />
				</div>
				<Bookings bookings={bookings} />
			</Loader>
		</Container>
	);
};

export default ManageBookings;
