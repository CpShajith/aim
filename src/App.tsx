import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import AntiMoneyLaundering from './pages/offering/AntiMoneyLaundering';
import AutomotiveMobility from './pages/offering/AutomotiveMobility';
import DataProtection from './pages/offering/DataProtection';
import Defense from './pages/offering/Defense';
import Energy from './pages/offering/Energy';
import FederalHealth from './pages/offering/FederalHealth';
import FedStart from './pages/offering/FedStart';
import FinancialServices from './pages/offering/FinancialServices';
import FoodBeverage from './pages/offering/FoodBeverage';
import AIMForBuilders from './pages/offering/AIMForBuilders';
import GovtFinancialManagement from './pages/offering/GovtFinancialManagement';
import HospitalOperations from './pages/offering/HospitalOperations';
import Insurance from './pages/offering/Insurance';
import Intelligence from './pages/offering/Intelligence';
import LifeSciences from './pages/offering/LifeSciences';
import MissionManager from './pages/offering/MissionManager';
import Procurement from './pages/offering/Procurement';
import Rail from './pages/offering/Rail';
import Readiness from './pages/offering/Readiness';
import Retail from './pages/offering/Retail';
import SecureCollaboration from './pages/offering/SecureCollaboration';
import Semiconductors from './pages/offering/Semiconductors';
import SupplyChain from './pages/offering/SupplyChain';
import Telecommunications from './pages/offering/Telecommunications';
import Utilities from './pages/offering/Utilities';
import AIandML from './pages/capabilities/AIandML';
import AIPForDevelopers from './pages/capabilities/AIPForDevelopers';
import DataIntegration from './pages/capabilities/DataIntegration';
import EdgeAI from './pages/capabilities/EdgeAI';
import Marketplace from './pages/capabilities/Marketplace';
import PipelineBuilder from './pages/capabilities/PipelineBuilder';
import ProcessMining from './pages/capabilities/ProcessMining';
import RealTimeAlerting from './pages/capabilities/RealTimeAlerting';
import AdminDashboard from './pages/admin/AdminDashboard';
import Forge from './pages/platforms/Forge';
import Archam from './pages/platforms/Archam';
import Areies from './pages/platforms/Areies';
import Ontology from './pages/platforms/Ontology';
import ArtificialIntelligence from './pages/platforms/ArtificialIntelligence';
import Contact from './pages/Contact';

// Documents
import Cookies from './pages/documents/Cookies';
import PrivacyCivilLiberties from './pages/documents/PrivacyCivilLiberties';
import AIMExplained from './pages/documents/AIMExplained';
import Sustainability from './pages/documents/Sustainability';
import HumanRightsPolicy from './pages/documents/HumanRightsPolicy';
import PrivacyStatement from './pages/documents/PrivacyStatement';
import TermsOfUse from './pages/documents/TermsOfUse';

function App() {
  return (
    <Router>
      <div className="relative w-full min-h-screen bg-white overflow-x-hidden font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anti-money-laundering" element={<AntiMoneyLaundering />} />
          <Route path="/automotive-mobility" element={<AutomotiveMobility />} />
          <Route path="/data-protection" element={<DataProtection />} />
          <Route path="/defense" element={<Defense />} />
          <Route path="/energy" element={<Energy />} />
          <Route path="/federal-health" element={<FederalHealth />} />
          <Route path="/fedstart" element={<FedStart />} />
          <Route path="/financial-services" element={<FinancialServices />} />
          <Route path="/food-beverage" element={<FoodBeverage />} />
          <Route path="/AIM-for-builders" element={<AIMForBuilders />} />
          <Route path="/govt-financial-management" element={<GovtFinancialManagement />} />
          <Route path="/hospital-operations" element={<HospitalOperations />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/intelligence" element={<Intelligence />} />
          <Route path="/life-sciences" element={<LifeSciences />} />
          <Route path="/mission-manager" element={<MissionManager />} />
          <Route path="/procurement" element={<Procurement />} />
          <Route path="/rail" element={<Rail />} />
          <Route path="/readiness" element={<Readiness />} />
          <Route path="/retail" element={<Retail />} />
          <Route path="/secure-collaboration" element={<SecureCollaboration />} />
          <Route path="/semiconductors" element={<Semiconductors />} />
          <Route path="/supply-chain" element={<SupplyChain />} />
          <Route path="/telecommunications" element={<Telecommunications />} />
          <Route path="/utilities" element={<Utilities />} />
          <Route path="/ai-ml" element={<AIandML />} />
          <Route path="/aip-developers" element={<AIPForDevelopers />} />
          <Route path="/data-integration" element={<DataIntegration />} />
          <Route path="/edge-ai" element={<EdgeAI />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/pipeline-builder" element={<PipelineBuilder />} />
          <Route path="/process-mining" element={<ProcessMining />} />
          <Route path="/real-time-alerting" element={<RealTimeAlerting />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/forge" element={<Forge />} />
          <Route path="/archam" element={<Archam />} />
          <Route path="/areies" element={<Areies />} />
          <Route path="/ontology" element={<Ontology />} />
          <Route path="/ai" element={<ArtificialIntelligence />} />
          <Route path="/contact" element={<Contact />} />

          {/* Documents */}
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/privacy-and-civil-liberties" element={<PrivacyCivilLiberties />} />
          <Route path="/aim-explained" element={<AIMExplained />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/human-rights-policy" element={<HumanRightsPolicy />} />
          <Route path="/privacy-statement" element={<PrivacyStatement />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
