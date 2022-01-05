import BookingApiModel from "./BookingApiModel";

type BookingUpdateModel = Partial<Omit<BookingApiModel, "id">>;

export default BookingUpdateModel;
