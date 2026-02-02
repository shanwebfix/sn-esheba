import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DarkModeProvider } from './context/DarkModeContext'
import Layout from './components/Layout'

// Pages
import Home from './pages/Home'

// Category Pages - Lazy load করুন performance এর জন্য
const IslamicPage = lazy(() => import('./pages/categories/Islamic'))
const LibraryPage = lazy(() => import('./pages/categories/Library'))
const DoctorPage = lazy(() => import('./pages/categories/Doctor'))
const PharmacyPage = lazy(() => import('./pages/categories/Pharmacy'))
const HospitalPage = lazy(() => import('./pages/categories/Hospital'))
const TouristPage = lazy(() => import('./pages/categories/Tourism'))
const FireServicePage = lazy(() => import('./pages/categories/FireService'))
const AmbulancePage = lazy(() => import('./pages/categories/ambulance'))
const PolicePage = lazy(() => import('./pages/categories/Police'))
const StudyPage = lazy(() => import('./pages/categories/Study'))
const BusPage = lazy(() => import('./pages/categories/Bus'))
const TrainPage = lazy(() => import('./pages/categories/Train'))
const CarPage = lazy(() => import('./pages/categories/Car'))
const CngPage = lazy(() => import('./pages/categories/Cng'))
const NurseryPage = lazy(() => import('./pages/categories/Nursery'))
const ShopPage = lazy(() => import('./pages/categories/Shop'))
const ElectricPage = lazy(() => import('./pages/categories/Electric'))
const RestaurantPage = lazy(() => import('./pages/categories/Restaurant'))
const DukanPage = lazy(() => import('./pages/categories/Dukan'))
const BankPage = lazy(() => import('./pages/categories/Bank'))
const WifiPage = lazy(() => import('./pages/categories/Wifi'))
const AgencyPage = lazy(() => import('./pages/categories/Agency'))
const JournalistPage = lazy(() => import('./pages/categories/Journalist'))
const ProbashiPage = lazy(() => import('./pages/categories/Probashi'))
const TeacherPage = lazy(() => import('./pages/categories/Teacher'))
const CoachingPage = lazy(() => import('./pages/categories/Coaching'))
const WorkersPage = lazy(() => import('./pages/categories/Workers'))
const ContentCreatorPage = lazy(() => import('./pages/categories/ContentCreator'))
const UddoktaPage = lazy(() => import('./pages/categories/Uddokta'))
const SportsPage = lazy(() => import('./pages/categories/Sports'))
const CuriyaPage = lazy(() => import('./pages/categories/Curiya'))
const EntertainmentPage = lazy(() => import('./pages/categories/Entertainment'))
const TourismPage = lazy(() => import('./pages/categories/Tourism'))
const RealEstatePage = lazy(() => import('./pages/categories/RealEstate'))
const LegalPage = lazy(() => import('./pages/categories/Legal'))
const ItServicePage = lazy(() => import('./pages/categories/ItService'))
const InsurancePage = lazy(() => import('./pages/categories/Insurance.jsx'))
const TaxServicePage = lazy(() => import('./pages/categories/TaxService'))
const TransportPage = lazy(() => import('./pages/categories/Transport'))
const IndustryPage = lazy(() => import('./pages/categories/Industry'))

// Loading component
const LoadingComponent = () => <div className="p-6 text-center">লোড হচ্ছে...</div>

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <Layout>
          <Suspense fallback={<LoadingComponent />}>
            <Routes>
              <Route path="/" element={<Home />} />
              
              {/* Category Routes */}
              <Route path="/src/cat/islamic" element={<IslamicPage />} />
              <Route path="/src/cat/library" element={<LibraryPage />} />
              <Route path="/src/cat/doctor" element={<DoctorPage />} />
              <Route path="/src/cat/pharmacy" element={<PharmacyPage />} />
              <Route path="/src/cat/hospital" element={<HospitalPage />} />
              <Route path="/src/cat/tourist" element={<TouristPage />} />
              <Route path="/src/cat/fire-service" element={<FireServicePage />} />
              <Route path="/src/cat/ambulance" element={<AmbulancePage />} />
              <Route path="/src/cat/police" element={<PolicePage />} />
              <Route path="/src/cat/study" element={<StudyPage />} />
              <Route path="/src/cat/bus" element={<BusPage />} />
              <Route path="/src/cat/train" element={<TrainPage />} />
              <Route path="/src/cat/car" element={<CarPage />} />
              <Route path="/src/cat/cng" element={<CngPage />} />
              <Route path="/src/cat/nursery" element={<NurseryPage />} />
              <Route path="/src/cat/shop" element={<ShopPage />} />
              <Route path="/src/cat/electric" element={<ElectricPage />} />
              <Route path="/src/cat/restaurant" element={<RestaurantPage />} />
              <Route path="/src/cat/dukan" element={<DukanPage />} />
              <Route path="/src/cat/bank" element={<BankPage />} />
              <Route path="/src/cat/wifi" element={<WifiPage />} />
              <Route path="/src/cat/agency" element={<AgencyPage />} />
              <Route path="/src/cat/journalist" element={<JournalistPage />} />
              <Route path="/src/cat/probashi" element={<ProbashiPage />} />
              <Route path="/src/cat/teacher" element={<TeacherPage />} />
              <Route path="/src/cat/coaching" element={<CoachingPage />} />
              <Route path="/src/cat/workers" element={<WorkersPage />} />
              <Route path="/src/cat/contentcreator" element={<ContentCreatorPage />} />
              <Route path="/src/cat/uddokta" element={<UddoktaPage />} />
              <Route path="/src/cat/sports" element={<SportsPage />} />
              <Route path="/src/cat/curiya" element={<CuriyaPage />} />
              <Route path="/src/cat/entertainment" element={<EntertainmentPage />} />
              <Route path="/src/cat/tourism" element={<TourismPage />} />
              <Route path="/src/cat/real-estate" element={<RealEstatePage />} />
              <Route path="/src/cat/legal" element={<LegalPage />} />
              <Route path="/src/cat/it-service" element={<ItServicePage />} />
              <Route path="/src/cat/insurance" element={<InsurancePage />} />
              <Route path="/src/cat/tax-service" element={<TaxServicePage />} />
              <Route path="/src/cat/transport" element={<TransportPage />} />
              <Route path="/src/cat/industry" element={<IndustryPage />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </DarkModeProvider>
  )
}

export default App