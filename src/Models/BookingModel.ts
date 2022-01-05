type BookingModel = {
	id: string;
	createdAt: Date;
	email: string;
	partners: string[];
	profilePhoto: string;
	weddingDate?: Date;
	collaborating: boolean;
};

export default BookingModel;
