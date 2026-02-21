import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DarkModeProvider } from './context/DarkModeContext'
import Layout from './components/Layout'

// Pages
import Home from './HomeContent/Home'


const Admin = lazy(() => import('./pages/admin'))
const Login = lazy(() => import('./pages/login'))
const User = lazy(() => import('./pages/user'))
// Menu
const AboutPage = lazy(() => import('./pages/menu/about'))
const ContactPage = lazy(() => import('./pages/menu/contact'))
const PrivacyPage = lazy(() => import('./pages/menu/privacy'))
const DeveloperPage = lazy(() => import('./pages/menu/developer'))
const TermsPage = lazy(() => import('./pages/menu/terms'))


// emergency
const FireServicePage = lazy(() => import('./pages/emergency/fireservice'))
const AmbulancePage = lazy(() => import('./pages/emergency/ambulance'))
const PolicePage = lazy(() => import('./pages/emergency/emergency'))
const BloodPage = lazy(() => import('./pages/emergency/blood'))
const BloodaddPage = lazy(() => import('./pages/emergency/bloodadd'))


// Islamic
const IslamicCalnderPage = lazy(() => import('./pages/islamic/RamadanCalendar'))
const ImamAddPage = lazy(() => import('./pages/islamic/imamadd'))
const IslamicPage = lazy(() => import('./pages/islamic/Islamic'))
const MasjidPage = lazy(() => import('./pages/islamic/masjid'))
const MadrasaPage = lazy(() => import('./pages/islamic/madrasa'))
const ImamPage = lazy(() => import('./pages/islamic/imam'))
const MuajjinPage = lazy(() => import('./pages/islamic/muajjin'))
const HijriPage = lazy(() => import('./pages/islamic/hijricalnder'))
const JakatCalculatorPage  = lazy(() => import('./pages/islamic/jakatcalculator'))
const IslamicHealthPage  = lazy(() => import('./pages/islamic/islamichealth'))
const EdgaPage  = lazy(() => import('./pages/islamic/edga'))
const KoborsthanPage  = lazy(() => import('./pages/islamic/koborsthan'))

// Study
const StudyPage = lazy(() => import('./pages/Study/study'))
const StudyAddPage = lazy(() => import('./pages/Study/add'))
const SchoolPage = lazy(() => import('./pages/Study/school'))
const CollagePage = lazy(() => import('./pages/Study/college'))
const Madrasa2Page = lazy(() => import('./pages/Study/madrasa'))
const TeacherPage = lazy(() => import('./pages/Study/teacher'))
const CoachingPage = lazy(() => import('./pages/Study/coaching'))
const TutorPage = lazy(() => import('./pages/Study/tutor'))
const SpokenPage = lazy(() => import('./pages/Study/spoken'))
const ComputerlabPage = lazy(() => import('./pages/Study/computer-lab'))


//Health
const HealthPage = lazy(() => import('./pages/health/healthhome'))
const HospitalPage = lazy(() => import('./pages/health/hospital'))
const ClinicPage = lazy(() => import('./pages/health/clinic'))
const DiagnosticPage = lazy(() => import('./pages/health/diagnostic'))
const DoctorPage = lazy(() => import('./pages/health/doctor'))
const PharmacyPage = lazy(() => import('./pages/health/pharmacy'))


// Agriculture
const AgriculturePage = lazy(() => import('./pages/agriculture/krishihome'))

// IT
const ItPage = lazy(() => import('./pages/it/ithome'))
const ComputershopPage = lazy(() => import('./pages/it/computer-shop'))
const MobileshopPage = lazy(() => import('./pages/it/mobile-shop'))
const CustomerservicePage = lazy(() => import('./pages/it/customer-service'))
const HardwareservicePage = lazy(() => import('./pages/it/hardware-service'))
const ElectricalservicesPage = lazy(() => import('./pages/it/electrical-services'))
const CctvservicesPage = lazy(() => import('./pages/it/cctv-services'))
const WifiservicesPage = lazy(() => import('./pages/it/wifi-services'))
const WebdevelopmentPage = lazy(() => import('./pages/it/web-development'))

// Transport
const TransportPage = lazy(() => import('./pages/transport/transporthome'))
const TransportaddPage = lazy(() => import('./pages/transport/transportadd'))
const BusPage = lazy(() => import('./pages/transport/bus'))
const TrainPage = lazy(() => import('./pages/transport/train'))
const CarPage = lazy(() => import('./pages/transport/car'))
const CngPage = lazy(() => import('./pages/transport/cng'))
const TruckPage = lazy(() => import('./pages/transport/truck'))
const BikePage = lazy(() => import('./pages/transport/bike'))
const MechanicalPage = lazy(() => import('./pages/transport/mechanical-service'))
const FuelPage = lazy(() => import('./pages/transport/fuel'))
const PartsPage = lazy(() => import('./pages/transport/parts'))


// Workers
const ShromicPage = lazy(() => import('./pages/worker/shromic'))
const Workersadd = lazy(() => import('./pages/worker/workersadd'))
const ElectricianPage = lazy(() => import('./pages/worker/electrician'))
const PlumberPage = lazy(() => import('./pages/worker/plumber'))
const RajmistriPage = lazy(() => import('./pages/worker/mason'))
const PainterPage = lazy(() => import('./pages/worker/painter'))
const CarpenterPage = lazy(() => import('./pages/worker/carpenter'))
const FreezPage = lazy(() => import('./pages/worker/freez'))


// Uddokta
const UddoktaPage = lazy(() => import('./pages/uddokta/uddokta'))
const UddoktaaddPage = lazy(() => import('./pages/uddokta/uddoktaadd'))


// Probashi
const ProbashiPage = lazy(() => import('./pages/probashi/probashihome'))
const ProbashilistPage = lazy(() => import('./pages/probashi/probashilist'))
const ProbashiaddPage = lazy(() => import('./pages/probashi/probashiadd'))


// market
const MarketPage = lazy(() => import('./pages/market/markethome'))
const MarketAddPage = lazy(() => import('./pages/market/add'))
const MudiPage = lazy(() => import('./pages/market/mudi'))
const ElectricPage = lazy(() => import('./pages/market/electric'))
const ResturantPage = lazy(() => import('./pages/market/resturant'))
const GarmentsPage = lazy(() => import('./pages/market/garments'))
const HardwarePage = lazy(() => import('./pages/market/hardware'))
const GiftPage = lazy(() => import('./pages/market/gift'))
const CoffeePage = lazy(() => import('./pages/market/coffee'))
const SelunPage = lazy(() => import('./pages/market/selun'))
const ParlorPage = lazy(() => import('./pages/market/parlor'))
const WatchPage = lazy(() => import('./pages/market/watch'))
const ShoesPage = lazy(() => import('./pages/market/shoes'))

// Media
const MediaPage = lazy(() => import('./pages/media/mediahome'))
const TvPage = lazy(() => import('./pages/media/tv'))
const ContentcreatorPage = lazy(() => import('./pages/media/contentcreator'))
const JournalistPage = lazy(() => import('./pages/media/journalist'))
const NewsPage = lazy(() => import('./pages/media/news'))
const PhotographerPage = lazy(() => import('./pages/media/photographer'))



// Finance
const FinancePage = lazy(() => import('./pages/finance/financehome'))
const BankPage = lazy(() => import('./pages/finance/bank'))
const MobilebankPage = lazy(() => import('./pages/finance/mobile-bank'))
const AtmPage = lazy(() => import('./pages/finance/atm'))
const NgoPage = lazy(() => import('./pages/finance/ngo'))
const LoancPage = lazy(() => import('./pages/finance/loanc'))

//  Tourism
const TourismPage = lazy(() => import('./pages/tourism/tourismhome'))

//  Village
const VillagePage = lazy(() => import('./pages/village/villagehome'))

//  History
const HistoryPage = lazy(() => import('./pages/history/historyhome'))
const SuconaPage = lazy(() => import('./pages/history/intro'))
const SuconaphotosPage = lazy(() => import('./pages/history/photos'))
const SuconalandmarksPage = lazy(() => import('./pages/history/landmarks'))
const SuconapersonalitiesPage = lazy(() => import('./pages/history/personalities'))
const SuconawarPage = lazy(() => import('./pages/history/war'))

//  Union
const UnionPage = lazy(() => import('./pages/union/unionhome'))

//  Sports
const SportsPage = lazy(() => import('./pages/sports/sportshome'))
const SportsaddPage = lazy(() => import('./pages/sports/sportsadd'))
const FootballPage = lazy(() => import('./pages/sports/football'))
const CricketPage = lazy(() => import('./pages/sports/cricket'))
const BadmintonPage = lazy(() => import('./pages/sports/badminton'))
const MarathonPage = lazy(() => import('./pages/sports/marathon'))




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

              <Route path="/admin" element={<Admin />} />
              <Route path="/login" element={<Login />} />
              <Route path="/user" element={<User />} />

              {/* Menu */}
          
              <Route path="/pages/menu/about" element={<AboutPage />} />
              <Route path="/pages/menu/contact" element={<ContactPage />} />
              <Route path="/pages/menu/privacy" element={<PrivacyPage />} />
               <Route path="/pages/menu/developer" element={<DeveloperPage />} />
              <Route path="/pages/menu/terms" element={<TermsPage />} />
              
              {/* Emergebcy */}
          
              <Route path="/pages/emergency/blood" element={<BloodPage />} />
              <Route path="/pages/emergency/bloodadd" element={<BloodaddPage />} />
              <Route path="/pages/emergency/fireservice" element={<FireServicePage />} />
               <Route path="/pages/emergency/ambulance" element={<AmbulancePage />} />
              <Route path="/pages/emergency/emergency" element={<PolicePage />} />
              



              {/* Islamic */}
              <Route path="/pages/Islamic/islamic" element={<IslamicPage />} />
              <Route path="/pages/Islamic/imamadd" element={<ImamAddPage />} />
              <Route path="/pages/islamic/RamadanCalendar" element={<IslamicCalnderPage />} />
              <Route path="/pages/islamic/masjid" element={<MasjidPage />} />
              <Route path="/pages/islamic/madrasa" element={<MadrasaPage />} />
              <Route path="/pages/islamic/imam" element={<ImamPage />} />
              <Route path="/pages/islamic/muajjin" element={<MuajjinPage />} />
              <Route path="/pages/islamic/hijricalnder" element={<HijriPage />} />
              <Route path="/pages/islamic/jakatcalculator" element={<JakatCalculatorPage />} />
              <Route path="/pages/islamic/islamichealth" element={<IslamicHealthPage />} />
              <Route path="/pages/islamic/edga" element={<EdgaPage />} />
              <Route path="/pages/islamic/koborsthan" element={<KoborsthanPage />} />

              {/* Study */}
              <Route path="/pages/Study/study" element={<StudyPage />} />
              <Route path="/pages/Study/add" element={<StudyAddPage />} />
              <Route path="/pages/Study/school" element={<SchoolPage />} />
              <Route path="/pages/Study/college" element={<CollagePage />} />
              <Route path="/pages/Study/madrasa" element={<Madrasa2Page />} />
              <Route path="/pages/Study/teacher" element={<TeacherPage />} />
              <Route path="/pages/Study/coaching" element={<CoachingPage />} />
              <Route path="/pages/Study/tutor" element={<TutorPage />} />
              <Route path="/Study/spoken" element={<SpokenPage />} />
              <Route path="/Study/computer-lab" element={<ComputerlabPage />} />
              

              {/* Health */}
              <Route path="/pages/health/healthhome" element={<HealthPage />} />
              <Route path="/health/hospital" element={<HospitalPage />} />
              <Route path="/health/clinic" element={<ClinicPage />} />
              <Route path="/health/diagnostic" element={<DiagnosticPage />} />
              <Route path="/health/doctor" element={<DoctorPage />} />
              <Route path="/health/pharmacy" element={<PharmacyPage />} />
         

              {/* Paribohon */}
              <Route path="/pages/shromic/shromichome" element={<ShromicPage />} />
              
              
              {/* Agriculture*/}
              <Route path="/pages/agriculture/krishihome" element={<AgriculturePage />} />

              {/* IT */}
              <Route path="/pages/it/ithome" element={<ItPage />} />
              <Route path="/it/computer-shop" element={<ComputershopPage />} />
              <Route path="/it/mobile-shop" element={<MobileshopPage />} />
              <Route path="/it/customer-service" element={<CustomerservicePage />} />
              <Route path="/it/hardware-service" element={<HardwareservicePage />} />
              <Route path="/it/electrical-services" element={<ElectricalservicesPage />} />
              <Route path="/it/cctv-services" element={<CctvservicesPage />} />
              <Route path="/it/wifi-services" element={<WifiservicesPage />} />
              <Route path="/it/web-development" element={<WebdevelopmentPage />} />

              {/* Transport */}
              <Route path="/pages/transport/transporthome" element={<TransportPage />} />
              <Route path="/pages/transport/transportadd" element={<TransportaddPage />} />
              <Route path="/transport/bus" element={<BusPage />} />
              <Route path="/transport/train" element={<TrainPage />} />
              <Route path="/transport/car" element={<CarPage />} />
              <Route path="/transport/cng" element={<CngPage />} />
              <Route path="/transport/truck" element={<TruckPage />} />
              <Route path="/transport/bike" element={<BikePage />} />
              <Route path="/transport/mechanical-service" element={<MechanicalPage />} />
              <Route path="/transport/fuel" element={<FuelPage />} />
              <Route path="/transport/parts" element={<PartsPage />} />
              

              {/* Workers */}
              <Route path="/pages/worker/shromic" element={<ShromicPage />} />
              <Route path="/pages/worker/workersadd" element={<Workersadd />} />
              <Route path="/worker/electrician" element={<ElectricianPage />} />
              <Route path="/worker/plumber" element={<PlumberPage />} />
              <Route path="/worker/mason" element={<RajmistriPage />} />
              <Route path="/worker/painter" element={<PainterPage />} />
              <Route path="/worker/carpenter" element={<CarpenterPage />} />
              <Route path="/worker/freez" element={<FreezPage />} />


              {/* Uddokta */}
              <Route path="/pages/uddokta/uddokta" element={<UddoktaPage />} />
              <Route path="/pages/uddokta/uddoktaadd" element={<UddoktaaddPage />} />

              {/* Probashi */}
              <Route path="/pages/probashi/probashihome" element={<ProbashiPage />} />
              <Route path="/pages/probashi/probashilist" element={<ProbashilistPage />} />
              <Route path="/pages/probashi/probashiadd" element={<ProbashiaddPage />} />

              {/* Market */}
              <Route path="/pages/market/markethome" element={<MarketPage />} />
              <Route path="/pages/market/add" element={<MarketAddPage />} />
              <Route path="/market/mudi" element={<MudiPage />} />
              <Route path="/market/electric" element={<ElectricPage />} />
              <Route path="/market/resturant" element={<ResturantPage />} />
              <Route path="/market/garments" element={<GarmentsPage />} />
              <Route path="/market/hardware" element={<HardwarePage />} />
              <Route path="/market/gift" element={<GiftPage />} />
              <Route path="/market/coffee" element={<CoffeePage />} />
              <Route path="/market/selun" element={<SelunPage />} />
              <Route path="/market/parlor" element={<ParlorPage />} />
              <Route path="/market/watch" element={<WatchPage />} />
              <Route path="/market/shoes" element={<ShoesPage />} />

              {/* Media */}
              <Route path="/pages/media/mediahome" element={<MediaPage />} />
              <Route path="/media/tv" element={<TvPage />} />
              <Route path="/media/contentcreator" element={<ContentcreatorPage />} />
              <Route path="/media/journalist" element={<JournalistPage />} />
              <Route path="/media/news" element={<NewsPage />} />
              <Route path="/media/photographer" element={<PhotographerPage />} />
              

              {/* Finance */}
              <Route path="/pages/finance/financehome" element={<FinancePage />} />
              <Route path="/finance/bank" element={<BankPage />} />
              <Route path="/finance/mobile-bank" element={<MobilebankPage />} />
              <Route path="/finance/atm" element={<AtmPage />} />
              <Route path="/finance/ngo" element={<NgoPage />} />
              <Route path="/finance/loanc" element={<LoancPage />} />

              {/* Tourism*/}
              <Route path="/pages/tourism/tourismhome" element={<TourismPage />} />

              {/* Village */}
              <Route path="/pages/village/villagehome" element={<VillagePage />} />

              {/* History */}
              <Route path="/pages/history/historyhome" element={<HistoryPage />} />
             <Route path="/pages/history/intro" element={<SuconaPage />} />
             <Route path="/pages/history/photos" element={<SuconaphotosPage />} />
             <Route path="/pages/history/landmarks" element={<SuconalandmarksPage />} />
             <Route path="/pages/history/personalities" element={<SuconapersonalitiesPage />} />
             <Route path="/pages/history/war" element={<SuconawarPage />} />
            

             

              {/* Union */}
              <Route path="/pages/union/unionhome" element={<UnionPage />} />

              
              {/* Sports */}
              <Route path="/pages/sports/sportshome" element={<SportsPage />} />
              <Route path="/pages/sports/sportsadd" element={<SportsaddPage />} />
              <Route path="/pages/sports/football" element={<FootballPage />} />
              <Route path="/pages/sports/cricket" element={<CricketPage />} />
              <Route path="/pages/sports/badminton" element={<BadmintonPage />} />
              <Route path="/pages/sports/marathon" element={<MarathonPage />} />

       




            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </DarkModeProvider>
  )
}

export default App