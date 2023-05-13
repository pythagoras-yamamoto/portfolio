import Link from 'next/link'

export default function Custom404() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen w-screen">
        <p> - 404 page : まだ作成途中です - </p>
        <Link href='/' className="p-3"> 
          <a className='font-bold'>ホームへ</a>
        </Link>
      </div>
    </>
  );
}
