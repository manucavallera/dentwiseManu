import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import AdminDashboardClient from "./AdminDashboardClient";

export const dynamic = "force-dynamic";

async function AdminPage() {
  const user = await currentUser();

  // si no está logueado → afuera
  if (!user) redirect("/");

  // ID REAL DE TU USUARIO EN CLERK
  const adminId = "user_361KDUa7cPPszUlB6rtiaRjEc6p";

  // si NO es el admin → redirigir a dashboard normal
  if (user.id !== adminId) redirect("/dashboard");

  // si es admin → mostrar panel admin
  return <AdminDashboardClient />;
}

export default AdminPage;
