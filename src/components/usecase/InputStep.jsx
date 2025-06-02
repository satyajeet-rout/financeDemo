
// import React, { useState } from "react";
// import { Plus, Check, ChevronDown, ChevronUp } from "lucide-react";

// const InputStep = ({ onNext }) => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const transactionData = [
//     {
//       id: 1,
//       date: "2025-04-30",
//       accountCode: "4001",
//       description: "Sales",
//       debit: 0,
//       credit: 50000,
//       currency: "USD",
//       entity: "US01",
//     },
//     {
//       id: 2,
//       date: "2025-04-30",
//       accountCode: "5005",
//       description: "COGS",
//       debit: 20000,
//       credit: 0,
//       currency: "USD",
//       entity: "US01",
//     },
//     {
//       id: 3,
//       date: "2025-04-30",
//       accountCode: "6200",
//       description: "Rent",
//       debit: 3000,
//       credit: 0,
//       currency: "EUR",
//       entity: "EU01",
//     },
//     {
//       id: 4,
//       date: "2025-04-30",
//       accountCode: "4001",
//       description: "Sales (India)",
//       debit: 0,
//       credit: 300000,
//       currency: "INR",
//       entity: "IN01",
//     },
//     {
//       id: 5,
//       date: "2025-04-30",
//       accountCode: "9001",
//       description: "Inter‑co Revenue",
//       debit: 0,
//       credit: 10000,
//       currency: "USD",
//       entity: "US01",
//     },
//     {
//       id: 6,
//       date: "2025-04-30",
//       accountCode: "9101",
//       description: "Inter‑co Expense",
//       debit: 10000,
//       credit: 0,
//       currency: "USD",
//       entity: "IN01",
//     },
//   ];

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <div className="px-6 py-6">
//       {/* Added explanation text */}
//       <div className="mb-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
//         <p className="text-sm text-gray-700 leading-relaxed">
//           Input source data from Netsuite, Excels, SAP, and Budget sheets,
//           having mixed currencies, multiple entities, and the native account
//           codes.
//         </p>
//       </div>
//       <div className="flex justify-between items-center mb-4">
//         <div className="text-gray-700">
//           <span className="font-medium">Input Files 3/4</span>
//           <span className="mx-2 text-gray-400">|</span>
//           <span className="text-gray-500">
//             Task completion date: 09/05/2025
//           </span>
//         </div>
//         <button className="flex items-center space-x-1 px-3 py-1.5 bg-white border border-gray-300 rounded-md text-sm text-gray-600">
//           <Plus className="h-4 w-4" />
//           <span>Add Input</span>
//         </button>
//       </div>

//       {/* Table */}
//       <div className="bg-white rounded-lg shadow-sm overflow-hidden overflow-x-auto">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead>
//             <tr className="bg-gray-50">
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Name
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Tag
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 <div className="flex items-center">
//                   Assignee
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="ml-1 h-4 w-4"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M19 9l-7 7-7-7"
//                     />
//                   </svg>
//                 </div>
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Last Update
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Data Status
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Action
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Task Status
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Lock
//               </th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {/* Row 1 */}
//             <tr>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <div className="flex items-center">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5 text-green-500 mr-2"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//                     />
//                   </svg>
//                   <span className="text-sm font-medium text-gray-900">
//                     Headcount Input
//                   </span>
//                 </div>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap"></td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
//                   <span className="text-white font-medium">C</span>
//                 </div>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                 08/05/2024
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <div className="flex items-center">
//                   <div className="flex-shrink-0 h-2 w-2 rounded-full bg-green-500 mr-2"></div>
//                   <div className="text-sm text-gray-500 bg-green-50 px-2 py-0.5 rounded">
//                     Data Updated
//                   </div>
//                 </div>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap"></td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <span className="px-2.5 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium flex items-center w-fit">
//                   <Check className="h-3.5 w-3.5 mr-1" />
//                   Completed
//                 </span>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap"></td>
//             </tr>

//             {/* Row 2 */}
//             <tr>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <div className="flex items-center">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5 text-gray-500 mr-2"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//                     />
//                   </svg>
//                   <span className="text-sm font-medium text-gray-900">
//                     GL NetSuite - Monthly
//                   </span>
//                 </div>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded">
//                   07/2024
//                 </span>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
//                   <span className="text-gray-600 font-medium">A</span>
//                 </div>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                 08/15/2024
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <div className="flex items-center">
//                   <div className="flex-shrink-0 h-2 w-2 rounded-full bg-green-500 mr-2"></div>
//                   <div className="text-sm text-gray-500 bg-green-50 px-2 py-0.5 rounded">
//                     Data Updated
//                   </div>
//                 </div>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap"></td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <span className="px-2.5 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium flex items-center w-fit">
//                   <Check className="h-3.5 w-3.5 mr-1" />
//                   Completed
//                 </span>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap"></td>
//             </tr>

//             {/* Row 3 */}
//             <tr>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <div className="flex items-center">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5 text-gray-500 mr-2"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//                     />
//                   </svg>
//                   <span className="text-sm font-medium text-gray-900">
//                     GL SAP - Monthly
//                   </span>
//                 </div>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded">
//                   07/2024
//                 </span>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
//                   <span className="text-gray-600 font-medium">A</span>
//                 </div>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                 08/06/2024
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <div className="flex items-center">
//                   <div className="flex-shrink-0 h-2 w-2 rounded-full bg-green-500 mr-2"></div>
//                   <div className="text-sm text-gray-500 bg-green-50 px-2 py-0.5 rounded">
//                     Data Updated
//                   </div>
//                 </div>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap"></td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <span className="px-2.5 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium flex items-center w-fit">
//                   <Check className="h-3.5 w-3.5 mr-1" />
//                   Completed
//                 </span>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap"></td>
//             </tr>

//             {/* Row 4 */}
//             <tr>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <div className="flex items-center">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5 text-green-500 mr-2"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//                     />
//                   </svg>
//                   <span className="text-sm font-medium text-gray-900">
//                     Budget HC Input
//                   </span>
//                 </div>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded">
//                   07/2024
//                 </span>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
//                   <span className="text-gray-600 font-medium">A</span>
//                 </div>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <div className="flex items-center">
//                   <div className="flex-shrink-0 h-2 w-2 rounded-full bg-yellow-500 mr-2"></div>
//                   <div className="text-sm text-yellow-700 bg-yellow-50 px-2 py-0.5 rounded">
//                     Not Updated
//                   </div>
//                 </div>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <button className="px-3 py-1 bg-blue-600 text-white rounded text-xs font-medium">
//                   Upload New Version
//                 </button>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <button className="px-3 py-1 bg-white border border-gray-300 text-gray-600 rounded text-xs font-medium">
//                   Mark Complete
//                 </button>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap"></td>
//             </tr>

//             {/* New Row 5 - Source GL */}
//             <tr
//               className="cursor-pointer hover:bg-gray-50"
//               onClick={toggleDropdown}
//             >
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <div className="flex items-center">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5 text-gray-500 mr-2"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//                     />
//                   </svg>
//                   <span className="text-sm font-medium text-gray-900">
//                     Source GL
//                   </span>
//                   {isDropdownOpen ? (
//                     <ChevronUp className="ml-2 h-4 w-4 text-gray-500" />
//                   ) : (
//                     <ChevronDown className="ml-2 h-4 w-4 text-gray-500" />
//                   )}
//                 </div>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded">
//                   04/2025
//                 </span>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
//                   <span className="text-gray-600 font-medium">A</span>
//                 </div>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                 05/01/2025
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <div className="flex items-center">
//                   <div className="flex-shrink-0 h-2 w-2 rounded-full bg-green-500 mr-2"></div>
//                   <div className="text-sm text-gray-500 bg-green-50 px-2 py-0.5 rounded">
//                     Data Updated
//                   </div>
//                 </div>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap"></td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <span className="px-2.5 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium flex items-center w-fit">
//                   <Check className="h-3.5 w-3.5 mr-1" />
//                   Completed
//                 </span>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap"></td>
//             </tr>

//             {/* Dropdown content */}
//             {isDropdownOpen && (
//               <tr>
//                 <td colSpan="8" className="px-6 py-4">
//                   <div className="bg-gray-50 rounded-md p-4 overflow-x-auto">
//                     <table className="min-w-full divide-y divide-gray-200">
//                       <thead>
//                         <tr>
//                           <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
//                             Transaction ID
//                           </th>
//                           <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
//                             Date
//                           </th>
//                           <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
//                             Account Code
//                           </th>
//                           <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
//                             Description
//                           </th>
//                           <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
//                             Debit
//                           </th>
//                           <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
//                             Credit
//                           </th>
//                           <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
//                             Currency
//                           </th>
//                           <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
//                             Entity
//                           </th>
//                         </tr>
//                       </thead>
//                       <tbody className="bg-white divide-y divide-gray-200">
//                         {transactionData.map((transaction) => (
//                           <tr key={transaction.id} className="hover:bg-gray-50">
//                             <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
//                               {transaction.id}
//                             </td>
//                             <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
//                               {transaction.date}
//                             </td>
//                             <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
//                               {transaction.accountCode}
//                             </td>
//                             <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
//                               {transaction.description}
//                             </td>
//                             <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
//                               {transaction.debit.toLocaleString()}
//                             </td>
//                             <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
//                               {transaction.credit.toLocaleString()}
//                             </td>
//                             <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
//                               {transaction.currency}
//                             </td>
//                             <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
//                               {transaction.entity}
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Next Button */}
//       <div className="flex justify-end mt-6">
//         <button
//           className="px-5 py-2 bg-indigo-600 text-white rounded-md font-medium"
//           onClick={onNext}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default InputStep;



import React, { useState } from "react";
import { Plus, Check, ChevronDown, ChevronUp } from "lucide-react";

const InputStep = ({ onNext }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const transactionData = [
    {
      id: 1,
      property_num: "00GHP14",
      transaction_type: "Sales",
      property_type: "APARTMENT",
      booking_date: "30-11-2023",
      channel: "Broker",
      broker_name: "Broker 1",
      customer_name: "Customer 1",
      relation_id: "REL/156/001379",
      cluster: "Cluster 1",
      scheme: "Scheme 1",
      ou_names: "OU 1",
      value: 10371439.69,
    },
    {
      id: 2,
      property_num: "00GHP14",
      transaction_type: "Sales",
      property_type: "APARTMENT",
      booking_date: "30-06-2023",
      channel: "Direct",
      broker_name: "",
      customer_name: "Customer 2",
      relation_id: "REL/156/001378",
      cluster: "Cluster 1",
      scheme: "Scheme 1",
      ou_names: "OU 1",
      value: 33021055.71,
    },
    {
      id: 3,
      property_num: "00GHP14",
      transaction_type: "Cancel",
      property_type: "APARTMENT",
      booking_date: "08-07-2023",
      channel: "Direct",
      broker_name: "",
      customer_name: "Customer 2",
      relation_id: "REL/156/001378",
      cluster: "Cluster 1",
      scheme: "Scheme 1",
      ou_names: "OU 1",
      value: -13986247.3,
    },
    {
      id: 4,
      property_num: "24M/12",
      transaction_type: "Sales",
      property_type: "PLOT",
      booking_date: "27-09-2023",
      channel: "Direct",
      broker_name: "",
      customer_name: "Customer 3",
      relation_id: "REL/364/000031",
      cluster: "Cluster 2",
      scheme: "Scheme 2",
      ou_names: "OU 2",
      value: 69110436.22,
    },
    {
      id: 5,
      property_num: "24M/14",
      transaction_type: "Sales",
      property_type: "PLOT",
      booking_date: "28-09-2023",
      channel: "Direct",
      broker_name: "",
      customer_name: "Customer 4",
      relation_id: "REL/364/000065",
      cluster: "Cluster 2",
      scheme: "Scheme 2",
      ou_names: "OU 2",
      value: 68119415.24,
    },
    {
      id: 6,
      property_num: "24M/15",
      transaction_type: "Sales",
      property_type: "PLOT",
      booking_date: "28-09-2023",
      channel: "Direct",
      broker_name: "",
      customer_name: "Customer 5",
      relation_id: "REL/364/000073",
      cluster: "Cluster 2",
      scheme: "Scheme 2",
      ou_names: "OU 2",
      value: 113163102,
    },
    {
      id: 7,
      property_num: "24M/16",
      transaction_type: "Sales",
      property_type: "PLOT",
      booking_date: "28-09-2023",
      channel: "Broker",
      broker_name: "Broker 3",
      customer_name: "Customer 6",
      relation_id: "REL/364/000066",
      cluster: "Cluster 2",
      scheme: "Scheme 2",
      ou_names: "OU 2",
      value: 91249914.8,
    },
    {
      id: 8,
      property_num: "24M/17",
      transaction_type: "Sales",
      property_type: "PLOT",
      booking_date: "27-09-2023",
      channel: "Direct",
      broker_name: "",
      customer_name: "Customer 7",
      relation_id: "REL/364/000049",
      cluster: "Cluster 2",
      scheme: "Scheme 2",
      ou_names: "OU 2",
      value: 50104131.87,
    },
    {
      id: 9,
      property_num: "24M/18",
      transaction_type: "Sales",
      property_type: "PLOT",
      booking_date: "26-09-2023",
      channel: "Direct",
      broker_name: "",
      customer_name: "Customer 8",
      relation_id: "REL/364/000026",
      cluster: "Cluster 2",
      scheme: "Scheme 2",
      ou_names: "OU 2",
      value: 98826196.32,
    },
    {
      id: 10,
      property_num: "24M/19",
      transaction_type: "Sales",
      property_type: "PLOT",
      booking_date: "27-09-2023",
      channel: "Broker",
      broker_name: "Broker 4",
      customer_name: "Customer 9",
      relation_id: "REL/364/000042",
      cluster: "Cluster 2",
      scheme: "Scheme 2",
      ou_names: "OU 2",
      value: 57508563.24,
    },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="px-6 py-6">
      {/* Added explanation text */}
      <div className="mb-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
        <p className="text-sm text-gray-700 leading-relaxed">
          Input source data from Netsuite, Excels, SAP, and Budget sheets,
          having mixed currencies, multiple entities, and the native account
          codes.
        </p>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="text-gray-700">
          <span className="font-medium">Input Files 3/4</span>
          <span className="mx-2 text-gray-400">|</span>
          <span className="text-gray-500">
            Task completion date: {new Date().toLocaleDateString()}
          </span>
        </div>
        <button className="flex items-center space-x-1 px-3 py-1.5 bg-white border border-gray-300 rounded-md text-sm text-gray-600">
          <Plus className="h-4 w-4" />
          <span>Add Input</span>
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tag
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center">
                  Assignee
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Update
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Data Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Task Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Lock
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* Row 1 */}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span className="text-sm font-medium text-gray-900">
                    Headcount Input
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap"></td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-white font-medium">C</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                08/05/2024
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                  <div className="text-sm text-gray-500 bg-green-50 px-2 py-0.5 rounded">
                    Data Updated
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap"></td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2.5 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium flex items-center w-fit">
                  <Check className="h-3.5 w-3.5 mr-1" />
                  Completed
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap"></td>
            </tr>

            {/* Row 2 */}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span className="text-sm font-medium text-gray-900">
                    GL NetSuite - Monthly
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded">
                  07/2024
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-600 font-medium">A</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                08/15/2024
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                  <div className="text-sm text-gray-500 bg-green-50 px-2 py-0.5 rounded">
                    Data Updated
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap"></td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2.5 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium flex items-center w-fit">
                  <Check className="h-3.5 w-3.5 mr-1" />
                  Completed
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap"></td>
            </tr>

            {/* Row 3 */}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span className="text-sm font-medium text-gray-900">
                    GL SAP - Monthly
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded">
                  07/2024
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-600 font-medium">A</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                08/06/2024
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                  <div className="text-sm text-gray-500 bg-green-50 px-2 py-0.5 rounded">
                    Data Updated
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap"></td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2.5 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium flex items-center w-fit">
                  <Check className="h-3.5 w-3.5 mr-1" />
                  Completed
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap"></td>
            </tr>

            {/* Row 4 */}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span className="text-sm font-medium text-gray-900">
                    Budget HC Input
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded">
                  07/2024
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-600 font-medium">A</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-2 w-2 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="text-sm text-yellow-700 bg-yellow-50 px-2 py-0.5 rounded">
                    Not Updated
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="px-3 py-1 bg-blue-600 text-white rounded text-xs font-medium">
                  Upload New Version
                </button>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="px-3 py-1 bg-white border border-gray-300 text-gray-600 rounded text-xs font-medium">
                  Mark Complete
                </button>
              </td>
              <td className="px-6 py-4 whitespace-nowrap"></td>
            </tr>

            {/* New Row 5 - Source GL */}
            <tr
              className="cursor-pointer hover:bg-gray-50"
              onClick={toggleDropdown}
            >
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span className="text-sm font-medium text-gray-900">
                    Raw Sales Data
                  </span>
                  {isDropdownOpen ? (
                    <ChevronUp className="ml-2 h-4 w-4 text-gray-500" />
                  ) : (
                    <ChevronDown className="ml-2 h-4 w-4 text-gray-500" />
                  )}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded">
                  04/2025
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-600 font-medium">A</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                05/01/2025
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                  <div className="text-sm text-gray-500 bg-green-50 px-2 py-0.5 rounded">
                    Data Updated
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap"></td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2.5 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium flex items-center w-fit">
                  <Check className="h-3.5 w-3.5 mr-1" />
                  Completed
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap"></td>
            </tr>

            {/* Dropdown content */}
            {isDropdownOpen && (
              <tr>
                <td colSpan="8" className="px-6 py-4">
                  <div className="bg-gray-50 rounded-md p-4 overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead>
                        <tr>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                            Transaction ID
                          </th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                            Property Number
                          </th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                            Transaction Type
                          </th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                            Property Type
                          </th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                            Booking Date
                          </th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                            Channel
                          </th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                            Broker Name
                          </th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                            Customer Name
                          </th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                            Relation ID
                          </th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                            Cluster
                          </th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                            Scheme
                          </th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                            OU Names
                          </th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                            Value
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {transactionData.map((transaction) => (
                          <tr key={transaction.id} className="hover:bg-gray-50">
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                              {transaction.id}
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                              {transaction.property_num}
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                              {transaction.transaction_type}
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                              {transaction.property_type}
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                              {transaction.booking_date}
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                              {transaction.channel}
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                              {transaction.broker_name || "-"}
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                              {transaction.customer_name}
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                              {transaction.relation_id}
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                              {transaction.cluster}
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                              {transaction.scheme}
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                              {transaction.ou_names}
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                              {transaction.value.toLocaleString("en-US", {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Next Button */}
      <div className="flex justify-end mt-6">
        <button
          className="px-5 py-2 bg-indigo-600 text-white rounded-md font-medium"
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default InputStep;