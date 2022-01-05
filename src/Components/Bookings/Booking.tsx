import { ReactElement } from "react";
import styled from "styled-components";
import BookingModel from "../../Models/BookingModel";
import { format, localeFormat } from "light-date";
import DisconnectButton from "./DisconnectButton";
import Button from "../Common/Button";
import Thumbnail from "../Common/Thumbnail";
import { useBookingsContext } from "../../Contexts/BookingsContext";

type Props = {
	booking: BookingModel;
};

const ListItem = styled.li`
	display: grid;
	grid-template-columns: 12rem 16rem 30rem auto 18rem;
	align-items: center;
	padding: 0.4rem;
	border-radius: 1rem;
	border: 1px solid #e8e8e8;
	margin-bottom: 0.4rem;
	background-color: #fff;
	min-width: 100rem;
`;

const Booking = ({ booking }: Props): ReactElement => {
	const partners = `${booking.partners[0]} & ${booking.partners[1]}`;
	const weddingDate = booking.weddingDate
		? format(booking.weddingDate, `${localeFormat(booking.weddingDate, "{MMM}")} {dd}, {yyyy}`)
		: "";

	const { updateBooking, deleteBooking } = useBookingsContext();

	return (
		<ListItem>
			<Thumbnail remSize={10} src={booking.profilePhoto} alt={`${partners}`} />
			<h3>{weddingDate}</h3>
			<div>
				<h3 style={{ marginBottom: "1.4rem" }}>{partners}</h3>
				<div>{booking.email}</div>
			</div>
			<div style={{ placeSelf: "center" }}>
				{booking.collaborating && (
					<DisconnectButton onClick={() => updateBooking(booking.id, { collaborating: false })} />
				)}
			</div>
			{!booking.collaborating && (
				<div>
					<Button buttonType="primary" onClick={() => updateBooking(booking.id, { collaborating: true })}>
						Confirm booking
					</Button>
					<Button
						buttonType="secondary"
						style={{ marginTop: "0.5rem" }}
						onClick={() => deleteBooking(booking.id)}
					>
						Not my booking
					</Button>
				</div>
			)}
		</ListItem>
	);
};

export default Booking;
