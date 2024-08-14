import EditForm from "@/app/_components/EditForm";
import { updateBooking } from "@/app/_lib/actions";
import { getBooking, getCabin } from "@/app/_lib/data-service";

// import { useFormStatus } from "react-dom";

export default async function Page({ params }) {
  // CHANGE

  const booking = await getBooking(params.bookingId);

  const cabin = await getCabin(booking.cabinId);
  //   console.log(cabin);

  const reservationId = booking.id;
  const maxCapacity = cabin.maxCapacity;
  //   console.log(params);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Edit Reservation #{reservationId}
      </h2>
      <EditForm booking={booking} maxCapacity={maxCapacity} />;
    </div>
  );
}
