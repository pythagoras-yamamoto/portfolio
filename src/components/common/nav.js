import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  FiHome,
  FiUser,
  FiSettings,
  FiFileText,
  FiActivity
} from 'react-icons/fi';

// const [count, setCount] = useState(0);

// Similar to componentDidMount and componentDidUpdate:
// useEffect(() => {
//   // Update the document title using the browser API
//   document.title = `You clicked ${count} times`;
// });


export const DetectLocation = (props) => {
  const router = useRouter();
  const onClick = () => {
    alert(typeof(router.pathname));
    alert(router.pathname);
  };
  return <button onClick={onClick}>show location</button>;
};

let defaultButtonColor = 'white';

export const judgeButtonColor = ({ buttonName }) => {
  let buttonColor = defaultButtonColor;

  if (buttonName == DetectLocation()) {
    buttonColor = 'border-indigo-600';
  }

  return buttonColor;
};

export const Nav = () => {
  return (
    <div class="fixed flex justify-center w-full bottom-0 z-50 py-6">
      <div class="flex justify-center space-x-4">
        <Link href="/">
          <a class="inline-block p-3 text-white bg-indigo-600 border-2 border-indigo-600 rounded-full hover:animate-pulse focus:outline-none focus:ring hover:animate-bounce">
            <FiHome size={28}/>
          </a>
        </Link>

        <Link href="/about">
          <a class="inline-block p-3 text-indigo-600 bg-white border-2 border-indigo-600 rounded-full hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring">
            <span class="sr-only"> Download </span>
            <FiUser size={28} />
          </a>
        </Link>
        <Link href="/article">
          <a class="inline-block p-3 text-indigo-600 bg-white border-2 border-indigo-600 rounded-full hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring">
            <span class="sr-only"> Download </span>
            <FiFileText size={28} />
          </a>
        </Link>
        <Link href="/data">
          <a class="inline-block p-3 text-indigo-600 bg-white border-2 border-indigo-600 rounded-full hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring">
            <span class="sr-only"> Download </span>
            <FiActivity size={28} />
          </a>
        </Link>
        <Link href="/setting">
          <a class="inline-block p-3 text-indigo-600 bg-white border-2 border-indigo-600 rounded-full hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring">
            <span class="sr-only"> Download </span>
            <FiSettings size={28} />
          </a>
        </Link>
      </div>
    </div>
  );
};
