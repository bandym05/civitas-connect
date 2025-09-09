
import { FileText, Hammer, ParkingCircle, Trash2, Building2, Droplets, Zap, LucideProps, SplitSquareHorizontal, Megaphone, Shovel } from 'lucide-react';
import type { ComponentType } from 'react';

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: ComponentType<LucideProps>;
  formFields: {
    name: string;
    label: string;
    type: 'text' | 'textarea' | 'email' | 'tel';
    placeholder: string;
    required: boolean;
  }[];
};

export const services: Service[] = [
  {
    id: 'waste-pickup',
    title: 'Waste Pickup Request',
    description: 'Schedule a special waste or recycling pickup.',
    icon: Trash2,
    formFields: [
      { name: 'address', label: 'Pickup Address', type: 'text', placeholder: '123 Main St, City', required: true },
      { name: 'wasteType', label: 'Type of Waste', type: 'text', placeholder: 'e.g., Large furniture, electronics', required: true },
      { name: 'details', label: 'Additional Details', type: 'textarea', placeholder: 'Provide any additional details for the pickup crew.', required: false },
    ],
  },
  {
    id: 'water-bill',
    title: 'Water & Electricity Bill',
    description: 'Pay your utility bills quickly and securely.',
    icon: Droplets,
    formFields: [
      { name: 'accountNumber', label: 'Account Number', type: 'text', placeholder: '123456789', required: true },
      { name: 'amount', label: 'Payment Amount (E)', type: 'text', placeholder: '100.00', required: true },
    ],
  },
  {
    id: 'property-tax',
    title: 'Property Tax Payment',
    description: 'Pay your annual or semi-annual property taxes.',
    icon: Building2,
    formFields: [
      { name: 'propertyId', label: 'Property ID / Parcel Number', type: 'text', placeholder: 'PID-123-456', required: true },
      { name: 'amount', label: 'Payment Amount (E)', type: 'text', placeholder: '1500.00', required: true },
    ],
  },
  {
    id: 'building-permit',
    title: 'Building Permit Application',
    description: 'Apply for a permit for new construction or renovations.',
    icon: Hammer,
    formFields: [
      { name: 'projectName', label: 'Project Name', type: 'text', placeholder: 'e.g., Kitchen Renovation', required: true },
      { name: 'address', label: 'Project Address', type: 'text', placeholder: '123 Main St, City', required: true },
      { name: 'description', label: 'Project Description', type: 'textarea', placeholder: 'Briefly describe the scope of work.', required: true },
    ],
  },
  {
    id: 'parking-permit',
    title: 'Parking Permit',
    description: 'Apply for a new residential or temporary parking permit.',
    icon: ParkingCircle,
    formFields: [
      { name: 'licensePlate', label: 'License Plate', type: 'text', placeholder: 'ABC-123', required: true },
      { name: 'address', label: 'Residential Address', type: 'text', placeholder: '123 Main St, City', required: true },
      { name: 'permitType', label: 'Permit Type', type: 'text', placeholder: 'e.g., Residential, Guest', required: true },
    ],
  },
  {
    id: 'pay-ticket',
    title: 'Pay Parking Ticket',
    description: 'Settle your parking violation fines online.',
    icon: FileText,
    formFields: [
      { name: 'ticketNumber', label: 'Ticket Number', type: 'text', placeholder: 'T123456789', required: true },
      { name: 'amount', label: 'Fine Amount (E)', type: 'text', placeholder: '50.00', required: true },
    ],
  },
   {
    id: 'land-subdivision',
    title: 'Land Subdivision Application',
    description: 'Apply to divide a parcel of land into smaller lots.',
    icon: SplitSquareHorizontal,
    formFields: [
      { name: 'propertyId', label: 'Original Property ID', type: 'text', placeholder: 'PID-123-456', required: true },
      { name: 'applicantName', label: 'Applicant Name', type: 'text', placeholder: 'John Doe', required: true },
      { name: 'reason', label: 'Reason for Subdivision', type: 'textarea', placeholder: 'e.g., Estate planning, new development', required: true },
    ],
  },
  {
    id: 'advertising-permit',
    title: 'Outdoor Advertising Permit',
    description: 'Request a permit for billboards, signs, or other outdoor ads.',
    icon: Megaphone,
    formFields: [
      { name: 'companyName', label: 'Company Name', type: 'text', placeholder: 'e.g., Acme Corp', required: true },
      { name: 'location', label: 'Proposed Ad Location', type: 'text', placeholder: 'Address or intersection', required: true },
      { name: 'adType', label: 'Type of Advertisement', type: 'text', placeholder: 'e.g., Billboard, Digital Sign', required: true },
    ],
  },
  {
    id: 'landfill-access',
    title: 'Landfill Access Permit',
    description: 'Get a permit for residential or commercial landfill access.',
    icon: Shovel,
    formFields: [
      { name: 'applicantName', label: 'Applicant Name', type: 'text', placeholder: 'John Doe', required: true },
      { name: 'vehicleInfo', label: 'Vehicle Make/Model & Plate', type: 'text', placeholder: 'e.g., Ford F-150, ABC-123', required: true },
      { name: 'accessType', label: 'Access Type', type: 'text', placeholder: 'e.g., Residential, Commercial', required: true },
    ],
  },
];


export type NewsArticle = {
  id: number;
  title: string;
  date: string;
  category: 'Community' | 'Infrastructure' | 'Alert' | 'Event';
  content: string;
  isEmergency: boolean;
};

export const news: NewsArticle[] = [
  {
    id: 1,
    title: 'Emergency Water Outage in Downtown Area',
    date: '2024-08-15',
    category: 'Alert',
    content: 'Due to a major water main break, there will be a temporary water outage affecting the downtown core. Crews are on site and expect to restore service within 8 hours. A boil water advisory will be in effect for 24 hours after restoration.',
    isEmergency: true,
  },
  {
    id: 2,
    title: 'Annual Summer Festival Kicks Off This Weekend',
    date: '2024-08-12',
    category: 'Event',
    content: 'Join us for the annual SummerFest this weekend at Central Park! Enjoy live music, food trucks, and activities for the whole family. The event runs from Friday to Sunday, 10 AM to 10 PM.',
    isEmergency: false,
  },
  {
    id: 3,
    title: 'Road Closure on Elm Street for Repaving',
    date: '2024-08-10',
    category: 'Infrastructure',
    content: 'Elm Street between 1st and 3rd Avenue will be closed to all traffic from August 15th to August 20th for a scheduled repaving project. Please follow detour signs.',
    isEmergency: false,
  },
  {
    id: 4,
    title: 'City Council Approves New Community Garden Program',
    date: '2024-08-05',
    category: 'Community',
    content: 'The city council has approved a new initiative to fund and support community gardens across the municipality. Applications for garden plots will open next month.',
    isEmergency: false,
  },
];

export type Project = {
  id: number;
  title: string;
  description: string;
  status: 'Ongoing' | 'Completed';
  progress: number;
  location: string;
  imageUrl: string;
  dataAiHint: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'Central Park Renovation',
    description: 'A complete overhaul of Central Park, including new playgrounds, a splash pad, and improved walking trails.',
    status: 'Ongoing',
    progress: 65,
    location: 'Central Park, Downtown',
    imageUrl: 'https://picsum.photos/600/400',
    dataAiHint: 'city park',
  },
  {
    id: 2,
    title: 'Highway 5 Expansion',
    description: 'Adding two new lanes to Highway 5 to alleviate traffic congestion and improve commuter travel times.',
    status: 'Ongoing',
    progress: 40,
    location: 'Highway 5, East End',
    imageUrl: 'https://picsum.photos/600/400',
    dataAiHint: 'road construction',
  },
  {
    id: 3,
    title: 'New Public Library - North Branch',
    description: 'Construction of a new state-of-the-art public library to serve the growing northern communities.',
    status: 'Ongoing',
    progress: 85,
    location: 'Northside Community',
    imageUrl: 'https://picsum.photos/600/400',
    dataAiHint: 'modern library',
  },
  {
    id: 4,
    title: 'Downtown Bikeway Network',
    description: 'Completed project that introduced 15km of protected bike lanes throughout the downtown core.',
    status: 'Completed',
    progress: 100,
    location: 'Downtown Core',
    imageUrl: 'https://picsum.photos/600/400',
    dataAiHint: 'city bike lane',
  },
];

export type ServiceRequest = {
  id: string;
  serviceTitle: string;
  status: 'Pending' | 'In Progress' | 'Completed';
  submittedAt: string;
  data: {[key: string]: string};
};

export type Payment = {
  id: string;
  date: string;
  description: string;
  amount: number;
  status: 'Completed' | 'Pending' | 'Failed';
};

export const paymentHistory: Payment[] = [
  { id: '1', date: '2024-07-15', description: 'Water & Electricity Bill', amount: 125.50, status: 'Completed' },
  { id: '2', date: '2024-07-10', description: 'Property Tax', amount: 850.00, status: 'Completed' },
  { id: '3', date: '2024-06-20', description: 'Parking Ticket #T123456', amount: 50.00, status: 'Completed' },
  { id: '4', date: '2024-06-15', description: 'Water & Electricity Bill', amount: 115.75, status: 'Completed' },
];

export type Statement = {
  id: string;
  period: string;
  dueDate: string;
  downloadUrl: string;
};

export const accountStatements: Statement[] = [
    { id: '1', period: 'Q2 2024 (Apr-Jun)', dueDate: '2024-07-20', downloadUrl: '#' },
    { id: '2', period: 'Q1 2024 (Jan-Mar)', dueDate: '2024-04-20', downloadUrl: '#' },
    { id: '3', period: 'Q4 2023 (Oct-Dec)', dueDate: '2024-01-20', downloadUrl: '#' },
];
