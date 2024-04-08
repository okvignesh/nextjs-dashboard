// import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
// import clsx from 'clsx';
// import { useState } from 'react';

// export default function Pagination({
//   totalPages,
//   initialPage,
//   onPageChange,
// }: {
//   totalPages: number;
//   initialPage: number;
//   onPageChange: (page: number) => void;
// }) {
//   const [currentPage, setCurrentPage] = useState(initialPage);

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//     onPageChange(page);
//   };

//   const createPageURL = (pageNumber: number | string) => {
//     // Add logic to create page URL if necessary
//   };

//   // Generate pagination array
//   const allPages = generatePagination(currentPage, totalPages);

//   return (
//     <div className="inline-flex">
//       <PaginationArrow
//         direction="left"
//         onClick={() => handlePageChange(currentPage - 1)}
//         isDisabled={currentPage <= 1}
//       />

//       <div className="flex -space-x-px">
//         {allPages.map((page, index) => {
//           let position: 'first' | 'last' | 'single' | 'middle' | undefined;

//           if (index === 0) position = 'first';
//           if (index === allPages.length - 1) position = 'last';
//           if (allPages.length === 1) position = 'single';
//           if (page === '...') position = 'middle';

//           return (
//             <PaginationNumber
//               key={page}
//               onClick={() => typeof page === 'number' && handlePageChange(page)}
//               page={page}
//               position={position}
//               isActive={currentPage === page}
//             />
//           );
//         })}
//       </div>

//       <PaginationArrow
//         direction="right"
//         onClick={() => handlePageChange(currentPage + 1)}
//         isDisabled={currentPage >= totalPages}
//       />
//     </div>
//   );
// }

// function PaginationNumber({
//   page,
//   onClick,
//   isActive,
//   position,
// }: {
//   page: number | string;
//   onClick: () => void;
//   position?: 'first' | 'last' | 'middle' | 'single';
//   isActive: boolean;
// }) {
//   const className = clsx(
//     'flex h-10 w-10 items-center justify-center text-sm border',
//     {
//       'rounded-l-md': position === 'first' || position === 'single',
//       'rounded-r-md': position === 'last' || position === 'single',
//       'z-10 bg-blue-600 border-blue-600 text-white': isActive,
//       'hover:bg-gray-100': !isActive && position !== 'middle',
//       'text-gray-300': position === 'middle',
//     },
//   );

//   return isActive || position === 'middle' ? (
//     <div className={className}>{page}</div>
//   ) : (
//     <button onClick={onClick} className={className}>
//       {page}
//     </button>
//   );
// }

// function PaginationArrow({
//   onClick,
//   direction,
//   isDisabled,
// }: {
//   onClick: () => void;
//   direction: 'left' | 'right';
//   isDisabled?: boolean;
// }) {
//   const className = clsx(
//     'flex h-10 w-10 items-center justify-center rounded-md border',
//     {
//       'pointer-events-none text-gray-300': isDisabled,
//       'hover:bg-gray-100': !isDisabled,
//       'mr-2 md:mr-4': direction === 'left',
//       'ml-2 md:ml-4': direction === 'right',
//     },
//   );

//   const icon =
//     direction === 'left' ? (
//       <ArrowLeftIcon className="w-4" />
//     ) : (
//       <ArrowRightIcon className="w-4" />
//     );

//   return (
//     <button onClick={onClick} className={className} disabled={isDisabled}>
//       {icon}
//     </button>
//   );
// }

// function generatePagination(
//   currentPage: number,
//   totalPages: number,
// ): (number | '...')[] {
//   // Add logic to generate pagination array if necessary
//   return [];
// }
