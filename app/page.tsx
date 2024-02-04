"use client";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      {/* Header */}
      <div className="p-5 lg:p-8">
        <h1 className="font-bold text-2xl lg:text-3xl capitalize">
          Hotel Booking App
        </h1>
      </div>
      {/* Video */}
      <div className="lg:mt-10 mt-7">
        <video
          width={360}
          height={480}
          controls
          className="border-2 border-black lg:p-2 p-10 rounded-2xl opacity-80 bg-black lg:w-[800px]"
        >
          <source src="/video.mp4" />
        </video>
      </div>
      {/* Link and Info */}
      <div className="mt-4 lg:mt-6 flex flex-col justify-center items-center">
        <p className="text-center p-2 lg:p-4 lg:w-[30rem] w-[17rem]">
          I made this video page because you&#39;ll face problems of results not
          showing up. Mostly likely it&#39;ll throw:{" "}
          <span className="font-semibold">
            &quot;Application error: a client-side exception has occurred (see
            the browser console for more information).&quot;
          </span>{" "}
          <br></br>
          -but this legitimately works in production mode as I have shown in the
          video above. This is not working because I am scraping data from
          Oxylabs and they don&#39;t provide free services after deployment.
          Check the project below if you&#39;d wish to...
        </p>
        <a
          href="https://grovest-realestate.vercel.app/"
          target="_blank"
          className="p-6 m-4 font-semibold underline"
        >
          Link For Hotel Booking Project
        </a>
      </div>
    </main>
  );
}
