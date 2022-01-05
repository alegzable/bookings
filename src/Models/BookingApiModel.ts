type BookingApiModel = {
	createdAt: number;
	users: {
		contacts: {
			email: string;
			phone: string;
		};
	}[];
	partners: string[];
	id: string;
	profilePhoto: string;
	weddingDate: number;
	collaborating: boolean;
};

export default BookingApiModel;
