import Head from "next/head";
import Image from "next/image";

import CakeView from "./features/cake/cakeView";
import IcecreamView from "./features/icecream/icecreamView";
import UsersView from "./features/user/UserView";

export default function Home() {
  return (
    <div>
      <Head>
        <title>RTK</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <div className="flex flex-col gap-6 justify-center items-center ">
            <CakeView />
          </div>
          <div className="flex flex-col gap-6 justify-center items-center ">
            <IcecreamView />
          </div>
          <div className="flex flex-col gap-6 justify-center items-center ">
            <UsersView />
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
