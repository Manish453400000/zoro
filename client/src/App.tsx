import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "./page/HomePage"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import UserPage from "./page/UserPage"
import Profile from "./components/userProfile/profile/Profile"
import ContinueWatching from "./components/userProfile/ContinuWatching/ContinueWatching"
import WatchList from "./components/userProfile/WacthList/WatchList"
import Notification from "./components/userProfile/Notification/Notification"
import Setting from "./components/userProfile/Setting/Setting"
import ImportExport from "./components/userProfile/ImporExport/ImportExport"
import NotFoundPage from "./page/NotFoundPage"

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user" element={<UserPage />}>
          <Route path="/user/profile" element={<Profile />} />
          <Route path="/user/continue-watching" element={<ContinueWatching />} />
          <Route path="/user/watch-list" element={<WatchList />} />
          <Route path="/user/notification" element={<Notification />} />
          <Route path="/user/setting" element={<Setting />} />
          <Route path="/user/import" element={<ImportExport />} />
        </Route>
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
