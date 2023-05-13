import {
  BsAlignStart,
  BsAlignCenter,
  BsAlignEnd
} from 'react-icons/bs';

export const ScrollBar = () => {
  return (
    <>
      <div class="flex justify-center">
        <h2 class="sr-only">Steps</h2>
        <div class="w-2/3">
          <div class="overflow-hidden bg-gray-200 rounded-full">
            <div class="w-1/2 h-1 bg-blue-500 rounded-full"></div>
          </div>
          {/* <ol class="mt-3 text-sm font-medium text-gray-500 grid grid-cols-3">
            <li class="flex items-center justify-start text-blue-600">
              <span class="hidden sm:inline"> 0% </span>
              <BsAlignStart size={28} />
            </li>

            <li class="flex items-center justify-center text-blue-600">
              <span class="hidden sm:inline"> 50% </span>
              <BsAlignCenter size={28} />
            </li>

            <li class="flex items-center justify-end">
              <span class="hidden sm:inline"> 100% </span>
              <BsAlignEnd size={28} />
            </li>
          </ol> */}
        </div>
      </div>
    </>
  );
};
