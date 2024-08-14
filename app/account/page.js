import { auth } from "../_lib/auth";

export const metadata = {
  title: "Guest Area",
};

async function Page() {
  const session = await auth();
  console.log(session);

  return (
    <h1 className="font-semibold text-2xl text-accent-400 mb-7">
      Welcome, {session.user.name}
    </h1>
  );
}

export default Page;
