import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminAddAssistant from "./AdminAddAssistant";
import AdminAddServices from "./AdminAddServices";
import AdminAppointment from "./AdminAppointment";
import AdminAssistant from "./AdminAssistant";
import AdminAssistantList from "./AdminAssistantList";
import AdminAssistantSingle from "./AdminAssistantSingle";
import AdminDashboard from "./AdminDashboard";
import AdminDoctor from "./AdminDoctor";
import AdminDoctorProfile from "./AdminDoctorProfile";
import AdminDoctorUpdateProfile from "./AdminDoctorUpdateProfile";
import AdminEditAssistant from "./AdminEditAssistant";
import AdminEditServices from "./AdminEditServices";
import AdminForgotPassword from "./AdminForgotPassword";
import AdminLogin from "./AdminLogin";
import AdminResetPassword from "./AdminResetPassword";
import AdminServices from "./AdminServices";
import AdminServicesList from "./AdminServicesList";
import AdminSetting from "./AdminSetting";
import AdminSignUp from "./AdminSignUp";
import Appointment from "./Appointment";
import AssistentEditAppointment from "./AssistentEditAppointment";
import AssistentManagement from "./AssistentManagement";
import AssistentManagementChangePassword from "./AssistentManagementChangePassword";
import AssistentViewAppointment from "./AssistentViewAppointment";
import Doctor from "./Doctor";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<AdminLogin />} />
        <Route path="/admin-assistant" element={<AdminAssistant />} />
        <Route path="/admin-appointment" element={<AdminAppointment />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-doctor-profile" element={<AdminDoctorProfile />} />
        <Route path="/admin-doctor" element={<AdminDoctor />} />
        <Route
          path="/admin-forgot-password"
          element={<AdminForgotPassword />}
        />
        <Route path="/admin-reset-password" element={<AdminResetPassword />} />
        <Route path="/admin-services" element={<AdminServices />} />
        <Route path="/admin-setting" element={<AdminSetting />} />
        <Route path="/admin-sign-up" element={<AdminSignUp />} />
        <Route path="/admin-login" element={<AdminLogin/>} />

        <Route path="/admin-add-assistant" element={<AdminAddAssistant />} />
        <Route path="/admin-add-services" element={<AdminAddServices />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/admin-assistant-list" element={<AdminAssistantList />} />
        <Route path="/admin-services-list" element={<AdminServicesList />} />
        <Route
          path="/admin-assistant-single"
          element={<AdminAssistantSingle />}
        />
        <Route
          path="/admin-doctor-update-profile"
          element={<AdminDoctorUpdateProfile />}
        />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/admin-edit-assistant" element={<AdminEditAssistant />} />
        <Route path="/admin-edit-services" element={<AdminEditServices />} />

        <Route
          path="/assistant-edit-appointment"
          element={<AssistentEditAppointment />}
        />
        <Route path="/assistant-management" element={<AssistentManagement />} />
        <Route
          path="/assistant-management-changePassword"
          element={<AssistentManagementChangePassword />}
        />
        <Route
          path="/assistant-view-appointment"
          element={<AssistentViewAppointment />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
