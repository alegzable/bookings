import BookingApiModel from "../Models/BookingApiModel";
import BookingModel from "../Models/BookingModel";

export const mapBookings = (data: BookingApiModel[]): BookingModel[] => {
	try {
		return data.map(mapBooking);
	} catch (e) {
		console.log("API data corrupted", e);
		return [];
	}
};

export const mapBooking = (data: BookingApiModel): BookingModel => {
	return {
		id: data.id,
		createdAt: new Date(data.createdAt),
		email: data.users[0].contacts.email,
		partners: data.partners,
		profilePhoto: data.profilePhoto,
		weddingDate: data.weddingDate === 0 ? undefined : new Date(data.weddingDate),
		collaborating: data.collaborating,
	};
};
