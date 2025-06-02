// // AllocationEliminationStep.jsx
// import React from 'react';
// import { Plus, Check } from 'lucide-react';

// const AllocationEliminationStep = ({ onBack, onNext }) => {
//   return (
//     <div className="px-6 py-6">
//       <div className="flex justify-between items-center mb-4">
//         <div className="text-gray-700">
//           <span className="font-medium">Input Files 1/2</span>
//           <span className="mx-2 text-gray-400">|</span>
//           <span className="text-gray-500">Task completion date: 09/05/2025</span>
//         </div>
//         <button className="flex items-center space-x-1 px-3 py-1.5 bg-white border border-gray-300 rounded-md text-sm text-gray-600">
//           <Plus className="h-4 w-4" />
//           <span>Add input</span>
//         </button>
//       </div>
      
//       {/* Table */}
//       <div className="bg-white rounded-lg shadow-sm overflow-hidden overflow-x-auto">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead>
//             <tr className="bg-gray-50">
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tag</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 <div className="flex items-center">
//                   Assignee
//                   <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </div>
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Update</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data Status</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Task Status</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lock</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {/* Row 1 */}
//             <tr>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <div className="flex items-center">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                   </svg>
//                   <span className="text-sm font-medium text-gray-900">Allocations Model</span>
//                 </div>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap"></td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
//                   <span className="text-white font-medium">S</span>
//                 </div>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">02/26/2024</td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <div className="flex items-center">
//                   <div className="flex-shrink-0 h-2 w-2 rounded-full bg-green-500 mr-2"></div>
//                   <div className="text-sm text-gray-500 bg-green-50 px-2 py-0.5 rounded">Data Updated</div>
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
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                   </svg>
//                   <span className="text-sm font-medium text-gray-900">Eliminations</span>
//                 </div>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded">07/2024</span>
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
//                   <div className="text-sm text-yellow-700 bg-yellow-50 px-2 py-0.5 rounded">Not Updated</div>
//                 </div>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <button className="px-3 py-1 bg-blue-600 text-white rounded text-xs font-medium">Upload New Version</button>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <button className="px-3 py-1 bg-white border border-gray-300 text-gray-600 rounded text-xs font-medium">Mark Complete</button>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap"></td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
      
//       {/* Navigation buttons */}
//       <div className="flex justify-between mt-6">
//         <button 
//           className="px-5 py-2 bg-white border border-gray-300 text-gray-700 rounded-md font-medium flex items-center"
//           onClick={onBack}
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
//           </svg>
//           Back
//         </button>
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

// export default AllocationEliminationStep;




// import React, { useState } from 'react';
// import { Plus, Check, X, ChevronDown, ChevronUp } from 'lucide-react';

// const AllocationEliminationStep = ({ onBack, onNext }) => {
//   const [isConfigOpen, setIsConfigOpen] = useState(false);
//   const [isGeneratingRules, setIsGeneratingRules] = useState(false);
//   const [rulesGenerated, setRulesGenerated] = useState(false);
//   const [isApplyingRules, setIsApplyingRules] = useState(false);
//   const [rulesApplied, setRulesApplied] = useState(false);
//   const [isGlAllocatedAdded, setIsGlAllocatedAdded] = useState(false);
//   const [isGlAllocatedOpen, setIsGlAllocatedOpen] = useState(false);

//   // Rules data
//   const rulesData = [
//     { ruleId: 1, sourceAccount: "OPEX_RENT", targetEntity: "US01", percent: 0.5 },
//     { ruleId: 1, sourceAccount: "OPEX_RENT", targetEntity: "IN01", percent: 0.5 }
//   ];

//   // Allocated GL data
//   const allocatedGlData = [
//     { transactionId: 1, date: "2025-04-30", accountCode: "4001", description: "Sales", debit: 0.0, credit: 50000, currency: "USD", entity: "US01", canonicalAccount: "REVENUE_SALES", accountName: "Sales Revenue", rateToINR: 83, debitINR: 0.0, creditINR: 4150000 },
//     { transactionId: 2, date: "2025-04-30", accountCode: "5005", description: "COGS", debit: 20000.0, credit: 0, currency: "USD", entity: "US01", canonicalAccount: "COGS", accountName: "Cost of Goods Sold", rateToINR: 83, debitINR: 1660000.0, creditINR: 0 },
//     { transactionId: 4, date: "2025-04-30", accountCode: "4001", description: "Sales (India)", debit: 0.0, credit: 300000, currency: "INR", entity: "IN01", canonicalAccount: "REVENUE_SALES", accountName: "Sales Revenue", rateToINR: 1, debitINR: 0.0, creditINR: 300000 },
//     { transactionId: 5, date: "2025-04-30", accountCode: "9001", description: "Inter‑co Revenue", debit: 0.0, credit: 10000, currency: "USD", entity: "US01", canonicalAccount: "IC_REVENUE", accountName: "Inter‑company Revenue", rateToINR: 83, debitINR: 0.0, creditINR: 0 },
//     { transactionId: 6, date: "2025-04-30", accountCode: "9101", description: "Inter‑co Expense", debit: 10000.0, credit: 0, currency: "USD", entity: "IN01", canonicalAccount: "IC_EXPENSE", accountName: "Inter‑company Expense", rateToINR: 83, debitINR: 0.0, creditINR: 0 },
//     { transactionId: "A3US01", date: "2025-04-30", accountCode: "6200", description: "Allocated Rent to US01", debit: 135000.0, credit: 0, currency: "INR", entity: "US01", canonicalAccount: "OPEX_RENT", accountName: "", rateToINR: 1, debitINR: 135000.0, creditINR: 0 },
//     { transactionId: "A3IN01", date: "2025-04-30", accountCode: "6200", description: "Allocated Rent to IN01", debit: 135000.0, credit: 0, currency: "INR", entity: "IN01", canonicalAccount: "OPEX_RENT", accountName: "", rateToINR: 1, debitINR: 135000.0, creditINR: 0 }
//   ];

//   const openConfig = () => {
//     setIsConfigOpen(true);
//   };

//   const closeConfig = () => {
//     setIsConfigOpen(false);
//   };

//   const generateRules = () => {
//     setIsGeneratingRules(true);

//     // Simulate AI processing with a timeout
//     setTimeout(() => {
//       setIsGeneratingRules(false);
//       setRulesGenerated(true);
//     }, 1500);
//   };

//   const applyRules = () => {
//     setIsApplyingRules(true);

//     // Simulate rule application with a timeout
//     setTimeout(() => {
//       setIsApplyingRules(false);
//       setRulesApplied(true);

//       // Close the modal and add the GL allocated row after a short delay
//       setTimeout(() => {
//         setIsConfigOpen(false);
//         setIsGlAllocatedAdded(true);
//       }, 1000);
//     }, 1500);
//   };

//   const toggleGlAllocatedDropdown = () => {
//     setIsGlAllocatedOpen(!isGlAllocatedOpen);
//   };

//   return (
//     <div className="px-6 py-6">
//       <div className="flex justify-between items-center mb-4">
//         <div className="text-gray-700">
//           <span className="font-medium">Input Files 1/2</span>
//           <span className="mx-2 text-gray-400">|</span>
//           <span className="text-gray-500">Task completion date: 09/05/2025</span>
//         </div>
//         <button 
//           className="flex items-center space-x-1 px-3 py-1.5 bg-purple-300 border border-purple-400 shadow-2xs rounded-md text-sm text-black cursor-pointer hover:bg-purple-400 hover:text-white transition duration-200 ease-in-out"
//           onClick={openConfig}
//         >
//           <Plus className="h-4 w-4" />
//           <span>Add Rules</span>
//         </button>
//       </div>
      
//       {/* Table */}
//       <div className="bg-white rounded-lg shadow-sm overflow-hidden overflow-x-auto">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead>
//             <tr className="bg-gray-50">
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tag</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 <div className="flex items-center">
//                   Assignee
//                   <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </div>
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Update</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data Status</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Task Status</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lock</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {/* GL Allocated Row - Only shown after rules are applied */}
//             {isGlAllocatedAdded && (
//               <>
//                 <tr 
//                   className="cursor-pointer hover:bg-gray-50"
//                   onClick={toggleGlAllocatedDropdown}
//                 >
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="flex items-center">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                       </svg>
//                       <span className="text-sm font-medium text-gray-900">GL Allocated</span>
//                       {isGlAllocatedOpen ? (
//                         <ChevronUp className="ml-2 h-4 w-4 text-gray-500" />
//                       ) : (
//                         <ChevronDown className="ml-2 h-4 w-4 text-gray-500" />
//                       )}
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded">{new Date().toLocaleDateString('en-US', { month: '2-digit', year: 'numeric' }).replace('/', '/')}</span>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
//                       <span className="text-white font-medium">S</span>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     {new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }).replace(/\//g, '/')}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="flex items-center">
//                       <div className="flex-shrink-0 h-2 w-2 rounded-full bg-green-500 mr-2"></div>
//                       <div className="text-sm text-gray-500 bg-green-50 px-2 py-0.5 rounded">Data Updated</div>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap"></td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span className="px-2.5 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium flex items-center w-fit">
//                       <Check className="h-3.5 w-3.5 mr-1" />
//                       Completed
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap"></td>
//                 </tr>
                
//                 {/* Dropdown content for GL Allocated */}
//                 {isGlAllocatedOpen && (
//                   <tr>
//                     <td colSpan="8" className="px-6 py-4">
//                       <div className="bg-gray-50 rounded-md p-4 overflow-x-auto">
//                         <table className="min-w-full divide-y divide-gray-200">
//                           <thead>
//                             <tr>
//                               <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Transaction ID</th>
//                               <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
//                               <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Account Code</th>
//                               <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
//                               <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Debit</th>
//                               <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Credit</th>
//                               <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Currency</th>
//                               <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Entity</th>
//                               <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Canonical Account</th>
//                               <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Account Name</th>
//                               <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Rate To INR</th>
//                               <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Debit INR</th>
//                               <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Credit INR</th>
//                             </tr>
//                           </thead>
//                           <tbody className="bg-white divide-y divide-gray-200">
//                             {allocatedGlData.map((item, index) => (
//                               <tr key={index} className="hover:bg-gray-50">
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{item.transactionId}</td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{item.date}</td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{item.accountCode}</td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{item.description}</td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{item.debit.toLocaleString()}</td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{item.credit.toLocaleString()}</td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{item.currency}</td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{item.entity}</td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{item.canonicalAccount}</td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{item.accountName}</td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{item.rateToINR}</td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{item.debitINR.toLocaleString()}</td>
//                                 <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{item.creditINR.toLocaleString()}</td>
//                               </tr>
//                             ))}
//                           </tbody>
//                         </table>
//                       </div>
//                     </td>
//                   </tr>
//                 )}
//               </>
//             )}
            
//             {/* Row 1 */}
//             <tr>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <div className="flex items-center">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                   </svg>
//                   <span className="text-sm font-medium text-gray-900">Allocations Model</span>
//                 </div>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap"></td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
//                   <span className="text-white font-medium">S</span>
//                 </div>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">02/26/2024</td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <div className="flex items-center">
//                   <div className="flex-shrink-0 h-2 w-2 rounded-full bg-green-500 mr-2"></div>
//                   <div className="text-sm text-gray-500 bg-green-50 px-2 py-0.5 rounded">Data Updated</div>
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
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                   </svg>
//                   <span className="text-sm font-medium text-gray-900">Eliminations</span>
//                 </div>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded">07/2024</span>
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
//                   <div className="text-sm text-yellow-700 bg-yellow-50 px-2 py-0.5 rounded">Not Updated</div>
//                 </div>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <button className="px-3 py-1 bg-blue-600 text-white rounded text-xs font-medium">Upload New Version</button>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <button className="px-3 py-1 bg-white border border-gray-300 text-gray-600 rounded text-xs font-medium">Mark Complete</button>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap"></td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
      
//       {/* Navigation buttons */}
//       <div className="flex justify-between mt-6">
//         <button 
//           className="px-5 py-2 bg-white border border-gray-300 text-gray-700 rounded-md font-medium flex items-center"
//           onClick={onBack}
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
//           </svg>
//           Back
//         </button>
//         <button 
//           className="px-5 py-2 bg-indigo-600 text-white rounded-md font-medium"
//           onClick={onNext}
//         >
//           Next
//         </button>
//       </div>

//       {/* Configuration Task Modal */}
//       {isConfigOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg shadow-xl w-3/4 max-w-4xl max-h-[90vh] overflow-y-auto">
//             {/* Modal Header */}
//             <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
//               <h3 className="text-lg font-medium text-gray-900">Allocation Rules Configuration</h3>
//               <button 
//                 className="text-gray-400 hover:text-gray-500"
//                 onClick={closeConfig}
//               >
//                 <X className="h-5 w-5" />
//               </button>
//             </div>
            
//             {/* Modal Content */}
//             <div className="px-6 py-4">
//               {!rulesGenerated ? (
//                 <div className="text-center py-10">
//                   <button 
//                     className={`px-4 py-2 rounded-md text-white font-medium ${
//                       isGeneratingRules ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'
//                     }`}
//                     onClick={generateRules}
//                     disabled={isGeneratingRules}
//                   >
//                     {isGeneratingRules ? (
//                       <span className="flex items-center">
//                         <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                           <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                           <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                         </svg>
//                         Generating Rules...
//                       </span>
//                     ) : (
//                       'Generate Rules with AI'
//                     )}
//                   </button>
//                 </div>
//               ) : (
//                 <div>
//                   <div className="overflow-x-auto">
//                     <table className="min-w-full divide-y divide-gray-200">
//                       <thead>
//                         <tr>
//                           <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rule ID</th>
//                           <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source Account</th>
//                           <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Target Entity</th>
//                           <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Percent</th>
//                         </tr>
//                       </thead>
//                       <tbody className="bg-white divide-y divide-gray-200">
//                         {rulesData.map((rule, index) => (
//                           <tr key={index}>
//                             <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{rule.ruleId}</td>
//                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{rule.sourceAccount}</td>
//                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{rule.targetEntity}</td>
//                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{rule.percent}</td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
                  
//                   <div className="mt-6 flex justify-end">
//                     <button 
//                       className={`px-4 py-2 rounded-md text-white font-medium ${
//                         isApplyingRules ? 'bg-indigo-400' : rulesApplied ? 'bg-green-600' : 'bg-indigo-600 hover:bg-indigo-700'
//                       }`}
//                       onClick={applyRules}
//                       disabled={isApplyingRules || rulesApplied}
//                     >
//                       {isApplyingRules ? (
//                         <span className="flex items-center">
//                           <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                           </svg>
//                           Applying Rules...
//                         </span>
//                       ) : rulesApplied ? (
//                         <span className="flex items-center">
//                           <Check className="h-4 w-4 mr-1" />
//                           Rules Applied
//                         </span>
//                       ) : (
//                         'Apply Rules'
//                       )}
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AllocationEliminationStep;





import React, { useState } from "react";
import { BarChart3, Grid3X3, Trophy, TrendingUp, Building2, Users } from "lucide-react";

const PreviewReports = ({ onBack, onNext }) => {
  const [activeTab, setActiveTab] = useState("broker-performance");

  // Broker Performance data
  const brokerData = [
    {
      broker_name: "Direct",
      channel_type: "Direct",
      performance_tier: "Platinum",
      business_segment: "Key Partner",
      risk_level: "Medium Risk",
      sales_units: 498,
      cancel_units: 117,
      net_units: 381,
      total_transactions: 615,
      net_value: 85339995814.98,
      sales_value: 77897026849.98,
      cancel_value: -7442968965.0,
      cancel_rate_pct: 23.49,
      sales_rate_pct: 80.98,
      conversion_rate: 80.98,
      avg_ticket_size: 223989490.33,
      revenue_rank: 1,
      volume_rank: 1,
      overall_performance_score: 98.2,
      growth_potential: "High"
    },
    {
      broker_name: "Broker 25",
      channel_type: "Broker",
      performance_tier: "Bronze",
      business_segment: "Regular Partner",
      risk_level: "Low Risk",
      sales_units: 64,
      cancel_units: 6,
      net_units: 58,
      total_transactions: 70,
      net_value: 13986776009.55,
      sales_value: 13287833716.69,
      cancel_value: -698942292.86,
      cancel_rate_pct: 9.38,
      sales_rate_pct: 91.43,
      conversion_rate: 91.43,
      avg_ticket_size: 241151310.51,
      revenue_rank: 2,
      volume_rank: 4,
      overall_performance_score: 40.5,
      growth_potential: "Very High"
    },
    {
      broker_name: "Broker 47",
      channel_type: "Broker",
      performance_tier: "Bronze",
      business_segment: "Regular Partner",
      risk_level: "Medium Risk",
      sales_units: 78,
      cancel_units: 16,
      net_units: 62,
      total_transactions: 94,
      net_value: 8971614028.53,
      sales_value: 7622435400.17,
      cancel_value: -1349178628.36,
      cancel_rate_pct: 20.51,
      sales_rate_pct: 82.98,
      conversion_rate: 82.98,
      avg_ticket_size: 144703452.07,
      revenue_rank: 3,
      volume_rank: 3,
      overall_performance_score: 37.6,
      growth_potential: "Low"
    },
    {
      broker_name: "Broker 217",
      channel_type: "Broker",
      performance_tier: "Bronze",
      business_segment: "Regular Partner",
      risk_level: "Low Risk",
      sales_units: 57,
      cancel_units: 6,
      net_units: 51,
      total_transactions: 63,
      net_value: 8015264147.40,
      sales_value: 7406548833.15,
      cancel_value: -608715314.25,
      cancel_rate_pct: 10.53,
      sales_rate_pct: 90.48,
      conversion_rate: 90.48,
      avg_ticket_size: 157162042.11,
      revenue_rank: 4,
      volume_rank: 5,
      overall_performance_score: 37.0,
      growth_potential: "Medium"
    },
    {
      broker_name: "Broker 10",
      channel_type: "Broker",
      performance_tier: "Basic",
      business_segment: "Regular Partner",
      risk_level: "Medium Risk",
      sales_units: 36,
      cancel_units: 7,
      net_units: 29,
      total_transactions: 43,
      net_value: 6726165627.17,
      sales_value: 5799916261.68,
      cancel_value: -926249365.49,
      cancel_rate_pct: 19.44,
      sales_rate_pct: 83.72,
      conversion_rate: 83.72,
      avg_ticket_size: 231936745.76,
      revenue_rank: 5,
      volume_rank: 8,
      overall_performance_score: 34.0,
      growth_potential: "High"
    }
  ];

  // Region Property Matrix data
  const regionPropertyData = [
    {
      region: "Delhi NCR",
      property_type: "Apartment",
      performance_category: "Star Performer",
      risk_category: "Medium Risk",
      sales_units: 1576,
      cancel_units: 197,
      net_units: 1379,
      total_transactions: 1773,
      net_value: 340299082499.23,
      sales_value: 317749115683.74,
      cancel_value: -22549966815.49,
      cancel_rate_pct: 12.5,
      sales_rate_pct: 88.89,
      avg_ticket_size: 246772358.59,
      revenue_rank: 1,
      volume_rank: 1,
      revenue_market_share_pct: 69.8,
      volume_market_share_pct: 52.35
    },
    {
      region: "Gurgaon",
      property_type: "Independent Floor",
      performance_category: "Star Performer",
      risk_category: "Medium Risk",
      sales_units: 1026,
      cancel_units: 106,
      net_units: 920,
      total_transactions: 1132,
      net_value: 90636340808.52,
      sales_value: 78876005188.65,
      cancel_value: -11760335619.87,
      cancel_rate_pct: 10.33,
      sales_rate_pct: 90.64,
      avg_ticket_size: 98517761.75,
      revenue_rank: 2,
      volume_rank: 2,
      revenue_market_share_pct: 18.59,
      volume_market_share_pct: 34.93
    },
    {
      region: "Noida",
      property_type: "Plot",
      performance_category: "Strong Performer",
      risk_category: "Medium Risk",
      sales_units: 369,
      cancel_units: 63,
      net_units: 306,
      total_transactions: 432,
      net_value: 45477954352.96,
      sales_value: 42212326554.27,
      cancel_value: -3265627798.69,
      cancel_rate_pct: 17.07,
      sales_rate_pct: 85.42,
      avg_ticket_size: 148620765.86,
      revenue_rank: 3,
      volume_rank: 3,
      revenue_market_share_pct: 9.33,
      volume_market_share_pct: 11.62
    },
    {
      region: "Bangalore",
      property_type: "Shop",
      performance_category: "Strong Performer",
      risk_category: "High Risk",
      sales_units: 28,
      cancel_units: 19,
      net_units: 9,
      total_transactions: 47,
      net_value: 5790373744.35,
      sales_value: 4827620572.8,
      cancel_value: -962753171.55,
      cancel_rate_pct: 67.86,
      sales_rate_pct: 59.57,
      avg_ticket_size: 643374860.48,
      revenue_rank: 4,
      volume_rank: 5,
      revenue_market_share_pct: 1.19,
      volume_market_share_pct: 0.34
    },
    {
      region: "Hyderabad",
      property_type: "Office",
      performance_category: "Strong Performer",
      risk_category: "High Risk",
      sales_units: 51,
      cancel_units: 36,
      net_units: 15,
      total_transactions: 87,
      net_value: 3983270781.19,
      sales_value: 2845497711.39,
      cancel_value: -1137773069.8,
      cancel_rate_pct: 70.59,
      sales_rate_pct: 58.62,
      avg_ticket_size: 265551385.41,
      revenue_rank: 5,
      volume_rank: 4,
      revenue_market_share_pct: 0.82,
      volume_market_share_pct: 0.57
    }
  ];

  // Sales Summary data
  const salesSummaryData = [
    {
      fiscal_year: 2023,
      fiscal_quarter: "Q4",
      total_units: 31,
      cancel_units: 12,
      net_units: 19,
      gross_value: 7256401427.33,
      cancel_value: -1283788819.16,
      net_value: 8540190246.49,
      avg_ticket_size: 449483697.18,
      cancel_rate_pct: 38.71,
      units_growth_pct: null,
      revenue_growth_pct: null,
      period: "2023-Q4"
    },
    {
      fiscal_year: 2024,
      fiscal_quarter: "Q1",
      total_units: 573,
      cancel_units: 116,
      net_units: 457,
      gross_value: 63969104614.53,
      cancel_value: -9271778648.47,
      net_value: 73240883263.0,
      avg_ticket_size: 160264514.8,
      cancel_rate_pct: 20.24,
      units_growth_pct: 2305.26,
      revenue_growth_pct: 757.60,
      period: "2024-Q1"
    },
    {
      fiscal_year: 2024,
      fiscal_quarter: "Q2",
      total_units: 504,
      cancel_units: 121,
      net_units: 383,
      gross_value: 71229513247.0,
      cancel_value: -11816528356.05,
      net_value: 83046041603.05,
      avg_ticket_size: 216830395.83,
      cancel_rate_pct: 24.01,
      units_growth_pct: -16.19,
      revenue_growth_pct: 13.39,
      period: "2024-Q2"
    },
    {
      fiscal_year: 2024,
      fiscal_quarter: "Q3",
      total_units: 1854,
      cancel_units: 76,
      net_units: 1778,
      gross_value: 289772565463.27,
      cancel_value: -4978832261.97,
      net_value: 294751397725.24,
      avg_ticket_size: 165776939.1,
      cancel_rate_pct: 4.1,
      units_growth_pct: 364.23,
      revenue_growth_pct: 254.93,
      period: "2024-Q3"
    },
    {
      fiscal_year: 2024,
      fiscal_quarter: "Q4",
      total_units: 67,
      cancel_units: 85,
      net_units: -18,
      gross_value: 9580156049.06,
      cancel_value: -11099642503.59,
      net_value: 20679798552.65,
      avg_ticket_size: 0.0,
      cancel_rate_pct: 126.87,
      units_growth_pct: -101.01,
      revenue_growth_pct: -92.98,
      period: "2024-Q4"
    }
  ];

  const tabs = [
    {
      id: "broker-performance",
      name: "Broker Performance",
      icon: Trophy,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      id: "region-property-matrix",
      name: "Region Property Matrix", 
      icon: Building2,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      id: "sales-summary",
      name: "Sales Summary",
      icon: TrendingUp,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    }
  ];

  const formatCurrency = (value) => {
    if (value === null || value === undefined) return 'N/A';
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const formatNumber = (value) => {
    if (value === null || value === undefined) return 'N/A';
    return new Intl.NumberFormat('en-IN').format(value);
  };

  const formatPercentage = (value) => {
    if (value === null || value === undefined) return 'N/A';
    return `${value.toFixed(2)}%`;
  };

  const getPerformanceBadge = (tier) => {
    const colors = {
      'Platinum': 'bg-purple-100 text-purple-800',
      'Bronze': 'bg-amber-100 text-amber-800',
      'Basic': 'bg-gray-100 text-gray-800'
    };
    return colors[tier] || 'bg-gray-100 text-gray-800';
  };

  const getRiskBadge = (risk) => {
    const colors = {
      'Low Risk': 'bg-green-100 text-green-800',
      'Medium Risk': 'bg-yellow-100 text-yellow-800',
      'High Risk': 'bg-red-100 text-red-800'
    };
    return colors[risk] || 'bg-gray-100 text-gray-800';
  };

  const getGrowthBadge = (potential) => {
    const colors = {
      'High': 'bg-green-100 text-green-800',
      'Very High': 'bg-emerald-100 text-emerald-800',
      'Medium': 'bg-yellow-100 text-yellow-800',
      'Low': 'bg-red-100 text-red-800'
    };
    return colors[potential] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="px-6 py-6 relative">
      {/* Header explanation */}
      <div className="mb-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
        <p className="text-sm text-gray-700 leading-relaxed">
          Preview your generated reports with real-time data insights. Each report provides 
          comprehensive analytics with interactive filtering and detailed performance metrics 
          across all business dimensions.
        </p>
      </div>

      {/* Title and Status */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Preview Reports</h2>
          <div className="text-gray-700">
            <span className="font-medium">Report Preview 1/1</span>
            <span className="mx-2 text-gray-400">|</span>
            <span className="text-gray-500">
              Generated: {new Date().toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              const isActive = activeTab === tab.id;
              
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group inline-flex items-center py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                    isActive
                      ? `border-indigo-500 ${tab.color}`
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <IconComponent className={`mr-2 h-5 w-5 ${isActive ? tab.color : 'text-gray-400'}`} />
                  {tab.name}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        {/* Broker Performance Tab */}
        {activeTab === "broker-performance" && (
          <div className="p-6">
            <div className="flex items-center mb-4">
              <Trophy className="h-6 w-6 text-purple-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Broker Performance Leaderboard</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Broker</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tier</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk Level</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sales Units</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Net Value</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conversion Rate</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance Score</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Growth Potential</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {brokerData.map((broker, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className={`inline-flex items-center justify-center h-8 w-8 rounded-full text-sm font-medium ${
                            broker.revenue_rank === 1 ? 'bg-yellow-100 text-yellow-800' :
                            broker.revenue_rank === 2 ? 'bg-gray-100 text-gray-800' :
                            broker.revenue_rank === 3 ? 'bg-orange-100 text-orange-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {broker.revenue_rank}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{broker.broker_name}</div>
                          <div className="text-sm text-gray-500">{broker.channel_type}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPerformanceBadge(broker.performance_tier)}`}>
                          {broker.performance_tier}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getRiskBadge(broker.risk_level)}`}>
                          {broker.risk_level}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{formatNumber(broker.sales_units)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{formatCurrency(broker.net_value)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{formatPercentage(broker.conversion_rate)}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="text-sm font-medium text-gray-900">{broker.overall_performance_score}</span>
                          <div className="ml-2 w-16 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-indigo-600 h-2 rounded-full" 
                              style={{ width: `${broker.overall_performance_score}%` }}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getGrowthBadge(broker.growth_potential)}`}>
                          {broker.growth_potential}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Region Property Matrix Tab */}
        {activeTab === "region-property-matrix" && (
          <div className="p-6">
            <div className="flex items-center mb-4">
              <Building2 className="h-6 w-6 text-green-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Region × Property Matrix</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Region</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Net Units</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Net Value</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Market Share</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conversion Rate</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {regionPropertyData.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{item.region}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{item.property_type}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          item.performance_category === 'Star Performer' ? 'bg-green-100 text-green-800' :
                          item.performance_category === 'Strong Performer' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {item.performance_category}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getRiskBadge(item.risk_category)}`}>
                          {item.risk_category}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{formatNumber(item.net_units)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{formatCurrency(item.net_value)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{formatPercentage(item.revenue_market_share_pct)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{formatPercentage(item.sales_rate_pct)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Sales Summary Tab */}
        {activeTab === "sales-summary" && (
          <div className="p-6">
            <div className="flex items-center mb-4">
              <TrendingUp className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Sales Summary</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Period</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Units</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Net Units</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Net Value</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg Ticket Size</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cancel Rate</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Units Growth</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue Growth</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {salesSummaryData.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{item.fiscal_year} {item.fiscal_quarter}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{formatNumber(item.total_units)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{formatNumber(item.net_units)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{formatCurrency(item.net_value)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{formatCurrency(item.avg_ticket_size)}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          item.cancel_rate_pct > 50 ? 'bg-red-100 text-red-800' :
                          item.cancel_rate_pct > 20 ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {formatPercentage(item.cancel_rate_pct)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`text-sm font-medium ${
                          item.units_growth_pct > 0 ? 'text-green-600' : 
                          item.units_growth_pct < 0 ? 'text-red-600' : 
                          'text-gray-500'
                        }`}>
                          {item.units_growth_pct !== null ? `${item.units_growth_pct.toFixed(1)}%` : 'N/A'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`text-sm font-medium ${
                          item.revenue_growth_pct > 0 ? 'text-green-600' : 
                          item.revenue_growth_pct < 0 ? 'text-red-600' : 
                          'text-gray-500'
                        }`}>
                          {item.revenue_growth_pct !== null ? `${item.revenue_growth_pct.toFixed(1)}%` : 'N/A'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between mt-8">
        <button
          className="px-5 py-2 bg-white border border-gray-300 text-gray-700 rounded-md font-medium flex items-center hover:bg-gray-50 transition-colors"
          onClick={onBack}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back
        </button>
        <button
          className="px-5 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors"
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PreviewReports;