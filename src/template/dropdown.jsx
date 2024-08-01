import React from 'react';

const Dropdown = ({ title, options, func }) => {
  return (
    <div className="relative inline-block">
      <select
        id="customSelect"
        onChange={(e) => func(e.target.value)} // Pass the selected value
        className="w-full bg-[#24222a] border-none text-xs sm:text-base text-gray-100 xxs:py-2 xxs:px-4 xxs:pr-8 py-2 px-2 pr-2 rounded leading-tight focus:outline-none"
        defaultValue="0"
      >
        <option value="0" className='bg-gray-200 text-black' disabled>{title}</option>
        {options.map((option, index) => (
          <option key={index} value={option} className='bg-gray-200 text-black'>
            {option.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
