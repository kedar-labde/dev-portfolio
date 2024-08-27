import React from 'react';
import PropTypes from 'prop-types';
import Iconify from '../Iconify';


export default function TechSkillIcon({ label, proficiency }) {
  return (
    <div className="inline-flex items-center justify-center p-2">
      <div className="group relative cursor-pointer flex flex-col items-center">
        <div className="pointer-events-none absolute -top-[4.7rem] left-1/2 z-[1000] w-32 min-w-fit -translate-x-1/2 whitespace-nowrap rounded-xl bg-neutral-700 px-3 py-1 opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-[6px] before:border-transparent before:border-t-neutral-700 before:content-[''] group-hover:opacity-100 dark:bg-neutral-700 dark:before:border-t-neutral-700">
          <div className="flex items-center justify-between mb-2 mt-1">
            <div className="text-left text-xs text-neutral-50">{label}</div>
            <span className="ml-2 text-xs text-neutral-50">{proficiency}</span>
          </div>
          <div className="mb-4 h-2.5 w-full rounded-full bg-neutral-50">
            <div className="h-2.5 rounded-full bg-primary-400" style={{ width: proficiency }} />
          </div>
        </div>
        <div className="h-12 w-24 flex items-center justify-center rounded-lg bg-primary-400 shadow-md shadow-neutral-300 dark:shadow-neutral-700">
          <span className="text-xs text-neutral-50">{label}</span>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------

TechSkillIcon.propTypes = {
  label: PropTypes.string,
  proficiency: PropTypes.string,
  icon: PropTypes.string,
  iconClasses: PropTypes.string,
  popoverId: PropTypes.string,
};
