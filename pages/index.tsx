import Head from 'next/head'
import Nav from 'components/nav'

export default function Home() {
  return (
    <div id="app" className="w-full h-full">
      <Head>
        <title>DIS</title>
        <meta name="description" content="Language translation comp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav className="px-10 py-5 md:px-5 md:text-slate-100" />
      <main className="h-full">
        <section
          id="heading"
          className="h-3/4 flex flex-col justify-center bg-violet-400 p-10 md:p-5 text-slate-100"
        >
          <div className="flex justify-around">
            <h1 className="text-4xl h-fit self-center">
              Diversity Interpretaion Services
            </h1>
            <div className="w-60 h-60 bg-pink-500 hidden md:flex justify-center items-center">
              <span>Your picture</span>
            </div>
          </div>
        </section>
        <section>
          <h2 className="uppercase text-2xl md:text-3xl lg:text-4xl flex flex-col text-center gap-3 my-10">
            <span>DIS provides language services</span>
            <span>in</span>
            <span> Thai Lao and cambodian</span>
          </h2>
        </section>
      </main>
    </div>
  )
}
