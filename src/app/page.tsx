import Head from 'next/head';
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Croissant</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='referrer' content='no-referrer' />
        <link rel='icon' type='image/x-icon' href='/images/favicon.png' />
        <link rel='alternate' hrefLang='en' href={process.env.NEXTAUTH_URL} />
        </Head>
        <section className='flex flex-col items-center justify-center m-auto max-w-screen-lg mt-40 lg:mt-56'>
          <Image
            src='/logo.png'
            alt='Croissant logo'
            className='cursor-pointer font-body font-black text-2xl text-white'
            width={211}
            height={32}
          />
          <p className='max-w-screen-sm m-auto w-96 mt-6 md:mt-6 text-center sm:text-md text-croissant-gray-800 font-manrope'>Croissant has come to a close. Thanks so much for your support along the way 🙏</p>
        </section>
      </>
      );
}
