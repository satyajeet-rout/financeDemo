

// import React, { useState, useEffect } from 'react';
// import { Plus, Check, X, ChevronDown, ChevronUp } from 'lucide-react';

// const ChartOfAccountsStep = ({ onBack, onNext }) => {
//   const [isMapperOpen, setIsMapperOpen] = useState(false);
//   const [isGeneratingMappings, setIsGeneratingMappings] = useState(false);
//   const [mappingsGenerated, setMappingsGenerated] = useState(false);
//   const [isMappingData, setIsMappingData] = useState(false);
//   const [mappingCompleted, setMappingCompleted] = useState(false);
//   const [mappedDataAdded, setMappedDataAdded] = useState(false);
//   const [isMappedDataOpen, setIsMappedDataOpen] = useState(false);

//   const mappingData = [
//     { sourceAccountCode: "4001", canonicalAccount: "REVENUE_SALES", accountName: "Sales Revenue" },
//     { sourceAccountCode: "5005", canonicalAccount: "COGS", accountName: "Cost of Goods Sold" },
//     { sourceAccountCode: "6200", canonicalAccount: "OPEX_RENT", accountName: "Office Rent" },
//     { sourceAccountCode: "9001", canonicalAccount: "IC_REVENUE", accountName: "Inter‑company Revenue" },
//     { sourceAccountCode: "9101", canonicalAccount: "IC_EXPENSE", accountName: "Inter‑company Expense" }
//   ];
  
//   const glMappedData = [
//     { transactionId: 1, date: "2025-04-30", accountCode: "4001", description: "Sales", debit: 0, credit: 50000, currency: "USD", entity: "US01", canonicalAccount: "REVENUE_SALES", accountName: "Sales Revenue" },
//     { transactionId: 2, date: "2025-04-30", accountCode: "5005", description: "COGS", debit: 20000, credit: 0, currency: "USD", entity: "US01", canonicalAccount: "COGS", accountName: "Cost of Goods Sold" },
//     { transactionId: 3, date: "2025-04-30", accountCode: "6200", description: "Rent", debit: 3000, credit: 0, currency: "EUR", entity: "EU01", canonicalAccount: "OPEX_RENT", accountName: "Office Rent" },
//     { transactionId: 4, date: "2025-04-30", accountCode: "4001", description: "Sales (India)", debit: 0, credit: 300000, currency: "INR", entity: "IN01", canonicalAccount: "REVENUE_SALES", accountName: "Sales Revenue" },
//     { transactionId: 5, date: "2025-04-30", accountCode: "9001", description: "Inter‑co Revenue", debit: 0, credit: 10000, currency: "USD", entity: "US01", canonicalAccount: "IC_REVENUE", accountName: "Inter‑company Revenue" },
//     { transactionId: 6, date: "2025-04-30", accountCode: "9101", description: "Inter‑co Expense", debit: 10000, credit: 0, currency: "USD", entity: "IN01", canonicalAccount: "IC_EXPENSE", accountName: "Inter‑company Expense" }
//   ];

//   const openMapper = () => {
//     setIsMapperOpen(true);
//   };

//   const closeMapper = () => {
//     setIsMapperOpen(false);
//   };

//   const generateMappings = () => {
//     setIsGeneratingMappings(true);
    
//     // Simulate AI generation process with a timeout
//     setTimeout(() => {
//       setIsGeneratingMappings(false);
//       setMappingsGenerated(true);
//     }, 2000);
//   };

//   const startMappingData = () => {
//     setIsMappingData(true);
    
//     // Simulate mapping process with a timeout
//     setTimeout(() => {
//       setIsMappingData(false);
//       setMappingCompleted(true);
      
//       // Close the modal and add the mapped data row after a short delay
//       setTimeout(() => {
//         setIsMapperOpen(false);
//         setMappedDataAdded(true);
//       }, 1000);
//     }, 2000);
//   };

//   const toggleMappedData = () => {
//     setIsMappedDataOpen(!isMappedDataOpen);
//   };

//   return (
//     <div className="px-6 py-6 relative">
      
//       {/* Added COA Mapping explanation text */}
//       <div className="mb-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
//         <p className="text-sm text-gray-700 leading-relaxed">
//           COA Mapping translates the heterogeneous account codes coming from each source system into one standard chart of accounts that your reports understand. During ingestion the platform cross-references every GL line with a master lookup table, replaces the source code with the canonical code, and flags any unmapped items for review. The result is a single, consistent language for revenue, COGS, cash, and every other account, so consolidation and analytics run cleanly across entities and ERPs.
//         </p>
//       </div>
      
//       <div className="flex justify-between items-center mb-4">
//         <div className="text-gray-700">
//           <span className="font-medium">Mapping Files 1/2</span>
//           <span className="mx-2 text-gray-400">|</span>
//           <span className="text-gray-500">Task completion date: 09/05/2025</span>
//         </div>
//         <button 
//           className="flex items-center space-x-1 px-3 py-1.5 bg-purple-300 border border-purple-400 shadow-2xs rounded-md text-sm text-black cursor-pointer hover:bg-purple-400 hover:text-white transition duration-200 ease-in-out"
//           onClick={openMapper}
//         >
//           <Plus className="h-4 w-4" />
//           <span>CoA Mapper</span>
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
//             {/* New Mapped Data Row - Only shown after mapping is completed */}
//             {mappedDataAdded && (
//               <>
//                 <tr 
//                   className="cursor-pointer hover:bg-gray-50" 
//                   onClick={toggleMappedData}
//                 >
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="flex items-center">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
//                       </svg>
//                       <span className="text-sm font-medium text-gray-900">GL Mapped</span>
//                       {isMappedDataOpen ? (
//                         <ChevronUp className="ml-2 h-4 w-4 text-gray-500" />
//                       ) : (
//                         <ChevronDown className="ml-2 h-4 w-4 text-gray-500" />
//                       )}
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap"></td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
//                       <span className="text-white font-medium">S</span>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }).replace(/\//g, '/')}</td>
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

//                 {/* Dropdown content for Mapped Data */}
//                 {isMappedDataOpen && (
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
//                             </tr>
//                           </thead>
//                           <tbody className="bg-white divide-y divide-gray-200">
//                             {glMappedData.map((item, index) => (
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
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
//                   </svg>
//                   <span className="text-sm font-medium text-gray-900">DR CoA</span>
//                 </div>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap"></td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
//                   <span className="text-white font-medium">S</span>
//                 </div>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">03/28/2024</td>
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
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
//                   </svg>
//                   <span className="text-sm font-medium text-gray-900">Customer CoA</span>
//                 </div>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap"></td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
//                   <span className="text-white font-medium">S</span>
//                 </div>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">08/07/2024</td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <div className="flex items-center">
//                   <div className="flex-shrink-0 h-2 w-2 rounded-full bg-yellow-500 mr-2"></div>
//                   <div className="text-sm text-yellow-700 bg-yellow-50 px-2 py-0.5 rounded">1 Unmapped Items</div>
//                 </div>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <button className="px-3 py-1 bg-blue-600 text-white rounded text-xs font-medium">Update Unmapped Items</button>
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
      
//       {/* CoA Mapper Modal */}
//       {isMapperOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg shadow-xl w-3/4 max-w-4xl max-h-[90vh] overflow-y-auto">
//             {/* Modal Header */}
//             <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
//               <h3 className="text-lg font-medium text-gray-900">Chart of Accounts Mapper</h3>
//               <button 
//                 className="text-gray-400 hover:text-gray-500"
//                 onClick={closeMapper}
//               >
//                 <X className="h-5 w-5" />
//               </button>
//             </div>
            
//             {/* Modal Content */}
//             <div className="px-6 py-4">
//               {!mappingsGenerated ? (
//                 <div className="text-center py-10">
//                   <button 
//                     className={`px-4 py-2 rounded-md text-white font-medium ${
//                       isGeneratingMappings ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'
//                     }`}
//                     onClick={generateMappings}
//                     disabled={isGeneratingMappings}
//                   >
//                     {isGeneratingMappings ? (
//                       <span className="flex items-center">
//                         <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                           <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                           <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                         </svg>
//                         Generating Mappings...
//                       </span>
//                     ) : (
//                       'Generate Mappings with AI'
//                     )}
//                   </button>
//                 </div>
//               ) : (
//                 <div>
//                   <div className="overflow-x-auto">
//                     <table className="min-w-full divide-y divide-gray-200">
//                       <thead>
//                         <tr>
//                           <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source Account Code</th>
//                           <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Canonical Account</th>
//                           <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Account Name</th>
//                         </tr>
//                       </thead>
//                       <tbody className="bg-white divide-y divide-gray-200">
//                         {mappingData.map((item, index) => (
//                           <tr key={index}>
//                             <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.sourceAccountCode}</td>
//                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.canonicalAccount}</td>
//                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.accountName}</td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
                  
//                   <div className="mt-6 flex justify-end">
//                     <button 
//                       className={`px-4 py-2 rounded-md text-white font-medium ${
//                         isMappingData ? 'bg-indigo-400' : mappingCompleted ? 'bg-green-600' : 'bg-indigo-600 hover:bg-indigo-700'
//                       }`}
//                       onClick={startMappingData}
//                       disabled={isMappingData || mappingCompleted}
//                     >
//                       {isMappingData ? (
//                         <span className="flex items-center">
//                           <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                           </svg>
//                           Mapping Data...
//                         </span>
//                       ) : mappingCompleted ? (
//                         <span className="flex items-center">
//                           <Check className="h-4 w-4 mr-1" />
//                           Completed
//                         </span>
//                       ) : (
//                         'Start Mapping Data'
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

// export default ChartOfAccountsStep;




// import React, { useState, useEffect } from 'react';
// import { Plus, Check, X, ChevronDown, ChevronUp, AlertTriangle } from 'lucide-react';

// const ChartOfAccountsStep = ({ onBack, onNext }) => {
//   const [currentStage, setCurrentStage] = useState(0);
//   const [rowsProcessed, setRowsProcessed] = useState(0);
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [stageCompletions, setStageCompletions] = useState([false, false, false, false]);
//   const [processingComplete, setProcessingComplete] = useState(false);

//   const totalRows = 12084;
  
//   const realEstateData = [
//     { property_num: "00GHP14", transaction_type: "Sales", property_type: "APARTMENT", booking_date: "30-11-2023", channel: "Broker", broker_name: "Broker 1", customer_name: "Customer 1", relation_id: "REL/156/001379", cluster: "Cluster 1", scheme: "Scheme 1", ou_names: "OU 1", value: "10371439.69" },
//     { property_num: "00GHP14", transaction_type: "Sales", property_type: "APARTMENT", booking_date: "30-06-2023", channel: "Direct", broker_name: "", customer_name: "Customer 2", relation_id: "REL/156/001378", cluster: "Cluster 1", scheme: "Scheme 1", ou_names: "OU 1", value: "33021055.71" },
//     { property_num: "00GHP14", transaction_type: "Cancel", property_type: "APARTMENT", booking_date: "08-07-2023", channel: "Direct", broker_name: "", customer_name: "Customer 2", relation_id: "REL/156/001378", cluster: "Cluster 1", scheme: "Scheme 1", ou_names: "OU 1", value: "-13986247.3" },
//     { property_num: "24M/12", transaction_type: "Sales", property_type: "PLOT", booking_date: "27-09-2023", channel: "Direct", broker_name: "", customer_name: "Customer 3", relation_id: "REL/364/000031", cluster: "Cluster 2", scheme: "Scheme 2", ou_names: "OU 2", value: "69110436.22" },
//     { property_num: "24M/14", transaction_type: "Sales", property_type: "PLOT", booking_date: "28-09-2023", channel: "Direct", broker_name: "", customer_name: "Customer 4", relation_id: "REL/364/000065", cluster: "Cluster 2", scheme: "Scheme 2", ou_names: "OU 2", value: "68119415.24" },
//     { property_num: "24M/15", transaction_type: "Sales", property_type: "PLOT", booking_date: "28-09-2023", channel: "Direct", broker_name: "", customer_name: "Customer 5", relation_id: "REL/364/000073", cluster: "Cluster 2", scheme: "Scheme 2", ou_names: "OU 2", value: "113163102" },
//     { property_num: "24M/16", transaction_type: "Sales", property_type: "PLOT", booking_date: "28-09-2023", channel: "Broker", broker_name: "Broker 3", customer_name: "Customer 6", relation_id: "REL/364/000066", cluster: "Cluster 2", scheme: "Scheme 2", ou_names: "OU 2", value: "91249914.8" },
//     { property_num: "24M/17", transaction_type: "Sales", property_type: "PLOT", booking_date: "27-09-2023", channel: "Direct", broker_name: "", customer_name: "Customer 7", relation_id: "REL/364/000049", cluster: "Cluster 2", scheme: "Scheme 2", ou_names: "OU 2", value: "50104131.87" },
//     { property_num: "24M/18", transaction_type: "Sales", property_type: "PLOT", booking_date: "26-09-2023", channel: "Direct", broker_name: "", customer_name: "Customer 8", relation_id: "REL/364/000026", cluster: "Cluster 2", scheme: "Scheme 2", ou_names: "OU 2", value: "98826196.32" },
//     { property_num: "24M/19", transaction_type: "Sales", property_type: "PLOT", booking_date: "27-09-2023", channel: "Broker", broker_name: "Broker 4", customer_name: "Customer 9", relation_id: "REL/364/000042", cluster: "Cluster 2", scheme: "Scheme 2", ou_names: "OU 2", value: "57508563.24" }
//   ];

//   const stages = [
//     { name: "Profiling Columns", description: "Analyzing data types" },
//     { name: "Detecting Keys & Duplicates", description: "Finding duplicates" },
//     { name: "Merging Files", description: "Processing data" },
//     { name: "Mapping Fields", description: "Chart mapping" }
//   ];

//   const getColumnCertainty = (columnName) => {
//     const certainties = {
//       'property_num': 95,
//       'transaction_type': 98,
//       'property_type': 97,
//       'booking_date': 85,
//       'channel': 92,
//       'broker_name': 75,
//       'customer_name': 94,
//       'relation_id': 99,
//       'cluster': 96,
//       'scheme': 96,
//       'ou_names': 94,
//       'value': 88
//     };
//     return certainties[columnName] || 85;
//   };

//   const hasDataIssues = (columnName) => {
//     const issueColumns = ['broker_name'];
//     return issueColumns.includes(columnName);
//   };

//   useEffect(() => {
//     if (isProcessing) {
//       const stageInterval = setInterval(() => {
//         setCurrentStage(prev => {
//           if (prev < 3) {
//             setStageCompletions(completions => {
//               const newCompletions = [...completions];
//               newCompletions[prev] = true;
//               return newCompletions;
//             });
//             return prev + 1;
//           } else {
//             setStageCompletions(completions => {
//               const newCompletions = [...completions];
//               newCompletions[3] = true;
//               return newCompletions;
//             });
//             setIsProcessing(false);
//             setProcessingComplete(true);
//             clearInterval(stageInterval);
//             return prev;
//           }
//         });
//       }, 2000);

//       return () => clearInterval(stageInterval);
//     }
//   }, [isProcessing]);

//   useEffect(() => {
//     if (isProcessing && currentStage === 2) {
//       const rowInterval = setInterval(() => {
//         setRowsProcessed(prev => {
//           if (prev < totalRows) {
//             return Math.min(prev + 400, totalRows);
//           }
//           clearInterval(rowInterval);
//           return totalRows;
//         });
//       }, 50);

//       return () => clearInterval(rowInterval);
//     }
//   }, [isProcessing, currentStage]);

//   const startProcessing = () => {
//     setIsProcessing(true);
//     setCurrentStage(0);
//     setRowsProcessed(0);
//     setStageCompletions([false, false, false, false]);
//     setProcessingComplete(false);
//   };

//   return (
//     <div className="px-6 py-6">
//       {/* Header */}
//       <div className="mb-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
//         <h2 className="text-lg font-semibold text-gray-900 mb-2">Data Processing & Merge Studio</h2>
//         <p className="text-sm text-gray-700 leading-relaxed">
//           Our advanced processing engine profiles your data, detects relationships, merges multiple sources, and intelligently maps fields to standardized schemas. Watch as your raw real estate transaction data transforms into clean, analysis-ready insights.
//         </p>
//       </div>

//       {/* Action Button */}
//       <div className="flex justify-between items-center mb-6">
//         <div className="text-gray-700">
//           <span className="font-medium">Data Processing 1/1</span>
//           <span className="mx-2 text-gray-400">|</span>
//           <span className="text-gray-500">Task completion date: 09/05/2025</span>
//         </div>
//         <button 
//           className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition duration-200 ${
//             isProcessing 
//               ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
//               : 'bg-green-600 text-white hover:bg-green-700'
//           }`}
//           onClick={startProcessing}
//           disabled={isProcessing}
//         >
//           <Plus className="h-4 w-4" />
//           <span>{isProcessing ? 'Processing...' : 'Start Processing'}</span>
//         </button>
//       </div>

//       {/* Horizontal Process Tracker */}
//       <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
//         <h3 className="text-md font-semibold text-gray-900 mb-6">Processing Steps</h3>
        
//         <div className="flex items-center justify-between relative">
//           {/* Connecting Line */}
//           <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-300 z-0"></div>
          
//           {stages.map((stage, index) => (
//             <div key={index} className="flex flex-col items-center relative z-10 bg-white px-4">
//               {/* Step Circle */}
//               <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 border-4 ${
//                 stageCompletions[index] 
//                   ? 'bg-green-500 border-green-500 text-white' 
//                   : currentStage === index && isProcessing
//                   ? 'bg-blue-500 border-blue-500 text-white animate-pulse'
//                   : currentStage > index
//                   ? 'bg-green-500 border-green-500 text-white'
//                   : 'bg-white border-gray-300 text-gray-500'
//               }`}>
//                 {stageCompletions[index] ? (
//                   <Check className="h-5 w-5" />
//                 ) : currentStage === index && isProcessing ? (
//                   <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
//                 ) : (
//                   <span className="text-sm font-medium">{index + 1}</span>
//                 )}
//               </div>

//               {/* Step Content */}
//               <div className="text-center mt-3 max-w-32">
//                 <h4 className={`text-sm font-medium transition-colors duration-300 ${
//                   stageCompletions[index] 
//                     ? 'text-green-700' 
//                     : currentStage === index && isProcessing
//                     ? 'text-blue-700'
//                     : 'text-gray-700'
//                 }`}>
//                   {stage.name}
//                 </h4>
//                 <p className="text-xs text-gray-500 mt-1">{stage.description}</p>
                
//                 {/* Progress Bar for Merging Files stage */}
//                 {index === 2 && currentStage >= 2 && (
//                   <div className="mt-2 w-full">
//                     <div className="bg-gray-200 rounded-full h-1.5">
//                       <div 
//                         className="bg-blue-500 h-1.5 rounded-full transition-all duration-300"
//                         style={{ width: `${(rowsProcessed / totalRows) * 100}%` }}
//                       ></div>
//                     </div>
//                     <p className="text-xs text-gray-600 mt-1">
//                       {rowsProcessed.toLocaleString()} / {totalRows.toLocaleString()}
//                     </p>
//                   </div>
//                 )}

//                 {/* Chart of Accounts Badge for Mapping Fields stage */}
//                 {index === 3 && stageCompletions[index] && (
//                   <div className="mt-2">
//                     <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
//                       CoA Mapped
//                     </span>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Table Data - Only shown after processing is complete */}
//       {processingComplete && (
//         <div className="bg-white rounded-lg shadow-sm border border-gray-200">
//           <div className="p-4 border-b border-gray-200">
//             <div className="flex justify-between items-center">
//               <h3 className="text-md font-semibold text-gray-900">Processed Real Estate Data</h3>
//               <div className="text-sm text-gray-500">
//                 Total rows: <span className="font-semibold text-gray-700">{totalRows.toLocaleString()}</span>
//               </div>
//             </div>
//           </div>

//           {/* Data Grid */}
//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   {Object.keys(realEstateData[0]).map((header) => (
//                     <th key={header} className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       <div className="flex items-center space-x-2">
//                         <span className={`transition-colors duration-500 ${
//                           getColumnCertainty(header) > 90 ? 'text-green-600 font-semibold' : 'text-gray-500'
//                         }`}>
//                           {header.replace(/_/g, ' ')}
//                         </span>
//                         {hasDataIssues(header) && (
//                           <AlertTriangle className="h-4 w-4 text-yellow-500" />
//                         )}
//                         {getColumnCertainty(header) > 90 && (
//                           <div className="w-2 h-2 rounded-full bg-green-500"></div>
//                         )}
//                       </div>
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {realEstateData.map((row, index) => (
//                   <tr key={index} className="hover:bg-gray-50">
//                     {Object.values(row).map((value, cellIndex) => (
//                       <td key={cellIndex} className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
//                         {value || <span className="text-gray-400 italic">empty</span>}
//                       </td>
//                     ))}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Data Quality Summary */}
//           <div className="p-4 bg-gray-50 border-t border-gray-200">
//             <h4 className="text-sm font-medium text-gray-700 mb-3">Data Quality Summary</h4>
//             <div className="grid grid-cols-4 gap-4 text-sm">
//               <div className="flex items-center space-x-2">
//                 <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                 <span className="text-green-700 font-medium">High Certainty:</span>
//                 <span className="text-gray-600">9 columns</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <AlertTriangle className="h-3 w-3 text-yellow-500" />
//                 <span className="text-yellow-700 font-medium">Warnings:</span>
//                 <span className="text-gray-600">1 column</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <div className="w-3 h-3 rounded-full bg-blue-500"></div>
//                 <span className="text-blue-700 font-medium">Duplicates:</span>
//                 <span className="text-gray-600">2 detected</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Check className="h-3 w-3 text-purple-600" />
//                 <span className="text-purple-700 font-medium">CoA Mapped:</span>
//                 <span className="text-gray-600">12 fields</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

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

// export default ChartOfAccountsStep;



// import React, { useState, useEffect } from 'react';
// import { Plus, Check, X, ChevronDown, ChevronUp, AlertTriangle } from 'lucide-react';

// const ChartOfAccountsStep = ({ onBack, onNext }) => {
//   const [currentStage, setCurrentStage] = useState(0);
//   const [rowsProcessed, setRowsProcessed] = useState(0);
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [stageCompletions, setStageCompletions] = useState([false, false, false, false]);
//   const [processingComplete, setProcessingComplete] = useState(false);

//   const totalRows = 10; // Updated to 10

//   const realEstateData = [
//     { property_num: "00GHP14", transaction_type: "Sales", property_type: "APARTMENT", booking_date: "30-11-2023", channel: "Broker", broker_name: "Broker 1", customer_name: "Customer 1", relation_id: "REL/156/001379", cluster: "Cluster 1", scheme: "Scheme 1", ou_names: "OU 1", value: "10371439.69" },
//     { property_num: "00GHP14", transaction_type: "Sales", property_type: "APARTMENT", booking_date: "30-06-2023", channel: "Direct", broker_name: "", customer_name: "Customer 2", relation_id: "REL/156/001378", cluster: "Cluster 1", scheme: "Scheme 1", ou_names: "OU 1", value: "33021055.71" },
//     { property_num: "00GHP14", transaction_type: "Cancel", property_type: "APARTMENT", booking_date: "08-07-2023", channel: "Direct", broker_name: "", customer_name: "Customer 2", relation_id: "REL/156/001378", cluster: "Cluster 1", scheme: "Scheme 1", ou_names: "OU 1", value: "-13986247.3" },
//     { property_num: "24M/12", transaction_type: "Sales", property_type: "PLOT", booking_date: "27-09-2023", channel: "Direct", broker_name: "", customer_name: "Customer 3", relation_id: "REL/364/000031", cluster: "Cluster 2", scheme: "Scheme 2", ou_names: "OU 2", value: "69110436.22" },
//     { property_num: "24M/14", transaction_type: "Sales", property_type: "PLOT", booking_date: "28-09-2023", channel: "Direct", broker_name: "", customer_name: "Customer 4", relation_id: "REL/364/000065", cluster: "Cluster 2", scheme: "Scheme 2", ou_names: "OU 2", value: "68119415.24" },
//     { property_num: "24M/15", transaction_type: "Sales", property_type: "PLOT", booking_date: "28-09-2023", channel: "Direct", broker_name: "", customer_name: "Customer 5", relation_id: "REL/364/000073", cluster: "Cluster 2", scheme: "Scheme 2", ou_names: "OU 2", value: "113163102" },
//     { property_num: "24M/16", transaction_type: "Sales", property_type: "PLOT", booking_date: "28-09-2023", channel: "Broker", broker_name: "Broker 3", customer_name: "Customer 6", relation_id: "REL/364/000066", cluster: "Cluster 2", scheme: "Scheme 2", ou_names: "OU 2", value: "91249914.8" },
//     { property_num: "24M/17", transaction_type: "Sales", property_type: "PLOT", booking_date: "27-09-2023", channel: "Direct", broker_name: "", customer_name: "Customer 7", relation_id: "REL/364/000049", cluster: "Cluster 2", scheme: "Scheme 2", ou_names: "OU 2", value: "50104131.87" },
//     { property_num: "24M/18", transaction_type: "Sales", property_type: "PLOT", booking_date: "26-09-2023", channel: "Direct", broker_name: "", customer_name: "Customer 8", relation_id: "REL/364/000026", cluster: "Cluster 2", scheme: "Scheme 2", ou_names: "OU 2", value: "98826196.32" },
//     { property_num: "24M/19", transaction_type: "Sales", property_type: "PLOT", booking_date: "27-09-2023", channel: "Broker", broker_name: "Broker 4", customer_name: "Customer 9", relation_id: "REL/364/000042", cluster: "Cluster 2", scheme: "Scheme 2", ou_names: "OU 2", value: "57508563.24" }
//   ];

//   const stages = [
//     { name: "Profiling Columns", description: "Analyzing data types" },
//     { name: "Detecting Keys & Duplicates", description: "Finding duplicates" },
//     { name: "Merging Files", description: "Processing data" },
//     { name: "Mapping Fields", description: "Chart mapping" }
//   ];

//   const getColumnCertainty = (columnName) => {
//     const certainties = {
//       'property_num': 95,
//       'transaction_type': 98,
//       'property_type': 97,
//       'booking_date': 85,
//       'channel': 92,
//       'broker_name': 75,
//       'customer_name': 94,
//       'relation_id': 99,
//       'cluster': 96,
//       'scheme': 96,
//       'ou_names': 94,
//       'value': 88
//     };
//     return certainties[columnName] || 85;
//   };

//   const hasDataIssues = (columnName) => {
//     const issueColumns = ['broker_name'];
//     return issueColumns.includes(columnName);
//   };

//   useEffect(() => {
//     if (isProcessing) {
//       const stageInterval = setInterval(() => {
//         setCurrentStage(prev => {
//           if (prev < 3) {
//             setStageCompletions(completions => {
//               const newCompletions = [...completions];
//               newCompletions[prev] = true;
//               return newCompletions;
//             });
//             return prev + 1;
//           } else {
//             setStageCompletions(completions => {
//               const newCompletions = [...completions];
//               newCompletions[3] = true;
//               return newCompletions;
//             });
//             setIsProcessing(false);
//             setProcessingComplete(true);
//             clearInterval(stageInterval);
//             return prev;
//           }
//         });
//       }, 2000);

//       return () => clearInterval(stageInterval);
//     }
//   }, [isProcessing]);

//   useEffect(() => {
//     if (isProcessing && currentStage === 2) {
//       const rowInterval = setInterval(() => {
//         setRowsProcessed(prev => {
//           if (prev < totalRows) {
//             return Math.min(prev + 400, totalRows);
//           }
//           clearInterval(rowInterval);
//           return totalRows;
//         });
//       }, 50);

//       return () => clearInterval(rowInterval);
//     }
//   }, [isProcessing, currentStage]);

//   const startProcessing = () => {
//     setIsProcessing(true);
//     setCurrentStage(0);
//     setRowsProcessed(0);
//     setStageCompletions([false, false, false, false]);
//     setProcessingComplete(false);
//   };

//   return (
//     <div className="px-6 py-6">
//       {/* Header */}
//       <div className="mb-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
//         <h2 className="text-lg font-semibold text-gray-900 mb-2">Data Processing & Merge Studio</h2>
//         <p className="text-sm text-gray-700 leading-relaxed">
//           Our advanced processing engine profiles your data, detects relationships, merges multiple sources, and intelligently maps fields to standardized schemas. Watch as your raw real estate transaction data transforms into clean, analysis-ready insights.
//         </p>
//       </div>

//       {/* Task Info */}
//       <div className="flex justify-center items-center mb-6">
//         <div className="text-gray-700 text-center">
//           <span className="font-medium">Data Processing 1/1</span>
//           <span className="mx-2 text-gray-400">|</span>
//           <span className="text-gray-500">Task completion date: {new Date().toLocaleDateString()}</span>
//         </div>
//       </div>

//       {/* Initial Start Processing Button - Centered */}
//       {!isProcessing && !processingComplete && (
//         <div className="flex justify-center items-center py-20">
//           <button 
//             className="flex items-center space-x-3 px-8 py-4 bg-green-600 text-white hover:bg-green-700 rounded-lg text-lg font-medium transition duration-200 shadow-lg"
//             onClick={startProcessing}
//           >
//             <Plus className="h-6 w-6" />
//             <span>Start Processing</span>
//           </button>
//         </div>
//       )}

//       {/* Horizontal Process Tracker - Only shown during/after processing */}
//       {(isProcessing || processingComplete) && (
//         <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
//           <h3 className="text-md font-semibold text-gray-900 mb-6">Processing Steps</h3>
          
//           <div className="flex items-center justify-between relative">
//             {/* Connecting Line */}
//             <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-300 z-0"></div>
            
//             {stages.map((stage, index) => (
//               <div key={index} className="flex flex-col items-center relative z-10 bg-white px-4">
//                 {/* Step Circle */}
//                 <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 border-4 ${
//                   stageCompletions[index] 
//                     ? 'bg-green-500 border-green-500 text-white' 
//                     : currentStage === index && isProcessing
//                     ? 'bg-blue-500 border-blue-500 text-white animate-pulse'
//                     : currentStage > index
//                     ? 'bg-green-500 border-green-500 text-white'
//                     : 'bg-white border-gray-300 text-gray-500'
//                 }`}>
//                   {stageCompletions[index] ? (
//                     <Check className="h-5 w-5" />
//                   ) : currentStage === index && isProcessing ? (
//                     <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
//                   ) : (
//                     <span className="text-sm font-medium">{index + 1}</span>
//                   )}
//                 </div>

//                 {/* Step Content */}
//                 <div className="text-center mt-3 max-w-32">
//                   <h4 className={`text-sm font-medium transition-colors duration-300 ${
//                     stageCompletions[index] 
//                       ? 'text-green-700' 
//                       : currentStage === index && isProcessing
//                       ? 'text-blue-700'
//                       : 'text-gray-700'
//                   }`}>
//                     {stage.name}
//                   </h4>
//                   <p className="text-xs text-gray-500 mt-1">{stage.description}</p>
                  
//                   {/* Progress Bar for Merging Files stage */}
//                   {index === 2 && currentStage >= 2 && (
//                     <div className="mt-2 w-full">
//                       <div className="bg-gray-200 rounded-full h-1.5">
//                         <div 
//                           className="bg-blue-500 h-1.5 rounded-full transition-all duration-300"
//                           style={{ width: `${(rowsProcessed / totalRows) * 100}%` }}
//                         ></div>
//                       </div>
//                       <p className="text-xs text-gray-600 mt-1">
//                         {rowsProcessed.toLocaleString()} / {totalRows.toLocaleString()}
//                       </p>
//                     </div>
//                   )}

//                   {/* Chart of Accounts Badge for Mapping Fields stage */}
//                   {index === 3 && stageCompletions[index] && (
//                     <div className="mt-2">
//                       <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
//                         CoA Mapped
//                       </span>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Table Data - Only shown after processing is complete */}
//       {processingComplete && (
//         <div className="bg-white rounded-lg shadow-sm border border-gray-200">
//           <div className="p-4 border-b border-gray-200">
//             <div className="flex justify-between items-center">
//               <h3 className="text-md font-semibold text-gray-900">Processed Real Estate Data</h3>
//               <div className="text-sm text-gray-500">
//                 Total rows: <span className="font-semibold text-gray-700">{totalRows.toLocaleString()}</span>
//               </div>
//             </div>
//           </div>

//           {/* Data Grid */}
//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   {Object.keys(realEstateData[0]).map((header) => (
//                     <th key={header} className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       <div className="flex items-center space-x-2">
//                         <span className={`transition-colors duration-500 ${
//                           getColumnCertainty(header) > 90 ? 'text-green-600 font-semibold' : 'text-gray-500'
//                         }`}>
//                           {header.replace(/_/g, ' ')}
//                         </span>
//                         {hasDataIssues(header) && (
//                           <AlertTriangle className="h-4 w-4 text-yellow-500" />
//                         )}
//                         {getColumnCertainty(header) > 90 && (
//                           <div className="w-2 h-2 rounded-full bg-green-500"></div>
//                         )}
//                       </div>
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {realEstateData.map((row, index) => (
//                   <tr key={index} className="hover:bg-gray-50">
//                     {Object.values(row).map((value, cellIndex) => (
//                       <td key={cellIndex} className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
//                         {value || <span className="text-gray-400 italic">empty</span>}
//                       </td>
//                     ))}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Data Quality Summary */}
//           <div className="p-4 bg-gray-50 border-t border-gray-200">
//             <h4 className="text-sm font-medium text-gray-700 mb-3">Data Quality Summary</h4>
//             <div className="grid grid-cols-4 gap-4 text-sm">
//               <div className="flex items-center space-x-2">
//                 <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                 <span className="text-green-700 font-medium">High Certainty:</span>
//                 <span className="text-gray-600">9 columns</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <AlertTriangle className="h-3 w-3 text-yellow-500" />
//                 <span className="text-yellow-700 font-medium">Warnings:</span>
//                 <span className="text-gray-600">1 column</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <div className="w-3 h-3 rounded-full bg-blue-500"></div>
//                 <span className="text-blue-700 font-medium">Duplicates:</span>
//                 <span className="text-gray-600">2 detected</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Check className="h-3 w-3 text-purple-600" />
//                 <span className="text-purple-700 font-medium">CoA Mapped:</span>
//                 <span className="text-gray-600">12 fields</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

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

// export default ChartOfAccountsStep;


import React, { useState, useEffect } from 'react';
import { Plus, Check, X, ChevronDown, ChevronUp, AlertTriangle } from 'lucide-react';

const ChartOfAccountsStep = ({ onBack, onNext }) => {
  const [currentStage, setCurrentStage] = useState(0);
  const [rowsProcessed, setRowsProcessed] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [stageCompletions, setStageCompletions] = useState([false, false, false, false]);
  const [processingComplete, setProcessingComplete] = useState(false);

  const totalRows = 10; // Updated to 10

  const realEstateData = [
    { property_num: "00GHP14", transaction_type: "Sales", property_type: "APARTMENT", booking_date: "30-11-2023", channel: "Broker", broker_name: "Broker 1", customer_name: "Customer 1", relation_id: "REL/156/001379", cluster: "Cluster 1", scheme: "Scheme 1", ou_names: "OU 1", value: "10371439.69" },
    { property_num: "00GHP14", transaction_type: "Sales", property_type: "APARTMENT", booking_date: "30-06-2023", channel: "Direct", broker_name: "", customer_name: "Customer 2", relation_id: "REL/156/001378", cluster: "Cluster 1", scheme: "Scheme 1", ou_names: "OU 1", value: "33021055.71" },
    { property_num: "00GHP14", transaction_type: "Cancel", property_type: "APARTMENT", booking_date: "08-07-2023", channel: "Direct", broker_name: "", customer_name: "Customer 2", relation_id: "REL/156/001378", cluster: "Cluster 1", scheme: "Scheme 1", ou_names: "OU 1", value: "-13986247.3" },
    { property_num: "24M/12", transaction_type: "Sales", property_type: "PLOT", booking_date: "27-09-2023", channel: "Direct", broker_name: "", customer_name: "Customer 3", relation_id: "REL/364/000031", cluster: "Cluster 2", scheme: "Scheme 2", ou_names: "OU 2", value: "69110436.22" },
    { property_num: "24M/14", transaction_type: "Sales", property_type: "PLOT", booking_date: "28-09-2023", channel: "Direct", broker_name: "", customer_name: "Customer 4", relation_id: "REL/364/000065", cluster: "Cluster 2", scheme: "Scheme 2", ou_names: "OU 2", value: "68119415.24" },
    { property_num: "24M/15", transaction_type: "Sales", property_type: "PLOT", booking_date: "28-09-2023", channel: "Direct", broker_name: "", customer_name: "Customer 5", relation_id: "REL/364/000073", cluster: "Cluster 2", scheme: "Scheme 2", ou_names: "OU 2", value: "113163102" },
    { property_num: "24M/16", transaction_type: "Sales", property_type: "PLOT", booking_date: "28-09-2023", channel: "Broker", broker_name: "Broker 3", customer_name: "Customer 6", relation_id: "REL/364/000066", cluster: "Cluster 2", scheme: "Scheme 2", ou_names: "OU 2", value: "91249914.8" },
    { property_num: "24M/17", transaction_type: "Sales", property_type: "PLOT", booking_date: "27-09-2023", channel: "Direct", broker_name: "", customer_name: "Customer 7", relation_id: "REL/364/000049", cluster: "Cluster 2", scheme: "Scheme 2", ou_names: "OU 2", value: "50104131.87" },
    { property_num: "24M/18", transaction_type: "Sales", property_type: "PLOT", booking_date: "26-09-2023", channel: "Direct", broker_name: "", customer_name: "Customer 8", relation_id: "REL/364/000026", cluster: "Cluster 2", scheme: "Scheme 2", ou_names: "OU 2", value: "98826196.32" },
    { property_num: "24M/19", transaction_type: "Sales", property_type: "PLOT", booking_date: "27-09-2023", channel: "Broker", broker_name: "Broker 4", customer_name: "Customer 9", relation_id: "REL/364/000042", cluster: "Cluster 2", scheme: "Scheme 2", ou_names: "OU 2", value: "57508563.24" }
  ];

  const stages = [
    { name: "Profiling Columns", description: "Analyzing data types" },
    { name: "Detecting Keys & Duplicates", description: "Finding duplicates" },
    { name: "Merging Files", description: "Processing data" },
    { name: "Mapping Fields", description: "Chart mapping" }
  ];

  const getColumnCertainty = (columnName) => {
    const certainties = {
      'property_num': 95,
      'transaction_type': 98,
      'property_type': 97,
      'booking_date': 85,
      'channel': 92,
      'broker_name': 75,
      'customer_name': 94,
      'relation_id': 99,
      'cluster': 96,
      'scheme': 96,
      'ou_names': 94,
      'value': 88
    };
    return certainties[columnName] || 85;
  };

  const hasDataIssues = (columnName) => {
    const issueColumns = ['broker_name'];
    return issueColumns.includes(columnName);
  };

  useEffect(() => {
    if (isProcessing) {
      const stageInterval = setInterval(() => {
        setCurrentStage(prev => {
          if (prev < 3) {
            setStageCompletions(completions => {
              const newCompletions = [...completions];
              newCompletions[prev] = true;
              return newCompletions;
            });
            return prev + 1;
          } else {
            setStageCompletions(completions => {
              const newCompletions = [...completions];
              newCompletions[3] = true;
              return newCompletions;
            });
            setIsProcessing(false);
            setProcessingComplete(true);
            clearInterval(stageInterval);
            return prev;
          }
        });
      }, 2000);

      return () => clearInterval(stageInterval);
    }
  }, [isProcessing]);

  useEffect(() => {
    if (isProcessing && currentStage === 2) {
      const rowInterval = setInterval(() => {
        setRowsProcessed(prev => {
          if (prev < totalRows) {
            return Math.min(prev + 400, totalRows);
          }
          clearInterval(rowInterval);
          return totalRows;
        });
      }, 50);

      return () => clearInterval(rowInterval);
    }
  }, [isProcessing, currentStage]);

  const startProcessing = () => {
    setIsProcessing(true);
    setCurrentStage(0);
    setRowsProcessed(0);
    setStageCompletions([false, false, false, false]);
    setProcessingComplete(false);
  };

  return (
    <div className="px-6 py-6">
      {/* Header */}
      <div className="mb-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Data Processing & Merge Studio</h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          Our advanced processing engine profiles your data, detects relationships, merges multiple sources, and intelligently maps fields to standardized schemas. Watch as your raw real estate transaction data transforms into clean, analysis-ready insights.
        </p>
      </div>

      {/* Task Info */}
      <div className="flex justify-center items-center mb-6">
        <div className="text-gray-700 text-center">
          <span className="font-medium">Data Processing 1/1</span>
          <span className="mx-2 text-gray-400">|</span>
          <span className="text-gray-500">Task completion date: {new Date().toLocaleDateString()}</span>
        </div>
      </div>

      {/* Initial Start Processing Button - Centered */}
      {!isProcessing && !processingComplete && (
        <div className="flex justify-center items-center py-20">
          <button 
            className="flex items-center space-x-3 px-8 py-4 bg-green-600 text-white hover:bg-green-700 rounded-lg text-lg font-medium transition duration-200 shadow-lg"
            onClick={startProcessing}
          >
            <Plus className="h-6 w-6" />
            <span>Start Processing</span>
          </button>
        </div>
      )}

      {/* Horizontal Process Tracker - Only shown during/after processing */}
      {(isProcessing || processingComplete) && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
          <h3 className="text-md font-semibold text-gray-900 mb-4">Processing Steps</h3>
          
          <div className="flex items-center justify-between relative">
            {/* Connecting Line */}
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-300 z-0"></div>
            
            {stages.map((stage, index) => (
              <div key={index} className="flex flex-col items-center relative z-10 bg-white px-4">
                {/* Step Circle */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 border-4 ${
                  stageCompletions[index] 
                    ? 'bg-green-500 border-green-500 text-white' 
                    : currentStage === index && isProcessing
                    ? 'bg-blue-500 border-blue-500 text-white animate-pulse'
                    : currentStage > index
                    ? 'bg-green-500 border-green-500 text-white'
                    : 'bg-white border-gray-300 text-gray-500'
                }`}>
                  {stageCompletions[index] ? (
                    <Check className="h-5 w-5" />
                  ) : currentStage === index && isProcessing ? (
                    <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                  ) : (
                    <span className="text-sm font-medium">{index + 1}</span>
                  )}
                </div>

                {/* Step Content */}
                <div className="text-center mt-3 max-w-32">
                  <h4 className={`text-sm font-medium transition-colors duration-300 ${
                    stageCompletions[index] 
                      ? 'text-green-700' 
                      : currentStage === index && isProcessing
                      ? 'text-blue-700'
                      : 'text-gray-700'
                  }`}>
                    {stage.name}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">{stage.description}</p>
                  
                  {/* Progress Bar for Merging Files stage */}
                  {index === 2 && currentStage >= 2 && (
                    <div className="mt-2 w-full">
                      <div className="bg-gray-200 rounded-full h-1.5">
                        <div 
                          className="bg-blue-500 h-1.5 rounded-full transition-all duration-300"
                          style={{ width: `${(rowsProcessed / totalRows) * 100}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">
                        {rowsProcessed.toLocaleString()} / {totalRows.toLocaleString()}
                      </p>
                    </div>
                  )}

                  {/* Chart of Accounts Badge for Mapping Fields stage */}
                  {index === 3 && stageCompletions[index] && (
                    <div className="mt-2">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        CoA Mapped
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Table Data - Only shown after processing is complete */}
      {processingComplete && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-md font-semibold text-gray-900">Processed Real Estate Data</h3>
              <div className="text-sm text-gray-500">
                Total rows: <span className="font-semibold text-gray-700">{totalRows.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Data Grid */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {Object.keys(realEstateData[0]).map((header) => (
                    <th key={header} className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <div className="flex items-center space-x-2">
                        <span className={`transition-colors duration-500 ${
                          getColumnCertainty(header) > 90 ? 'text-green-600 font-semibold' : 'text-gray-500'
                        }`}>
                          {header.replace(/_/g, ' ')}
                        </span>
                        {hasDataIssues(header) && (
                          <AlertTriangle className="h-4 w-4 text-yellow-500" />
                        )}
                        {getColumnCertainty(header) > 90 && (
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {realEstateData.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    {Object.values(row).map((value, cellIndex) => (
                      <td key={cellIndex} className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                        {value || <span className="text-gray-400 italic">empty</span>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Data Quality Summary */}
          <div className="p-4 bg-gray-50 border-t border-gray-200">
            <h4 className="text-sm font-medium text-gray-700 mb-3">Data Quality Summary</h4>
            <div className="grid grid-cols-4 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-green-700 font-medium">High Certainty:</span>
                <span className="text-gray-600">9 columns</span>
              </div>
              <div className="flex items-center space-x-2">
                <AlertTriangle className="h-3 w-3 text-yellow-500" />
                <span className="text-yellow-700 font-medium">Warnings:</span>
                <span className="text-gray-600">1 column</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-blue-700 font-medium">Duplicates:</span>
                <span className="text-gray-600">2 detected</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-3 w-3 text-purple-600" />
                <span className="text-purple-700 font-medium">CoA Mapped:</span>
                <span className="text-gray-600">12 fields</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation buttons */}
      <div className="flex justify-between mt-6">
        <button 
          className="px-5 py-2 bg-white border border-gray-300 text-gray-700 rounded-md font-medium flex items-center"
          onClick={onBack}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back
        </button>
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

export default ChartOfAccountsStep;