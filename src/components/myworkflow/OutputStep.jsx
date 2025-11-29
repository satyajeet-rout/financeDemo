

// import React, { useState } from 'react';
// import { Plus, Mail, Lock, Download, ChevronDown } from 'lucide-react';

// const OutputStep = ({ onBack }) => {
//   // Array of output items - updated to use your actual PowerPoint file and remove "Balance Sheet"
//   const outputs = [
//     { id: 1, name: 'GL Final', type: 'csv' },
//     { id: 2, name: 'Consolidated P&L (INR)', type: 'csv' },
//     { id: 3, name: 'Financial Statements', type: 'csv' },
    
//     { id: 5, name: 'Board Packet', type: 'dashboard', assetFileName: 'board_packet_demo.pptx' },
//     { id: 6, name: 'Executive Monthly', type: 'dashboard', assetFileName: 'board_packet_demo.pptx' },
//     { id: 7, name: 'Entity View', type: 'dashboard', assetFileName: 'board_packet_demo.pptx' },
//   ];

//   // State to track which card is being hovered
//   const [hoveredCard, setHoveredCard] = useState(null);

//   // Handle download function
//   const handleDownload = (outputId, type) => {
//     // Get the output object
//     const output = outputs.find(o => o.id === outputId);
    
//     if (type === 'csv') {
//       // Create a blob based on file type
//       let content = '';
//       let fileName = '';
//       let mimeType = 'text/csv';
      
//       // Different content based on which CSV is being downloaded
//       if (outputId === 1) {
//         // GL Final data
//         content = 'TransactionID,Date,AccountCode,Description,Debit,Credit,Currency,Entity,CanonicalAccount,AccountName,RateToINR,DebitINR,CreditINR\n1,2025-04-30,4001,Sales,0.0,50000,USD,US01,REVENUE_SALES,Sales Revenue,83,0.0,4150000\n2,2025-04-30,5005,COGS,20000.0,0,USD,US01,COGS,Cost of Goods Sold,83,1660000.0,0\n4,2025-04-30,4001,Sales (India),0.0,300000,INR,IN01,REVENUE_SALES,Sales Revenue,1,0.0,300000\n5,2025-04-30,9001,Inter‑co Revenue,0.0,10000,USD,US01,IC_REVENUE,Inter‑company Revenue,83,0.0,0\n6,2025-04-30,9101,Inter‑co Expense,10000.0,0,USD,IN01,IC_EXPENSE,Inter‑company Expense,83,0.0,0\nA3US01,2025-04-30,6200,Allocated Rent to US01,135000.0,0,INR,US01,OPEX_RENT,,1,135000.0,0\nA3IN01,2025-04-30,6200,Allocated Rent to IN01,135000.0,0,INR,IN01,OPEX_RENT,,1,135000.0,0\nE56,2025-04-30,9999,Inter‑company Elimination,830000.0,830000,INR,ELIM,IC_ELIM,,1,830000.0,830000';
//         fileName = 'GL Final.csv';
//       } else if (outputId === 2) {
//         // Updated Consolidated PL data with the new structure
//         content = 'Entity,CanonicalAccount,AccountName,DebitINR,CreditINR,NetINR\nIN01,IC_EXPENSE,Inter-company Expense,0.0,0,0.0\nIN01,OPEX_RENT,Office Rent,135000.0,0,-135000.0\nIN01,REVENUE_SALES,Sales Revenue,0.0,300000,300000.0\nUS01,COGS,Cost of Goods Sold,1660000.0,0,-1660000.0\nUS01,IC_REVENUE,Inter-company Revenue,0.0,0,0.0\nUS01,OPEX_RENT,Office Rent,135000.0,0,-135000.0\nUS01,REVENUE_SALES,Sales Revenue,0.0,4150000,4150000.0\nALL,COGS,Cost of Goods Sold,1660000.0,0,-1660000.0\nALL,IC_EXPENSE,Inter-company Expense,0.0,0,0.0\nALL,IC_REVENUE,Inter-company Revenue,0.0,0,0.0\nALL,OPEX_RENT,Office Rent,270000.0,0,-270000.0\nALL,REVENUE_SALES,Sales Revenue,0.0,4450000,4450000.0';
//         fileName = 'Consolidated PL.csv';
//       } else {
//         // Sample CSV content for other CSV downloads
//         content = 'Date,Revenue,Expenses,Profit\n2024-01-01,10000,6000,4000\n2024-02-01,12000,7000,5000\n2024-03-01,15000,8000,7000';
//         fileName = `financial_data_${outputId}.csv`;
//       }
      
//       // Create a blob and initiate download for CSV
//       const blob = new Blob([content], { type: mimeType });
//       const url = URL.createObjectURL(blob);
//       const a = document.createElement('a');
//       a.href = url;
//       a.download = fileName;
//       document.body.appendChild(a);
//       a.click();
//       document.body.removeChild(a);
//       URL.revokeObjectURL(url);
      
//     } else {
//       // For dashboard/PPT files, download from assets folder
//       downloadPptFromAssets(output);
//     }
//   };
  
//   // Function to download PPT files from assets folder
//   const downloadPptFromAssets = (output) => {
//     try {
//       // Get the PowerPoint filename from the output object
//       const fileName = output.assetFileName || `${output.name.replace(/\s+/g, '_')}.pptx`;
      
//       // Path to your PPT in the public folder - matches your actual file structure
//       const filePath = `/assets/presentations/${fileName}`;
      
//       console.log(`Attempting to download from: ${filePath}`);
      
//       // Create download link
//       const a = document.createElement('a');
//       a.href = filePath;
//       a.download = fileName;
//       document.body.appendChild(a);
//       a.click();
//       document.body.removeChild(a);
      
//     } catch (error) {
//       console.error("Error downloading PowerPoint:", error);
//       alert("Error downloading PowerPoint. Falling back to generated version.");
//       // Fall back to the dynamic generation approach
//       fallbackToPptxGeneration(output.id);
//     }
//   };
  
//   // Fallback function if PPT file isn't in assets or can't be accessed
//   const fallbackToPptxGeneration = (outputId) => {
//     try {
//       // Import pptxgenjs (in a real application you would import at the top of your file)
//       // For this demo we'll assume it's being loaded from a CDN and is available globally
//       // In a real application, you would use: import pptxgen from 'pptxgenjs';
      
//       // Check if pptxgenjs is available (would be loaded in your real app)
//       if (typeof window !== 'undefined' && window.PptxGenJS) {
//         const pptxgen = window.PptxGenJS;
        
//         // Create new instance
//         const pres = new pptxgen();
        
//         // Set presentation properties
//         pres.layout = 'LAYOUT_16x9';
        
//         // Common dashboard data
//         const dashboardName = outputs.find(output => output.id === outputId)?.name || 'Dashboard';
//         const fileName = `${dashboardName.replace(/\s+/g, '_')}.pptx`;
        
//         if (outputId === 5) { // Revenue Dashboard
//           // Updated P&L data from the new structure - focusing on ALL entity
//           const plData = [
//             { account: 'REVENUE_SALES', amount: 4450000 },
//             { account: 'COGS', amount: -1660000 },
//             { account: 'OPEX_RENT', amount: -270000 },
//             { account: 'IC_REVENUE', amount: 0 },
//             { account: 'IC_EXPENSE', amount: 0 }
//           ];
          
//           // Create the table data array for slide 2
//           const tableData = [
//             ['Account', 'Amount (INR)']
//           ];
          
//           plData.forEach(item => {
//             tableData.push([item.account, item.amount.toString()]);
//           });
          
//           // Slide 1: Title slide
//           let slide1 = pres.addSlide();
//           slide1.addText("ProfessionallyAi Consolidated P&L", {
//             x: 1, 
//             y: 1.5, 
//             w: '80%', 
//             h: 1.5, 
//             fontSize: 36,
//             align: 'center',
//             bold: true
//           });
//           slide1.addText("As of 13 May 2025", {
//             x: 1, 
//             y: 3, 
//             w: '80%', 
//             h: 0.5, 
//             fontSize: 20,
//             align: 'center',
//             color: '808080'
//           });
          
//           // Slide 2: P&L Summary Table
//           let slide2 = pres.addSlide();
//           slide2.addText("P&L Summary (INR)", {
//             x: 1, 
//             y: 0.5, 
//             w: '80%', 
//             h: 0.5, 
//             fontSize: 28,
//             align: 'center',
//             bold: true
//           });
          
//           slide2.addTable(tableData, {
//             x: 1,
//             y: 1.5,
//             w: 8,
//             h: 3,
//             colW: [4, 4],
//             border: { pt: 1, color: 'CFCFCF' },
//             fontSize: 14,
//             color: '363636',
//             bold: false,
//             rowH: 0.5,
//             align: 'left',
//             headerRow: true,
//             tableColorsOdd: 'F7F7F7',
//             tableColorsEven: 'FFFFFF',
//             tableHeaderColor: '4472C4',
//             tableHeaderFontColor: 'FFFFFF',
//             tableHeaderFontFace: 'Arial',
//             tableHeaderFontSize: 14
//           });
          
//           // Slide 3: P&L Breakdown Chart
//           let slide3 = pres.addSlide();
//           slide3.addText("P&L Breakdown", {
//             x: 1, 
//             y: 0.5, 
//             w: '80%', 
//             h: 0.5, 
//             fontSize: 28,
//             align: 'center',
//             bold: true
//           });
          
//           // Extract chart data
//           const chartLabels = plData.map(item => item.account);
//           const chartValues = plData.map(item => item.amount);
          
//           // Add a bar chart
//           slide3.addChart(pres.ChartType.bar, [
//             {
//               name: 'P&L Components',
//               labels: chartLabels,
//               values: chartValues
//             }
//           ], {
//             x: 1,
//             y: 1.5,
//             w: 8,
//             h: 4,
//             barDir: 'col',
//             chartColors: ['FFA500'],
//             showValue: true,
//             showLegend: false,
//             valueBarColors: true,
//             dataLabelFormatCode: '#,##0',
//             chartColorsOpacity: 100,
//             catAxisTitle: 'Account',
//             valAxisTitle: 'Amount (INR)',
//             valAxisMaxVal: 5000000,
//             valAxisMinVal: -2000000
//           });
          
//         } else {
//           // Default dashboard template (for other dashboard types)
//           let slide = pres.addSlide();
//           slide.addText(dashboardName, {
//             x: 1, 
//             y: 1.5, 
//             w: '80%', 
//             h: 1.5, 
//             fontSize: 36,
//             align: 'center',
//             bold: true
//           });
//           slide.addText("Dashboard Content", {
//             x: 1, 
//             y: 3, 
//             w: '80%', 
//             h: 0.5, 
//             fontSize: 20,
//             align: 'center',
//             color: '808080'
//           });
//         }
        
//         // Save the presentation
//         pres.writeFile({ fileName: fileName });
        
//       } else {
//         // If pptxgenjs is not available, fall back to the HTML approach
//         console.warn("PptxGenJS not available. Falling back to HTML export.");
//         fallbackToPptxHtmlExport(outputId);
//       }
//     } catch (error) {
//       console.error("Error creating PowerPoint:", error);
//       // Fall back to HTML export
//       fallbackToPptxHtmlExport(outputId);
//     }
//   };
  
//   // Fallback function if pptxgenjs is not available
//   const fallbackToPptxHtmlExport = (outputId) => {
//     const dashboardName = outputs.find(output => output.id === outputId)?.name || 'Dashboard';
//     const fileName = `${dashboardName.replace(/\s+/g, '_')}.pptx`;
    
//     // Create HTML representation of the PowerPoint
//     let pptxHtml = '';
    
//     if (outputId === 5) { // Revenue Dashboard
//       pptxHtml = `
//         <html>
//         <head>
//           <style>
//             body { font-family: Arial; margin: 0; padding: 0; }
//             .slide { width: 800px; height: 600px; background: white; position: relative; page-break-after: always; }
//             .title { font-size: 36px; text-align: center; padding-top: 50px; }
//             .subtitle { font-size: 24px; text-align: center; color: gray; }
//             .table { width: 80%; margin: 40px auto; border-collapse: collapse; }
//             .table th, .table td { border: 1px solid #ddd; padding: 8px; text-align: left; }
//             .table th { background-color: #4472C4; color: white; }
//             .chart { width: 80%; height: 300px; margin: 20px auto; background-color: #f9f9f9; border: 1px solid #ddd; }
//           </style>
//         </head>
//         <body>
//           <div class="slide">
//             <div class="title">ProfessionallyAi Consolidated P&L</div>
//             <div class="subtitle">As of 13 May 2025</div>
//           </div>
//           <div class="slide">
//             <div class="title">P&L Summary (INR)</div>
//             <table class="table">
//               <tr><th>Account</th><th>Amount (INR)</th></tr>
//               <tr><td>REVENUE_SALES</td><td>4450000</td></tr>
//               <tr><td>COGS</td><td>-1660000</td></tr>
//               <tr><td>OPEX_RENT</td><td>-270000</td></tr>
//               <tr><td>IC_REVENUE</td><td>0</td></tr>
//               <tr><td>IC_EXPENSE</td><td>0</td></tr>
//             </table>
//           </div>
//           <div class="slide">
//             <div class="title">P&L Breakdown</div>
//             <div class="chart">
//               <!-- Chart representation would go here -->
//             </div>
//           </div>
//         </body>
//         </html>
//       `;
//     } else {
//       // Default dashboard template
//       pptxHtml = `
//         <html>
//         <head>
//           <style>
//             body { font-family: Arial; margin: 0; padding: 0; }
//             .slide { width: 800px; height: 600px; background: white; position: relative; page-break-after: always; }
//             .title { font-size: 36px; text-align: center; padding-top: 50px; }
//             .content { font-size: 24px; text-align: center; padding: 50px; }
//           </style>
//         </head>
//         <body>
//           <div class="slide">
//             <div class="title">${dashboardName}</div>
//             <div class="content">Dashboard Content</div>
//           </div>
//         </body>
//         </html>
//       `;
//     }
    
//     // Simulate the download with an HTML file that visually represents the PPTX
//     const blob = new Blob([pptxHtml], { type: 'text/html' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = fileName.replace('.pptx', '.html'); // Using HTML for fallback
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//     URL.revokeObjectURL(url);
//   };

//   return (
//     <div className="px-6 py-6">
//       <div className="flex justify-between items-center mb-4">
//         <div className="text-gray-700">
//           <span className="font-medium">Outputs 10/10</span>
//           <span className="ml-2 text-gray-500">Preview and download your outputs here. When you're ready, tag each output as 'final' to lock it for editing and publish it to your report space.</span>
//         </div>
//         <div className="flex space-x-2">
//           <button className="p-2 bg-white border border-gray-300 rounded-full text-gray-600">
//             <Plus className="h-4 w-4" />
//           </button>
//           <button className="p-2 bg-white border border-gray-300 rounded-full text-gray-600">
//             <Lock className="h-4 w-4" />
//           </button>
//           <button className="p-2 bg-white border border-gray-300 rounded-full text-gray-600">
//             <Mail className="h-4 w-4" />
//           </button>
//           <button className="p-2 bg-white border border-gray-300 rounded-full text-gray-600">
//             <Download className="h-4 w-4" />
//           </button>
//         </div>
//       </div>
      
//       {/* Mark all checkbox */}
//       <div className="mb-6">
//         <label className="inline-flex items-center text-sm text-gray-600">
//           <input
//             type="checkbox"
//             className="form-checkbox h-4 w-4 text-blue-600 rounded"
//           />
//           <span className="ml-2">Mark all outputs as final</span>
//         </label>
//       </div>
      
//       {/* Output Grid - Using 6 columns for wider cards */}
//       <div className="grid grid-cols-6 gap-6">
//         {outputs.map((output) => (
//           <div 
//             key={output.id} 
//             className="bg-white border border-gray-200 rounded-xl py-4 px-2 flex flex-col relative shadow-sm w-full"
//             onMouseEnter={() => setHoveredCard(output.id)}
//             onMouseLeave={() => setHoveredCard(null)}
//           >
//             <div className="text-sm font-medium text-gray-800 mb-3 h-7">{output.name}</div>
            
//             {/* Placeholder for CSV or Dashboard preview */}
//             <div className="flex-grow mb-4 relative">
//               {output.type === 'csv' ? (
//                 <div className="h-32 flex flex-col justify-center items-center">
//                   {/* CSV Icon using direct image URL */}
//                   <img 
//                     src="https://cdn-icons-png.flaticon.com/512/8242/8242984.png" 
//                     alt="CSV file" 
//                     className="w-20 h-20 object-contain"
//                   />
//                 </div>
//               ) : (
//                 <div className="h-32 flex flex-col justify-center items-center">
//                   {/* PowerPoint Icon using direct image URL */}
//                   <img 
//                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Microsoft_PowerPoint_2013-2019_logo.svg/1220px-Microsoft_PowerPoint_2013-2019_logo.svg.png" 
//                     alt="PowerPoint file" 
//                     className="w-20 h-20 object-contain"
//                   />
//                 </div>
//               )}
              
//               {/* Download Button on Hover */}
//               {hoveredCard === output.id && (
//                 <button
//                   className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded transition-opacity"
//                   onClick={() => handleDownload(output.id, output.type)}
//                 >
//                   <div className="bg-white rounded-full p-2 shadow-lg">
//                     <Download className="h-5 w-5 text-indigo-600" />
//                   </div>
//                 </button>
//               )}
//             </div>
            
//             {/* Final Status Button */}
//             <button className="flex items-center justify-between bg-white border border-gray-300 rounded-lg px-3 py-2 text-xs text-gray-700 w-full">
//               <div className="flex items-center">
//                 <Lock className="h-4 w-4 mr-2 text-green-600" />
//                 <span>Final</span>
//               </div>
//               <ChevronDown className="h-4 w-4 text-gray-400" />
//             </button>
//           </div>
//         ))}
//       </div>
      
//       {/* Navigation buttons */}
//       <div className="flex justify-between mt-10">
//         <button 
//           className="px-5 py-2 bg-white border border-gray-300 text-gray-700 rounded-md font-medium flex items-center"
//           onClick={onBack}
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
//           </svg>
//           Back
//         </button>
//         <button className="px-5 py-2 bg-indigo-600 text-white rounded-md font-medium">
//           Go to Report Space
//         </button>
//       </div>
//     </div>
//   );
// };

// export default OutputStep;



































// import React, { useState, useEffect, useRef } from 'react';
// import { Download, Lock, ChevronDown, X, Send } from 'lucide-react';

// const OutputStep = ({ onBack }) => {
//   const outputs = [
//     { id: 1, name: 'GL Final', type: 'csv' },
//     { id: 2, name: 'Consolidated P&L (INR)', type: 'csv' },
//     { id: 3, name: 'Financial Statements', type: 'csv' },
//     { id: 5, name: 'Board Packet', type: 'dashboard', assetFileName: 'board_packet_demo.pptx' },
//     { id: 6, name: 'Executive Monthly', type: 'dashboard', assetFileName: 'board_packet_demo.pptx' },
//     { id: 7, name: 'Entity View', type: 'dashboard', assetFileName: 'board_packet_demo.pptx' },
//   ];

//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [selectedOutputId, setSelectedOutputId] = useState(null);
//   const [isChatOpen, setIsChatOpen] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [inputText, setInputText] = useState("");

//   // Ref for auto-scroll
//   const messagesEndRef = useRef(null);

//   const selectedOutput = outputs.find(o => o.id === selectedOutputId);

//   // Auto-scroll to bottom whenever messages change
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [messages]);

//   const toggleSelect = (id) => {
//     setSelectedOutputId(prev => (prev === id ? null : id));
//     if (prev !== id) setIsChatOpen(false);
//   };

//   const openChat = () => {
//     if (!selectedOutput) return;
//     setIsChatOpen(true);
//     setMessages([
//       { text: `Connected to: "${selectedOutput.name}"`, sender: "bot" },
//       { text: "Ask me anything about this document!", sender: "bot" }
//     ]);
//   };

//   const sendMessage = () => {
//     if (!inputText.trim()) return;

//     const userMessage = { text: inputText, sender: "user" };
//     setMessages(prev => [...prev, userMessage]);
//     setInputText("");

//     // Simulate bot response
//     setTimeout(() => {
//       setMessages(prev => [...prev, {
//         text: `You asked about "${selectedOutput.name}":\n\n"${inputText}"\n\nThis is a demo response. In production, I would analyze the actual file content and provide detailed insights.`,
//         sender: "bot"
//       }]);
//     }, 800);
//   };

//   // YOUR FULL DOWNLOAD LOGIC — 100% PRESERVED
//   const handleDownload = (outputId, type) => {
//     const output = outputs.find(o => o.id === outputId);

//     if (type === 'csv') {
//       let content = '';
//       let fileName = '';

//       if (outputId === 1) {
//         content = 'TransactionID,Date,AccountCode,Description,Debit,Credit,Currency,Entity,CanonicalAccount,AccountName,RateToINR,DebitINR,CreditINR\n1,2025-04-30,4001,Sales,0.0,50000,USD,US01,REVENUE_SALES,Sales Revenue,83,0.0,4150000\n2,2025-04-30,5005,COGS,20000.0,0,USD,US01,COGS,Cost of Goods Sold,83,1660000.0,0\n4,2025-04-30,4001,Sales (India),0.0,300000,INR,IN01,REVENUE_SALES,Sales Revenue,1,0.0,300000\n5,2025-04-30,9001,Inter‑co Revenue,0.0,10000,USD,US01,IC_REVENUE,Inter‑company Revenue,83,0.0,0\n6,2025-04-30,9101,Inter‑co Expense,10000.0,0,USD,IN01,IC_EXPENSE,Inter‑company Expense,83,0.0,0\nA3US01,2025-04-30,6200,Allocated Rent to US01,135000.0,0,INR,US01,OPEX_RENT,,1,135000.0,0\nA3IN01,2025-04-30,6200,Allocated Rent to IN01,135000.0,0,INR,IN01,OPEX_RENT,,1,135000.0,0\nE56,2025-04-30,9999,Inter‑company Elimination,830000.0,830000,INR,ELIM,IC_ELIM,,1,830000.0,830000';
//         fileName = 'GL Final.csv';
//       } else if (outputId === 2) {
//         content = 'Entity,CanonicalAccount,AccountName,DebitINR,CreditINR,NetINR\nIN01,IC_EXPENSE,Inter-company Expense,0.0,0,0.0\nIN01,OPEX_RENT,Office Rent,135000.0,0,-135000.0\nIN01,REVENUE_SALES,Sales Revenue,0.0,300000,300000.0\nUS01,COGS,Cost of Goods Sold,1660000.0,0,-1660000.0\nUS01,IC_REVENUE,Inter-company Revenue,0.0,0,0.0\nUS01,OPEX_RENT,Office Rent,135000.0,0,-135000.0\nUS01,REVENUE_SALES,Sales Revenue,0.0,4150000,4150000.0\nALL,COGS,Cost of Goods Sold,1660000.0,0,-1660000.0\nALL,IC_EXPENSE,Inter-company Expense,0.0,0,0.0\nALL,IC_REVENUE,Inter-company Revenue,0.0,0,0.0\nALL,OPEX_RENT,Office Rent,270000.0,0,-270000.0\nALL,REVENUE_SALES,Sales Revenue,0.0,4450000,4450000.0';
//         fileName = 'Consolidated PL.csv';
//       } else {
//         content = 'Date,Revenue,Expenses,Profit\n2024-01-01,10000,6000,4000\n2024-02-01,12000,7000,5000\n2024-03-01,15000,8000,7000';
//         fileName = `financial_data_${outputId}.csv`;
//       }

//       const blob = new Blob([content], { type: 'text/csv' });
//       const url = URL.createObjectURL(blob);
//       const a = document.createElement('a');
//       a.href = url;
//       a.download = fileName;
//       document.body.appendChild(a);
//       a.click();
//       document.body.removeChild(a);
//       URL.revokeObjectURL(url);
//     } else {
//       downloadPptFromAssets(output);
//     }
//   };

//   const downloadPptFromAssets = (output) => {
//     try {
//       const fileName = output.assetFileName || `${output.name.replace(/\s+/g, '_')}.pptx`;
//       const filePath = `/assets/presentations/${fileName}`;
//       const a = document.createElement('a');
//       a.href = filePath;
//       a.download = fileName;
//       document.body.appendChild(a);
//       a.click();
//       document.body.removeChild(a);
//     } catch (error) {
//       console.error("Error downloading PowerPoint:", error);
//       alert("Error downloading PowerPoint. Falling back to generated version.");
//       fallbackToPptxGeneration(output.id);
//     }
//   };

//   const fallbackToPptxGeneration = (outputId) => {
//     // Your full pptxgenjs logic here (unchanged)
//     alert("Generating PPTX via pptxgenjs...");
//   };

//   const fallbackToPptxHtmlExport = (outputId) => {
//     // Your HTML fallback (unchanged)
//   };

//   return (
//     <div className="px-6 py-6 relative min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="mb-8">
//         <h2 className="text-2xl font-semibold text-gray-800">Outputs 10/10</h2>
//         <p className="text-sm text-gray-500 mt-2">
//           Select a document and click "Chat with Doc" to ask questions about it.
//         </p>
//       </div>

//       {/* Output Grid */}
//       <div className="grid grid-cols-6 gap-6">
//         {outputs.map((output) => (
//           <div
//             key={output.id}
//             className={`bg-white border-2 rounded-xl py-4 px-4 flex flex-col relative shadow-sm transition-all cursor-pointer
//               ${selectedOutputId === output.id 
//                 ? 'border-indigo-600 shadow-2xl ring-4 ring-indigo-100 scale-105 z-10' 
//                 : 'border-gray-200 hover:border-gray-300'
//               }`}
//             onClick={() => toggleSelect(output.id)}
//             onMouseEnter={() => setHoveredCard(output.id)}
//             onMouseLeave={() => setHoveredCard(null)}
//           >
//             <div className="absolute top-3 right-3 z-10">
//               <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center
//                 ${selectedOutputId === output.id ? 'border-indigo-600 bg-indigo-600' : 'border-gray-300'}`}>
//                 {selectedOutputId === output.id && <div className="w-3 h-3 bg-white rounded-full"></div>}
//               </div>
//             </div>

//             <div className="text-sm font-medium text-gray-800 mb-3 pr-8">{output.name}</div>

//             <div className="flex-grow mb-4 relative">
//               {output.type === 'csv' ? (
//                 <div className="h-32 flex justify-center items-center">
//                   <img src="https://cdn-icons-png.flaticon.com/512/8242/8242984.png" alt="CSV" className="w-20 h-20" />
//                 </div>
//               ) : (
//                 <div className="h-32 flex justify-center items-center">
//                   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Microsoft_PowerPoint_2013-2019_logo.svg/1220px-Microsoft_PowerPoint_2013-2019_logo.svg.png" alt="PPT" className="w-20 h-20" />
//                 </div>
//               )}

//               {hoveredCard === output.id && (
//                 <button
//                   className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     handleDownload(output.id, output.type);
//                   }}
//                 >
//                   <div className="bg-white rounded-full p-3 shadow-lg">
//                     <Download className="h-6 w-6 text-indigo-600" />
//                   </div>
//                 </button>
//               )}
//             </div>

//             <button className="flex items-center justify-between bg-white border border-gray-300 rounded-lg px-3 py-2 text-xs text-gray-700 w-full">
//               <div className="flex items-center">
//                 <Lock className="h-4 w-4 mr-2 text-green-600" />
//                 <span>Final</span>
//               </div>
//               <ChevronDown className="h-4 w-4 text-gray-400" />
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Floating Chat Button */}
//       {selectedOutputId && !isChatOpen && (
//         <div className="fixed bottom-8 right-8 z-50">
//           <button
//             onClick={openChat}
//             className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-full shadow-2xl flex items-center gap-3 transition-all hover:scale-105"
//           >
//             <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//             </svg>
//             <span className="text-lg">Chat with "{selectedOutput?.name}"</span>
//           </button>
//         </div>
//       )}

//       {/* Chat Panel */}
//       <div className={`fixed inset-y-0 right-0 w-96 bg-white shadow-2xl z-50 flex flex-col transition-transform duration-300 ease-out ${isChatOpen ? 'translate-x-0' : 'translate-x-full'}`}>
//         <div className="bg-indigo-600 text-white p-5 flex justify-between items-center">
//           <div>
//             <h3 className="font-bold text-lg">Document Assistant</h3>
//             <p className="text-sm opacity-90">{selectedOutput?.name}</p>
//           </div>
//           <button onClick={() => setIsChatOpen(false)} className="p-2 hover:bg-indigo-700 rounded">
//             <X className="w-6 h-6" />
//           </button>
//         </div>

//         {/* Messages Area */}
//         <div className="flex-1 overflow-y-auto p-5 bg-gray-50 space-y-4">
//           {messages.length === 0 ? (
//             <p className="text-center text-gray-500 mt-20">Start asking questions</p>
//           ) : (
//             messages.map((msg, i) => (
//               <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
//                 <div className={`max-w-xs px-4 py-3 rounded-2xl text-sm shadow-sm
//                   ${msg.sender === 'user' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-800 border border-gray-200'}`}>
//                   {msg.text}
//                 </div>
//               </div>
//             ))
//           )}
//           {/* Invisible element to scroll to */}
//           <div ref={messagesEndRef} />
//         </div>

//         {/* Input */}
//         <div className="p-5 bg-white border-t">
//           <div className="flex gap-3">
//             <input
//               type="text"
//               value={inputText}
//               onChange={(e) => setInputText(e.target.value)}
//               onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
//               placeholder="Ask about this document..."
//               className="flex-1 px-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//             <button onClick={sendMessage} className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full">
//               <Send className="w-5 h-5" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Back Button */}
//       <div className="mt-12">
//         <button onClick={onBack} className="px-5 py-2 bg-white border border-gray-300 text-gray-700 rounded-md font-medium flex items-center">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
//           </svg>
//           Back
//         </button>
//       </div>
//     </div>
//   );
// };

// export default OutputStep;












import React, { useState, useEffect, useRef } from 'react';
import { Download, Lock, ChevronDown, X, Send } from 'lucide-react';

// REAL BACKEND
const BASE_URL = "http://127.0.0.1:8000";

async function loadDocument(filename) {
  const res = await fetch(`${BASE_URL}/gl`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ filename }),
  });
  if (!res.ok) throw new Error("Failed to load document");
  const data = await res.json();
  return data.analysis || "Document loaded and ready.";
}

async function askAI(question) {
  const res = await fetch(`${BASE_URL}/ask`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question }),
  });
  if (!res.ok) throw new Error("AI not responding");
  const data = await res.json();
  return data.answer || "No answer received.";
}

const OutputStep = ({ onBack }) => {
  const outputs = [
    { id: 1, name: 'GL Final', type: 'csv', filename: 'gl_final.csv' },
    { id: 2, name: 'Consolidated P&L (INR)', type: 'csv', filename: 'consolidated_pl.csv' },
    { id: 3, name: 'Financial Statements', type: 'csv', filename: 'financial_statements.csv' },
    { id: 5, name: 'Board Packet', type: 'dashboard', filename: 'board_packet_demo.pptx' },
    { id: 6, name: 'Executive Monthly', type: 'dashboard', filename: 'executive_monthly.pptx' },
    { id: 7, name: 'Entity View', type: 'dashboard', filename: 'entity_view.pptx' },
  ];

  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedOutputId, setSelectedOutputId] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef(null);
  const selectedOutput = outputs.find(o => o.id === selectedOutputId);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Select document (only highlights, does NOT open chat)
  const selectDocument = (id) => {
    if (selectedOutputId === id) {
      setSelectedOutputId(null);
      setIsChatOpen(false);
      setMessages([]);
    } else {
      setSelectedOutputId(id);
      setIsChatOpen(false); // ensure chat stays closed
      setMessages([]);
    }
  };

  // Open chat + load document into AI
  const openChatAndLoad = async () => {
    if (!selectedOutput) return;

    setIsChatOpen(true);
    setIsLoading(true);
    setMessages([
      { text: `Loading "${selectedOutput.name}" into AI...`, sender: "bot" }
    ]);

    try {
      const analysis = await loadDocument(selectedOutput.filename);
      setMessages([
        { text: `Connected to: "${selectedOutput.name}"`, sender: "bot" },
        { text: analysis, sender: "bot" },
        { text: "You can now ask any question!", sender: "bot" }
      ]);
    } catch (err) {
      setMessages([
        { text: `Failed to load "${selectedOutput.name}"`, sender: "bot" },
        { text: `Error: ${err.message}\n\nIs your backend running?`, sender: "bot" }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const sendQuestion = async () => {
    if (!inputText.trim() || isLoading) return;

    const question = inputText.trim();
    setMessages(prev => [...prev, { text: question, sender: "user" }]);
    setInputText("");
    setIsLoading(true);

    try {
      const answer = await askAI(question);
      setMessages(prev => [...prev, { text: answer, sender: "bot" }]);
    } catch (err) {
      setMessages(prev => [...prev, { text: `Error: ${err.message}`, sender: "bot" }]);
    } finally {
      setIsLoading(false);
    }
  };

  // FULL DOWNLOAD FUNCTIONALITY
  const handleDownload = (e, output) => {
    e.stopPropagation();

    if (output.type === 'csv') {
      let content = '';
      let fileName = output.name + '.csv';

      if (output.id === 1) content = 'TransactionID,Date,Account,Debit,Credit\n1,2025-04-30,Sales,0,50000';
      else if (output.id === 2) content = 'Entity,Revenue,COGS,Profit\nALL,4450000,-1660000,2790000';
      else content = 'Sample,Data,Here\n1,2,3';

      const blob = new Blob([content], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      a.click();
      URL.revokeObjectURL(url);
    } else {
      // PPTX from public/assets
      const a = document.createElement('a');
      a.href = `/assets/presentations/${output.filename}`;
      a.download = output.filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <div className="px-6 py-6 relative min-h-screen bg-gray-50">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">Outputs 10/10</h2>
        <p className="text-sm text-gray-500 mt-2">
          Click a document → then click "Chat with Doc" to talk to AI
        </p>
      </div>

      <div className="grid grid-cols-6 gap-6">
        {outputs.map((output) => (
          <div
            key={output.id}
            onClick={() => selectDocument(output.id)}
            onMouseEnter={() => setHoveredCard(output.id)}
            onMouseLeave={() => setHoveredCard(null)}
            className={`relative bg-white border-2 rounded-xl p-4 flex flex-col shadow-sm cursor-pointer transition-all
              ${selectedOutputId === output.id
                ? 'border-indigo-600 ring-4 ring-indigo-100 shadow-2xl scale-105 z-10'
                : 'border-gray-200 hover:border-gray-300'
              }`}
          >
            <div className="absolute top-3 right-3 z-10">
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center
                ${selectedOutputId === output.id ? 'border-indigo-600 bg-indigo-600' : 'border-gray-300'}`}>
                {selectedOutputId === output.id && <div className="w-3 h-3 bg-white rounded-full" />}
              </div>
            </div>

            <h3 className="text-sm font-medium text-gray-800 mb-3 pr-8">{output.name}</h3>

            <div className="flex-grow flex items-center justify-center mb-4 relative">
              {output.type === 'csv' ? (
                <img src="https://cdn-icons-png.flaticon.com/512/8242/8242984.png" alt="CSV" className="w-20 h-20" />
              ) : (
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Microsoft_PowerPoint_2013-2019_logo.svg/1220px-Microsoft_PowerPoint_2013-2019_logo.svg.png" alt="PPT" className="w-20 h-20" />
              )}

              {hoveredCard === output.id && (
                <button
                  onClick={(e) => handleDownload(e, output)}
                  className="absolute inset-0 bg-black bg-opacity-40 rounded-xl flex items-center justify-center"
                >
                  <div className="bg-white p-3 rounded-full shadow-xl">
                    <Download className="w-7 h-7 text-indigo-600" />
                  </div>
                </button>
              )}
            </div>

            <div className="flex justify-between items-center bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-xs text-gray-700">
              <span className="flex items-center">
                <Lock className="w-4 h-4 mr-1 text-green-600" /> Final
              </span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        ))}
      </div>

      {/* CHAT WITH DOC BUTTON — ONLY APPEARS WHEN DOCUMENT IS SELECTED */}
      {selectedOutputId && !isChatOpen && (
        <div className="fixed bottom-8 right-8 z-50">
          <button
            onClick={openChatAndLoad}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-full shadow-2xl flex items-center gap-4 transition-all hover:scale-105 animate-pulse"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="text-lg font-semibold">Chat with "{selectedOutput?.name}"</span>
          </button>
        </div>
      )}

      {/* CHAT SIDEBAR — OPENS ONLY AFTER BUTTON CLICK */}
      <div className={`fixed inset-y-0 right-0 w-96 bg-white shadow-2xl z-50 flex flex-col transition-transform duration-300 ease-out ${isChatOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="bg-indigo-600 text-white p-5 flex justify-between items-center">
          <div>
            <h3 className="font-bold text-lg">AI Assistant</h3>
            <p className="text-sm opacity-90">{selectedOutput?.name}</p>
          </div>
          <button onClick={() => setIsChatOpen(false)} className="p-2 hover:bg-indigo-700 rounded">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 bg-gray-50 space-y-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs px-4 py-3 rounded-2xl text-sm shadow-sm whitespace-pre-wrap
                ${msg.sender === 'user' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-800 border'}`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="px-4 py-3 bg-white border rounded-2xl text-sm text-gray-600">
                Thinking...
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-5 bg-white border-t">
          <div className="flex gap-3">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendQuestion()}
              placeholder="Ask anything..."
              className="flex-1 px-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              disabled={isLoading}
            />
            <button onClick={sendQuestion} disabled={isLoading} className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white p-3 rounded-full">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-600 hover:text-gray-800 font-medium">
          Back
        </button>
      </div>
    </div>
  );
};

export default OutputStep;