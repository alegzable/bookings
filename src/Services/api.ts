import axios from "axios";
import BookingApiModel from "../Models/BookingApiModel";
import BookingModel from "../Models/BookingModel";
import BookingUpdateModel from "../Models/BookingUpdateModel";
import { mapBookings, mapBooking } from "./mappers";
import { nameof } from "./utils";

const BASE_URL = "http://localhost:3000";
const BOOKED_URL = "/bookedByCouples";
export const PAGE_SIZE = 10;

type RequestResult<T> = {
	success: boolean;
	data?: T;
};

export const getBookings = async (page: number): Promise<{ bookings: BookingModel[]; totalCount: number }> => {
	const url = `${BOOKED_URL}
		?_page=${page}
		&_limit=${PAGE_SIZE}
		&_sort=${nameof<BookingApiModel>("collaborating")}
		&_order=asc`;

	const response = await api.get<BookingApiModel[]>(url);

	const totalCount = response.headers["x-total-count"];
	const data = response.data;
	const bookings = mapBookings(data);

	return { bookings, totalCount };
};

export const updateBooking = async (
	bookingId: string,
	booking: BookingUpdateModel
): Promise<RequestResult<BookingModel>> => {
	const data = await api.patch<BookingApiModel>(`${BOOKED_URL}/${bookingId}`, booking);

	return { success: data.status === 200, data: mapBooking(data.data) };
};

export const deleteBooking = async (bookingId: string): Promise<RequestResult<undefined>> => {
	const data = await api.delete(`${BOOKED_URL}/${bookingId}`);

	return { success: data.status === 200 };
};

const api = axios.create({
	baseURL: BASE_URL,
});
